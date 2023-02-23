# MongoDB: Non-relational database

MongoDB is a document-oriented DB.  No relational.
1. Everything is stored as `BSON` (Binary JSON)
2. Instead of tables, you have collections of documents.
  a. Each document is like a JS object
  b. You have the ability to store array and object data types
  c. You have the ability to nest arbitrarily deep. *PROCEED WITH CAUTION*
3. Built with an emphasis on speed
4. Not equipped to handle complex relationships as SQL

_BONUS_ access to the `Date()` datatype.

Each entry has its own properties.  Potentially the same bit of information might be re-written many times.  Look-up might be faster, but space allocation is less efficient

## MongoDB Document Store
1. Ability to store array of items, called `embedding` and is an alternative to foreign-key relationship
2. Flexibility in field properties and nesting, just like JSON.  Great for unstructured/nested data

## Mongoose
MongoDB is often used with Mongoose, which provides structure to raw MongoDB.
`ODM - object document mapper`

Server  -->  Interface  -->   Database
NodeJS       Mongoose         MongoDB

- we use Mongoose to create Schema definitions and types:
  - String, Number, Date, Array, ObjectId, Mixed(any type)...
  - Custom types: allows validation, defaults, pre/post middleware
- create a schema instance, then create a Model to perform queries

### Model
*SYNTAX:*
  const mongoose = require('mongoose');

  const personSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: Number,
    quote: String,
    data: Mixed
  })

  const Person = mongoose.model('Person', personSchema);
                                    ^             ^
                              name of the Model   |
                                                schema

### query on model
- after creating the model, perform queries on it to create/read/update/delete items in a DB

`.find()` takes two arguments: `what to find`, `callback`
either callback-based or promise-based (async/await)

*SYNTAX:*
  Person.find({
    name: 'Greg'
  }, (err, people) => {
    // do stuff...
  })

  Person.find({
    name: {$in: ['Anna', 'Bob', 'Clara']}
  }, (err, people) => {
    // do stuff...
  })

  Person.find({
    name: {$in: ['Anna', 'Bob', 'Clara']}
  }).then(people => {
    // do stuff...
  }).catch(err => {
    // handle error...
  })

`$in`

------------------
## CRUD in MongoDB
------------------
### Read
- find array of items matching the conditions object

// promise style
`Model.find(conditions, [projection], [options]).then(...);`

`conditions` - what you're searching for: `{name: 'John', age: 30}`
`projection(OPTIONAL)` - whatfields of the docs we want returned to match those conditions: `email age`
`options(OPTIONAL)` - specify options like `sort` results, `limit` number of results, `skip` for pagination (ex: skip first 100 results)

*SYNTAX:*

  Person.find({ name: 'Tim', country: 'Canada' },
  'name age',
  { sort: {age: -1}, limit: 10, skip: 20},
  (err, people) => {}) // callback.  People is always an array (possibly empty)

*NOTE:* in docs, Model.find, model refers to your Model.  Don't use it for syntax

#### Model.find vs Model.findOne
- find a single item that matches the conditions object
- `.find()` will always return an array
- `.findOne()` willl return a single element, the first element that matches

### Create Operations
Two syntax options:

1. Model.prototype
*SYNTAX:*
  const myCar = new Car({make: 'Honda', model: 'Civic', year: 2015, color: 'blue'});

  myCar.save((err, car) => {
    // do stuff...
  })

2. Model.create

  // shortcut for creating Car model instance and saving
  Car.create({{make: 'Honda', model: 'Civic', year: 2015, color: 'blue'},
    (err, car) => {
    // do stuff...
  })

  // this allows us to create multiple instances
  Person.create([{name: 'Kim', age: 28}, {name: 'Tim', age: 26}],
    (err, people) => {
    // do stuff...
  })

### Delete Operations
Which to use?  Think of what we need returned:
**NOTE - deletes first match it finds, so use _id**

- to find (obtain in the callback) a single document and delete it, use 
`Model.findOneAndDelete(conditions, [options], callback)`

- To delete a **single** document without obtaining it for use in a callback, use
`Model.deleteOne(conditions, [options], callback)`

- To delete **multiple** documents without obtaining them for use in a callback,
`Model.remove(conditions, [options], callback)`
or
`Model.deleteMany(conditions, [options], callback)`

*SYNTAX:*
  Car.findOneAndDelete({license: 'P2236917'},
    (err, car) => {
    // car will be the just deleted car document
    // showing make, model, color, license
  })

  Car.deleteOne({license: 'P2235891},
    (err) => {
    // no car object obtained as a callback after the deletion
  })

### Update Operations
To find (obtain in the callback) a single document and update it use:
`Model.findOneAndUpdate(conditions, update, [options], callback)`
**NOTE** this gives us the pre-updated object for use in the callback

To update a single document without obtaining it for use in a callback, use:
`Model.updateOne(conditions, update, [options], callback)`

To update many documents without obtaining them for use in a callback, use:
`Model.updateMany(conditions, update, [options], callback)`

#### useful options for update operations
`Model.findOneAndUpdate(conditions, update, [options], callback)`

*WARNING*: by default, the `doc` obtained in the `callback` will be the found object, NOT the updated object.  To fix this, specify `new: true` in options object.

Helpful: if you want to upsert a document if not found, specify `upsert: true`.  Upsert (update and insert) means update a document if it does exist, and create a document if it doesn't exist.

UPSERT Example:
- take a shippers collection with three fields: the shipper name, shipper address, and the number of shipments.
- If an existing shipper just completed a shipment: incremenet the shipment number.  if a new shipper (not in the database) just completed a shipment: insert the shipper.

*SYNTAX:*
  Shippers.findOneAndUpdate(
    {name: 'LA warehouse'},
    {$inc: {shipments: 1}}, // shipments doesn't exist, so $inc creates/sets it to 1
    {upsert: true, new: true},
    (err, shipper) => {
      // this shipper object has had its number of shipments incremeneted
    }
  )

## MongoDB vs SQL
MongoDB:
- SQL strength is guaranteed referential integrity, which is critical for datasets.  You DON'T want to run complex application logic to fix consistency issues
- MongoDB's performance can be used for certain parts of an application, but is unwieldy as a main database for highly relational information.
- That being said, there are real life cases for MongoDB.
  - for E-commerce catalogs with inherently flexible schema e.g. a toy store where a toy has different kinds of parts
  - For info where we solely want to: given the one, find the many (tv shows example)

### combining SQL and MongoDB
SQL has _id column and details column.  Details can be Foreign-keys to NoSQL
1. query SQL
2. SQL returns to server
3. query NoSQL

# Database Approach Lecture
SQL                                                 NoSQL
- relational                                        - non-relational
- use Structured Query Language and                 - Have dynamic schemas for unstructured data
have a predefined schema                            - horizontally scalable
- Vertically scalable                               - document, key-value, graph
- Table-based: better for                             or wide-column stores
multi-row transactions                              - better for unstructured data
- ACID-compliant

ACID:
Atomicity - "all or nothing"
Consistency - 
Isolation
Durability

`req.query`
`res.locals`

## NoSQL Architecture: MongoDB
Database - the container that holds a set of collections
`_id` - Mongo

Mongoose is Object Document Mapper (ODM)
- enforces a schema to documents
- manage relationships between collections
- translates documents in MongoDB to objects we can use in JS

**NOTE:** mongoDB will lowercase and pluralize a collection name

---------------
# Data Modeling
---------------
1. Identify Entities (tables)
2. Identify Relationships
3. Identify Attributes (columns names)
4. Assign Keys - primary keys, foreign keys
5. Normalization

## Identify Entities
- People
- Things
- Events
- Locations

In a food delivery service:
People - customers
Things - menu
Events - order
Locations - addresses

## Identify Relationships
`barker's notation` - one to many, many to many, etc.
`cardinality` - shows how much of one side of the relationship belongs to how much of the other side of the relationship

Redundant routes - 
Many-to-many relationships are not directly possible in a relational data model.  You must employ an 'associative entity' or join table.

## Identify Attributes

## Derived Data
derived data can be calculated from other data you have already saved.
`composite key` - use two attributes together to be a primary key

## foreign keys - referential integrity 
the foreign key is created in the `child table` and references a unique attribute )often the primary key) of the `parent table`.  Referential integrity unsures that you cannot delete or update a parent record that would leave a child record orphaned.

FK created int he child table must refer to a unique row in the parent table.  This means that the referenced column must be a unique value.  Thus, primary keys are often used as the referenced columns for foreign keys

## normalization
comes in three forms (must go in this order - cannot jump to the third step):
1. The first form state:
There may be no repeating groups of columns in an entity.
So, anytime you wish you could use an array - create a new table and establish a link via a one to many relationship

2. All attributes of an entity should be fully dependent on the whole Primary Key

3. All attributes need to be directly dependent on the primary key, and NOT ON OTHER ATTRIBUTES.
Ex: cityand state can be determined by zip code.  We could extract city and state data into another table with zip as the Primary Key.

### Can normalization get out of hand?
There are times when normalization isn't worth the effort.  
There are times when you'll intentionally denormalize data