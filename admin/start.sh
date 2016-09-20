#!/usr/bin/env bash

if [ -z ${HS_ENV+x} ];
then
  export HS_ENV=DEV;
fi

cp environments/${HS_ENV}.js ./environment.js
if [ $HS_ENV == "DEV" ];
then
getent hosts api | awk '{ print $1 }' | xargs -I '{}' sed -i 's/SERVICE_ADDRESS/{}/' environment.js

npm update
live-server --port=8000
fi
npm update
