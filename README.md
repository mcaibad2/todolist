h1. Wrote this code as the main deliverable test assignment for http://twenty-one.co/. Although I managed to finish in one day (added some minor changes next day) they accused me of copying this code... Anyway, I am writing this down as a personal reminder and for all you out there.

# TODO list

TODO list web app is a simple to-do list containing things you have to do today (go shopping, buy eggs, etc). 

## Prerequisites

To run app you need:
1. mongodb installed and running on default port 27017.
2. Node.js installed

## Set up

1. Given that you have cloned project code and changed dir to that particular folder using command line:

```javascript
npm install
npm start
```

2. Navigate to http://localhost:3000/

## Misc

- To run integration tests:

```javascript
npm test
```

- CRUD apidoc documentation resides at apidoc folder (See more at http://apidocjs.com/). To generate it use the following command:

```javascript
apidoc -i controllers/ -o apidoc/
```
