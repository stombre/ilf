# I love framework
A new framework NodeJS used to build powerful app.

# How it's work?
ILF is based on controller. Every controller take one input (an object), and return one output (an object too).
Controller contains the main buisness login. You can create a controller to register your user,
a controller to get a specific REST resource.

A controller is binded to a specific provider. Providers could be http api, crons, queue, ... Provider will
generate the input, and will return the output.

A controller is instantiate when the app start, with specific dependencies.

## Controller example
```javascript

const { Controller } = require('ilf');

class UserFindById extends Controller {
  // Inject the dependencies :
  constructor({ modelUser }) {
    super();
    
    this.model = modelUser;
  }
  
  // Declare which dependencies ILF need to provide :
  static getDependencies() {
    return [{
      name: 'modelUser'
    }]
  }
  
  // Method run called every time the controller is trigger ;
  run(input, context) {
    return model.findById(input._id);
  }
}

```

## Services example
Services are the resource which could be inject in a controller. Services could be everything. To generate a service,
you can declare it :
```javascript
const { services } = require('ilf');

services.declare('storage', new Map());
```

## Provider example
```javascript
const ilf = require('ilf');
const ilfProviderKoa = require('ilf-provider-koa');

ilf.use(ilfProviderKoa);

const userFindById = require('./controllers/userFindById');

// Trigger controller when HTTP GET /users/:userId
ilfProviderKoa(userFindById).get('/users/:userId');

ilf.start();
```
