.PHONY: help install dev build start lint test clean deploy setup

# Default target
help:
	@echo "Available commands:"
	@echo "  make install    - Install dependencies"
	@echo "  make dev        - Start development server"
	@echo "  make build      - Build production bundle"
	@echo "  make start      - Start production server"
	@echo "  make lint       - Run linter"
	@echo "  make test       - Run tests"
	@echo "  make clean      - Clean build artifacts"
	@echo "  make setup      - Initial project setup"
	@echo "  make deploy     - Build and prepare for deployment"
	@echo "  make split-json - Run JSON restructuring script"

# Install dependencies
install:
	@echo "📦 Installing dependencies..."
	npm install

# Start development server
dev:
	@echo "🚀 Starting development server..."
	npm run dev

# Build for production
build:
	@echo "🏗️  Building production bundle..."
	npm run build

# Start production server
start: build
	@echo "▶️  Starting production server..."
	npm run start

# Run linter
lint:
	@echo "🔍 Running linter..."
	npm run lint

# Run tests
test:
	@echo "🧪 Running tests..."
	npm run test

# Clean build artifacts
clean:
	@echo "🧹 Cleaning build artifacts..."
	rm -rf .next
	rm -rf node_modules/.cache
	@echo "✨ Clean complete!"

# Deep clean (including node_modules)
clean-all: clean
	@echo "🗑️  Removing node_modules..."
	rm -rf node_modules
	@echo "✨ Deep clean complete!"

# Initial setup
setup: install
	@echo "⚙️  Setting up project..."
	@echo "✅ Setup complete! Run 'make dev' to start development."

# Build and prepare for deployment
deploy: clean build
	@echo "📦 Build complete! Ready for deployment."

# Run JSON restructuring script
split-json:
	@echo "🔧 Running JSON restructuring script..."
	python3 scripts/split-json.py

# Git shortcuts
git-status:
	@git status

commit:
	@echo "💬 Committing changes..."
	@git add .
	@git status
	@read -p "Enter commit message: " msg; \
	git commit -m "$$msg"

push: commit
	@echo "⬆️  Pushing to remote..."
	git push origin main

# Development helpers
fresh: clean-all install dev

# Check project health
check: lint test build
	@echo "✅ All checks passed!"

# Show project info
info:
	@echo "📊 Project Information:"
	@echo "  Node version: $$(node -v)"
	@echo "  NPM version: $$(npm -v)"
	@echo "  Next.js version: $$(npm list next --depth=0 | grep next)"
	@echo "  Project: Assignment+ Cover Generator"
