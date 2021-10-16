<h1 align="center">Rocketseat Ignite - Trilha Node.Js</h1>
<h3> 🏁 Resolução do primeiro desafio da trilha nodejs do bootcamp Ignite 🚀<h3>

## 💻 Sobre

Esta aplicação gerencia tarefas (em inglês *todos*). É permitido a criação de usuários com ```name``` e ```username```, bem como o CRUD de *todos*.
---

## 🚀 Features

Recursos disponíveis:
- Criar um novo *todo*;
- Listar todos os *todos*;
- Alterar o `title` e `deadline` de um *todo* existente;
- Marcar um *todo* com feito;
- Excluir um *todo*.

## 🚨 Rotas

### POST `/users`

A rota recebe `name`, e `username` dentro do corpo da requisição. Ao cadastrar um novo usuário, ela armazena os dados dentro de um objeto no seguinte formato:

```js
{ 
	id: 'uuid', // precisa ser um uuid
	name: 'John Doe', 
	username: 'john', 
	todos: []
} 
```

### GET `/todos`

A rota recebe, pelo header da requisição, uma propriedade `username` contendo o username do usuário e retornar uma lista com todas as tarefas desse usuário.

### POST `/todos`

A rota recebe `title` e `deadline` dentro do corpo da requisição e, uma propriedade `username` contendo o username do usuário dentro do header da requisição. Ao criar um novo *todo*, ele é armazenado na lista `todos` do usuário que está criando essa tarefa. Cada tarefa tem o seguinte formato:

```js
{ 
	id: 'uuid', // precisa ser um uuid
	title: 'Nome da tarefa',
	done: false, 
	deadline: '2021-02-27T00:00:00.000Z', 
	created_at: '2021-02-22T00:00:00.000Z'
}
``` 
**OBS**: Ao fazer a requisição, preencha a data de `deadline` com o formato `ANO-MÊS-DIA`.

### PUT `/todos/:id`

A rota recebe, pelo header da requisição, uma propriedade `username` contendo o username do usuário e recebe as propriedades `title` e `deadline` dentro do corpo. É alterado **apenas** o `title` e o `deadline` da tarefa que possua o `id` igual ao `id` presente nos parâmetros da rota.

### PATCH `/todos/:id/done`

A rota recebe, pelo header da requisição, uma propriedade `username` contendo o username do usuário e alterar a propriedade `done` para `true` no *todo* que possuir um `id` igual ao `id` presente nos parâmetros da rota.

### DELETE `/todos/:id`

A rota recebe, pelo header da requisição, uma propriedade `username` contendo o username do usuário e exclui o *todo* que possuir um `id` igual ao `id` presente nos parâmetros da rota.
---

## 📝 Licença
Este projeto esta sobe a licença [MIT](./LICENSE).<br>
Feito com ❤️ por Artur Rafael da Silveira
[Entre em contato!](https://www.linkedin.com/in/arturrsilveira/) 👋🏽 

[![Linkedin Badge](https://img.shields.io/badge/-Artur-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/arturrsilveira/)](https://www.linkedin.com/in/arturrsilveira/) 
[![Gmail Badge](https://img.shields.io/badge/-arturrsilveira85@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:arturrsilveira85@gmail.com)](mailto:arturrsilveira85@gmail.com)