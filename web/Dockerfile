FROM smebberson/alpine-nginx-nodejs
MAINTAINER Ed Asriyan <ed-asriyan@protonmail.com>

# Prepare source
ADD . /application
WORKDIR /application

# Install dependencies
RUN npm install

# Build the project
RUN npm run build

# Provide builded files for nginx
RUN mv -R public/static/. /usr/html/

# Remove unneeded source files
RUN rm -rf /application
