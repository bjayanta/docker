Project

Dockerize a Node.js app

## Tasks

1. Create a "Hello World" app with "/", "/about" & "/error" routes
2. Run the project locally
3. Make a dockerfile and explain the steps
4. Ignore the "node_modules" folder & "package-lock.json" files
5. Make/Build an image with name and tag
6. Make sure the image is created
7. Run the image using container name
8. Delete the container using terminal
9. Delete the image

### Task 1. Create a basic iteration from 0 - 10

- Install express using npm
- Create "/", "/about" & "/error" routes
- Throw an error from "/error" route
- Create a error handler middleware
- Set port and listen

### Task 2. Run the project locally

Syntax:

> node `<entry-point>`

Example

> node app.js

### Task 3. Make a dockerfile and explain the steps

Step 1: Create a file named 'Dockerfile'

Step 2: Write the instructions

```docker
# Add dependency
FROM node:22-alpine3.21

# Create a directory inside container where the app will be.
# In my case it is '/app'
WORKDIR /app

# Copy everything from current to '/app' directory
# First dot represent the '/app' directory
# Second dot represent the current directory
COPY . .

# Install dependencies
RUN npm install

# The app inside the container. Need to expose a port.
# Because, in future we have to connect the app with host machine from container
EXPOSE 5000

# Which command will be execute after start the container
CMD [ "node", "app.js" ]
```

### Task 4. Ignore the "node_modules" folder & "package-lock.json" files

Step 1: Just create a ".dockerignore" file

Step 2: Write down the list of folder and file inside the ".dockerignore"

In my case it is:

node_modules
package-lock.json

### Task 5. Make/Build an image with name and tag

> docker build -t `<image-name>`:`<tag-name>`

> docker build -t iteration-app:v1 .

### Task 6. Make sure the image is created

> docker images

### Task 7. Run the image using container name

> docker run -it --name `<container-name>` `<image-name>`

> docker run -it --name iteration-app iteration-app

### Task 8. Delete the container using terminal

### Task 9. Delete the image

> docker image rm `<image-name>`

> docker image rm iteration-app

> docker container stop `<container-id-or-name>`

> docker container stop iteration-app

Thank you.
