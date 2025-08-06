from django.contrib import admin

# Register your models here.
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin)
    model = CustomUser
    list_display = ('email', 'full_name', 'auth_provider', 'is_staff', 'is_active')
    list_filter = ('auth_provider', 'is_staff', 'is_active')
    fieldsets = (
        (None, {'fields': ('email', 'password', 'full_name', 'auth_provider')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'auth_provider', 'is_staff', 'is_active')}
        ),
    )
    search_fields = ('email', 'full_name')
    ordering = ('email',)

admin.site.register(CustomUser, CustomUserAdmin)