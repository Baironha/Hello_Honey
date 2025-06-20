# Generated by Django 5.1.2 on 2025-06-19 19:22

import django.core.validators
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='feedback_usuarios',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_usu', models.CharField(max_length=50)),
                ('email_usu', models.EmailField(max_length=254)),
                ('fecha', models.DateField()),
                ('texto', models.CharField(max_length=300)),
                ('rating', models.IntegerField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Membresias',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('monto', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
        migrations.CreateModel(
            name='metodos_pago',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo_de_pago', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Rol_Administradores',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_rol', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Rol_Empleados',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_rol', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Empleados',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rol_emple', models.CharField(max_length=50)),
                ('direccion', models.CharField(blank=True, max_length=100)),
                ('experiencia_rol', models.IntegerField()),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Empleados', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='RespuestaFeedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mensaje', models.TextField()),
                ('fecha_respuesta', models.DateTimeField(auto_now_add=True)),
                ('enviado', models.BooleanField(default=False)),
                ('feedback', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='RespuestaFeedback', to='api.feedback_usuarios')),
            ],
        ),
        migrations.CreateModel(
            name='Administradores',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('experiencia_rol', models.IntegerField()),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Administradores', to=settings.AUTH_USER_MODEL)),
                ('Rol_Administradores', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Administradores', to='api.rol_administradores')),
            ],
        ),
        migrations.CreateModel(
            name='Rol_x_Administradores',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_Administradores', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Rol_x_Administradores', to='api.rol_administradores')),
                ('id_Rol_Administradores', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Rol_x_Administradores', to='api.administradores')),
            ],
        ),
        migrations.CreateModel(
            name='Rol_x_Empleado',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_Empleado', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Rol_x_Empleado', to='api.empleados')),
                ('id_Rol', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Rol_x_Empleado', to='api.rol_empleados')),
            ],
        ),
        migrations.CreateModel(
            name='Usuarios_perfil',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Imagen', models.CharField(max_length=200)),
                ('edad', models.IntegerField(validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(190)])),
                ('direccion', models.CharField(blank=True, max_length=100)),
                ('membresia', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Usuarios', to='api.membresias')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Usuarios', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Usuarios_x_Membresias',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_Membresias', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Usuarios_x_Membresias', to='api.membresias')),
                ('id_usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Usuarios_x_Membresias', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ventas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_registro', models.DateField()),
                ('Metodo_de_pago', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ventas', to='api.metodos_pago')),
                ('membresia_comprada', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ventas', to='api.membresias')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ventas', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
