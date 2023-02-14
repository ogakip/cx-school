from rest_framework import serializers

class CoursesSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=255)
    description = serializers.CharField(max_length=1000)
    duration = serializers.IntegerField(default=1)