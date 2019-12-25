#!/bin/sh

RESPONSE=$(curl -s -F 'data=@.mergify.yml' https://gh.mergify.io/validate)
echo $RESPONSE
if [ "${RESPONSE}" != "The configuration is valid" ]; then
    exit 125
fi
