# System Design

algo interview vs system design interview

Algo:
Interviewer: how does a candidate solve problems critically.

- clear output, expected outcome
- what are your small/focused constructing / building abilities?

System Design:
Interviewer: evaluate your skill in designing a system in its entirety

- can you think big picture
- birds eye view, think like an architect
- overall goals. how do we get there
- problems in the system? how would you solve them?

- how you think?
- what are your opinions?
- how do you communicate?
- are you somebody that takes into account the entire picture?
- scaling? latency? data solutions? WHY??

Interviewee:

- drive the conversation forward
- pro-active

## Two Steps

1. step by step through system design interview process
2. look at some tools available to us in system design

## Questions?

design instagram for us? Build twitter? Mockup uber.

## Step By Step

Broken into three things:

1. Scoping the problem - **don't make assumptions** ask clarifying questions to understand the constraints and use cases.

- interviewer might have different requirements that twitter as you know it.

2. Sketching up an abstract design - illustrating the building blocks of the system and the relationships between them.
3. Identifying and addressing the bottlenecks - by using the fundamental principles of scalable system design.

## Scope The Problem

### 1. Define your requirements

Never dive straight in. Start out by asking questions

- Who are our users?
- What are their needs?
- What is the exact scope of the problem we're solving?
- What are non-functional requirements?
- What are our stretch goals?

Design questions are mostly open-ended, and they don't have ONE correct answer, that's why clarifying ambiguities early in the interview becomes critical.

Candidates who spend enough time to clearly define the end goals of the system always have a better chance to be sucessful in the interview.

EX:

- How many total users do we expect? How many active users daily?
- Will users of our service be able to post tweets and follow other peopls?
- Should we also design to create and display user's timeline?
- Will tweets contain photos and videos?
- Are we focusing on backend only or are we developing front-end too?
- Will users be able to search tweets?
 
# 2. Get a rough estimate of scale

It's always a good idea to estimate the scale of the system you're going to design. This would also help later when you'll be focusing on scaling, partitioning, load balancing and caching

- What scale is expected from the system? Number of total users, number of daily active users, number of new tweets, how many followers per user on average, etc.
- How much storage would we need? We'll have different numbers if users can have photos and videos in their tweets
- What network bandwidth usage are we expecting? This would be crucial in deciding how we would manage traffic and balance load between servers.

From that information we can start making calculations.

- 1 bil total users
  -200 mill daily active users (DAU)
- 100 mill new tweets daily
- on avg each user follows 200 people

Calculate storage requirements: Lets say each tweet has 140 char and we need two bytes to store a character without compression. Let's assume we need 30 bytes to store metadata with each tweet (like ID, timestamp, user ID, etc.) Total storage we would need: 100M \* (280 + 30) bytes => 30GB/day

How many total tweet-views our system will generate? Let's assume on average a user visits their timeline two times a day and visits five other people's pages. On each page if a user sees 20 tweets, total tweet-views our system will generate:

200M DAU _ ((2 + 5) _ 20 tweets) => 28B/day

Bandwith estimate:
(28B \* 280 bytes) / 86400s of text => 93MB/s

Note: this kind of depth lends itself more to backend heavy roles. you don't have to go this deep determining impacts of scale, but you can and doing so illustrates a deeper, more mature understanding of system design.

## Sketch up an abstract design

### 3. Mock out a basic UI

This can be a very rough sketch.

Consider what will be required for your user(s) to complete a single transaction, from initiation to feedback. What UI elements are required?

**no more than 10 min on UI** - MVP requirements

### 4. Define your data model

- This is where the DB will be chosen, as well as block storage for things like photos and videos
- Defining the data model early will clarify how data will flow among differenc ccomponents of the system
- Later, it will guide towards data partitioning and management.

Entities

- Attributes

Normalization? - centralizing your data. Removing redundancies.

### 5. Define your APIs

Define what APIs are expected from the system. This would not only establish the exact contract expected from the system but would also ensure if you haven't gotten any requirements wrong.

### 6. High Level Dsign

Draw a block diagram with 5-6 boxes representing core components of your system

You should identify enough components that are needed to solve the actual problem from end-to-end

Think of this as sketching out your MVP

### 7. Detailed Design

Dig deeper into high level components. Think through the challenges presented for each one. You should be able to provide different approaches, their pros and cons and why you would choose one.

**LOOK AT THIS SLIDE**

## Identify and Address Bottlenecks

### 8. Identity and resolve bottlenecks

Try to discuss as many bottlenecks as possible and different approaches to mitigate them.

- Is there any single point of failure in our system? What are we doing to mitigate it?
- Do we have enough replicas of the data so that if we lose a few servers, we can still serve our users?
- Similarly, do we have enough copies of different services running, such that a few failures will not cause total system shutdown?

## Tools

Challenge: we need to handle many client connections and many request from those clients without overwhelming a single server

Answer: Load Balancers

- load balancing works to distribute load across multiple resources
- it also keeps track of the status of all the resources while distributing requests
- it can be utilized at various points through the system
- it can be achieve by "smart clients", "hardware", or hybrid "software" solutions

Challenge: we want to limit the number of times we're fetching data

Answer: caching

- load balancing helps you scale horizontally across and ever-increasing number of servers, but caching will enable you to make vastly better use of the resources you already have
- caches take advantage of a simple principle: recently requested data is likely to be requested again.
- They are used in almost every layer of computing: hardware, operating systems, web browsers, web applications and more.

## Cache Coherence

While caching is fantastic, it does require some maintenance for keeping cache coherent with the source of truth (e.g. database). If the data is modified in the database, it should be invalidated in the cache, if not, this can cause inconsistent application behaior.

Solving this probrlem is known as cache invalidation, there are two basic writing schemes that are used:

1.  Write-through cache: Under this scheme, data is written into the cache and the corresponding database at the same time.
2.  Write-back cache: data is written to the cache alone, and completion is immediately confirmed to the client. The write to the permanent storage is done later, after specified intervals or under certain conditions.

Challenge: We've got a distributed system and there are SO many messages going back and forth between servers on the network

Answer: Message Brokers (Queues)
Queues are used to effectively manage requests in a large-scale distributed system. They allow us to decouple our processes and distribute/throttle processing load.

## Databases

- relational dbs are structured and have predefined schemas
- non-relational databases are unstructured, distributed and have a dynamic schema

### Reasons to use relational:

you need to ensure ACID compliance.
Your data is structured and unchanging.

`Atomicity` - all or nothing transaction. It must go through all steps to be "successful". If it fails anywhere along the way, nothing is

`Consistency` - making sure all data in db adheres to what is outlined in schema

`Isolation` - only dealing with concurrent events.

`Durability` - fault tolerance. Redundancy. Mitigation against unforseen disastors

### Reasons for non-relational

- need to store large volumes of data that often require little to no structure.
- making the most of cloud computing and storage for horizontal scaling.
- NoSQL is useful for rapid development as it doesn't need to be prepped ahead of time.

### Sharding

Data partitioning (also known as sharding) is a technique to break up a big db into many smaller parts. It is the process of splitting up a DB/Table across multiple machines to improve the manageability, performance, availability and load balanacing of an application

Horizontal partitioning: splitting db up along ranges of data (zip codes less than 10000 are stroed in one instance while those abot are stored elsewhere)
Vertical partitioning: splitting across features (all image and video info is partitioned to one instance while user and follwer data is on another)

### Rundundancy and Replication

- Redundancy means duplication of critical data or services with the intention of increased reliability of the system
- Creating redundancy in a system can remove single points of failure and provide backups if needed in a crisis.
