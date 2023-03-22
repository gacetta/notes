# GraphQL
Created by facebook in 2012, open sourced in 2015.  Adopted by GitHub, Pinterest, Intuit, Coursera, 

- A query language for APIs (compared to SQL which is for querying databases)
- Ask for what you need and get exactly that.
- An alternative to RESTful, which often results in over and under-fetching.
- Describes what's possible with a type system (like a contract between FE and BE).  REST can do something like this with OpenAPI (formally known as swaggar).
- Available for many different languages

## Server-Side
In `server.js`:


DEFINE SCHEMA TYPE (for client requests):
`GraphQL Schema Definition Language` is used to define Schema typeDefs

Create graphQL schema.  Query type contains all possible queries that can be made by client when calling server

  import { gql } from 'apollo-server'
  const typeDefs = gql`
    type Query {                      // like declaring Class
      greeting: String                // fields are key:val pairs
    }
  `;

`gql` - tag function - parses template literal into graphQL schema objects

DEFINE RESOLVER (for handling responses / for resolving requests):

  const resolvers = {
    Query: {
      greeting: () => 'Hello world!',     // called resolver function
    }
  }

SETUP SERVER w/Apollo Server

  import { ApolloServer } from 'apollo-server'
  const server = new ApolloServer({ typeDefs, resolvers });   // provide typeDefs and resolvers
  const { url } = await server.listen({ port: 9000 });        // listen returns promise<ServerInfo> with url property
  console.log(`Server running at ${url}`);

## Making Queries

Queries are written in `Query Language` - the QL in graphQL

request:

  query {
    greeting
  }

*NOTE* query is optional above.  Starting with `{` is the same as `query {`

response: 

  {
    "data": {
      "greeting": "Hello world!"
    }
  }

GraphQL request differs from REST - the method is always POST, even when trying to GET data

## Custom Type Definitions

type Query {
  jobs: [Job!]
}

type Job {
  id: ID!
  title: String!
  description: String
}

`!` designates required field
*NOTE* fields not separated by commas
*NOTE* it's good practice when declaring arrays to inclue `!` as you don't want a null value in an array

## Resolver
in graphQL, a missing property will always be `null`

a resolver function function can be async and return a promise, which is useful when the data needs to be fetched by calling a DB or another API

each resolver function automatically receives a few arguments passed by the graphQL framework.  The first parameter is the parentObject.  The second parameter is the arguments

  ParentObject: {
    subField: (parentObject, root) => {...}
  }


  import { Job } from './db.js'

  export const resolvers = {
    Query: {
      jobs: () => Job.findAll(),
    },

    Job: {
      company: (job, ) => {
        return {
          id: 'fake',
          name: 'Fake Inc.',
        }
      }
    }
  }

## front end requests
library: graphql-request

function to sent query:

  import { request, gql } from 'graphql-request'

  const GRAPHQL_URL = 'http://localhost:9000/graphql';

  export async function getJobs() {
    const query = gql`
      query {
        jobs {
          id
          title
          company {
            name
          }
        }
      }
    `;
    const { jobs } = await request(GRAPHQL_URL, query);
    return jobs;
  }

component function for calling query function
  
  const [jobs, setJobs] = useState([]);
    
    useEffect(() => {
      console.log('mounted');
      getJobs().then(setJobs);
    }, [])

## Query Arguments
in a graphql schema, we can pass arguments to a query field by putting parenthesis after a field name as we do with functions in JS.  Inside the `()` we can provide the arg name followed by its type.

EXAMPLE: 

  type Query {
    job(id: ID!): Job
    jobs: [Job!]
  }

RESOLVER FUNCTION FOR THE JOB FIELD IN THE QUERY TYPE:

  export const resolvers = {
    Query: {
      job: (_root, { id }) => Job.findById(id),
      jobs: () => Job.findAll(),
    },
  }

CREATING QUERY WITH ID:

  query {
    job(id: "soP9m8MdKeQX_ZXZOCSaL") {
      title
      company {
        name
      }
    }
  }

*NOTE* double quotes only in graphQL (like JSON)

## Query Variables
we can pass arguments into queries using query variables

1. we can name our queries, such as JobQuery:
2. we can assign parameters to our named queries, like functions
3. variables start with `$` and need to include type
ex: `JobQuery ($id: ID!) {...}`
query JobQuery($id)  {
  job(id: $id) {
    title
    id
    company {
      id
      name
    }
    description
  }
}

*NOTE* query name is optional, but best practice to give it a name

### How do we pass variables to our query on client side?
request function (from graphql-request) takes a third argument called `variables`

  export async function getJob(id) {
    const query = gql`
      query JobQuery($id: ID!)  {
        job(id: $id) {
          title
          id
          company {
            id
            name
          }
          description
        }
      }
    `;

    const variables = { id };
    const { job } = await request(GRAPHQL_URL, query, variables);
    return job;
  }

## Mutations
while queries are typically named after nouns, mutations are named with verbs.  Example: query might be `job` whereas mutation might be `createJob`

mutation types are defined in `schema.graphql` just like queries.  however, they should be defined in the Mutation type instead of the Query type:

  type Query {
    company(id: ID!): Company
    job(id: ID!): Job
    jobs: [Job!]
  }

  type Mutation {
    createJob(title: String!, companyId: ID!, description: String): Job 
  }

  type Company {
    id: ID!
    name: String!
    description: String
    jobs: [Job!]
  }

  type Job {
    id: ID!
    company: Company!
    title: String!
    description: String
  }

- the fields in `Mutation` will take arguments so we must define them and their types.  
- These fields should correspond to the matching schema type, i.e. `createJob` will require all the fields (except for id which will be generated by db).  

NEXT we update our resolvers, pairing all the parameters

  Mutation: {
      createJob: (_root, { title, companyId, description }) => {
        return Job.create({ title, companyId, description });
      }
    },

## Invoking a Mutation
STATIC
ex static mutation request:

  mutation {
    createJob(
      title: "Job 1",
      companyId: "sadlfkj3nk459sdf",
      description: "test",
    ) {
      id
      name
    }
  }

DYNAMIC
This approach would work but gets messy quickly:

  mutation CreateJobMutation($title: String!, $companyId: ID!, $description: String) {
    createJob(
      title: $title,
      companyId: $companyId,
      description: $description,
    ) {
      id
      name
    }
  }

### Input Types
Just like we can define custom types like Job and Company in `schema.graphql`, we can also define custom `input` types.  This approach cleans up our schema.

Instead of defining the inputs inline:
 
 type Mutation {
    createJob(title: String!, companyId: ID!, description: String): Job 
  }

We can create a new input schema.

type Mutation {
  createJob(input: CreateJobInput!): Job 
}

input CreateJobInput {
  title: String!,
  companyId: ID!,
  description: String
}

*Note* the input schema is prefaced with `input` instead of `type`
_Best Practice_ name the input schema to correspond to the mutation function name.
*Note* regular types can also be called `Output Types` because they can only be returned by a query or mutation.  `Input Types` can only be used as arguments passed to a query or mutation.

in `resolvers.js`:

  Mutation: {
    createJob: (_root, { title, companyId, description }) => {
      return Job.create({ title, companyId, description });
    }
  },

Can now be replaced with:

  Mutation: {
    createJob: (_root, { input }) => Job.create(input),
  },

FINALLY - INVOKING

mutation CreateJobMutation($input: CreateJobInput!) {
  createJob(input: $input) {
    id
    title
    company {
      id
      name
    }
  }
}

where we need to provide an object as an argument that corresponds to CreateJobInput

{
  "input": {
    "title": "Job title",
    "companyId": "ernjlkej45983409Nkjdfslkfj",
    "description": "Description text"
  }
}

the response from this request has this shape:
{
  "data": {
    "createJob": {
      "id": "OEpSeCqAMiCwEX_eVINFj",
      "title": "Awesome Job #56",
      "company": {
        "id": "wvdB54Gqbdp_NZTXK9Tue",
        "name": "Goobook"
      },
    }
  }
}

*Note* the returned object is called `createJob` since that's the name of the field for the mutation.  We can rename this field using graphql aliases:

  mutation CreateJobMutation($input: CreateJobInput!) {
    job: createJob(input: $input) {   // will now return "job"
      ...
    }
  }

