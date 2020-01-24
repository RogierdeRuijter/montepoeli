#!/bin/sh

RESPONSE=$(circleci config process config.yml)
if [[ "${RESPONSE}" == *"ERROR"* ]]; then
    echo "Error found in circle ci config"
    echo "Run 'circleci config process .circleci/config.yml' to get a detailed report"
    exit 125
fi
