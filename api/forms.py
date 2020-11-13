from django import forms
from django.forms import ModelForm
from tinymce.widgets import TinyMCE


class MovieForm(ModelForm):
    description = forms.CharField(widget=TinyMCE(attrs={'cols': 80, 'rows': 30}))
