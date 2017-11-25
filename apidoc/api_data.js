define({ "api": [
  {
    "type": "delete",
    "url": "/todos/:id",
    "title": "Delete todo",
    "group": "Todos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Todo id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "todos",
            "description": "<p>Todo's list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "todos._id",
            "description": "<p>Todo id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "todos.title",
            "description": "<p>Todo title</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n   \"_id\":\"5a1961ac89d4a31ad8d2d9a3\",\n   \"title\":\"Buy pens\",\n   \"__v\":0\n},\n{\n   \"_id\":\"5a1961ac89d4a31ad8d2d9a4\",\n   \"title\":\"Pay bills\",\n   \"__v\":0\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete todo error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "Delete todo error",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/todosController.js",
    "groupTitle": "Todos",
    "name": "DeleteTodosId"
  },
  {
    "type": "get",
    "url": "/todos",
    "title": "Read todos",
    "group": "Todos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "todos",
            "description": "<p>Todo's list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "todos._id",
            "description": "<p>Todo id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "todos.title",
            "description": "<p>Todo title</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n   \"_id\":\"5a1961ac89d4a31ad8d2d9a3\",\n   \"title\":\"Buy pens\",\n   \"__v\":0\n},\n{\n   \"_id\":\"5a1961ac89d4a31ad8d2d9a4\",\n   \"title\":\"Pay bills\",\n   \"__v\":0\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Read todos error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/todosController.js",
    "groupTitle": "Todos",
    "name": "GetTodos"
  },
  {
    "type": "post",
    "url": "/todos",
    "title": "Create todo",
    "group": "Todos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Todo title</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    \"title\": \"Buy pens\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "todos",
            "description": "<p>Todo's list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "todos._id",
            "description": "<p>Todo id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "todos.title",
            "description": "<p>Todo title</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n   \"_id\":\"5a1961ac89d4a31ad8d2d9a3\",\n   \"title\":\"Buy pens\",\n   \"__v\":0\n},\n{\n   \"_id\":\"5a1961ac89d4a31ad8d2d9a4\",\n   \"title\":\"Pay bills\",\n   \"__v\":0\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Create a todo error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/todosController.js",
    "groupTitle": "Todos",
    "name": "PostTodos"
  }
] });
