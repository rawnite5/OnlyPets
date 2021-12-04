from django.urls import path
from .views import ProfileView

urlpatterns = [
    path('', ProfileView.as_view()),
    path('<str:username>', ProfileView.as_view())
]
