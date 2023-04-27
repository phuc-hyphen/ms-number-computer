# The minimum environment (Node, php, etc...)
FROM node:8.11.3-alpine

#Create the directory in which we will work (/usr/src/app/)
RUN mkdir -p /usr/src/app/

#Specify that we gonna work in this newly created directory
WORKDIR /usr/src/app/

# Use RUN to execute classic command as mkdir, cd, etc...
COPY package.json /usr/src/app/

# Use RUN to execute classic command as mkdir, cd, etc...
RUN npm install

#Copy the everything in the current folder to the working directory
COPY . /usr/src/app/

# Use EXPOSE to open a port to the Docker machine, for example 80, 4242, etc...
EXPOSE 8081

# The ENTRYPOINT & CMD let you tell to Docker what to do when the container is mounted
ENTRYPOINT [ "npm", "run", "development" ]