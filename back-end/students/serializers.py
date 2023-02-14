from rest_framework import serializers

class StudentSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    father = serializers.CharField(max_length=255)
    mother = serializers.CharField(max_length=255)
    age = serializers.IntegerField()
    phone = serializers.CharField(max_length=11)
    serie_year = serializers.CharField(max_length=1)

    def update(self, instance, validated_data):
        data_items = validated_data.items()
        for key, value in data_items:
            setattr(instance, key, value)
            continue
        instance.save()
        return instance