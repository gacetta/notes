# Class Syntax

Class syntax was introduced to JS in ES6.  It is syntax known as syntactical sugar.  It has the same functionality as other syntax, it just makes writing it a bit nicer.

## Declaring the Class

    class ClassName {

    }

## Constructor

    class ClassName {
      constructor(arg1, arg2, arg3) {
        this.arg1 = codeGoesHere
        this.arg2 = codeGoesHere
        this.arg3 = codeGoesHere
      }
    }

**NOTE:** this looks very similar to the shorthand syntax for creating a method in an object:

    {
      myMethod() {    //instead of myMethod: function() {}

      }
    }

## Methods

  class ClassName {
    constructor(arg1, arg2, arg3) {
      this.arg1 = codeGoesHere
      this.arg2 = codeGoesHere
      this.arg3 = codeGoesHere
    }  // <------ NOTE: no comma, semi colon, etc. here unlike an object
    newMethod() {

    }
  }

## Sub-Classes

a `sub-class` will inherit properties of it's parent class.  If you have a class of person, sub-class of employee would make sense.  It could inherit properties from person, since it is a type of person, and could have unique properties that only employees have, such as job-title, say.

### extends

the keyword `extends` is used to connect a sub-class to a parent class and inherit its properties:

    class ClassName {
      constructor(arg1, arg2, arg3) {
        this.arg1 = codeGoesHere
        this.arg2 = codeGoesHere
        this.arg3 = codeGoesHere
      }
    }

    class SubClassName extends ClassName {

    }

In the above case, SubClassName has the exact same properties as ClassName.

### super constructor

to declare a constructor function for a sub class, the subclass must call the constructor function of the parent class.  This is known as the super constructor:

    class ClassName {
      constructor(arg1, arg2, arg3) {
        this.arg1 = codeGoesHere
        this.arg2 = codeGoesHere
        this.arg3 = codeGoesHere
      }
    }

    class SubClassName extends ClassName {
      constructor(arg1, arg2, arg4, arg3) {
        super(arg1, arg2, arg3);    // this is a call to the ClassName constructor
        this.arg4 = arg4;           // remaining SubClassName constructor code here
      }
    }

### overwriting properties and methods

a subclass will inherit properties and methods from its parent class if they aren't re-declared in the subclass.  These properties and methods can be overwritten to behave differently for different subclasses.  For example, if you have a person class and an employee class, you might have a method `getBio()` that prints information about that person (or employee).  `getBio()` for a person might be casual and talk about your likes and hobbies, where as `getBio()` for an employee might want to be more formal and mention your job title and years at the company.  This behavior can be redeclared in the subclass:

class ClassName {
      constructor(arg1, arg2, arg3) {
        this.arg1 = codeGoesHere
        this.arg2 = codeGoesHere
        this.arg3 = codeGoesHere
      }
      classMethod() {         // this method will run for the Class
        codeGoesHere
      }
    }

    class SubClassName extends ClassName {
      constructor(arg1, arg2, arg4, arg3) {
        super(arg1, arg2, arg3);
        this.arg4 = arg4;
      }
      classMethod() {         // this method runs different code 
                              for the SubClass. Without this declaration, 
                              the method from ClassName will be inherited
        
        updatedCodeGoesHere   
      }
    }
