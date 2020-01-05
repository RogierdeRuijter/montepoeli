BRANCH_NAME=maintenance/

if [[ $BRANCH_NAME == *"maintenance"* ]]; then
  lerna version -y patch
fi

if [[ $BRANCH_NAME == *"feature"* ]]; then
  lerna version -y minor
fi

if [[ $BRANCH_NAME == *"major-feature"* ]]; then
  lerna version -y major
fi
