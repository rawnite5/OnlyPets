# Generated by Django 3.2.9 on 2021-11-11 02:58

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('auth', '0012_alter_user_first_name_max_length'),
        ('home', '0003_postcollection_likes'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='puser', serialize=False, to='auth.user')),
                ('firstname', models.CharField(max_length=25)),
                ('lastname', models.CharField(blank=True, max_length=25, null=True)),
                ('bio', models.TextField(blank=True, max_length=300, null=True)),
                ('displaypic', models.ImageField(blank=True, upload_to='uploads/profile_pictures')),
                ('friends', models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL)),
                ('post_id', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='ppost', to='home.postcollection')),
            ],
        ),
    ]
