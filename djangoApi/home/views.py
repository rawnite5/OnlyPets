from django.shortcuts import render
from .models import PostCollection, CommentCollection
from profile.models import Profile
from django.http import HttpResponseRedirect
from django.views import View
from .forms import PostForm, CommentForm
from django.urls import reverse_lazy
from django.contrib.auth.mixins import UserPassesTestMixin, LoginRequiredMixin
from django.views.generic.edit import UpdateView, DeleteView
from django.db.models import Q

from .serializers import PostCollectionSerializer, CommentCollectionSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

class PostCollectionView(APIView):
    def get(self, request, *args, **kwargs):
        id = self.kwargs.get('pk')
        if id:
            try:
                item = PostCollection.objects.get(id=id)
                serializer = PostCollectionSerializer(item)
                return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
            except PostCollection.DoesNotExist:
                return Response({"status": "error", "data": "post does not exist"}, status=status.HTTP_400_BAD_REQUEST)

        items = PostCollection.objects.all().order_by('-post_timestamp')
        serializer = PostCollectionSerializer(items, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = PostCollectionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class PostDetailView(APIView):

    def get_object(self, *args, **kwargs):
        id = self.kwargs.get('pk')
        try: 
            return PostCollection.objects.get(id = id)
        except PostCollection.DoesNotExist:
            return Response({"status": "error", "data": "post does not exist"}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, *args, **kwargs):
        post = self.get_object()

        postSerializer = PostCollectionSerializer(post)

        return Response({"status": "success", "data": {'post': postSerializer.data}}, status=status.HTTP_200_OK)
        
    def patch(self, request, *args, **kwargs):

        post = self.get_object()
        
        serializer = PostCollectionSerializer(post, data=request.data, partial=True)

        if serializer.is_valid():
            # if serializer.objects.get('comments'):
                # commentSerializer = CommentCollectionSerializer(serializer.comments)
                # commentSerializer.save()

            serializer.save()

            return Response({"status": "success", "data": serializer.data})
        else:
            return Response({"status": "error", "data": serializer.errors})

    def delete(self, request, *args, **kwargs):

        post = self.get_object()
        post.delete()
        
        return Response({"status": "error", "data": "post deleted"})

    # def post(self, request, *args, **kwargs):
    #     id = self.kwargs.get('pk')
    #     try:
    #         post = PostCollection.objects.get(pk=id)
    #         postSerializer = PostCollectionSerializer(post)
    #     except PostCollection.DoesNotExist:
    #         return Response({"status": "error", "data": "post does not exist"}, status=status.HTTP_400_BAD_REQUEST)

    #     comments = CommentCollection.objects.filter(post = post).order_by('-comment_timestamp')
    #     commentSerializer = CommentCollectionSerializer(comments)

    #     if commentSerializer.is_valid():
    #         new_comment = commentSerializer.save(commit= False)
    #         new_comment.author = request.user
    #         new_comment.post = post
    #         new_comment.save()
    #         return Response({"status": "success", "data": {'post': postSerializer.data, 'comments': commentSerializer.data}}, status=status.HTTP_200_OK)
    #     else:
    #         return Response({"status": "error", "data": commentSerializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class HitLike(APIView):
    def post(self, request, *args, **kwargs):
        id = self.kwargs.get('pk')
        
        post = PostCollection.objects.get(id = id)

        liked_ind = False

        for like in post.likes.all():
            if like == request.user:
                liked_ind = True
                post.likes.remove(request.user)
                break
        
        if not liked_ind:
            post.likes.add(request.user)

        serializer = PostCollectionSerializer(post)

        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)


class CommentDetailView(APIView):

    def get_object(self, *args, **kwargs):
        id = self.kwargs.get('pk')
        try: 
            return CommentCollection.objects.get(id = id)
        except CommentCollection.DoesNotExist:
            return Response({"status": "error", "data": "comment does not exist"}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, *args, **kwargs):
        comment = self.get_object()
        serializer = CommentCollectionSerializer(comment)

        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = CommentCollectionSerializer(request.data) 

        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, id, *args, **kwargs):
        comment = self.get_object(id)

        serializer = CommentCollectionSerializer(comment, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data})
        else:
            return Response({"status": "error", "data": serializer.errors})

    def delete(self, request, *args, **kwargs):
        comment = self.get_object()
        comment.delete()
        
        return Response({"status": "error", "data": "comment deleted"})

# class UserSearch(LoginRequiredMixin, View):
#     def get(self, request, *args, **kwargs):
#         fname = self.request.GET.get('query')

#         user_profiles = Profile.objects.filter(Q(firstname__contains = fname))

#         context = {
#             'user_profiles' : user_profiles
#         }

#         return render(request, 'home/usersearch.html', context)

        


# from django.shortcuts import render
# from .models import PostCollection, CommentCollection, User
# from profile.models import Profile
# from django.http import HttpResponseRedirect
# from django.views import View
# from .forms import PostForm, CommentForm
# from django.urls import reverse_lazy
# from django.contrib.auth.mixins import UserPassesTestMixin, LoginRequiredMixin
# from django.views.generic.edit import UpdateView, DeleteView
# from django.db.models import Q

# from .serializers import PostCollectionSerializer, CommentCollectionSerializer
# from rest_framework import status
# from rest_framework.views import APIView
# from rest_framework.response import Response

# class PostCollectionView(APIView):
#     def get(self, request, id=id):
#         if id:
#             try:
#                 item = PostCollection.objects.get(id=id)
#                 serializer = PostCollectionSerializer(item)
#                 return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
#             except PostCollection.DoesNotExist:
#                 return Response({"status": "error", "data": "post does not exist"}, status=status.HTTP_400_BAD_REQUEST)

#         items = PostCollection.objects.all().order_by('-post_timestamp')
#         serializer = PostCollectionSerializer(items, many=True)
#         return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

#     def post(self, request):
#         serializer = PostCollectionSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
#         else:
#             return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

# class PostDetailView(APIView):
#     def get(self, request, id):
#         try:
#             post = PostCollection.objects.get(id=id)
#             PostCollectionSerializer = PostCollectionSerializer(post)

#             comments = CommentCollection.objects.filter(post = post).order_by('-comment_timestamp')
#             commentSerializer = CommentCollectionSerializer(comments)
            
#             return Response({"status": "success", "data": {'post': PostCollectionSerializer.data, 'comments': commentSerializer.data}}, status=status.HTTP_200_OK)
#         except PostCollection.DoesNotExist:
#             return Response({"status": "error", "data": "post does not exist"}, status=status.HTTP_400_BAD_REQUEST)

#     def post(self, request, id):
#         try:
#             post = PostCollection.objects.get(id=id)
#             PostCollectionSerializer = PostCollectionSerializer(post)
#         except PostCollection.DoesNotExist:
#             return Response({"status": "error", "data": "post does not exist"}, status=status.HTTP_400_BAD_REQUEST)

#         comments = CommentCollection.objects.filter(post = post).order_by('-comment_timestamp')
#         commentSerializer = CommentCollectionSerializer(comments)

#         if commentSerializer.is_valid():
#             new_comment = commentSerializer.save(commit= False)
#             new_comment.author = request.user
#             new_comment.post = post
#             new_comment.save()
#             return Response({"status": "success", "data": {'post': PostCollectionSerializer.data, 'comments': commentSerializer.data}}, status=status.HTTP_200_OK)
#         else:
#             return Response({"status": "error", "data": commentSerializer.errors}, status=status.HTTP_400_BAD_REQUEST)

# class PostEditView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
#     model = PostCollection
#     fields = ['post_content']
#     template_name = 'home/post_edit.html'

#     def get_success_url(self):
#         pk = self.kwargs['pk']
#         return reverse_lazy('post-detail', kwargs = {'pk': pk})

#     def test_func(self):
#         post = self.get_object()
#         return self.request.user == post.author

# class PostDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
#     model = PostCollection
#     template_name = 'home/post_delete.html'
#     success_url = reverse_lazy('post-collection')

#     def test_func(self):
#         post = self.get_object()
#         return self.request.user == post.author

# class CommentDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
#     model = CommentCollection
#     template_name = 'home/comment_delete.html'

#     def get_success_url(self):
#         # pk = self.kwargs['pk']
#         post = self.get_object().post
#         return reverse_lazy('post-detail', kwargs = {'pk': post.id})

#     def test_func(self):
#         comment = self.get_object()
#         return self.request.user == comment.author

# class HitLike(LoginRequiredMixin, View):
#     def post(self, request, id):
#         post = PostCollection.objects.get(id = id)

#         liked_ind = False

#         for like in post.likes.all():
#             if like == request.user:
#                 liked_ind = True
#                 post.likes.remove(request.user)
#                 break
        
#         if not liked_ind:
#             post.likes.add(request.user)

#         next = request.POST.get('next', '/')
#         return HttpResponseRedirect(next)
        

# class UserSearch(LoginRequiredMixin, View):
#     def get(self, request):
#         fname = self.request.GET.get('query')

#         user_profiles = Profile.objects.filter(Q(firstname__contains = fname))

#         context = {
#             'user_profiles' : user_profiles
#         }

#         return render(request, 'home/usersearch.html', context)

        