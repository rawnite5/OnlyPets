from django.urls import path
from .views import FriendsView, ProfileView, FriendsDetailView

urlpatterns = [
    path('', ProfileView.as_view()),
    path('<str:username>/', ProfileView.as_view()),
    path('friends/<str:username>/', FriendsView.as_view(), name = 'friend-list'),
    path('<str:followingusername>/friends/<str:followerusername>/', FriendsDetailView.as_view(), name = 'friend-edit')
]
