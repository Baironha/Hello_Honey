from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Usuarios,metodos_pago, Membresias, ventas, Administradores,Rol_Administradores,Empleados, Rol_Empleados,Usuarios_x_Membresias,Rol_x_Administradores,Rol_x_Empleado, User
from .serializer import Usuarios_Serializer, metodos_pago_Serializer, Membresias_Serializer, ventas_Serializer,Administradores_Serializer,Rol_Administradores_Serializer,Empleados_Serializer,Rol_Empleados_Serializer,Usuarios_x_Membresias_Serializer,Rol_x_Administradores_Serializer,Rol_x_Empleado_Serializer,User_Serializer

from .permissions import IsAdminUserGroup, IsEmpledoUserGroup,IsUsuarioUserGroup, IsAuthenticated
from rest_framework.permissions import AllowAny




#VIEWS PRINCIPALES 


class User_ListCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    permission_classes = [IsEmpledoUserGroup]
    queryset           = User.objects.all()
    serializer_class   = User_Serializer


class User_DetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    permission_classes = [IsEmpledoUserGroup]
    queryset         = User.objects.all()
    serializer_class = User_Serializer



class Usuarios_ListCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    permission_classes = [IsEmpledoUserGroup]
    queryset         = Usuarios.objects.all()
    serializer_class = Usuarios_Serializer

class Usuarios_DetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    queryset         = Usuarios.objects.all()
    serializer_class = Usuarios_Serializer


class metodos_pago_ListCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    queryset         = metodos_pago.objects.all()
    serializer_class = metodos_pago_Serializer

class metodos_pago_DetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    queryset         = metodos_pago.objects.all()
    serializer_class = metodos_pago_Serializer



class Membresias_ListCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    queryset         = Membresias.objects.all()
    serializer_class = Membresias_Serializer

class Membresias_DetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    queryset         = Membresias.objects.all()
    serializer_class = Membresias_Serializer


class ventas_ListCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
    queryset         = ventas.objects.all()
    serializer_class = ventas_Serializer

class ventas_DetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUserGroup]
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



