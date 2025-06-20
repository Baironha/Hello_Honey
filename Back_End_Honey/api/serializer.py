from .models        import Usuarios_perfil, metodos_pago,Membresias, ventas, Administradores, Rol_Administradores, Empleados,Rol_Empleados,Usuarios_x_Membresias,Rol_x_Administradores,Rol_x_Empleado, feedback_usuarios, RespuestaFeedback
from rest_framework import serializers
from django.contrib.auth.models import User, Group

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

UserGroup = User.groups.through  # Tabla intermedia automática


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        # Obtener el grupo del usuario (rol)
        groups = self.user.groups.values_list('name', flat=True)
        # Agrega el primer grupo como 'role'
        data['role'] = groups[0] if groups else None
        return data


#view y urls

class User_Serializer(serializers.ModelSerializer):
    rol = serializers.CharField(write_only=True, required=False)  # este es el campo que viene del frontend
    roles = serializers.SerializerMethodField()  # este se usa solo para mostrar

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'rol', 'roles']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        rol_nombre = validated_data.pop('rol', None)  # sacar el rol del frontend
        password = validated_data.pop('password')

        user = User(**validated_data)
        user.set_password(password)
        user.save()

        # Asignar grupo si viene rol
        if rol_nombre:
            try:
                grupo = Group.objects.get(name=rol_nombre)
                user.groups.add(grupo)
            except Group.DoesNotExist:
                raise serializers.ValidationError(f"El grupo '{rol_nombre}' no existe en la base de datos.")

        return user

    def get_roles(self, obj):
        return [group.name for group in obj.groups.all()]




class Usuarios_Serializer(serializers.ModelSerializer):
    class Meta:
        model  = Usuarios_perfil  # Archivos exportados
        fields = '__all__' #All se refiere a todas las columnas del DB



class feedback_usuarios_Serializer(serializers.ModelSerializer):
    class Meta:
        model  = feedback_usuarios # Archivos exportados
        fields = '__all__' #All se refiere a todas las columnas del DB


class RespuestaFeedback_Serializer(serializers.ModelSerializer):
    class Meta:
        model  = RespuestaFeedback # Archivos exportados
        fields = '__all__' #All se refiere a todas las columnas del DB



class auth_group_Serializer(serializers.ModelSerializer):
    class Meta:
        model  =  Group# Archivos exportados
        fields = '__all__' #All se refiere a todas las columnas del DB

class UserGroup_Serializer(serializers.ModelSerializer):
    class Meta:
        model = UserGroup
        fields = ['user_id', 'group_id']


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





