# Generated by Django 4.1.6 on 2023-02-13 13:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0002_alter_students_serie_year'),
    ]

    operations = [
        migrations.AddField(
            model_name='students',
            name='students',
            field=models.ManyToManyField(related_name='courses', to='students.students'),
        ),
    ]