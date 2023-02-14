from rest_framework import serializers

class StudentSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    father = serializers.CharField(max_length=255)
    mother = serializers.CharField(max_length=255)
    age = serializers.IntegerField()
    phone = serializers.CharField(max_length=11)
    serie_year = serializers.CharField(max_length=1)