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

## summary

`containerization` allow us to keep our entire ecosystem in sync across our team and infrastructure

`images` are templates for containers that can be shared from a central repository

`volumes` allow us to mount directores on our host filesystem in the container so we can share files and persist data

`docker hub` is a central repo for images

we can automate spinning up containers with `docker-compose`

# The Cloud

AWS - 34% of cloud market
Azure - 21%
Google Cloud - 11%

Cloud infrastructure service revenues in the 12 months ending sept 2022 - $217 Billion

## EC2 - Elastic Compute Cloud

EC2 is the workhosre of AWS. This service provides basic 'servers' where you can deploy and run your apps

This is where you'll be running your node server.

### Features

`Instances` - virtual computing environments
`Amazon Machine Images (AMIs)` - preconfigured templates for your instances
`Instance types` - various configurations of CPU, memory, storage, and networking capacity for your instances
`Regions & Availability Zones` - Multiple physical locations for your resources, such as EC2 instances
`Key Pairs` - provide secure login info for your instances with SSH (Secure Shell)
`Security groups` - Firewall that enables you to specify the protocols, ports, and IP ranges that can reach your instances

## Amazon Machine Images & Instances

`AMI` - a template that contains a software configuration
From an AMI you launch an EC2 instance. You can launch multiple instances of an AMI.

Instances can be run on various hardware configurations for CPU, RAM, and network capacity options. These configurations are called `instance types`

## Storage Options

`instance store` - temporary storage that is deleted if the EC2 instance is terminated
`S3` - simple storage service

- useful for hosting website images and videos, data analytics, and both mobile and web apps
- can be accessed from anywhere on the internet
  `EBS` - Elastic Block Store
- Useful for backups and other low-latency persistent storage needs.
- Can be backed up to S3
- Limited to one EC2 instance
  `EFS` - Elastic File System
- Best used for large quantities of data, such as large analytic workloads
- can be used across many EC2 instances

## Regions and Availability Zones

Each `region` is completely independent. Resources are not replicated across regions unless you do so specifically.

When you view your resources on the AWS console, you'll only see the resources tied to the region you've specified.

Each Availability Zone is isolated, but the Availability Zones in a region are connected through low-latency links

If you distribute your instances across multiple Availability Zones and one instance fails, you can design your application so that an instance in another Availability Zone can handle requests.

# Scaling / fault tolerance

Amazon EC2 is hosted in multiple locations world-wide.

## Access Control: Security Groups

A `security group` acts as a virtual firewall that controls the traffic for one of more instances.

You can add rules to each security group that allow traffic to or from its associated instances.

When determining whether to allow traffic to reach an instance, AWS evaluates all the rules from all the security groups that are associated with that instance.

## Logging in: SSH with Key Pairs

EC2 makes use of public-key cryptography which uses a `public key` to encrypt a piece of data, such as a password, then the recipient uses the `private key` to decrypt the data. The public and private keys are known as a `key pair`

To log in to your instance, you must create a key pair, specify the name of the key pair when you launch the instance, and provide the private key when you connect to the instance.

_Amazon EC2 doesn't keep a copy of your private key, if you lose a private key there's no way to get it back_

## Elastic Beanstalk

elastic beanstalk can be thought of as a 'wizard'

elastic beanstalk, you can qwuickly deploy and manage apps in the AWS Cloud without worrying about the infrastructure that runs those applications. You can simply configure it, upload your app, and EB automatically handles the details of `capacity provisioning`, `load balancing`, `scaling`, and `application health monitoring`

it works around the concepts of applications. Each application contains one or more environments. Each environment is a configured collection of AWS resources that enable that environment's version of the application.

Commonly, you'll have a staging environment alongside a production environment.

It provides a GUI Dashboard for you to tweak config settings, examine log files and more.

## auto scaling

When setting up an environment in Elastic Beanstalk, you'll have the option to build it for 'high availability'

This configures a `load balancer` into your infrastructure. The load balancer will distribute requests across n EC2 instances.

As traffic increases, more EC2 instances will get spun up. As traffic decreases, the number of instances will decrease to a configured minimum.

## S3 - Simple Storage Service

S3 provides cheap `static file storage` that can be accessed from internal AWS resources or optionally anywhere on the internet.

S3, data is stored as `objects` in `buckets` that can bew accessed using a `key`.

## RDS - Relational Database Service

## DB Backups and High Availability

RDS makes it simple to schedule ongoing backups of your data. In case of data corruption, these backups can restore your database back to the most recent snapshot.

You can also set up a replica of your database in a separate Availability Zone (AZ) to act as a failover option in the event of a localized disaster.

## ECR - Elastic Container Registry

Amazon Eleastic Container Registry (ECR) is a fully-managed container registry that makes it weasy for devs to store, manage, and deploy container images.

## IAM - Identity & Access Manager

Amazon's tool to control account level security. This allows you to control who can access what in your AWS account.

---

# CI/CD - continuous integration / continuous deployment

---

Continuous Integration

The process of automating the build and testing of code every time a team member commits changes to version control.

CI emerged as a best practice because software devs often work in isolation, and then they need to integrate their changes with the rest of the team's code base.

Continuous Deployment

A strategy for sofwtware releases wherein any pull request that passes the automated testing (CI) phase and is subsequently merged into the main branch is then automatically released into the production environment, making changes that are visible to the software's users.

TOOLS:
TeamCity
Travis CI
Jenkins
GitHub Actions
Bamboo
circleci
GitLab

## GitHub Actions

GitHub's CI/CD service - is widely used both in industry and open source projects.

- We can use GitHub to run customized `workflows` each time a specified `event` occurs (e.g. pull request, merge)

- A workflow is made up of one or more `jobs` which can run either concurrently or in sequence

- GitHub hosts VMs (called `runners`) dedicated to running Actions jobs

- Free for all public repos, limited (2000 free min per month) for private repos.
