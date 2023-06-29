# Databases

## SQL vs NoSQL
SQL (Structured Query Language)
- data stored in `tables`
- groups of data referred to as `row` or `record`
- individual items: `column`

NoSQL (Not Only SQL)
- data stored in `collection`
- groups of data referred to as `document`
- individual items: `field`

-------------
## NoSQL
-------------

### MongoDB
NoSQL database.

config file lives in /usr/local/etc/mongod.conf (on Intel processors)
create local DB in root folder `~/mongodb-data`

GUI - Studio 3T

create connection
insertOne
insertMany

#### GUIDs in MongoDB
GUID or `globalally unique identifier` is a 128-bit text string that represents an ID.  Designed to be unique using an algorithm rather than rely on a server to tell what the next unique value is.  This allows mongoDB to scale well in a distributed system.


