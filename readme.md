Image

## What is docker image?

A Docker image is a lightweight, standalone, executable package of software that contains everything needed to run an application.

Here's a more detailed breakdown:

- Read-only template: A Docker image is a read-only file that contains all the necessary instructions and files to run a container.

- Built from a Dockerfile: Docker images are created by running instructions from a Dockerfile.

- Container blueprint: Docker images act as a blueprint for creating Docker containers.

- Immutable: Once an image is created, it cannot be modified; you need to build a new image for changes.

- Layered structure: Docker images are built in layers, where each layer represents a change to the file system.

- Reusable and portable: Docker images can be easily shared and deployed across different systems.

## Commands

Pull/Download an image:

> docker pull `<image-name>`:`<tag>`

> docker pull node:lts-alpine

Show all images:

> docker images

Run an image:

> docker run `<image-name>`:`<tag>`

> docker run node:lts-alpine

Run an image in interactive mode:

> docker run -it `<image-name>`:`<tag>`

> docker run -it node:lts-alpine

Show all containers:

> docker ps -a

NB. -a stands for all.

Show all running containers:

> docker ps

Stop a running container:

> docker stop `<container-id>`

> docker stop `<container-name>`

Remove a container:

> docker rm `<container-id>`

> docker rm `<container-name>`

Thank you.
