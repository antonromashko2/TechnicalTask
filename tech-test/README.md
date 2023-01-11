## Install and build
```bash
npm run install
npm run build
```

## Run application
### Client
```bash
npm run start
```
### Server
#### from /server
```bash
npm run server
```

## Demo
Quick demo /assets/technical-task.demo.mp4

## Description
Check root README.md

## Solution description
Was implemented simple todo application with base routing and CRUD operations
Components from shared module have unit test coverage

### Routing
Application has one page /todo-page

### Data loading
TasksResolver is used to load tasks on the page

### Project structure
Shared module - for reusable/common components, models etc. which can be imported and used in other modules.
Todo page module - lazy loaded module for todo page. Includes own components and models.
Pages are splitted into smart and presentation components (one page in case of tech-task application)

## Перечень технологий на которых разработано решение
- [x] Angular v8
- [x] rxjs
- [x] pure scss/html
- [x] json-server
