from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, primary_key= True, null = False, on_delete= models.CASCADE, related_name = 'puser')
    firstname = models.CharField(max_length= 25)
    lastname = models.CharField(max_length= 25, null = True, blank= True)
    bio = models.TextField(max_length= 300, null = True, blank = True)
    displaypic = models.ImageField(upload_to = 'uploads/display_pictures', blank = True)

