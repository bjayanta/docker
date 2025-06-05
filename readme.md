Project

Pull Ubuntu

## Tasks

1. Download ubuntu image
2. Run the image
3. Create a directory inside the ubuntu os
4. Create a file inside the directory
5. Stop the container using terminal

### Task 1. Download ubuntu image

Get a Ubuntu LTS image:

> docker pull ubuntu

Run the image:

> docker run ubuntu

Show all containers:

> docker ps -a

### Task 2. Run the image

With interactive mode:

> docker run -it ubuntu

### Task 3. Create a directory inside the ubuntu os

First show all directory and files

> ls

Create a directory:

> mkdir <directory-name>

Make sure the directory is created or not:

> ls

### Task 4. Create a file inside the directory

> cd <directory-name>

> touch <file-name>

### Task 5. Stop the container using terminal

> docker container stop <container-id-or-name>

Thank you.
