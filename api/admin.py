from django.contrib import admin
from django.contrib.admin import ModelAdmin

from api.forms import MovieForm
from api.models import Rating, Movie


class MovieAdmin(ModelAdmin):
    form = MovieForm

    class Meta:
        model = Movie


admin.site.register(Movie, MovieAdmin)
admin.site.register(Rating)
