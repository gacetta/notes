# what is devOps

development operation - the combination of cultural philosophies, practices, and tools that increases an organization's ability to deliver applications and services at high velocity.

Engineers typically work for the entire lifetime of a cycle

it's a workflow

`agile`

## Devops Stages

infinity loop

Plan -> Code -> Build -> Test
^ V
^ V
Monitor <- Operate <- Deploy <- Release

## DevOps Ecosystem

Cloud - AWS (EB, EC2, RDS, IAM)

---

CI/CD - docker hub / github / CI/CD tool (github actions, jenkins, etc.)

---

Development - where the coding happens

## Why Containers - THE PROBLEM

While developing, each dev might be using different versions of libraries, runtime environments, databases, etc.

## DOCKER

docker is a tool designed to make it easier to create, test, and deploy apps using containers

containers allow a dev to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package.

Before we can really comprehend containers, we need to first understand Virtual Machines

## Virtual machines

At first - there wer just `servers` - hardware (CPU, RAM, and Disk Storage) that ran an OS

However, applications would only use a fraction of the servers resources.

Lets _virtualize_ our servers, by apportioning these resources across any number of Virtual Machines. Each VM has its own operating system and isolated environment. The VMs on a particular hardware server are controlled by a `hypervisor`.

EACH VM ALSO REQUIRES ITS OWN OPERATING SYSTEM. All of this is managed by a hypervisor running on the host machine.

## Containers

containers provide isolated environments in which to run our applications that contain our specific versions of binaries, libraries, etc. BUT DO NOT REQUIRE THEIR OWN OPERATING SYSTEM. The can run on a shared (Linux) OS. All this is managed by the Docker process running on the host machine

`kernal` - hardware things. I/O, interation between software and hardware.

`parent image` -

## images

`images` are read only templates for containers. These images can be kept in a repository and shared freely between devs on a team, across different testing and staging platforms, and of course, in production.

If everyone in an application's ecosystem is using a container instantiated from the same image, they're all guaranteed to be using the same depenedencies

### image layers

A docker image consists of multipler **read-only layers**

In most cases the first layer of the Docker image is known as the `parent image`. The foundation for all the layers after it!

Where do these parent images come from? A container image library called `DockerHub`. (just like we have github to store code, we have `dockerHub` to store images)

## how do we create an image?

To define a docker image, we create a text file called `Dockerfile`, where we'll provide the details about our image and execute it with `docker build`.

Lets say we want to build our application on top of node version 10.15 -- all we need to add onto that layer is start off our Dockerfile with the FROM keyword...

```
FROM node:10.15
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN rpm install
COPY . /usr/src/app
CMD node index.js
EXPOSE 3000
```

Docker File --'docker build'--> image --'docker run'--> container
"class" "new"

## Changes

Our app is running in a container - what happens if I want to make changes to the code?

## Union File System

- if the running container modifies an existing file, the file is copied out of the underlying read-only layer and into the top0-most read-write layer where the changes are applied.

- the version in the read=write layer hides the underlying file, but does not destroy it it still exists in the underlying layer

- when a container is destroyed, the altered code is destroyed as well and changes are lost

# volumes

volumes are docker's mechanizsm for sharing adn persisting data beyond the life of a container

simply, volumes are directoreis (or files) that are outside of the default union file system and exist as normal directores and files on the host file-system

## docker-compose

containers are runtime environments. you usually run only a single main process in one Docker container. So basically, one container provides one service in your project. Therefore it's not unusual to have multiple containers running different processes that rely on each other.

rather than manually coordinating the creation of these containers at run time (there may be many of them in a complex system) we can use docker-composer....`YAML`

`YAML` - "YAML Ain't Markup Language" and is a human-readable structured data format that is used throughout the industry for configuration files. Using simple syntax like indentation and dashes, our docker-compose files are comprised of YAML `dictionaries` and arrays

```
version: "3"
services:
  test:
    image: codesmithllc/csps-dependencies
    container_name: "csps-test"
    ports:
```

`dictionaries` are like objects
if you have dashes, it's like array

```
services:
  test:
   -image: codesmithllc/csps-dependencies
   -container_name: "csps-test"
   -ports:
```

## Docker Hub

`docker hub` - a central repository for collaboratively sharing images. Like GitHub for images.
