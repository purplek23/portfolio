# Specification: Setup GitOps Build & Deploy Flow

## Overview
This track establishes a GitOps deployment workflow for the portfolio website. A GitHub Action is triggered on pushes to the 'main' branch. This action calls a custom shell script ('scripts/deploy.sh') which:
1. Installs dependencies and builds the production files ('dist/').
2. Clones the target hosting repository ('purplek23/travisk23.github.io').
3. Clears the old files, copies the newly built assets from 'dist/' into the target repo, and pushes the changes.
4. Uses a GitHub Personal Access Token (PAT) stored as a repository secret ('GH_PAT') to authenticate.

## Functional Requirements
1. **GitHub Action Workflow (.github/workflows/deploy.yml)**:
   - Triggered on push to the 'main' branch.
   - Sets up Node.js environment, installs dependencies via yarn, and executes 'scripts/deploy.sh'.
   - Passes the 'GH_PAT' secret as an environment variable to the deploy script.
2. **Deploy Shell Script (scripts/deploy.sh)**:
   - Runs 'yarn build' (which runs type checking and Vite build).
   - Configures Git credentials dynamically using the 'GH_PAT' environment variable.
   - Clones the target repository ('github.com/purplek23/travisk23.github.io.git') to a temporary folder.
   - Clears existing contents of the target repository (except '.git').
   - Copies the content of 'dist/' to the target repository.
   - Adds, commits (with a message indicating the source commit SHA), and pushes to the target repository.
3. **Target Repository**:
   - The destination repository is 'purplek23/travisk23.github.io'.

## Acceptance Criteria
- A valid '.github/workflows/deploy.yml' exists.
- A functional 'scripts/deploy.sh' script exists with executable permissions.
- The deploy script runs locally or in the Action, successfully compiling the site and pushing it to the target repo when the 'GH_PAT' is provided.
- The site compiles cleanly without type or build errors.

## Out of Scope
- Creating the second GitHub repository via API (assuming it exists or will be created).
- Setting up the domain name DNS records.
