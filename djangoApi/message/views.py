from .models import Message, Profile
from .serializers import MessageSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class MessageView(APIView):
    def post(self, request):
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_200_OK)

    def get(self, request, username=None):
        if username:
            try:
                items = Message.objects.filter(toProfile=username)
                serializer = MessageSerializer(items, many=True)
                return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
            except Message.DoesNotExist:
                return Response({"status": "error", "data": "username does not exist"}, status=status.HTTP_200_OK)

        items = Message.objects.all()
        serializer = MessageSerializer(items, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

    def delete(self, request, username=None):
        print(username)
        try:
            item = Message.objects.get(username=username)
        except Message.DoesNotExist:
            return Response({"status": "error", "data": "username does not exist"}, status=status.HTTP_200_OK)

        item.delete()
        return Response({"status": "success", "data": "Item Deleted"})

    def patch(self, request, username=None):
        try:
            item = Message.objects.get(username=username)
        except Message.DoesNotExist:
            return Response({"status": "error", "data": "username does not exist"}, status=status.HTTP_200_OK)

        serializer = MessageSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data})
        else:
            return Response({"status": "error", "data": serializer.errors})