from django.db import models

# Create your models here. to manipulate we have meta
class Post(models.Model):
    class Meta(object):
        db_table= 'post'
#   this holds database
    name = models.CharField(
        'Name', blank=False, null=False, max_length=14, db_index=True, default='Anonymous'
    )

    body = models.CharField(
        'Body', blank=True, null=True, max_length=140, db_index=True
    )
    number = models.IntegerField(
        'nunber', default=0, blank=True
    )

    created_at = models.DateTimeField(
        'Created DateTime', blank=True, auto_now_add=True
    )


    def __str__(self):
        self.name
        