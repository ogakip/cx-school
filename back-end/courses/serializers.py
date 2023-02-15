from rest_framework import serializers

class CoursesSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(max_length=255)
    description = serializers.CharField(max_length=1000)
    duration = serializers.IntegerField(default=1)

    def update(self, instance, validated_data):
        data_items = validated_data.items()
        for key, value in data_items:
            setattr(instance, key, value)
            continue
        instance.save()
        return instance