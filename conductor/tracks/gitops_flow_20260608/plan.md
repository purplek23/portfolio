# Plan: Setup GitOps Build & Deploy Flow

## Phase 1: Script & Workflow Implementation
- [x] Task: Create deployment shell script
  - [x] Create directory scripts/ if not exists
  - [x] Create scripts/deploy.sh running build and cloning/cleaning/pushing to the target repo
  - [x] Make scripts/deploy.sh executable (chmod +x)
- [x] Task: Create GitHub Actions workflow
  - [x] Create directory .github/workflows/ if not exists
  - [x] Create .github/workflows/deploy.yml calling scripts/deploy.sh with GH_PAT secret

## Phase 2: Local Verification
- [x] Task: Verify compilation and script logic
  - [x] Run type check and local build to ensure clean compilation
  - [x] Test that the deploy.sh script structure is syntactically valid (e.g. bash -n scripts/deploy.sh)

