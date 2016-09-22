###########################################################
#
# Dockerfile for tfk-search-index-politics
#
###########################################################

# Setting the base to nodejs 4.5.0
FROM mhart/alpine-node:4.5.0

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update git && rm -rf /var/cache/apk/*

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Env variables
ENV JWT_KEY Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go
ENV SEARCH_SERVICE_URL https://politics.search.t-fk.no
ENV SEARCH_SERVICE_INDEX politics
ENV SOURCE_URL_POLITICIANS https://politiker-api.t-fk.no
ENV SOURCE_URL_OPENGOV https://opengov.api.t-fk.no
ENV SITE_URL http://www.yoursite.com

# Startup
ENTRYPOINT node index