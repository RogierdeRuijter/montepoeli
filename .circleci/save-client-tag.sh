CIRCLE_BRANCH="master2"
CIRCLE_SHA1="123"
if [[ ${CIRCLE_BRANCH} = "master" ]]
then
  CLIENT_TAG=$(git rev-parse @~)
else 
  CLIENT_TAG=${CIRCLE_SHA1}
fi

echo ${CLIENT_TAG} > /tmp/client-version.txt