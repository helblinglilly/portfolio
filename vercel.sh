#!/bin/bash
echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [ "$VERCEL_GIT_COMMIT_REF" == "main" ]; then
  echo "✅ - Building and deploying to helbling.uk"
  exit 1;
elif [ "$VERCEL_GIT_COMMIT_REF" == "develop" ]; then
  echo "✅ - Building and deploying to dev.helbling.uk"
  exit 1;
elif [ "$VERCEL_GIT_COMMIT_REF" == "spike/cypress" ]; then
  echo "✅ - Building and deploying to dev.helbling.uk"
  exit 1;
else
  echo "🛑 - Build cancelled"
  exit 0;
fi