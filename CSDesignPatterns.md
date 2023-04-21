# Design Patterns

## What?
1. Design patterns are generally repeatable *object-oriented* solutions to commonly occurring software problems.  
2. Patterns are about *reusable* designs and interactions of objects.
3. Each pattern has a name that becomes part of a vocabulary when discussing design solutions

## Why?
1. Design patterns enable you to write *readable, maintainable, reusable* code.
2. Design patterns can be applied across different programming languages.
3. Framworks (frontend and backend) are built around particular design patterns
4. Can be implemented across a spectrum of scope
- Code <----------> System Architecture

## What makes a design pattern 'good'?
Design patterns are heavily vetted by the dev community before acceptance as a convention.
- solves a particular *problem*
- does not have a obvious *solution*.
- describes a *proven* concept.

### Related Terminology
*Proto-pattern*: a young, emergent pattern that may have worth, but hasn't been distilled into a widely agreed upon standard
*Anti-pattern*: a comonly used pattern that has shown time and again to be problematic.  A way not to do something.

## Three categories
Creational pattern: How I make the pasta from scratch
Structural pattern: How I plate my pasta dish
Behavioural pattern: How I will eat the pasta
*Creational*
Abstract Factory
Builder
Factory Method
Prototype
Singleton

*Structural*
Adapter
Bridge
Composite
Decorator
Facade
Flyweight
Proxy

*Behavioral*
Chain of Responsibility
Command
Interpreter
Iterator
Mediator
Memento
Observer
State
Strategy
Template Method
Visitor

### Creational Patterns
#### Factory Pattern
At the heart of the creational design pattern is the Factory method.  Factory methods deal with the problem of creating objects with out having to directly use the exact class of the object.

Chair / Sofa / Coffee Table

Makes code:
- reusable, testable, and extensible

Extensions
Abstract Factory - creates an instance of several families of classes.  Provides an interface for creating families of related objects, without specifying concrete classes.

EXample: buttons for different OS systems.  

#### Singleton
The singleton pattern limits the number of instances of a particular class to just one and provides a global point of access to that instance.  This single instance is called the singleton.

EX: Flux / Redux

### Structural Patterns
#### Adapter Class
At the heart of the structural design pattern is the adapter class.  Adapters allow the interface of an existing class to be used as another interface.

Objects:
- *Decorator*: adds responsibilities to objects dynamically
- *Proxy*: an object representing another Object

#### Decorator
The decorator pattern extends (*decorates*) an object's behavior dynamically.  The ability to add new behavior is accomplished with an object which 'wraps itself' around another object.

The new behavior is added to individual objects, rather than an entire class.

##### Higher-Order Component
- A higher-order component is a function that takes a component and returns a new component.
- Whereas a component transform purpose into UI, a higher-order component transforms a component into another component.
- The HOC does not mutate the original component

EX: react-redux's connect()

The connect() method returns a wrapper functions (or higher order component) which decorates your component and returns a componentn with the injected props.

#### Proxy
The Proxy pattern provides a surrogate or placeholder object for another object and **controls access** to this other object.

### Behavioral Patterns
Behavioral design patterns identify communication patterhsn among objects and realize these patterns.

Objects:
- Mediator: defines simplified communication between classes.
- Observer: a way of notifying change to a number of classes

#### Mediator
A mediator sits between a group of objects and coordinaties theiir interactions.  It prevents tight coupling by keeping objects from refferring to each other directly.

EX: Message Brokers are used to mediate requests between various services in a large-scale distributed system.  They allow us to decouple our processes.

#### Observer
Pub / Sub pattern.  In the Observer pattern, multiple "observer" objects subscribe to one "subject" object and get notified when the subject's state changes

EX: redux store and the observer design pattern