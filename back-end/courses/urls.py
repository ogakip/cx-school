from django.urls import path
from .views import CoursesSimpleViews

urlpatterns = [
    path('cursos/', CoursesSimpleViews.as_view())
]