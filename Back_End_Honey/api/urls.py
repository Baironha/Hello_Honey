from django.urls import path
from .views import *
urlpatterns =[

    #END-POINTS PRINCIPALES
    path('auth_user/', User_ListCreateView.as_view()),
    path('auth_user/<int:pk>', User_RetrieveUpdateDestroyAPIView.as_view(),),

    path('auth_group/', auth_group_ListCreateView.as_view()),
    path('auth_group/<int:pk>', auth_group_ListCreateView.as_view()),
    
    path('UserGroup/',UserGroup_ListCreateView.as_view()),


    path('login/', CustomTokenObtainPairView.as_view()),
    
    path('usuarios/', Usuarios_ListCreateView.as_view(),),
    path('usuarios/<int:pk>', Usuarios_DetailView.as_view(),),

    path('metodos_pago/', metodos_pago_ListCreateView.as_view(),),
    path('metodos_pago/<int:pk>', metodos_pago_DetailView.as_view(),),

    path('Membresias/', Membresias_ListCreateView.as_view(),),
    path('Membresias/<int:pk>', Membresias_DetailView.as_view(),),

    path('ventas/', ventas_ListCreateView.as_view(),),
    path('ventas/<int:pk>', ventas_DetailView.as_view(),),

    path('Administradores/', Administradores_ListCreateView.as_view(),),
    path('Administradores/<int:pk>', Administradores_DetailView.as_view(),),

    path('Rol_Administradores/', Rol_Administradores_ListCreateView.as_view(),),
    path('Rol_Administradores/<int:pk>', Rol_Administradores_DetailView.as_view(),),

    path('Empleados/', Empleados_ListCreateView.as_view(),),
    path('Empleados/<int:pk>', Empleados_DetailView.as_view(),),

    path('Rol_Empleados/', Rol_Empleados_ListCreateView.as_view(),),
    path('Rol_Empleados/<int:pk>', Rol_Empleados_DetailView.as_view(),),


    #END-POINTS SEGUNDARIOS 
    path('Usuarios_x_Membresias/', Usuarios_x_Membresias_ListCreateView.as_view(),),
    path('Usuarios_x_Membresias/<int:pk>', Usuarios_x_Membresias_DetailView.as_view(),),

    path('Rol_x_Administradores/', Rol_x_Administradores_ListCreateView.as_view(),),
    path('Rol_x_Administradores/<int:pk>', Rol_x_Administradores_DetailView.as_view(),),

    path('Rol_x_Empleado/', Rol_x_Empleado_ListCreateView.as_view(),),
    path('Rol_x_Empleado/<int:pk>', Rol_x_Empleado_DetailView.as_view(),),


]
