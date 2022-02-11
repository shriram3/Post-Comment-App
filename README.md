# Sample-React-App
Sample react and git app

Its a simple Post and comments app which gets user post and adds comments for that


# Client
React App which manages post and comments

# Post
 - Post listening in port 4000
 - CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API


# Comments
 - Comments listening in port 4001
 - CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API

# Event-Bus
 - Handles the all the events triggered by post and comment services
 - For implementing Async communication
 
# Moderator
 - This service moderates the comments.
 - The output of these service will be processed by comment service before communicating to other services.

 # Docker Commands

-  Building the Docker file with the tag

```
docker build -t <Docker-id>/<Service-name> .
```
-  Run 

```
docker run <Docker-id>/<Service-name>
```
