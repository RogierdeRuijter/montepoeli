CIRCLE_BRANCH=feature

if [[ $CIRCLE_BRANCH == *"maintenance"* ]]; then
  lerna version -y patch --message '[ci skip] bump patch'
fi

if [[ $CIRCLE_BRANCH == *"feature"* ]]; then
  lerna version -y minor --message '[ci skip] bump minor'
fi

if [[ $CIRCLE_BRANCH == *"major-feature"* ]]; then
  lerna version -y major --message '[ci skip] bump major'
fi
