# Mini message board

A basic Express app Express and EJS.  

Live in render: https://jose-c0-mini-message-board.onrender.com  
Live in github: 

### Tools

- Express.js
- ES Modules
- EJS
- node.js

### Run

```bash
node --watch app.js
```
or  
```bash
npm start
```

### Project structure

tree -L 2 | grep -v -e "node\*":

```bash
.
├── models/    # Structure of the data used
│   └── message.js 
├── public/    # Stores static files like images, CSS, and client-side scripts. These files are directly accessible from the browser.
│   └── images/  
├── routes/    # Contains the files that define the application's routes
│   └── index.mjs
├── views/    # Contains the application's templates that are rendered on the server side and sent to the client as HTML. In my case, I use EJS
│    ├── pages/  # Full templates of the pages that will be rendered and displayed to the user
│    └── partials/ # Contains reusable code fragments that can be included in other templates
└── app.js # The entry point where the Express server starts and aspects like the port it listens on are defined.

```

### TODO:

https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board#project-solution




