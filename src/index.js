const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function userExistsIndex(username) {
  const userIndex = users.findIndex(users => users.username === username);
  return userIndex;
}

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const userIndex = users.findIndex(users => users.username === username);

  if (userIndex < 0 ) {
    return response.status(404).json({error: "User not found"});     
  }
    
  const user = users[userIndex];
  request.user = user;
  return next(); 

}

app.post('/users', (request, response) => {
  const { name, username } = request.body;

  const userExists = userExistsIndex(username);
  
  if (userExists < 0 ) {
    const user = {
      id: uuidv4(),
      name: name, 
      username: username, 
      todos: []
    };
  
    users.push(user);
  
    return response.status(201).json(user);
    
  }
  return response.status(400).json({message: "User already in use"});
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  
  const { username } = request.headers;

  const userIndex = userExistsIndex(username);
  
  return response.status(200).json(users[userIndex].todos);
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  
  const { title, deadline } = request.body;
  const { user } = request;
  
  const todo = { 
    id: uuidv4(),
    title: title,
    done: "false", 
    deadline: new Date(deadline), 
	  created_at: new Date()
  }
  const userIndex = userExistsIndex(user.username);

  users[userIndex].todos.push(todo);
 
  return response.status(200).json(todo);
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { id } = request.params;
  const { title, deadline } = request.body;
  
  const todo = user.todos.find(todo => todo.id === id);

  if (todo == undefined) {
    return response.status(404).json({error: "Todo doesn't exists!"});
  }

  todo.title = title;
  todo.deadline = new Date(deadline);

  return response.status(200).send();
    
  
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { id } = request.params;
  
  const todo = user.todos.find(todo => todo.id === id);

  if (todo == undefined) {
    return response.status(404).json({error: "Todo doesn't exists!"});
  }

  todo.done = true;
  return response.status(200).send();
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { id } = request.params;

  const todo = user.todos.findIndex(todo => todo.id === id);

  if (todo < 0) {
    return response.status(404).json({error: "Todo doesn't exists!"});
  }
  user.todos.splice(todo, 1);
  return response.status(200).send();
});

module.exports = app;