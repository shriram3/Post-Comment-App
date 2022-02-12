# Adding kubernetes to post

- Deployment acts as a level before pods and it manages the request into the pods
- Adding Deployment template for Post service

# Common commanads

- Creating a Pod/Deployment

````
kubectl apply -f <file-name>.yaml

````

- Get running pods

````
kubectl get pods
````
 - Restart deployment

````
kubectl rollback restart deployment <depl-name>
````

- Most commands are similar to docker syntax

# Push images to docker hub

````
docker push <docker-id>/<img-name>
````

- If access is denied, try logging in docker before pushing

````
docker login
````
