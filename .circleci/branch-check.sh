BRANCH_NAME=master12

if [ $BRANCH_NAME = "master" ]; then
  grep '"version":' package.json | cut -d\" -f4 > /tmp/client-version.txt
  echo "in master"
else
  echo ${WORKFLOW_ID} > /tmp/client-version.txt
  echo "in pr"
fi
