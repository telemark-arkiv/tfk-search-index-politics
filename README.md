[![Build Status](https://travis-ci.org/telemark/tfk-search-index-politics.svg?branch=master)](https://travis-ci.org/telemark/tfk-search-index-politics)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tfk-search-index-politics

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/tfk-search-index-politics.svg)](https://greenkeeper.io/)
Indekserer politikere, partier, utvalg og utvalgsmøter

## Docker
To run this module as a service use the docker image.

Change the ENV parts of the [Dockerfile](Dockerfile) or use [docker.env](docker.env)

Build
```sh
$ docker build -t tfk-search-index-politics .
```

or use the prebuilt image from [hub.docker.com](https://hub.docker.com/r/telemark/tfk-search-index-politics/)

```sh
$ docker pull telemark/tfk-search-index-politics
```

Run a container

```sh
$ docker run --rm tfk-search-index-politics
```

or

```sh
$ docker run --env-file=docker.env --rm tfk-search-index-politics
```

This will spin up a container. Do the job. Shut it down and remove it.