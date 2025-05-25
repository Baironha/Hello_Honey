
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator



# TABLAS PRIMARIAS
class Usuarios (models.Model):

    nombre               = models.CharField(max_length=50, null=False)
    edad                 = models.IntegerField(max_length=10, null=False,validators=[MinValueValidator(0), MaxValueValidator(190)])
    correo               = models.EmailField(max_length=60, null=False)
    direccion            = models.CharField(max_length=100, blank=True)
    membresia            = models.CharField(max_length=60, null=True)


class metodos_pago (models.Model):

    tipo_de_pago = models.CharField(max_length=50, null=False)


class Membresias (models.Model):
    nombre      = models.CharField(max_length=50, null=False)
    se_registro = models.DateField(null=False)


class ventas (models.Model):
    Nombre_usuario     = models.ForeignKey(Usuarios, on_delete = models.CASCADE, related_name='ventas')
    membresia_comprada = models.ForeignKey(Membresias, on_delete = models.CASCADE, related_name='ventas')
    Metodo_de_pago     = models.ForeignKey(metodos_pago, on_delete = models.CASCADE, related_name='ventas')


class Membresias (models.Model):
    nombre      = models.CharField(max_length=50, null=False)
    se_registro = models.DateField(null=False)


class Administradores (models.Model):

    nombre               = models.CharField(max_length=50, null=False)
    rol_admin            = models.CharField(max_length=50, null=False)
    correo               = models.EmailField(max_length=60, null=False)
    labora_admin         = models.BooleanField(null=False)


class Rol_Administradores (models.Model):
    nombre_rol      = models.CharField(max_length=50, null=False)
    experiencia_rol = models.IntegerField(max_length=50, null=False)


class Empleados (models.Model):

    nombre               = models.CharField(max_length=50, null=False)
    rol_emple            = models.CharField(max_length=50, null=False)
    correo               = models.EmailField(max_length=60, null=False)
    direccion            = models.CharField(max_length=100, blank=True)
    labora_emple         = models.BooleanField(null=False)


class Rol_Empleados (models.Model) :

    nombre_rol      = models.CharField(max_length=50, null=False)
    experiencia_rol = models.IntegerField(max_length=50, null=False)



#TABLAS INTERMEDIAS 
class Usuarios_x_Membresias(models.Model):
    id_usuario    = models.ForeignKey(Usuarios, on_delete = models.CASCADE, related_name='Usuarios_x_Membresias')
    id_Membresias = models.ForeignKey(Membresias, on_delete = models.CASCADE, related_name='Usuarios_x_Membresias')


class Rol_x_Administradores (models.Model):

    id_Administradores      = models.ForeignKey(Rol_Administradores, on_delete = models.CASCADE, related_name='Rol_x_Administradores')
    id_Rol_Administradores  = models.ForeignKey(Administradores, on_delete = models.CASCADE, related_name='Rol_x_Administradores')


class Rol_x_Empleado(models.Model):

    id_Rol      = models.ForeignKey(Rol_Empleados, on_delete = models.CASCADE, related_name='Rol_x_Empleado')
    id_Empleado = models.ForeignKey(Empleados, on_delete = models.CASCADE, related_name='Rol_x_Empleado')



