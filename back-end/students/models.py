from django.db import models

# Create your models here.
class Students(models.Model):
    name = models.CharField(max_length=255)
    father = models.CharField(max_length=255)
    mother = models.CharField(max_length=255)
    phone = models.CharField(max_length=11)
    age = models.IntegerField(default=12)
    SERIE_YEAR_CHOICES = [
        ('1', 'Sexto Ano'),
        ('2', 'Sétimo Ano'),
        ('3', 'Oitavo Ano'),
        ('4', 'Nono Ano'),
        ('5', 'Primeiro Ano'),
        ('6', 'Segundo Ano'),
        ('7', 'Terceiro Ano'),
    ]
    serie_year = models.CharField(
        max_length=1,
        choices=SERIE_YEAR_CHOICES,
        default=1
    )
    courses = models.ManyToManyField('courses.Courses', related_name='students')