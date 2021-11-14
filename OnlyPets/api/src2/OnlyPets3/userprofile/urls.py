from django.urls import path
from .views import ProfileView

urlpatterns = [
    path('<pk>/', ProfileView.as_view(), name='user-profile')
]
