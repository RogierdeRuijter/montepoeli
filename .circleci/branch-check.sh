BRANCH_NAME=maintenance/

if [[ $BRANCH_NAME == *"maintenance"* ]]; then
  lerna version patch
fi

if [[ $BRANCH_NAME == *"feature"* ]]; then
  lerna version minor
fi

if [[ $BRANCH_NAME == *"major-feature"* ]]; then
  lerna version major
fi
