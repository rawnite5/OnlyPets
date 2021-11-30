from django.urls import path
from .views import PostCollectionView, PostDetailView, PostEditView, PostDeleteView, CommentDeleteView

urlpatterns = [
    path('', PostCollectionView.as_view(), name='post-collection'),
    path('post/<pk>/', PostDetailView.as_view(), name='post-detail'),
    path('post/edit/<pk>/', PostEditView.as_view(), name = 'post-edit'),
    path('post/delete/<pk>/', PostDeleteView.as_view(), name = 'post-delete'),
    path('post/<post_pk>/comment/delete/<pk>/', CommentDeleteView.as_view(), name = 'comment-delete'),
]

