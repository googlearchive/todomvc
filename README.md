# polymer-todomvc-gruntified 
***
Polymer To-Do application using grunt, bower and hapijs

> ## Project Structure :
    .
    ├── config
    |   ├── config.example.json
    |   ├── development.json
    |   └── production.json
    ├── app
    |   ├── elements
    |   |   └── ...
    |   ├── css
    |   |   └── ...
    |   └── main.html
    ├── dist
    |   └── ...
    ├── test
    |   └── ...
    ├── bower_components
    |   └── ...
    ├── node_modules
    |   └── ...
    ├── .gitignore
    ├── .jshintrc
    ├── Gruntfile.js
    ├── package.json
    ├── bower.json
    └── README.md

> ## Project Setup :
> 
> 1.   clone the [git project](https://github.com/ctsh/polymer-todomvc-gruntified.git/)
> 2.   run **npm install** to install dependencies
> 3.   install [grunt and grunt-cli](http://gruntjs.com/)
> 4.   install [bower](http://bower.io/)
> 5.   run **grunt install** to setup the project
> 6.   run **cp config/config.example.json config/development.json** and set the dev env settings accordingly.
> 7.   run **grunt dev** to start the server in development mode
> 8.   run **grunt package** to create a zipped version of the distribution that will be production ready.
>
> The above steps will get you a Polymer-ToDo server running.
> Goto http://localhost:8000/ and you should see the app running. Change to appropriate port that you set in the development.json file.

### TO-DO

-   Minify all the bower dependencies in the best possible way
-   Add a grunt module for testing