#!/usr/bin/env bash
set -e

# Make sure we are at the project root
cd "$(dirname "$0")/.."

if [ -z "$GH_PAT" ]; then
  echo "Error: GH_PAT environment variable is not set."
  exit 1
fi

echo "Building production assets..."
yarn build

TEMP_DIR=$(mktemp -d)
TARGET_REPO="github.com/purplek23/travisk.git"
SOURCE_COMMIT_SHA=$(git rev-parse --short HEAD)

echo "Cloning target repository..."
git clone "https://${GH_PAT}@${TARGET_REPO}" "$TEMP_DIR"

echo "Copying files to target repository..."
# Clean up existing files in target repository (except .git)
find "$TEMP_DIR" -maxdepth 1 -not -name '.git' -not -name "$(basename "$TEMP_DIR")" -exec rm -rf {} +

# Copy build outputs from dist/
cp -r dist/* "$TEMP_DIR/"

# Commit and push to target repository
cd "$TEMP_DIR"
git config user.name "GitHub Actions"
git config user.email "actions@github.com"

# Check if there are any changes
if [ -n "$(git status --porcelain)" ]; then
  git add .
  git commit -m "deploy: update static site from source commit ${SOURCE_COMMIT_SHA}"
  echo "Pushing changes..."
  git push origin main
else
  echo "No changes to deploy."
fi

# Clean up temp directory
rm -rf "$TEMP_DIR"
echo "Deployment completed successfully!"
