from rest_framework.permissions import BasePermission, IsAuthenticated


class IsAdminUserGroup(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name="admins").exists()

class IsEmpledoUserGroup(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name="empleados").exists()

class IsUsuarioUserGroup(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name="usuarios").exists()

