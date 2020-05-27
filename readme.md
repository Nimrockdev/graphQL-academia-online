# GraphQL whith Apollo server 2  

>In docs you can see that the data can be returned to us in the different queries and mutations. 

 

## Create 'tsconfig.json'  

	npx tsc --init --rootDir src --outDir build --lib dom,es6 --module commonjs --removeComments --target es6 --resolveJsonModule true

## Production dependencies  

`npm install express graphql ncp http graphql-import-node compression cors lodash typescript graphql-tools graphql-playground-middleware-express apollo-server-express`  

## Development dependencies  

`npm install @types/compression @types/express @types/cors @types/lodash @types/node @types/graphql -D`

`npm install graphql-depth-limit`  

## Dependencies for deployment ZEIT  

`npm install graphql-tag-pluck`  

## URL
Inspect: [https://02-academi-online-new.now.sh/](https://02-academi-online-new.now.sh/)

Production: [https://zeit.co/jsg8405/02-academi-online-new/nvv19zd60](https://zeit.co/jsg8405/02-academi-online-new/nvv19zd60)


# Examples  
## Mutation with variables


    mutation nuevoCurso($curso: CursoInput!) {
	      cursoNuevo(curso: $curso) {
		    id
		    description
		    title
	      }
    }
    

    {
	    "curso": {
	    "title": "GraphQL",
	    "description": "test",
	    "clases": 25,
	    "time": 45,
	    "logo": "",
	    "path": "",
	    "level": "EXPERTO",
	    "teacher": "Yo"
	      
	    }
    }



    mutation modificarCurso($curso: CursoInput!) {
	    modificarCurso(curso: $curso) {
		    id
		    description
		    title
		    clases
	    }
    }
    
    {
    "curso": {
	    "id": "5",
	    "title": "GraphQL  ",
	    "description": "test",
	    "clases": 255,
	    "time": 45,
	    "logo": "",
	    "path": "",
	    "level": "EXPERTO",
	    "teacher": "Yo"
    	}
    }
