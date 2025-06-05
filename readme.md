Project

Dockerize a JS app

## Tasks

1. Create a basic iteration from 0 - 10
2. Run the project through terminal using node
3. Make a dockerfile and explain the steps
4. Make/Build an image
5. Delete the image
6. Make an image with name and tag
7. Make sure the image is created
8. Run the image using container name
9. Delete the container using terminal

### Task 1. Create a basic iteration from 0 - 10

Basic iteration app:

```js
for (let i = 0; i < 10; i++) {
  console.log("Iteration number: " + i);
}
```

### Task 2. Run the project through terminal using node

Syntax:

> node <entry-point>

Example

> node app.js

### Task 3. Make a dockerfile and explain the steps

Step 1: Create a file named 'Dockerfile'

Step 2: Write the instructions

```docker
# Add dependency
FROM node:22

# Create a directory inside container where the app will be.
# In my case it is '/app'
WORKDIR /app

# Copy everything from current to '/app' directory
# First dot represent the '/app' directory
# Second dot represent the current directory
COPY . .

# Which command will be execute after start the container
CMD [ "node", "app.js" ]
```

Run the image:

> docker run ubuntu

Show all containers:

> docker ps -a

### Task 4. Make/Build an image

> docker build -t <image-name>

> docker build -t iteration-app .

### Task 5. Delete the image

> docker image rm <image-name>

> docker image rm iteration-app

### Task 6. Make an image with name and tag

> docker build -t <image-name>:<tag-name>

> docker build -t iteration-app:v1 .

### Task 7. Make sure the image is created

> docker images

### Task 8. Run the image using container name

> docker run -it --name <container-name> <image-name>

> docker run -it --name iteration-app iteration-app

### Task 9. Delete the container using terminal

> docker container stop <container-id-or-name>

> docker container stop iteration-app

Thank you.
