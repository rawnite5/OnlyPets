from django.shortcuts import render
from .models import UserProfile
from home.models import PostCollection
from django.http import HttpResponseRedirect
from django.views import View
from home.forms import PostForm, CommentForm
from django.urls import reverse_lazy
from django.contrib.auth.mixins import UserPassesTestMixin, LoginRequiredMixin
from django.views.generic.edit import UpdateView, DeleteView

# Create your views here.
class ProfileView(View):
    def get(self, request, pk, *args, **kwargs):
        profile = UserProfile.objects.get(pk = pk)
        postlist = PostCollection.objects.filter(author = profile.user).order_by('-post_timestamp')

        context = {
            'profile' : profile,
            'postlist' : postlist,
        }

        return render(request, 'userprofile/profile.html', context)








