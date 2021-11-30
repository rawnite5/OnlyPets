# Generated by Django 3.2.9 on 2021-11-14 20:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserRegistration',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='auth.user')),
                ('firstname', models.CharField(max_length=32)),
                ('lastname', models.CharField(blank=True, max_length=32, null=True)),
                ('email', models.EmailField(max_length=254)),
                ('username', models.CharField(max_length=32)),
                ('password1', models.CharField(max_length=32)),
                ('password2', models.CharField(max_length=32)),
                ('birthday', models.DateField()),
            ],
        ),
    ]