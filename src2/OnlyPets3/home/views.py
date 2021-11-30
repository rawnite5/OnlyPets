from django.shortcuts import render
from .models import PostCollection, CommentCollection
from django.views import View
from .forms import PostForm, CommentForm
from django.urls import reverse_lazy
from django.contrib.auth.mixins import UserPassesTestMixin, LoginRequiredMixin
from django.views.generic.edit import UpdateView, DeleteView

class PostCollectionView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        posts = PostCollection.objects.all().order_by('-post_timestamp')
        form = PostForm()

        context = {
            'post_collection': posts,
            'form': form,
        }
        return render(request, 'home/post_collection.html', context)

    def post(self, request, *args, **kwargs):
        posts = PostCollection.objects.all().order_by('-post_timestamp')
        form = PostForm(request.POST)

        if form.is_valid():
            new_post = form.save(commit=False)
            new_post.author = request.user
            new_post.save()

        context = {
            'post_collection': posts,
            'form': form,
        }
        return render(request, 'home/post_collection.html', context)

class PostDetailView(LoginRequiredMixin, View):
    def get(self, request, pk, *args, **kwargs):
        post = PostCollection.objects.get(pk=pk)
        form = CommentForm()
        comments = CommentCollection.objects.filter(post = post).order_by('-comment_timestamp')

        context = {
            'post': post,
            'form': form,
            'comments': comments
        }

        return render(request, 'home/post_detail.html', context)

    def post(self, request, pk, *args, **kwargs):
        post = PostCollection.objects.get(pk=pk)
        comments = CommentCollection.objects.filter(post = post).order_by('-comment_timestamp')
        form = CommentForm(request.POST)

        if form.is_valid():
            new_comment = form.save(commit= False)
            new_comment.author = request.user
            new_comment.post = post
            new_comment.save()

        context = {
            'post': post,
            'form': form,
            'comments': comments
        }

        return render(request, 'home/post_detail.html', context)

class PostEditView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = PostCollection
    fields = ['post_content']
    template_name = 'home/post_edit.html'

    def get_success_url(self):
        pk = self.kwargs['pk']
        return reverse_lazy('post-detail', kwargs = {'pk': pk})

    def test_func(self):
        post = self.get_object()
        return self.request.user == post.author

class PostDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = PostCollection
    template_name = 'home/post_delete.html'
    success_url = reverse_lazy('post-collection')

    def test_func(self):
        post = self.get_object()
        return self.request.user == post.author

class CommentDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = CommentCollection
    template_name = 'home/comment_delete.html'
    success_url = reverse_lazy('post-collection')

    def test_func(self):
        post = self.get_object()
        return self.request.user == post.author
