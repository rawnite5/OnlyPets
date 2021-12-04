from django.db import models

# Create your models here.
class Profile(models.Model):
    username = models.CharField(max_length= 25, unique=True)
    password = models.CharField(max_length= 25)
    country = models.CharField(max_length=100, blank=True, null=True)
    firstname = models.CharField(max_length= 25, blank=True, null=True)
    lastname = models.CharField(max_length= 25, null = True, blank= True)
    gender = models.CharField(max_length= 25, null = True, blank= True)
    bio = models.TextField(max_length= 300, null = True, blank = True)
    birthdate = models.DateField(null= True, blank= True)
    displaypic = models.ImageField(upload_to = 'uploads/display_pictures', blank = True, default = 'uploads/display_pictures/default.png')
    city = models.CharField(max_length=100, blank=True, null=True)
    country = models.CharField(max_length=100, blank=True, null=True)