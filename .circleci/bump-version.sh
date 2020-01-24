COMMIT_MESSAGE="Feature/fix.20 (#315)"
COMMIT_MESSAGE="$( echo $COMMIT_MESSAGE | tr '[:upper:]' '[:lower:]')"

if [[ $COMMIT_MESSAGE == *"maintenance/"* ]]; then
  yarn release-patch # command is in the main folder
  echo 'patch released'
fi

if [[ $COMMIT_MESSAGE == *"feature/"* ]]; then
  yarn release-minor # command is in the main folder
  echo 'minor released'
fi

if [[ $COMMIT_MESSAGE == *"major-feature/"* ]]; then
  yarn release-major # command is in the main folder
  echo 'major released'
fi