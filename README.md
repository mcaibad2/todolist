# TODO list

TODO list web app is a simple to-do list containing things you have to do today (go shopping, buy eggs, etc). 

## Prerequisites

To run app you need mongodb installed and running on default port 27017

## Set up

1. Given that you have cloned project code and changed dir to that particular folder using command line:

```javascript
npm install
npm start
```

2. Navigate to http://localhost:3000/!

## Misc

- To run integration mocha tests (https://mochajs.org/):

```javascript
npm test
```

- CRUD apidoc documentation resides at apidoc folder (See more at http://apidocjs.com/). To generate it use the following command:

```javascript
apidoc -i controllers/ -o apidoc/
```
