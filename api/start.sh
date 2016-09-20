#!/usr/bin/env bash

if [ -z ${HS_ENV+x} ];
then
  export HS_ENV=DEV;
fi

export EVE_SETTINGS=/code/environments/$HS_ENV.py

if [ $HS_ENV == "DEV" ];
then
  echo "IN $HS_ENV Mode"
  dockerize -wait tcp://db:27017 -timeout 10s
  python3 setup.py develop
fi

api
