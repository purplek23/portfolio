# Plan: Setup GitOps Build & Deploy Flow

## Phase 1: Script & Workflow Implementation
- [ ] Task: Create deployment shell script
  - [ ] Create directory scripts/ if not exists
  - [ ] Create scripts/deploy.sh running build and cloning/cleaning/pushing to the target repo
  - [ ] Make scripts/deploy.sh executable (chmod +x)
- [ ] Task: Create GitHub Actions workflow
  - [ ] Create directory .github/workflows/ if not exists
  - [ ] Create .github/workflows/deploy.yml calling scripts/deploy.sh with GH_PAT secret

## Phase 2: Local Verification
- [ ] Task: Verify compilation and script logic
  - [ ] Run type check and local build to ensure clean compilation
  - [ ] Test that the deploy.sh script structure is syntactically valid (e.g. bash -n scripts/deploy.sh)
