
## Express-React-Scaffold
Full stack JS scaffold with ExpressJS as the backend server and React-Redux on the client side. Scaffold supports production and development modes, with best Developers Experience ( DE ) by Hot-Loading for the client side application and automatic server restarts for the backend server on code change. There will be no need to restart during development, hence making the experience smooth and decrease the delivery time.

## Scaffhold Structure 

```
	.
	├── bin                         #  Backend server ( Express )
	|   ├── www                     #  Express server configuration ( port, address, clustering )
	├── client                      #  Frontend complete source code                                
	|   ├── src                     #  Frontend source files
	|   |   ├── components          #  React component's source
	|   |   ├── config              #  Redux store's configuration
	|   |   ├── layouts             #  React layout component's source
	|   |   |   └── router.js 	#  React Router    
	|   |   ├── reducers            #  Redux reducer's source
	|   |   ├── index.html          #  Root HTML template
	|   |   ├── index.js            #  Frontend source entry point
	|   |   └── style.css           #  Global stylesheet
	|   ├── .babelrc                #  Babel configuration ( ES6, React, JSX )
	|   ├── .eslintrc               #  ESLint configuration
	|   └── devServer.js            #  Hot loading server source ( development mode )
	├── dist                        #  Compiled files     
	├── routes                      #  Route files
	|   └── index.js                #  REST/HTTP endpoints
	├── .gitignore                  #  Ignored files from git commit
	├── app.js                      #  Express server configuration ( routes, middlewares, models )
	├── LICENSE                     #  License to use the project
	├── package.json                #  Frontend and backend dependencies
	├── README.md                   #  This file
	└── webpack.config.js           #  Webpack configuration for 'production' and 'development' 
 
```

## Quick Start
### Just to check everything is working
```
# Install the dependencies
npm install

# Build the client 
npm run build-client:production

# Start the project ( it will build the client, before starting the server )
npm start

# Open web browser at http://localhost:8080
# You will see a sample Single Page Application
```

## Development
### Scaffhold provides two npm scripts, execute both in seperate terminals
```	
# Start client in development mode with hot code loading
npm run start-client:development

# Start backend server in development mode with nodemon ( server restarts on every change )
npm run start-server:development
```
Client's development process will proxy all the API requests with '/api' in the URL to the backend server.

## Production
### Scaffhold provides two production script
```
# Build the client for production deployment
npm run build-client:production

# Build the client for production deployment and start the backend server with 'forever' package
npm start 
```

### Technologies Used
```
	
	ExpressJS
	Mongoose

	HTML5
	Bootstrap
	ReactJS
	Webpack

```