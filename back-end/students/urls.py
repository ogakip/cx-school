from django.urls import path
from .views import StudentsSimpleViews, StudentComplexViews, StudentCustomViews, StudentCustomCourseViews

urlpatterns = [
    path('alunos/', StudentsSimpleViews.as_view()),
    path("alunos/<student_id>", StudentComplexViews.as_view()),
    path("alunos/<student_id>/cursos", StudentCustomCourseViews.as_view()),
    path("alunos/adicionar-curso/<student_id>/<course_id>", StudentCustomViews.as_view())
]