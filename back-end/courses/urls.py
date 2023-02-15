from django.urls import path
from .views import CoursesSimpleViews, CoursesComplexViews, CoursesCustomViews

urlpatterns = [
    path('cursos/', CoursesSimpleViews.as_view()),
    path('cursos/<course_id>', CoursesComplexViews.as_view()),
    path('cursos/<course_id>/alunos', CoursesCustomViews.as_view())
]