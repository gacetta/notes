1. setup mongoDB, get URI and password

IN MODEL FILE:

2. in modelFile, setup mongoose
  - import `const mongoose = require('mongoose');`
  - set mongo URI: `const MONGO_URI = 'yourURIHere-mongodb+srv://michaelgacetta:J......';`
3. connect mongoose to mongoDB:
  ```
  mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'starwars'
  })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));
  ```
4. create schema
  ```
  const Schema = mongoose.Schema;

  // sets a schema for the 'species' collection
  const speciesSchema = new Schema({
    name: String,
    classification: String,
    average_height: String,
    average_lifespan: String,
    hair_colors: String,
    skin_colors: String,
    eye_colors: String,
    language: String,
    homeworld: String,
    homeworld_id: {
      // type of ObjectId makes this behave like a foreign key referencing the 'planet' collection
      type: Schema.Types.ObjectId,
      ref: 'planet'
    }
  });

  // creates a model for the 'species' collection that will be part of the export
  const Species = mongoose.model('species', speciesSchema);
  ```
5. export models: `module.exports = { Species, Model2,... }`

## Query Parameters

### Filtering
Include the filter in the URL:

// GET / tasks?completed=true
// returns only completed tasks

uses `match` property:
```
match: {
  completed: true
}
```

### Pagination
The idea of creating pages of data as requested so you're not fetching everything all at once.

URL may contain `limit` and/or `skip`:

// GET / tasks?limit=10&skip=20

`limit` refers to the maximum number of results to display
`skip` refers to how many results to "skip" and then display the next

uses `options` property:
```
options: {
  limit: parseInt(req.query.limit)
  skip: parseInt(req.query.skip)
}
```

### Sorting
Include the sorting method in the URL:

// GET / tasks?sortBy=createdAt_asc
// GET / tasks?sortBy=createdAt:asc
// GET / tasks?sortBy=createdAt_desc
// GET / tasks?sortBy=createdAt:desc

_BEST PRACTICE_ - name the sortMethod_UNDERSCORE_asc (for ascending) or desc (for descending). If field names contain _UNDERSCORE, then use colons
_BEST PRACTICE_ - name the sortMethod_UNDERSCORE_asc (for ascending) or desc (for descending).If field names contain _UNDERSCORE, then use colons

uses `options` property:
```
options: {
  sort: {
    createdAt: <number value - positive: ascending, negative: descending>
  }
}
```