#!/bin/bash

# Build script for West Lake Travel Itinerary project

echo "Building West Lake Travel Itinerary project..."

# Create dist directory if it doesn't exist
mkdir -p dist

# Copy HTML files
cp index.html master_index.html dist/

# Copy source files
cp -r src dist/

# Copy documentation
cp README.md PROJECTS_GUIDE.md dist/ 2>/dev/null || echo "Documentation files not found"

# Copy package.json if it exists
cp package.json dist/ 2>/dev/null || echo "package.json not found"

echo "Build completed! Files are in the 'dist' directory."