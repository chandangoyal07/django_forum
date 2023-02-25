from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import Post
from .forms import PostForm

def index(request):
    #  If the method is POST
    if request.method == 'POST':
       form = PostForm(request.POST)
       #If the form is valid
       if form.is_valid():
          #if yes ,save it  
          form.save()

          #Redirected to home
          return HttpResponseRedirect('/')
       else:
          #if no, show error  
          return HttpResponseRedirect(form.errors.as_json())

    # Get all posts, limit = 20
    posts = Post.objects.all().order_by('-created_at')[:20]  #.order_by('-createdat') added 18nov

    #show
    return render(request, 'posts.html',
                   {'posts': posts})

def delete(request, post_id):
   post = Post.objects.get(id=post_id)
   post.delete()
   return HttpResponseRedirect('/')
   # output= 'POST_ID is ' + str(post_id)
   # return HttpResponse(output)

   