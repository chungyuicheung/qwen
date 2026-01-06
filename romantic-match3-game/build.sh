#!/bin/bash

# Build script for Romantic Match-3 Game
echo "Building Romantic Match-3 Game..."

# Create dist directory if it doesn't exist
mkdir -p dist

# Copy all necessary files to dist directory
cp -r src dist/
cp index.html dist/
cp package.json dist/
cp server.js dist/
cp README.md dist/

# Install dependencies
npm install

echo "Build completed! Files are in the 'dist' directory."
echo "To run the game, navigate to the dist directory and run 'node server.js'"