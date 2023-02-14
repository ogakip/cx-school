from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Courses
from .serializers import CoursesSerializer

class CoursesSimpleViews(APIView):
    def get(self, request):
        get_all_courses = Courses.objects.all()
        serializer = CoursesSerializer(get_all_courses, many=True)
        return Response(serializer.data)

    def post(self, request):
        course_data = CoursesSerializer(data=request.data)
        is_valid_data = course_data.is_valid(raise_exception=True)

        created_student = Courses.objects.create(**course_data.validated_data)
        return Response({ 'type': 'success', 'message': 'Successfully registered course' })