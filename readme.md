Image

## What is docker image?

A Docker container is a lightweight, standalone, and executable package of software that includes everything needed to run an application, such as code, libraries, and dependencies. It's a running instance of a Docker image, providing a consistent environment for the application to run regardless of the underlying infrastructure.

How Docker Containers Work:

- Build an Image: Developers create a Docker image using a Dockerfile, which specifies the base operating system, application code, and dependencies.

- Run a Container: The Docker image is then used to create a Docker container, which is a running instance of the image.

- Application Execution: The container provides a self-contained environment for the application to run, including its own file system, processes, and network.

## Commands

Show all containers:

> docker ps -a

NB. -a stands for all.

Show all running containers:

> docker ps

Stop a running container:

> docker container stop `<container-id>`

> docker container stop `<container-name>`

Delete/Remove a container:

> docker container rm `<container-id>`

> docker container rm `<container-name>`

Force delete/remove a container:

> docker container rm `<container-id>` -f

> docker container rm `<container-name>` -f

Delete all containers:

> docker container prune

Thank you.
