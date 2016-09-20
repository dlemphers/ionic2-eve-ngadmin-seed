Overview
========

Seed project for developing with Ionic/Eve/ng-admin.

Getting Started
===============

Build Images
------------
Run `make build-dockerimages` to build the container images required to run:

- Mongodb
- Python Eve
- ng-admin
- Ionic2 with Android Emulator

Bring up Stack
--------------

First make sure you've installed docker-compose.

Run `make up-dev` to bring up the full dev stack. 

After your stack is running
---------------------------

When you're stack is up and running:

Run `make print-endpoints` to output the API and Admin endpoints on your local machine

Run `make enter-container container=<docker-compose container name>` to bash into the running container. For example:

`make enter-container container=api`
