from django.db import models

# Create your models here.
class Courses(models.Model):
    title = models.CharField(max_length=255, default='Sem título')
    description = models.CharField(max_length=1000, default='Sem descrição')
    duration = models.IntegerField(default=1)
