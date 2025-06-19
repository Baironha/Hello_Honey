
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import User


# TABLAS PRIMARIAS

class Membresias (models.Model):
    nombre      = models.CharField(max_length=50, null=False)
    monto       = models.DecimalField(max_digits=10, decimal_places=2)
    


class Usuarios (models.Model):

    #nombre              = models.CharField(max_length=50, null=False)
    edad                 = models.IntegerField(null=False,validators=[MinValueValidator(0), MaxValueValidator(190)])
    #correo              = models.EmailField(max_length=60, null=False)
    direccion            = models.CharField(max_length=100, blank=True)
    user                 = models.ForeignKey(User, on_delete = models.CASCADE, related_name='Usuarios')
    membresia            = models.ForeignKey(Membresias, on_delete = models.CASCADE, related_name='Usuarios')


class metodos_pago (models.Model):

    tipo_de_pago = models.CharField(max_length=50, null=False)


class feedback_usuarios (models.Model):

    nombre_usu = models.CharField(max_length=50, null=False)
    email_usu  = models.EmailField(null=False)
    fecha      = models.DateField(null=False)
    texto      = models.CharField(max_length=300, null=False)
    rating     = models.IntegerField(null=True) 
    



class ventas (models.Model):

    usuario            = models.ForeignKey(User, on_delete = models.CASCADE, related_name='ventas')
    membresia_comprada = models.ForeignKey(Membresias, on_delete = models.CASCADE, related_name='ventas')
    Metodo_de_pago     = models.ForeignKey(metodos_pago, on_delete = models.CASCADE, related_name='ventas')
    fecha_registro     = models.DateField(null=False)



class Rol_Administradores (models.Model):
    nombre_rol      = models.CharField( max_length=50, null=False)
    

class Administradores (models.Model):

    usuario             = models.ForeignKey(User, on_delete = models.CASCADE, related_name='Administradores')
    Rol_Administradores = models.ForeignKey(Rol_Administradores, on_delete = models.CASCADE, related_name='Administradores')
    experiencia_rol     = models.IntegerField(null=False)




class Rol_Empleados (models.Model) :

    nombre_rol      = models.CharField(max_length=50, null=False)


class Empleados (models.Model):

    usuario         = models.ForeignKey(User, on_delete = models.CASCADE, related_name='Empleados')
    rol_emple       = models.CharField(max_length=50, null=False)
    direccion       = models.CharField(max_length=100, blank=True)
    experiencia_rol = models.IntegerField(null=False)





#TABLAS INTERMEDIAS 
class Usuarios_x_Membresias(models.Model):
    id_usuario    = models.ForeignKey(User, on_delete = models.CASCADE, related_name='Usuarios_x_Membresias')
    id_Membresias = models.ForeignKey(Membresias, on_delete = models.CASCADE, related_name='Usuarios_x_Membresias')


class Rol_x_Administradores (models.Model):

    id_Administradores      = models.ForeignKey(Rol_Administradores, on_delete = models.CASCADE, related_name='Rol_x_Administradores')
    id_Rol_Administradores  = models.ForeignKey(Administradores, on_delete = models.CASCADE, related_name='Rol_x_Administradores')


class Rol_x_Empleado(models.Model):

    id_Rol      = models.ForeignKey(Rol_Empleados, on_delete = models.CASCADE, related_name='Rol_x_Empleado')
    id_Empleado = models.ForeignKey(Empleados, on_delete = models.CASCADE, related_name='Rol_x_Empleado')



