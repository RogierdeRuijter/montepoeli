BRANCH_NAME=feature

if [[ $BRANCH_NAME == *"maintenance"* ]]; then
  lerna version -y patch --tag-version-prefix '[ci skip]'
fi

if [[ $BRANCH_NAME == *"feature"* ]]; then
  lerna version -y minor --tag-version-prefix '[ci skip]'
fi

if [[ $BRANCH_NAME == *"major-feature"* ]]; then
  lerna version -y major --tag-version-prefix '[ci skip]'
fi
