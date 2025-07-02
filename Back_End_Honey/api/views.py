from django.shortcuts import render

# Create your views here.
from rest_framework.parsers import MultiPartParser
from django.shortcuts import get_object_or_404
import boto3
import uuid
from django.conf import settings
import os
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Usuarios_perfil,metodos_pago, Membresias, ventas, Administradores,Rol_Administradores,Empleados, Rol_Empleados,Usuarios_x_Membresias,Rol_x_Administradores,Rol_x_Empleado, User, feedback_usuarios, RespuestaFeedback, Conversacion
from .serializer import Usuarios_Serializer, metodos_pago_Serializer, Membresias_Serializer, ventas_Serializer,Administradores_Serializer,Rol_Administradores_Serializer,Empleados_Serializer,Rol_Empleados_Serializer,Usuarios_x_Membresias_Serializer,Rol_x_Administradores_Serializer,Rol_x_Empleado_Serializer,User_Serializer,auth_group_Serializer,UserGroup_Serializer, CustomTokenObtainPairSerializer,feedback_usuarios_Serializer, RespuestaFeedback_Serializer,ConversacionSerializer
import requests
from .voz import generar_audio
from .permissions import IsAdminUserGroup, IsEmpledoUserGroup,IsUsuarioUserGroup, IsAuthenticated
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User, Group

UserGroup = User.groups.through

#VIEWS PRINCIPALES 


class User_ListCreateView(ListCreateAPIView):
    queryset           = User.objects.all()
    serializer_class   = User_Serializer


class User_RetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset         = User.objects.all()
    serializer_class = User_Serializer



class auth_group_ListCreateView(ListCreateAPIView):
    queryset         = Group.objects.all()
    serializer_class = auth_group_Serializer

class UserGroup_ListCreateView(ListCreateAPIView):
    queryset         = UserGroup.objects.all()
    serializer_class = UserGroup_Serializer


class Usuarios_ListCreateView(ListCreateAPIView):
    queryset         = Usuarios_perfil.objects.all()
    serializer_class = Usuarios_Serializer

class Usuarios_DetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset         = Usuarios_perfil.objects.all()
    serializer_class = Usuarios_Serializer




""" class UsuariosActualizarImagenView(RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser]

    def put(self, request, user_id):
        perfil = get_object_or_404(Usuarios_perfil, user__id=user_id)
        nueva_imagen = request.FILES.get("imagen")
        print(perfil, nueva_imagen)

        if not nueva_imagen:
            return Response({"error": "No se envió ninguna imagen"}, status=400)

        # Nombre único
        extension = nueva_imagen.name.split('.')[-1]
        filename = f"usuarios/perfiles/{uuid.uuid4()}.{extension}"

        # Subir a S3
        s3 = boto3.client(
            's3',
            aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
            aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
        )
        s3.upload_fileobj(
            nueva_imagen,
            settings.AWS_STORAGE_BUCKET_NAME,
            filename,
            ExtraArgs={"ContentType": nueva_imagen.content_type}  # 👈 Solo ContentType, sin ACL
        )

        

        # Borrar imagen anterior si existe
        if perfil.Imagen:
            try:
                prev_key = perfil.Imagen.replace(f"https://{settings.AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com/", "")
                s3.delete_object(Bucket=settings.AWS_STORAGE_BUCKET_NAME
, Key=prev_key)
            except Exception as e:
                print(f"No se pudo eliminar la imagen anterior: {e}")

        # Guardar nueva URL
        image_url = f"https://{settings.AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com/{filename}"
        perfil.Imagen = image_url
        perfil.save()

        return Response({"mensaje": "Imagen actualizada correctamente", "url": image_url})

 """


# views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from django.conf import settings
import uuid
import boto3
from .models import Usuarios_perfil


class UsuariosActualizarImagenView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser]

    def get(self, request, user_id):
        perfil = get_object_or_404(Usuarios_perfil, user__id=user_id)
        return Response({"Imagen": perfil.imagen})

    def put(self, request, user_id):
        perfil = get_object_or_404(Usuarios_perfil, user__id=user_id)
        nueva_imagen = request.FILES.get("imagen")

        if not nueva_imagen:
            return Response({"error": "No se envió ninguna imagen"}, status=400)

        if nueva_imagen.content_type not in ["image/jpeg", "image/png", "image/webp"]:
            return Response({"error": "Formato de imagen no permitido"}, status=400)

        extension = nueva_imagen.name.split('.')[-1]
        filename = f"usuarios/perfiles/{uuid.uuid4()}.{extension}"

        s3 = boto3.client(
            's3',
            aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
            aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
        )

        s3.upload_fileobj(
            nueva_imagen,
            settings.AWS_STORAGE_BUCKET_NAME,
            filename,
            ExtraArgs={
                "ContentType": nueva_imagen.content_type,
                "ACL": "public-read"  # 👈 importante si quieres acceso público
            }
        )

        s3_url = f"https://{settings.AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com/{filename}"
        perfil.imagen = s3_url
        perfil.save()

        return Response({
            "mensaje": "Imagen actualizada correctamente",
            "url": s3_url
        })







class feedback_usuarios_ListCreateView(ListCreateAPIView):
    queryset         = feedback_usuarios.objects.all()
    serializer_class = feedback_usuarios_Serializer

class feedback_usuarios_DetailView(RetrieveUpdateDestroyAPIView):
    queryset         = feedback_usuarios.objects.all()
    serializer_class = feedback_usuarios_Serializer



class RespuestaFeedback_ListCreateView(ListCreateAPIView):
    queryset         = RespuestaFeedback.objects.all()
    serializer_class = RespuestaFeedback_Serializer

class RespuestaFeedback_DetailView(RetrieveUpdateDestroyAPIView):
    queryset         = RespuestaFeedback.objects.all()
    serializer_class = RespuestaFeedback_Serializer



class metodos_pago_ListCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset         = metodos_pago.objects.all()
    serializer_class = metodos_pago_Serializer

class metodos_pago_DetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsEmpledoUserGroup]
    queryset         = metodos_pago.objects.all()
    serializer_class = metodos_pago_Serializer



class Membresias_ListCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsUsuarioUserGroup]
    queryset         = Membresias.objects.all()
    serializer_class = Membresias_Serializer

class Membresias_DetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsEmpledoUserGroup]
    queryset         = Membresias.objects.all()
    serializer_class = Membresias_Serializer


class ventas_ListCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsUsuarioUserGroup]
    queryset         = ventas.objects.all()
    serializer_class = ventas_Serializer

class ventas_DetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    permission_classes = [IsEmpledoUserGroup]
    queryset         = ventas.objects.all()
    serializer_class = ventas_Serializer



class Administradores_ListCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    queryset         = Administradores.objects.all()
    serializer_class = Administradores_Serializer

class Administradores_DetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    queryset         = Administradores.objects.all()
    serializer_class = Administradores_Serializer



class Rol_Administradores_ListCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    queryset         = Rol_Administradores.objects.all()
    serializer_class = Rol_Administradores_Serializer

class Rol_Administradores_DetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    queryset         = Rol_Administradores.objects.all()
    serializer_class = Rol_Administradores_Serializer


class Empleados_ListCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    queryset         = Empleados.objects.all()
    serializer_class = Empleados_Serializer

class Empleados_DetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    queryset         = Empleados.objects.all()
    serializer_class = Empleados_Serializer


class Rol_Empleados_ListCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    queryset         = Rol_Empleados.objects.all()
    serializer_class = Rol_Empleados_Serializer

class Rol_Empleados_DetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    queryset         = Rol_Empleados.objects.all()
    serializer_class = Rol_Empleados_Serializer







from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import ListAPIView
import requests
from .whisper import transcribir_audio


class ChatView(ListAPIView):
    permission_classes = [AllowAny]
    queryset = Conversacion.objects.all()
    serializer_class = ConversacionSerializer

    def post(self, request):
        usuario = request.user if request.user.is_authenticated else None

        # 1️⃣ Detecta entrada: texto o audio
        mensaje = request.data.get("prompt", "")
        audio_file = request.FILES.get("audio", None)

        print(f"\n[DEBUG] Usuario: {usuario}")
        print(f"[DEBUG] Texto recibido: {mensaje}")
        print(f"[DEBUG] Archivo de audio recibido: {bool(audio_file)}")

        # 2️⃣ Si hay audio, lo guarda en temp_audio y usa Whisper
        if audio_file:
            local_dir = "temp_audio"
            os.makedirs(local_dir, exist_ok=True)  # ✅ Crea carpeta si no existe

            local_path = os.path.join(local_dir, audio_file.name)
            with open(local_path, "wb") as f:
                for chunk in audio_file.chunks():
                    f.write(chunk)

            mensaje = transcribir_audio(local_path)
            print(f"[DEBUG] Texto transcrito con Whisper: {mensaje}")

        # 3️⃣ Construye historial
        historial = Conversacion.objects.filter(usuario=usuario).order_by("-timestamp")[:5]

        mensajes = [
            {
                "role": "user",
                "content": "Eres Honey, una asistente dulce, empática y muy humana. Recuerda las conversaciones anteriores con el usuario."
            }
        ]

        for c in reversed(historial):
            mensajes.append({"role": "user", "content": c.mensaje})
            mensajes.append({"role": "assistant", "content": c.respuesta})

        mensajes.append({"role": "user", "content": mensaje})

        # 4️⃣ Llama a LM Studio
        lm_response = requests.post(
            "http://localhost:1234/v1/chat/completions",
            json={
                "model": "mistralai/mistral-7b-instruct-v0.3",
                "messages": mensajes
            }
        )

        print(f"[DEBUG] LM Studio Status: {lm_response.status_code}")
        print(f"[DEBUG] LM Studio Raw Response: {lm_response.text}")

        if lm_response.status_code != 200:
            return Response(
                {"error": "LM Studio falló", "details": lm_response.text},
                status=500
            )

        respuesta = lm_response.json().get("choices", [{}])[0].get("message", {}).get("content", "")
        print(f"[DEBUG] Respuesta generada: {respuesta}")

        conversacion = Conversacion.objects.create(
            usuario=usuario,
            mensaje=mensaje,
            respuesta=respuesta
        )

        # 5️⃣ Genera voz de la respuesta
        audio_url = None
        try:
            audio_url = generar_audio(respuesta)
        except Exception as e:
            print(f"[DEBUG] Error generando audio: {e}")

        serializer = ConversacionSerializer(conversacion)

        return Response({
            "respuesta": respuesta,
            "audio": audio_url,
            "datos": serializer.data
        })


@api_view(['GET'])
@permission_classes([AllowAny])
def historial_chat(request):
    usuario = request.user if request.user.is_authenticated else None

    if usuario:
        chats = Conversacion.objects.filter(usuario=usuario).order_by("timestamp")
    else:
        chats = Conversacion.objects.all().order_by("timestamp")

    serializer = ConversacionSerializer(chats, many=True)
    return Response(serializer.data)




from django.db.models.functions import TruncHour
from django.db.models import Count

class InteraccionesTimeSeriesView(APIView):
    def get(self, request):
        data = (
            Conversacion.objects
            .annotate(hour=TruncHour('timestamp'))
            .values('hour')
            .annotate(total=Count('id'))
            .order_by('hour')
        )
        return Response(data)




from datetime import datetime, timedelta

class GraficoInteraccionesView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        # Devuelve interacciones por hora como ejemplo
        data = []
        now = datetime.now()
        for i in range(10):
            data.append({
                "hour": (now - timedelta(hours=i)).strftime("%H:%M"),
                "total": i * 10 + 5,
            })
        return Response(data[::-1])  # Orden cronológico

class AvanceAnaliticoHoneyView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        # Simulación de progreso analítico
        data = [
            {"week": "Semana 1", "interacciones": 50, "precision": 70, "satisfaccion": 65},
            {"week": "Semana 2", "interacciones": 120, "precision": 75, "satisfaccion": 70},
            {"week": "Semana 3", "interacciones": 200, "precision": 80, "satisfaccion": 78},
            {"week": "Semana 4", "interacciones": 320, "precision": 82, "satisfaccion": 80},
            {"week": "Semana 5", "interacciones": 450, "precision": 85, "satisfaccion": 83},
        ]
        return Response(data)


# ✅ views.py

from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.contrib.auth import get_user_model


class DashboardMetricsView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request):
        """
        Devuelve métricas básicas de uso para el dashboard Honey.
        """
        total_chats = Conversacion.objects.count()
        total_audios = Conversacion.objects.exclude(respuesta="").count()
        usuarios_activos = get_user_model().objects.filter(is_active=True).count()

        if total_chats > 0:
            promedio_respuesta = sum(len(c.respuesta) for c in Conversacion.objects.all()) / total_chats
        else:
            promedio_respuesta = 0

        ultima_transcripcion = (
            Conversacion.objects.last().mensaje if Conversacion.objects.exists() else ""
        )

        # Puedes agregar estado real de LM Studio si quieres: por defecto Activo
        estado_lmstudio = "Activo ✅"

        data = {
            "total_chats": total_chats,
            "usuarios_activos": usuarios_activos,
            "total_audios": total_audios,
            "promedio_respuesta": round(promedio_respuesta, 2),
            "ultima_transcripcion": ultima_transcripcion,
            "estado_lmstudio": estado_lmstudio
        }

        return Response(data)





#VIEWS SEGUNDARIOS 

class Usuarios_x_Membresias_ListCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    queryset         = Usuarios_x_Membresias.objects.all()
    serializer_class = Usuarios_x_Membresias_Serializer

class Usuarios_x_Membresias_DetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    queryset         = Usuarios_x_Membresias.objects.all()
    serializer_class = Usuarios_x_Membresias_Serializer


class Rol_x_Administradores_ListCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    queryset         = Rol_x_Administradores.objects.all()
    serializer_class = Rol_x_Administradores_Serializer

class Rol_x_Administradores_DetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    queryset         = Rol_x_Administradores.objects.all()
    serializer_class = Rol_x_Administradores_Serializer


class Rol_x_Empleado_ListCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    queryset         = Rol_x_Empleado.objects.all()
    serializer_class = Rol_x_Empleado_Serializer

class Rol_x_Empleado_DetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    queryset         = Rol_x_Empleado.objects.all()
    serializer_class = Rol_x_Empleado_Serializer


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer 












    """ BOTON DE PAGO CON GOOGLE PAY """
# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
import stripe

# ✅ Configura la clave desde settings.py (.env)
stripe.api_key = settings.STRIPE_SECRET_KEY


class GooglePayView(APIView):
    def post(self, request):
        try:
            # Extrae el token enviado desde Google Pay
            payment_token = request.data['paymentMethodData']['tokenizationData']['token']

            # ✅ Usar PaymentIntent (recomendado)
            intent = stripe.PaymentIntent.create(
                amount=1000,  # 💡 Monto en centavos (10.00 USD)
                currency='usd',
                payment_method_data={
                    'type': 'card',
                    'card': {
                        'token': payment_token
                    }
                },
                confirmation_method='automatic',
                confirm=True,  # Confirmar en la misma solicitud
            )

            return Response({'status': 'success', 'payment_intent': intent}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
