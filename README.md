
### Project Structure 

```
	.
	├── bin				#  Backend server ( Express )
	|   ├── www         		#  Express server configuration ( port, address, clustering )
	├── client			#  Frontend complete source code				
	|   ├── src			#  Frontend source files
	|   |	├── components		#  React component's source
	|   |	├── config 		#  Redux store's configuration
	|   |	├── layouts		#  React layout component's source
	|   |	├── reducers		#  Redux reducer's source
	|   |	├── index.html 		#  Root HTML template
	|   |	├── index.js 		#  Frontend source entry point
	|   |	└── style.css 		#  Global stylesheet
	|   ├── .babelrc		#  Babel configuration ( ES6, React, JSX )
	|   ├── .eslintrc		#  ESLint configuration
	|   └── devServer.js 		#  Hot loading server source ( development mode )
	├── dist           		#  Compiled files     
	├── routes			#  Route files
	|   └── index.js   		#  REST/HTTP endpoints
	├── .gitignore              	#  Ignored files from git commit
	├── app.js                  	#  Express server configuration ( routes, middlewares, models )
	├── LICENSE			#  License to use the project
	├── package.json 		#  Frontend and backend dependencies
	├── README.md 			#  This file
	└── webpack.config.js 		#  Webpack configuration for 'production' and 'development' 
 
```

### Run
	Inside /client directory, run ``` npm build ```
	In root directory, run ``` npm start ````

### Technologies Used
```
	
	ExpressJS
	Mongoose

	HTML5
	Bootstrap
	ReactJS
	Webpack

```

## Application will start on http://localhost:8080