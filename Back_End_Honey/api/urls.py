from django.urls import path
from .views import *
urlpatterns =[

    #END-POINTS PRINCIPALES
    path('auth_user/', User_ListCreateView.as_view()),
    path('auth_user/<int:pk>/', User_RetrieveUpdateDestroyAPIView.as_view(),),

    path('auth_group/', auth_group_ListCreateView.as_view()),
    path('auth_group/<int:pk>/', auth_group_ListCreateView.as_view()),
    
    path('UserGroup/',UserGroup_ListCreateView.as_view()),

    path('feedback_usuarios/',feedback_usuarios_ListCreateView.as_view()),
    path('feedback_usuarios/<int:pk>/',feedback_usuarios_DetailView.as_view()),
    
    path('RespuestaFeedback/',RespuestaFeedback_ListCreateView.as_view()),
    path('RespuestaFeedback/<int:pk>/',RespuestaFeedback_DetailView.as_view()),

    path('login/', CustomTokenObtainPairView.as_view()),
    
    path('usuarios/', Usuarios_ListCreateView.as_view(),),
    path('usuarios/<int:pk>/', Usuarios_DetailView.as_view(),),
    path('usuarios/<int:user_id>/imagen/', UsuariosActualizarImagenView.as_view(), name='usuarios-imagen'),

    path('metodos_pago/', metodos_pago_ListCreateView.as_view(),),
    path('metodos_pago/<int:pk>/', metodos_pago_DetailView.as_view(),),

    path('Membresias/', Membresias_ListCreateView.as_view(),),
    path('Membresias/<int:pk>/', Membresias_DetailView.as_view(),),

    path('ventas/', ventas_ListCreateView.as_view(),),
    path('ventas/<int:pk>/', ventas_DetailView.as_view(),),

    path('Administradores/', Administradores_ListCreateView.as_view(),),
    path('Administradores/<int:pk>/', Administradores_DetailView.as_view(),),

    path('Rol_Administradores/', Rol_Administradores_ListCreateView.as_view(),),
    path('Rol_Administradores/<int:pk>/', Rol_Administradores_DetailView.as_view(),),

    path('Empleados/', Empleados_ListCreateView.as_view(),),
    path('Empleados/<int:pk>/', Empleados_DetailView.as_view(),),

    path('Rol_Empleados/', Rol_Empleados_ListCreateView.as_view(),),
    path('Rol_Empleados/<int:pk>/', Rol_Empleados_DetailView.as_view(),),

    path("chat/", ChatView.as_view(), name="chat"),
    path('chat/historial/', historial_chat, name='historial'),  # GET

    path("dashboard/metrics/", DashboardMetricsView.as_view(), name="dashboard-metrics"),
    path("dashboard/interacciones/", GraficoInteraccionesView.as_view(), name="dashboard-interacciones"),
    path("dashboard/avance-analitico/", AvanceAnaliticoHoneyView.as_view(), name="dashboard-avance-analitico"),

    path('api/googlepay/', GooglePayView.as_view(), name='googlepay'),

    

    #END-POINTS SEGUNDARIOS 
    path('Usuarios_x_Membresias/', Usuarios_x_Membresias_ListCreateView.as_view(),),
    path('Usuarios_x_Membresias/<int:pk>/', Usuarios_x_Membresias_DetailView.as_view(),),

    path('Rol_x_Administradores/', Rol_x_Administradores_ListCreateView.as_view(),),
    path('Rol_x_Administradores/<int:pk>/', Rol_x_Administradores_DetailView.as_view(),),

    path('Rol_x_Empleado/', Rol_x_Empleado_ListCreateView.as_view(),),
    path('Rol_x_Empleado/<int:pk>/', Rol_x_Empleado_DetailView.as_view(),),


]
