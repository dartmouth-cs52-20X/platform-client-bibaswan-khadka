# Added Authentication to Platfrom 

## What Worked Well
The concept behind the authentication was simple to understand. We are using a server and hashes to validate the user. We obvsiously want to handle all of this server side as doing it client side would be dangerous and insecure. I found it preety easy to grasp the idea of salt and hases and authenticating with them. Also writing the actions, reducers and controllers while time consuming was nothing new so I was able to do it without much trouble. 

## What Didn't
I ran into a lot of problems when implementing the concept. Since the client and api have so many components and moving parts, I would forget to changes inputs and fields in some component, then have to do some digging with console logs to find where the error was occuring. This took a lot of time. Also the documentation for bcrypt was not very good so I got confused about which methods to use as there were async and sync versions of the same methods. 

# Redux Platform

For redux platform I used redux and the CRUD api to create a blog/image viewer application that allows you to add, view and search through images and blogs. The platform functions by making api calls through redux actions and uses reducers to set redux state with the post information, which is then used. The platform also uses bootstrap for some styling.  
[deployed url]( http://bibaswankhadka-cs52-reduxplatform.surge.sh/ )

## What Worked Well
I found redux to be very intuitive and fairly easy to understand. The concept of actions, reducers and global state were really easy to understand. Even though it can take some time to set up redux is definately better for larger projects. With just simple react I would have to remember where everything was coming from, but with redux everything was simplified. Since this lab was kind of similar to the react notes lab I was able to use some of the concepts from that lab on this one. 

## What Didn't
I used bootstrap for some styling and there was definately a learning curve to it. I had to go through a lot of trial and error to get bootstrap working. My update function was also being slow. Turns out it was because I was updating onChange. Somebody else had the same problem and Tim wrote on slack that this api is slower than firebase so updating onChange might be slow and to instead update at the end on a click. I did that and it worked perfectly, but I did have to rewrite some code. 

## Extra Credit
1.  I made it something other than a blog. I created a image slide viewer. I used bootstrap to create a slider that can be operated with on screen arrows and the keyboard. It still has all the CRUD features. The slider displays images in a carousel.  
<img src="readme_imgs/slider.png" width="80%" heigh="80%">
2.  I also handle axios errors and show error on screen. I created a new reducer and new error actions and error states. So now if you try to navigate to a post, edit or delete a post that does not exist it will show error, post does not exist.  
<img src="readme_imgs/axioserror.png" width="80%" heigh="80%">
3.  I also added input validation. If you try to create a post without a Title it wont let you, and will ask you to input a title.  
<img src="readme_imgs/inputvalidation.png" width="80%" heigh="80%">
4.  I also added a search button to filter posts. I used a plugin called fuse.js to search the posts both by tag and title. Once you input your query and hit search it will show all matching items in order in column view. 
<img src="readme_imgs/search.png" width="80%" heigh="80%">
