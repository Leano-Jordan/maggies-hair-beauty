# Branch Policy

Maggie’s Hair & Beauty uses a **single development branch: main**.

## Rule

- main is the only allowed working and release branch.
- Do not create feature, experiment, visual-round, or temporary branches.
- All fixes, audits and improvements land directly on main.
- Before changing main, inspect the current head and preserve working functionality.
- Completed work must be consolidated into the current head rather than left on side branches.

## Repository hygiene

The repository currently contains legacy side branches from earlier V2 iterations. They are not part of the intended architecture and should be deleted once repository administration access permits branch deletion.

## Quality gate

A change is not complete until:
1. The current main state is checked.
2. Functional, responsive, accessibility and failure-path regressions are considered.
3. The change is committed to main.
4. The remaining branch count is verified.

This policy is intentionally simple: **one repo, one branch, one source of truth.**
