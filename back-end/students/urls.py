from django.urls import path
from .views import StudentsSimpleViews, StudentComplexViews

urlpatterns = [
    path('alunos/', StudentsSimpleViews.as_view()),
    path("alunos/<student_id>", StudentComplexViews.as_view())
]