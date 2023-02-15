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

class CoursesComplexViews(APIView):
    def patch(self, request, course_id):
        get_course = get_object_or_404(Courses, id=course_id)
        serializer = CoursesSerializer(get_course, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        request_items = request.data.items()

        for key, value in request_items:
            if key in ['id']:
                return Response({
                    key: f"You can not updated {key} property"
                    }, status.HTTP_422_UNPROCESSABLE_ENTITY)
                continue
        
        serializer.save()
        return Response(serializer.data)
    
    def delete(self, request, course_id):
        get_course = get_object_or_404(Courses, id=course_id)
        get_course.delete()
        
        return Response(status = status.HTTP_204_NO_CONTENT)
    
    def get(self, request, course_id):
        get_course = get_object_or_404(Courses, id=course_id)
        serializer = CoursesSerializer(get_course)

        return Response(serializer.data)

class CoursesCustomViews(APIView):
    def get(self, request, course_id):
        get_course = get_object_or_404(Courses, id=course_id)
        get_students_of_course = get_course.students.values()
        return Response(get_students_of_course)
