# Generated by Django 3.2.9 on 2021-12-01 01:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userprofile', '0004_alter_userprofile_displaypic'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='birthdate',
            field=models.DateField(blank=True, null=True),
        ),
    ]
