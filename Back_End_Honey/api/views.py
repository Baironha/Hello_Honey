from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Usuarios_perfil,metodos_pago, Membresias, ventas, Administradores,Rol_Administradores,Empleados, Rol_Empleados,Usuarios_x_Membresias,Rol_x_Administradores,Rol_x_Empleado, User, feedback_usuarios, RespuestaFeedback, Conversacion
from .serializer import Usuarios_Serializer, metodos_pago_Serializer, Membresias_Serializer, ventas_Serializer,Administradores_Serializer,Rol_Administradores_Serializer,Empleados_Serializer,Rol_Empleados_Serializer,Usuarios_x_Membresias_Serializer,Rol_x_Administradores_Serializer,Rol_x_Empleado_Serializer,User_Serializer,auth_group_Serializer,UserGroup_Serializer, CustomTokenObtainPairSerializer,feedback_usuarios_Serializer, RespuestaFeedback_Serializer,ConversacionSerializer

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









import os
import tempfile
import whisper
import openai
import pyttsx3
from pydub import AudioSegment
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
""" from rest_framework import status """



def generar_respuesta_inteligente(mensaje):
    openai.api_key = settings.OPENAI_API_KEY

    respuesta = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Eres Honey, una asistente virtual simpática, clara y profesional."},
            {"role": "user", "content": mensaje},
        ],
        max_tokens=150,
        temperature=0.7,
    )
    return respuesta.choices[0].message.content.strip()


class HoneyResponderView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request):
        tipo = request.data.get("tipo", "texto")

        # --- TEXTO ---
        if tipo == "texto":
            contenido = request.data.get("contenido")
            if not contenido:
                return Response({"error": "Mensaje vacío"}, status=400)

            user_msg = Conversacion.objects.create(contenido=contenido, rol="user", tipo="texto")
            respuesta = generar_respuesta_inteligente(contenido)
            honey_msg = Conversacion.objects.create(contenido=respuesta, rol="honey", tipo="texto")

            return Response({
                "respuesta": respuesta,
                "tipo": "texto",
                "mensajes": [
                    ConversacionSerializer(user_msg).data,
                    ConversacionSerializer(honey_msg).data,
                ]
            })

        # --- AUDIO ---
        elif tipo == "audio" and "audio" in request.FILES:
            audio_file = request.FILES["audio"]
            with tempfile.NamedTemporaryFile(delete=False, suffix=".webm") as tmp:
                for chunk in audio_file.chunks():
                    tmp.write(chunk)
                tmp_path = tmp.name

            model = whisper.load_model("base")
            transcription = model.transcribe(tmp_path)["text"]
            os.remove(tmp_path)

            user_msg = Conversacion.objects.create(contenido=transcription, rol="user", tipo="audio")
            respuesta = generar_respuesta_inteligente(transcription)
            honey_msg = Conversacion.objects.create(contenido=respuesta, rol="honey", tipo="audio")

            # Convertir a voz
            tts_engine = pyttsx3.init()
            tts_file = tempfile.NamedTemporaryFile(delete=False, suffix=".mp3")
            tts_engine.save_to_file(respuesta, tts_file.name)
            tts_engine.runAndWait()

            audio = AudioSegment.from_file(tts_file.name, format="mp3")
            audio_path = tts_file.name.replace(".mp3", ".wav")
            audio.export(audio_path, format="wav")

            with open(audio_path, "rb") as f:
                response = Response(f.read(), content_type="audio/wav")
                response["Content-Disposition"] = "attachment; filename=honey.wav"

            os.remove(tts_file.name)
            os.remove(audio_path)

            return response

        return Response({"error": "Tipo inválido o archivo faltante"}, status=400)











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