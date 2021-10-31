from django.urls import path
from login.views import Index

urlpatterns = [
    path('', Index.as_view(), name = 'index')
    ]