from .models        import Usuarios,metodos_pago,Membresias, ventas, Administradores, Rol_Administradores, Empleados,Rol_Empleados,Usuarios_x_Membresias,Rol_x_Administradores,Rol_x_Empleado
from rest_framework import serializers
from django.contrib.auth.models import User


class User_Serializer(serializers.ModelSerializer):
    class Meta:
        model  = User # Archivos exportados
        fields = '__all__' #All se refiere a todas las columnas del DB

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)



class Usuarios_Serializer(serializers.ModelSerializer):
    class Meta:
        model  = Usuarios # Archivos exportados
        fields = '__all__' #All se refiere a todas las columnas del DB



class metodos_pago_Serializer(serializers.ModelSerializer):
    class Meta:
        model  = metodos_pago # Archivos exportados
        fields = '__all__' #All se refiere a todas las columnas del DB



class Membresias_Serializer(serializers.ModelSerializer):
    class Meta:
        model  = Membresias # Archivos exportados
        fields = '__all__' #All se refiere a todas las columnas del DB




class ventas_Serializer(serializers.ModelSerializer):
    class Meta:
        model  = ventas # Archivos exportados
        fields = '__all__' #All se refiere a todas las columnas del DB



class Administradores_Serializer(serializers.ModelSerializer):
    class Meta:
        model  = Administradores # Archivos exportados
        fields = '__all__' #All se refiere a todas las columnas del DB



class Rol_Administradores_Serializer(serializers.ModelSerializer):
    class Meta:
        model  = Rol_Administradores # Archivos exportados
        fields = '__all__' #All se refiere a todas las columnas del DB



class Empleados_Serializer(serializers.ModelSerializer):
    class Meta:
        model  = Empleados # Archivos exportados
        fields = '__all__' #All se refiere a todas las columnas del DB



class Rol_Empleados_Serializer(serializers.ModelSerializer):
    class Meta:
        model  = Rol_Empleados # Archivos exportados
        fields = '__all__' #All se refiere a todas las columnas del DB




#SERIALIZER SEGUNDARIOS

class Usuarios_x_Membresias_Serializer(serializers.ModelSerializer):
    class Meta:
        model  = Usuarios_x_Membresias # Archivos exportados
        fields = '__all__' #All se refiere a todas las columnas del DB



class Rol_x_Administradores_Serializer(serializers.ModelSerializer):
    class Meta:
        model  = Rol_x_Administradores # Archivos exportados
        fields = '__all__' #All se refiere a todas las columnas del DB



class Rol_x_Empleado_Serializer(serializers.ModelSerializer):
    class Meta:
        model  = Rol_x_Empleado # Archivos exportados
        fields = '__all__' #All se refiere a todas las columnas del DB





