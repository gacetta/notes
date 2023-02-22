--------------------
# Databases
--------------------

## SQL - Structured Query Language
`relational databases`

## NoSQL - Non Structured Query Language
`non-relational database`

## DB Basics
A way to store data
- Simplest DBs: RAM, file system, localStorage
- Stores data for a lifetime longer than a session
- usually has some software with it, a database management system (DBMS).

Some DBMS examples: MySQL, PostgreSQL, Oracle, MongoDB, etc.

DEVELOPMENT WORKFLOW:
1. one machine is client / server / DB
  - convenient for one person
2. one machine is client/server and one machine is DB
  - conveninent if you have multiple people accessing the same data
  - cloud is actually a warehouse of dedicated DB servers with the sole purpose of housing your data reliably.  "A bank for data"

PRODUCTION WORKFLOW:
everything is separate: client, server and DB are each their own machine(s)

### Types of Databases
Many types of DBs:
- Tables (SQL) - `relational`
- Documents (NoSQL) - `non-relational`
- Key-Value - `non-relational` since it does not use SQL


## Table Stores
1. A relational Satabase (SQL) is composed of tables.
2. A table has columns and rows
- `columns` don't change (they are defined in a schema)
- `rows` are instances of new records.  They are added continuously.

**NOTE:** you can't have a table inside of a table.  Cut, you can reference other tables via IDs.

Table:
- has a unique name
- each column has a name to id them (`fields`)
  - an `_id` column (`primary key` or `pk`) should exist.  not setup by default, so we need to create this field
- each row (`record`) contains data
- datatype must be primitive

Relational DB
- Organization is based on the relational model of data, as proposed by E.F. Codd in 1970
- `model` is defined as one or more tables, consisting of columns and rows
- `columns` known as `attributes` or `fields`
- `rows` known as `records` or `tuples`.  Referenced by unique ID
- SQL language used consistently across databases

### PostgreSQL or PSQL
1. a relational DB system with emphasis on extensibility and standards-compliance
2. developed in 1980s at Cal Berkeley, released as open-source with SQL support in mid 90s
3. ACID compliant, supporting industry best practices

"stable, proven database server with a focus on standards compliance."


Relational DBs are time-tested and proven.

SQL, PostgreSQL, SQLite, Oracle, MicrosoftSQL

## ACID - Four properties fo DB Reliability
Properties of DB transactions intended to guarantee validity even in the event of errors, power failures, etc.

`A-tomicity`: requires that a transaction be 'all or nothing'.  If one part fails, the whole transaction fails and db state is unchanged.

`C-onsistency`: any data written to the db must be valid according to implemented rules (constraints, cascades, triggers, etc.)

`I-solation`: concurrency control.  Concurrent execution of transactions result in a state that would be obtained if they were run one after the other.

`D-urability`: once a transaction is committed, it will remain so, even if there is a crash or power loss.

## Document Stores (NoSQL)
1. Very close to JSON (JS object)
2. Instead of tables, you have a `collections` of `documents`  
  a. each document is like a JS object  
  b. You have the ability to *nest* arbitrarily deep.
3. Built with an emphasis on *speed.*

"Nesting in a document store has pros and cons..."

MongoDB example:

  {
    "customerid": "fc986e48ca6"
    "customer":
    {
    "firstname": "Pramod",
    "lastname": "Sadalage",
    "company": "ThoughtWorks",
    "likes": [ "Biking", "Photography" ]
    }
    "billingaddress":
    { "state": "AK",
        "city": "DILLINGHAM",
        "type": "R"
      }
  }

### NoSQL
  1. NoSQL DBs are increasingly used in big data and real-time web apps.
  2. Motivations include simplicity of design, simpler horizontal scaling of clusters of machines, and finer control over availability
  3. Generally considered "faster" and "more flexible"

  Growth of Facebook, Google, and Amazon triggered popularity of naming and usage in last decade.

### MongoDB
1. from hu`mongo`us, is a free open-source cross-platform document-oriented DB
2. uses JSON like storage

FEATURES:
1. `ad hoc queries`: Mongo supports field, range queries, and regular expression matches (also in SQL)
2. `indexing`: Any field in a Mongo document can be indexed (also SQL)
3. `replication`: mongo stores data as a replica set of two or more copies.  Keeps a background
4. `load balancing`: Mongo scales horizontally using sharding.  Horizontal scaling means spreading the load out on multiple machines rather than one big machine.
5. `aggregation`: MapReduce can be used for batch processing of data and aggregation operations. (Also SQL).

## Key-Value Store
Keys and values without nesting.
Incredibly fast!
Examples: Redis, Riak, LocalStorage

### Redis
1. open-source `data structure server`.
2. Most popular key-value solution
3. Redis holds entire dataset in RAM memory, and syncs back to the disc every 2 seconds
4. fast because data is memcached

"Redis is a good choice if you want a highly scalable data store shared by multiple processes or multiple applications."

_BEST PRACTICE_ probably not a great choice as your main DB, though it can be used

## Popularity
1. Oracle       ----
2. MySQL            |
3. MS SQL Server    |-- ALL SQL
4. PostgresSQL  ----
5. MongoDB
6. Redis

## Schemas
A way to enforce the structure in your data store.
A map of what your data looks like
Where you define data's attributes:
- In SQL, it defines the columns in your tables and the rules that data in rows must follow
- In NoSQL, it's the keys to documents and their data types.

**NOTE:** schema is required in SQL, but optional in NoSQL

Key-Value: does not have a schema
SQL: schema strictly enfored.
Document: doesn't normally enforce schema

### schema example:
MongoDB Schema:

var appSchema = new Schema({
  info: Array,
  education: Array,
  passion: String,
  projects: String,
  experience: String,
  fullName: { type: String, required: true },   // type of string that is required.
  age: Number,
  status: { type: String, default: 'applied' },   // type of string with a default value
  attempts: { type: Number, default: 0 },
  archive: {type: Boolean, default: false },
  created_at: { type: Date, default: Date.now }
  updated_at: { type: Date, default: Date.now }
})

SQL Schema:

CREATE TABLE "app" {
  "_id" integer NOT NULL,         // not null prevents writing of an empty field
  "info_id" integer NOT NULL,
  "education_id" integer NOT NULL,
  "passion" varchar NOT NULL,
  "projects" varchar NOT NULL,
  "experience" varchar NOT NULL,
  "full_name" varchar NOT NULL,
  "age" integer NOT NULL,
  "status" varchar NOT NULL DEFAULT "applied",
  "attempts" integers NOT NULL DEFAULT 0,
  "archive" boolean NOT NULL DEFAULT false,
  "created_at" timestamp with timezone DEFAULT CURRENT_TIMESTAMP,
}

## Data Models
data commonly references

### relationships
you have relationships between your models:

`One to One`:   Person -+----+ Set of Fingerprints
`One to Many`:  Customer -+---< Purchase
`Many to Many`: Books >-----< Authors

barker diagram?

### foreign Keys
In relational DBs, the linking of model to model happens by establishing relationships through the creation of foreign keys.

Often, ID fields are used for this, but any field is eligible

`primary key` contains a `foreign key` that links to another table



### document store: Nesting vs referencing
`nesting`: the _fastest_ approach (one query, get data), but this throws away referential integrity.  By duplicating the nested schema again and again, it's going to be hard to edit the schemas.

`referenced`: a _more robust_ approach.  But it's slower because it has to make more queries.  you keep freferential integrity.

If priority is speed - then MongoDB is probably good option. 
If priority is referential integrity, PostgreSQL may be better.

## SECURITY VULNERABILITIES
MASS ASSIGNMENT - a computer vulnerability where an active record pattern is abused to modify data that should be private.
SOLUTION: 
- `Denylist`: fields that cannot be mass assigned.
- `Allowlist`: fields that can be mass assigned

## How to choose?
"If it's gone, does it matter?"

-------------------------------
# SQL Structured Query Language
-------------------------------
`ER Diagrams` Entity Relationship Diagrams

`primary key` - ids that 
`foreign key` - ids that point to another table

## SQL Syntax
Designed to be entered on a console and results would display back to a screen.

Four fundamental operations:
`C-reate` - INSERT
`R-ead` - SELECT
DELETE
UPDATE

`=` (`===` in JS) checks if values are equal or not, if yes then condi
`!=` (`!==`)
`<>` (`!==`)
`>` (`>`)
`<` (`<`)
`AND` (`&&`)
`OR` (`||`)
`NOT` (`!`)

`static` parts of a query should be uppercase for clarity:
`SELECT * FROM table_name`

### Read (SELECT)
To read records from table, use SELECT:

  SELECT column-names
  FROM table-name
  WHERE condition
  ORDER BY sort-order

Example:

  `SELECT name, city FROM customer WHERE state = 'NY' ORDER BY name;`

### Wildcards with LIKE keyword
How many customers do I have whose first name begins with 'E'?
`SELECT * FROM customer WHERE name LIKE 'E%';`

How many customers do I have whose first name is four letters long and begins with 'E'?
`SELECT * FROM customer WHERE name LIKE 'E___%';`

How many customers do I have whose first name begin with anything other than 'E'?
`SELECT * FROM customer WHERE name NOT LIKE 'E%';`

### Create (INSERT)
To add record(s) to a table use INSERT:

  INSERT INTO table-name (column-names)
  VALUES (column-values)

Example:

  INSERT INTO customer (name, address, city, state, zip_code)
  VALUES ('Sadie Olsen', '514 Magnolia St', 'Orlando', 'FL', '32806')

**NOTE** order of INSERT INTO and VALUES data must be the same order.  Order of data in table doesn't matter.

### Update (UPDATE)
To update records in table, use UPDATE:

  UPDATE table-name
  SET column-name = column-value
  WHERE condition

Example:

  `UPDATE item_order SET shipper_id = 3, delivered = true WHERE _id = 8;`

### Delete (DELETE)
To delete record from table, use DELETE:

DELETE FROM table-name
WHERE condition

Example:
DELETE FROM customer
WHERE

**NOTE:** you MUST include a `WHERE` clause or everything on that table will be deleted

## Aggregate Functions
min(column)
max(column)
sum(column)
average(column)
count(column)
count(*)

Sum of the price of all unshipped orders?
`SELECT sum(price) FROM item_order WHERE delivered = false;`

Which states, other than Georgia, have more than 2 customers?
`SELECT state, count(*) FROM customer WHERE state <> 'GA' GROUP BY state HAVING count(*) > 2;`

## AS
`AS` allows us to create a custom name for query response (Like import default `as`)

how many customers do we have?
`SELECT count(*) AS cust_count FROM customer;`

## Sub queries - dynamic
Select the least expensive item that has been ordered
`SELECT description FROM item_order WHERE price = (SELECT min(price) FROM item_order);`

## JOIN
`joins` are commands used to combine data from two or more tables based on relation between them.

The relationship between then uses columns from each tables and relational operators like `=`,`<`,`>`

## INNER JOIN
`inner join` returns rows where the value of the specified column in left 

Show the customer name along with the items they've purchased:

  SELECT customer.name, item_order.description
  FROM customer INNER JOIN item_order
  ON item_order.customer_id = customer._id;
            For.Key              Prim.Key

## LEFT OUTER JOIN (and RIGHT OUTER JOIN)
`left outer join` produces a complete set of records from the LH table with matching records in right hand table.  If there is no match, the right side will contain null.

Show us every customer name and id.  If they're purchased items, show details as well

SELECT c._id, c.name, i.*                         // referencing alias declared on next line
FROM customer c LEFT OUTER JOIN item_order i      // customer c says "name customer table c"
ON i.customer_id = c._id;

## FULL OUTER JOIN

## Using a many to many relationship table
SELECT s.name, m.method
FROM shipper s
INNER JOIN shipper_shipping_method sm ON s._id = sm.shipper_id
INNER JOIN shipping_method m ON m._id = sm.shuipping_method_id;

## SQL Injection Attacks
An SQL injection attacker sends the server a string containing a malicious SQL query.  The server unwittingly runs the query, which alters the database in a maliscious way

The attack is accomplished by placing a meta character into a SQL command
`Robert'); DROP TABLE Students:--`

TO PREVENT:
1. Scrub inputs
a. escape characters that have special meaning in SQL
b. pattern-check/balidate input to see
2. use an ORM which scrubs it for you

## paramaterized queries
LOOK IT UP