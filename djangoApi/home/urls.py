from django.contrib.auth.models import User
from django.urls import path
from .views import PostCollectionView, PostDetailView, CommentDetailView #, HitLike , PostEditView, PostDeleteView, CommentDeleteView, UserSearch

urlpatterns = [
    path('', PostCollectionView.as_view(), name='post-collection'),
    path('post/<uuid:pk>/', PostDetailView.as_view(), name='post-detail'),
    # path('post/<uuid:id>/', PostEditView.as_view(), name = 'post-edit'),
    # path('post/<uuid:id>/', PostDeleteView.as_view(), name = 'post-delete'),
    path('post/<uuid:postId>/comment/', CommentDetailView.as_view(), name = 'comment-collection'),
    path('post/<uuid:postId>/comment/<uuid:commentId>/', CommentDetailView.as_view(), name = 'comment-detail'),
    # path('post/<id>/like', HitLike.as_view(), name = 'like'),
    # path('search/', UserSearch.as_view(), name = 'user-search'),
]

