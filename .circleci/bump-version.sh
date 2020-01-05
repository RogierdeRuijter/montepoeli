CIRCLE_BRANCH=feature

if [[ $CIRCLE_BRANCH == *"maintenance"* ]]; then
  yarn release-patch
fi

if [[ $CIRCLE_BRANCH == *"feature"* ]]; then
  yarn release-minor
fi

if [[ $CIRCLE_BRANCH == *"major-feature"* ]]; then
  yarn release-major
fi
