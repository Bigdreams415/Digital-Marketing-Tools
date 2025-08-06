from django.contrib.auth.models import AbstractUser
from django.db import models

AUTH_PROVIDERS = {
    'email': 'email',
    'google': 'google',
    'microsoft': 'microsoft',
    'apple': 'apple'
}

class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=255)
    profile_picture = models.URLField(blank=True, null=True)
    auth_provider = models.CharField(
        max_length=50,
        blank = False,
        null = False,
        default=AUTH_PROVIDERS.get('email')
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    def __str__(self):
        return self.email