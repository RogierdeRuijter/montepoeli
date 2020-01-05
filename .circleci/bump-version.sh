BRANCH_NAME=feature

if [[ $BRANCH_NAME == *"maintenance"* ]]; then
  lerna version -y patch --message '[ci skip] bump patch'
fi

if [[ $BRANCH_NAME == *"feature"* ]]; then
  lerna version -y minor --message '[ci skip] bump minor'
fi

if [[ $BRANCH_NAME == *"major-feature"* ]]; then
  lerna version -y major --message '[ci skip] bump major'
fi
