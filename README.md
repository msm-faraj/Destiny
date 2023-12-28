# BASED ON

[] - TEMP-PERN-TS

# RUN command

[] - "docker-compose up"
[] - aldo you shoud change path in the volums for hot replacement workd

# After run...

1.client going to work in localhost 3000
2.server going to work in localhost 4000
3.postgres going to service on
[] - localhost on port 5000 &
[] - docker-network with name of "destiny-net" on port 5432

# In docker

1.main container name going to be "destiny" which contains three othe container:
[] - app-client-cnt /
[] - app-server-cnt /
[] - app-postgres-cnt /
3.data going to be saved in "destiny_postgres_db" volume
