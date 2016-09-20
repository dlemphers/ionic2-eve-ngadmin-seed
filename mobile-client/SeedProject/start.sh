#!/usr/bin/env bash

npm update
ionic build android
echo "Environment is $APP_ENVIRONMENT"
cp /code/environments/$APP_ENVIRONMENT.ts /code/app/environment.ts
su -c "ionic run android -l -c -s"
