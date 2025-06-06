Project

We need update our node app in realtime. It means if we change anything inside the app it should effect the container/image without creating new image.

Solution:

### Step 1: Create a simple express app

Install express

> npm install express

Add some routes

### Step 2: Install 'nodemon' globally

> npm install nodemon -g

### Step 3: Add script to package.json file

```json
// .....
"scripts": {
    // .....
    "dev": "nodemon app.js",
    // .....
},
// .....
```

NB. If you are a windows user use "nodemon -L app.js" instead of "nodemon app.js"

### Step 4: Set "gitignore" & "dockerignore"

Add "node_modules" & "package-lock.json" to ignore.

### Step 5: Set "Dockerfile" + Explain

```docker
# Add dependency
FROM node:22-alpine3.21

# Create a directory inside container where the app will be.
# In my case it is '/app'
WORKDIR /app

# Install nodemon globally to watch changes
RUN npm install nodemon -g

# Copy everything from current to '/app' directory
# First dot represent the '/app' directory
# Second dot represent the current directory
COPY . .

# Install dependencies
# It will be execute inside the container work directory
RUN npm install

# The app inside the container. Need to expose a port.
# Because, in future we have to connect the app with host machine from container
EXPOSE 5000

# Which command will be execute after start the container
CMD [ "npm", "run", "dev" ]
```

### Step 6: Create an image with name & version

> docker build -t basic-app:v1 .

### Step 7: Make sure the image is created

> docker images

### Step 8: Run the image with interactive mode, Set a container name & port. Add a volume, Add a condition that, container will be removed when the container stop

Syntax:

> docker run -it --name <container-name> -p <port-local>:<port-container> --rm -v <path-local>:<path-container> <image-name>:<tag-name>

Use case:

> docker run -it --name basic-app-container -p 5000:5000 --rm -v D:\Docker:/app basic-app:v1

Simplify:

> docker run -it --name basic-app-container -p 5000:5000 --rm -v "$(pwd):/app" basic-app:v1

Nb.

- `-it` flag use to open interactive mode.
- `--name` flag use to set a container name
- `-p` flag use to set a port.
- `--rm` flag use to remove container when it stop
- `-v` flag use to set a volume.

### Step 10: Make sure the container is running

> docker ps

### Step 11: Stop the container

> docker container stop basic-app-container
