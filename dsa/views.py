from django.shortcuts import render

# Create your views here.
def hello_world(request):
    return render(request, "dsa/index.html")

def selection_sort(request):
    return render(request, "dsa/selection_sort.html")