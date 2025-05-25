from .models        import pacientes, especialidades, doctores,citas, especialidades_x_doctores
from rest_framework import serializers


class pacientes_Serializer(serializers.ModelSerializer):
    class Meta:
        model  = pacientes # Archivos exportados
        fields = '__all__' #All se refiere a todas las columnas del DB
