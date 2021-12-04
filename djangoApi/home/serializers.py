from rest_framework import serializers
from .models import PostCollection, CommentCollection

class PostCollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostCollection
        fields = ['id', 'author', 'post_content', 'post_timestamp', 'likes']

class CommentCollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommentCollection
        fields = ['id', 'post', 'author', 'comment', 'comment_timestamp']