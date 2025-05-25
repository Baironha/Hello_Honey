from django.urls import path
from .views import pacientes_ListCreateView, especialidades_ListCreateView, doctores_ListCreateView,citas_ListCreateView, especialidades_x_doctores_ListCreateView


urlpatterns =[

    path('pacientes/', pacientes_ListCreateView.as_view(),),
    path('pacientes/<int:pk>', pacientes_ListCreateView.as_view(),),


    path('especialidades/', especialidades_ListCreateView.as_view(),),
    path('especialidades/<int:pk>', especialidades_ListCreateView.as_view(),),


    path('doctores/', doctores_ListCreateView.as_view(),),
    path('doctores/<int:pk>', doctores_ListCreateView.as_view(),),


    path('citas/', citas_ListCreateView.as_view(),),
    path('citas/<int:pk>', citas_ListCreateView.as_view(),),


    path('especialidades_x_doctores/', especialidades_x_doctores_ListCreateView.as_view(),),
    path('especialidades_x_doctores/<int:pk>', especialidades_x_doctores_ListCreateView.as_view(),),


    
]
