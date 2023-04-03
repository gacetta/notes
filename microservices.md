Tech Talk = 10-13 min. 2-3 min for questions
start slide: https://docs.google.com/presentation/d/1Vul7e1Yntt5nSLQgNgxNuf8eeU4xVRvxA5oKICBrmSc/edit
MLA generator: https://www.mybib.com/tools/mla-citation-generator

to add:
https://www.youtube.com/watch?v=Eyhvbx_3TkQ
https://www.techtarget.com/searchapparchitecture/definition/microservices
https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith
https://www.wired.com/2015/09/google-2-billion-lines-codeand-one-place/
https://www.kambu.pl/blog/companies-that-migrated-from-monolith-to-microservices/
https://www.divante.com/blog/10-companies-that-implemented-the-microservice-architecture-and-paved-the-way-for-others
https://program-ace.com/blog/microservices-vs-monolith/
https://dev.to/karanpratapsingh/system-design-monoliths-and-microservices-24jn
https://www.slideshare.net/gjuljo/microservices-architectures-become-a-unicorn-like-netflix-twitter-and-hailo
https://builtin.com/software-engineering-perspectives/monolithic-application
https://dzone.com/articles/microservice-architecture-learn-build-and-deploy-a
https://www.edureka.co/blog/what-is-microservices/
https://www.tektonlabs.com/from-monolith-to-microservices-when-and-why-to-migrate/

SLIDE SHOW: https://www.canva.com/design/DAFevNPlyBI/5KdAHkynbVNSu6XFZ8cTsA/edit?utm_content=DAFevNPlyBI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

Works Cited:
Delaney, Jeff. “Kubernetes Explained in 100 Seconds.” Www.youtube.com, 24 Sept. 2020, www.youtube.com/watch?v=PziYflu8cB8.freeCodeCamp / Software Engineering Daily. “What Are Microservices?” Www.youtube.com, 15 May 2015, www.youtube.com/watch?v=j3XufmvEMiM.Richardson, Chris. “Microservices.io.” Microservices.io, Chris Richardson, 2017, microservices.io/.

# microservices (or microservice architecture)

microservices architecture is a system design pattern for organizing computer systems into isolated services that can scale with demand.

WHAT:
This architectural style structures an application as a group of services that are:
1. independently deployable - 
2. loosely coupled
3. organized around business capabilities
4. owned by a small team

This architecture helps the development and delivery of large, complex applications rapidly, frequently, reliably and with maintainability.

WHY:

## Creation:
Software developer and author Martin Fowler is credited with promoting the idea of breaking down services in a service-oriented architecture (SOA) into microservices.

## How they work
Application broken down into services.  Each service runs a unique process and usually manages its own DB.  A service can generate alerts, log data, support UIs, handle auth, among other tasks

Decentralized approach to building software.  If one service isn't functioning as intended, say the auth process has an issue, devs can trace the problem to the specific service to test, restart, patch and redeploy.  Other services can remain operational.

## MS PROS
More popular than ever before thanks to the cloud, containerization and hyperconnected systems.
- each service can use an independent language and/or set of tools
- less dev time / parallel development - 
- scale quickly / easy
- reused across projects
- improved fault isolation - if something breaks, the app doesn't crash
- fast & less resource-intensive to update, deploy and load balance
- can be deployed in relatively small teams since each service is easier to understand / maintain
- work well with containers

## MS CONS
- potential for TOO much granularity
- extra effort designing communication between systems / complex network functionality
- more complex testing
- latency during heavy use (more calls over the network)
- additional management and control
- comprehensive security

## When to use:
### Monolith - 
To put it simply, monolith is a great choice for projects of small or medium scale, which need to be built quickly and do not require great expertise

- Single-page apps
- Text-focused and informational websites
- MVPs (minimum viable products)
- Projects with small teams
- Time-limited projects
Such as: enterprise websites, programs with limited functionality

### Microservices
In contrast, microservices are meant for building applications large in scope and complex in functionality

- Complex and scalable apps
- Cross-platform software
- Data-heavy apps
- Projects with a big team
Such as: streaming apps, online games, telemed services

## characteristics of microservices architecture
- Unique. Design and deploy services to accomplish a specific function or address a specific requirement.
-Decentralized. Ideally services have few if any dependencies, although loose coupling requires frequent and  extensive communication.
-Resilient. Design services for maximum fault tolerance. A single service failure shouldn't disable an entire application.
-Use APIs. A microservices architecture relies heavily on APIs and API gateways to facilitate communication.
-Data separation. Ideally, each service accesses its own database or storage volume.


## What is a monolith?

A `monolith` is the old model for many companies. It refers to a big single `monolithic` codebase

- server would be maintained on premises
- as traffic increases, they would add more instances of the monolith

PROS:

- centralizes codebase so it is one place
- engineers can easily step through any part of the code which is beneficial when debugging
- user requests to a monolith do not have to make many calls across a network, reducing the chance of network failures

_note_ most software companies have their code in a monolith today.

## Challenges and why Microservices?

As monoliths get big, problems start to occur:

- centralizing code leads to couplings that are hard to break up
- if a program is TOO big, it's impossible to run on a typical machine

In early 2000, companies began breaking up their applications into `services`.
Instead of scaling the monolith application, individual parts of the application under load could be scaled as needed:

Login / Auth Buy Products Return Service
4x computers 3x comps 1x comps

## Operating System Virtualization

OS Virtualization made service oriented architecture more economical.

- One server could host multiple Virtual OS System instances
- Each of those instances could run a service

Engineers had to manage many more layers of infrastructure:

1. virtual machine host (such as Xen)
2. hypervisor layer
3. the hardware itself

Failures became more complex
Debugging got harder

## AWS - EC2

In 2006, AWS launched Elastic Compute Cloud (EC2) which allowed users to rent virtual machines in amazon's data centers. This is akin to Amazon taking care failures at the hardware level AND the hypervisor level. This allows programmers to focus on the virtual machines, themselves where their application code is running.

Using an entire virtual machine to run a smallpiece of application code is wasteful.

## Containers

Containers allow a virtual machine to divided into isolated file system regions.
A container can be as large as the entire Virtual Machine, or as small as your smallest service, hence the term `micro services`.

(@2:43)
`microservices` run in containers
which run on a virtual machine
which runs on a hypervisor
which runs on a server
which sits in a rack
which sits in a data center
which is part of a networks of data centers called...`the cloud`

## Kubernetes

Containerized architecture led to a new problem:
Companies now had thousands of microservices running on the cloud without a simple  way to manage them.

`kubernetes` - OSP from google, provides engineers with a centralized system for managing containers. Kubernetes makes those services portable allowing both Google cloud and AWS to host kubernetes clusters.

(fireship)
`kubernetes` - a tool for automating and managing containerized workloads in the cloud

Imagine an orchestra. Each musician = docker container. Conductor (kubernetes) manages containers.

Stock Trading app - market closed, low activity. market open, huge surge in load. kubernetes can manage cluster. If a service fails, it is auto replaced.

# RYLAN
1. What are they?  Diagram
2. What are they? - Monolithic, explanation / examples.  PROS / CONS.   (what is CI/CD release process takes longer)
introduce how scaling a monolithic application works
3. Microservices - what is it.  pros.
4. Cons


# Tight / Loose Coupling



## Monolith:
A traditional model for a software program.  A unified unit that is self-contained and independent from other applications.

Term - massive / glacial

Who:
(Who made the transition)
_Amazon_ - founded 1994.  in 2001, the website was a multi-tiered monolith.  Engineers knew it was not a scalable architecture, but updating it was very complex.  After much code review found many units with a single purpose: a service that rendered the "buy" button, a service to calculate the correct tax during checkout was handled by a single-purpose function.  These were handled by different teams and, when they had to be updated and merged, required extra work, build time and redundant test.

Developers were instructed to only create functions that could communicate externally through their own web service APIs.  This resulted in a decoupled system, where these functions could be updated independently.  

These new initiatives began to form the idea of cloud computing.

_Netflix_ - one of the first high profile companies to sucecssfully migrate from monolith to cloud-based microservices.  In 2009 they faced major scaling issues as their infrastructure couldn't keep up with the demand for their streaming platform.  They decided to migrate structure from private data centers to a public cloud, and replace its monolithic architecture with microservices architecture.  At the time, the term "microservices" didn't really exist and structure wasn't really well know.  

Started with backend processes to test.  Large batch processing that wouldn't affect user-side (movie encoding).  After that success, moved to user interface services...  *The process took 2 years to break down from monolith to microservices from 2009-2011* First backend services(2009), then customer-facing (2010), then data source/backups/records (2011)

Now they have 1000+ microserves that manage and support different aspects of the platform, and engineers deploy code frequently, sometimes thousands of times a day

_eBay_ According to the director of engineering in 2011, eCommerce stored 9 petabytes of data.  Every day, they were handling 75 billion DB calls, 4 billion page views, and 250 billion search queries.  This was the year they introduced microservices to their platform.  This was actually the 3rd shift.
1995-1998: initially monolith in Perl and C++
2001: layered and rewritten in Java, with some APIs
2005: reorganized in services in an internal cloud (still Java)
"The immense amount of data meant complexity was the major hurdle. To sum it up, 44 million lines of code, hundreds of thousands of classes, and tens of thousands of packages."
2011: transition to microservices. modular system with reusable building blocks helped cope with complexity of code.  different componants had different levels of intricacy - separate teams could work on each component

(remained monolithic)
_Google_.  Nearly 2 billion lines of code.  In comparison, Microsoft Windows, one of the most complex software tools ever built for a single computer that has been around since the 1980s, has around 50 million lines.  They have their own tools to manage: Piper is its own "version control system" like gitHub.
_facebook_. monolithic PHP backend.
_instagram_. 1 million + lines of python that are updated and applied daily.

## PROS
convenient early in a project's life for ease of code mgmt, cognitive overhead and deployment.
- easy deployment - one executable file = easy
- development - easier to develop code when it's in one unified codebase
- performance - in centralized code base/repo, one API can accomplish what would take multiple APIs with microservices
- simplified testing - in a single, centralized unit, E2E testing can be performed faster and more easily 
- easy debugging - all the code in one place = easier to follow and trace a bug
- improved safety

## CONS
As with the case of Netflix, monolithic applications can be quite effective until they grow too large and scaling becomes a challenge. Making a small change in a single function requires compiling and testing the entire platform, which goes against the agile approach today’s developers favor. 

- slower development speed - large application makes development more complex and slower
- scalability - can't scale independent components, only the entire app
- reliability - if any part breaks, it can all break
- barrier to evolving tech - any changes to framework or language affects the entire application resulting in expensive & time-consuming change process
- limited flexibility - constrained by technologies already used in the monolith AKA only one language
- slow refactor
- deployment - a small change to the monolithic app requires redeployment of the ENTIRE monolith


## TERMS
`CI/CD pipeline`
`CI` - Continuous Integration
`CD` - Continuous Delivery

How many requests a second?



Presentation:
Intro
Table of contents
Brief "What is Microservices"
  - 
Introduce Monolith
  - concept of one codebase
  - show how scaling can be a drawback
Monolith PROS
Monolith CONS
A system on fire -> 

INTRODUCE decoupling via Amazon

_Amazon_ - in 2001, the Amazon encountered this exact problem.  Their codebase was a multi-tiered monolith and engineers knew it was not a scalable architecture.    

They realized there were different parts of thier application that servered a single purporse.  There was a service that rendered the "buy" button, or a service to calculate the correct tax during checkout.  These were single-purpose functions that were handled by different teams and, when they had to be updated and merged, required extra work, build time and redundant testing.

After that realization, developers were instructed to only create functions that could communicate externally through their own web service APIs.  This resulted in a decoupled system, where these functions could be updated independently.  

These new initiatives began to form the idea of microservices and cloud computing.

MS Scaling

# NEW SLIDE - MS - in VM

Virtual Machines made this design pattern more convenient and economical.  Rather than using multiple servers for multiple services, a single server could host multiple virtual machine instances and each virtual machine could run a service.

More complexity - more things to fail - more things to connect - more things to manage
# NEW SLIDE ADD LIST
1. The service which is hosted on the virtual machine
2. The hypervisor which manages and monitors the virtual machines
3. The server hardware itself


# NEW SLIDE ADD AWS CLOUD
AWS introduced EC2 in 2006 and took care of 2. 3..  This allowed developers to focus on their application code while amazon handled the rest.  It was a big step for making microservices architecture more accessible

# NEW SLIDE - VM space allotment / containers
Using an entire virtual machine to run a small piece of application code is wasteful and costly.  Containers, such as docker, can be used to divide the virtual machine into isolated partitions to hold multiple services.  A container can fill the entire VM or as small as a micro service... see what i did there?

# NEW SLIDE - PROS
More popular than ever before thanks to the cloud, containerization and hyperconnected systems.

## MS CONS
- potential for TOO much granularity
- extra effort designing communication between systems / complex network functionality
- more complex testing
- latency during heavy use (more calls over the network)
- additional management and control
- comprehensive security
# NEW SLIDE - CONS
# NEW SLIDE - CONS w/ complex architecture

# NEW SLIDE Managing Microservices and Containers
We've broken up our monolith codebase by decoupling interdependant functionality, isolating individual services and running them on a virtual machine.  Now that we've containerized them, we've created another problem.  We can have 1000s of containers running at once.  How do we manage all these individual parts?  

Kubernetes is the solution.  Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.  

Think of all the containers as musicians in the orchestra.  Think of kubernetes as the conductor


# NEW SLIDE
To recap:

`microservices` run in containers
which run on a virtual machine
which runs on a hypervisor
which runs on a server
which sits in a rack
which sits in a data center
which is part of a networks of data centers called...`the cloud`


Works Cited “10 Companies That Paved the Way for Developing Microservices | Divante.” Divante.com, 2019, www.divante.com/blog/10-companies-that-implemented-the-microservice-architecture-and-paved-the-way-for-others.Delaney, Jeff. “Kubernetes Explained in 100 Seconds.” Www.youtube.com, 24 Sept. 2020, www.youtube.com/watch?v=PziYflu8cB8.“Four Companies That Migrated from Monolith to Microservices.” Kambu, 21 Apr. 2021, www.kambu.pl/blog/companies-that-migrated-from-monolith-to-microservices/.freeCodeCamp / Software Engineering Daily. “What Are Microservices?” Www.youtube.com, 15 May 2015, www.youtube.com/watch?v=j3XufmvEMiM.gjuljo. Microservices Architectures: Become a Unicorn like Netflix, Twitter A…. 31 Mar. 2016, www.slideshare.net/gjuljo/microservices-architectures-become-a-unicorn-like-netflix-twitter-and-hailo.“Microservice Architecture — Learn, Build, and Deploy Applications - DZone Microservices.” Dzone.com, dzone.com/articles/microservice-architecture-learn-build-and-deploy-a.Richardson, Chris. “Microservices.io.” Microservices.io, Chris Richardson, 2017, microservices.io/.Sahiti Kappagantula. “What Is Microservices – Introduction to Microservice Architecture.” Edureka, Edureka, 21 Feb. 2018, www.edureka.co/blog/what-is-microservices/.