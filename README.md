# Benchmark-PERN-TS

this is a benchmark for starting to work with PERN stack
p => Postgres
E => Express
R => React
N => Rode

# Command/Steps to Done this

npx create-react-app app-client --template typescript
create dockerfile in /app-client create .dockerignore file in /app-client
create compose.yaml file in root folder of the project
add database service in to the comose.yaml file

- this will run postgres in a separate container &
- with this it is possible to creae a server on it &

create a server with express + hot-reloading

# Commits

created react app with typescript template
dockerised app-client with docker-compose + hot-reloading
