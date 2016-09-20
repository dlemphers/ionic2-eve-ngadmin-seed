Overview
========

Seed project for developing with Ionic/Eve/ng-admin.

Makefile
========

Docker
------
Run `make build-dockerimages` to build the container images required to run:

- Mongodb
- Python Eve
- ng-admin
- Ionic2 with Android Emulator

Run `make up-dev` to bring up the full dev stack. Make sure you've installed docker-compose.

Other
-----

When you're stack is up and running:

Run `print-endpoints` to output the API and Admin endpoints on your local machine
