from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import pacientes, especialidades, doctores, citas,especialidades_x_doctores
from .serializer import pacientes_Serializer, especialidades_Serializer, doctores_Serializer, citas_Serializer,especialidades_x_doctores_Serializer

class pacientes_ListCreateView(ListCreateAPIView):
    queryset         = pacientes.objects.all()
    serializer_class = pacientes_Serializer
