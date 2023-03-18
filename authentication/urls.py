from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('authentication.urls')),
    path('auth/', include('social_django.urls', namespace='social')),
    path('login/', views.user_login, name='login'),
    path('register/', views.register, name='register'),
    path('auth/', include('authentication.urls')),
    path('', views.index, name='index'),
    path('logout/', views.user_logout, name='logout'),
    path('profile/', views.profile, name='profile'),
]
