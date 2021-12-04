from .models import Profile
from .serializers import ProfileSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class ProfileView(APIView):
    def post(self, request):
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, username=None):
        if username:
            try:
                item = Profile.objects.get(username=username)
                serializer = ProfileSerializer(item)
                return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
            except Profile.DoesNotExist:
                return Response({"status": "error", "data": "username does not exist"}, status=status.HTTP_400_BAD_REQUEST)

        items = Profile.objects.all()
        serializer = ProfileSerializer(items, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

    def delete(self, request, username=None):
        try:
            item = Profile.objects.get(username=username)
        except Profile.DoesNotExist:
            return Response({"status": "error", "data": "username does not exist"}, status=status.HTTP_400_BAD_REQUEST)

        item.delete()
        return Response({"status": "success", "data": "Item Deleted"})

    def patch(self, request, username=None):
        try:
            item = Profile.objects.get(username=username)
        except Profile.DoesNotExist:
            return Response({"status": "error", "data": "username does not exist"}, status=status.HTTP_400_BAD_REQUEST)

        serializer = ProfileSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data})
        else:
            return Response({"status": "error", "data": serializer.errors})
