from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import StudentSerializer
from .models import Students
from .custom_error import InvalidData

class StudentsSimpleViews(APIView):
    def post(self, request):
        student_data = StudentSerializer(data=request.data)
        is_valid_data = student_data.is_valid(raise_exception=True)

        created_student = Students.objects.create(**student_data.validated_data)
        return Response({ 'type': 'success', 'message': 'Successfully registered student' })

    def get(self, request):
        get_all_students = Students.objects.all()
        serializer = StudentSerializer(get_all_students, many=True)
        return Response(serializer.data)

class StudentComplexViews(APIView):
    def patch(self, request, student_id):
        get_student = get_object_or_404(Students, id=student_id)
        serializer = StudentSerializer(get_student, data=request.data, partial=True)
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
    
    def delete(self, request, student_id):
        get_student = get_object_or_404(Students, id=student_id)
        get_student.delete()
        
        return Response(status = status.HTTP_204_NO_CONTENT)
    
    def get(self, request, student_id):
        get_student = get_object_or_404(Students, id=student_id)
        serializer = StudentSerializer(get_student)

        return Response(serializer.data)