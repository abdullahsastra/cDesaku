from django.urls import path
from letterc import views

urlpatterns = [
    path('', views.baruIndex, name='baruIndex'),
    path('create', views.createIndex, name='createIndex'),
    path('update', views.updateIndex, name='updateIndex'),
    path('hapus', views.deleteIndex, name='deleteIndex'),
    path('baca', views.readIndex, name='readIndex'),
    path('isiupdate', views.isiIndex, name='isiIndex'),
    path('login', views.loginIndex, name='loginIndex'),
]
