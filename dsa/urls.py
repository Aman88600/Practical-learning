from django.urls import path
from . import views
urlpatterns = [
    path('', views.hello_world, name="hello_world"),
    path('selection_sort', views.selection_sort,name="selection_sor") # first is the path, second is the name if the fuction in the views.py and 3rd is the name of the urlpattern itself
    ]