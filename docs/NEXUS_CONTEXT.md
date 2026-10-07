# Nexus — Permanent Project Context

## Purpose

Nexus is a self-discovery app designed to help a person understand themselves by connecting signals across their answers and turning those patterns into meaningful direction and actionable personal outputs.

Nexus is not intended to assign a fixed personality label or tell a person who they are. Its experience emphasizes honest self-reflection and pattern recognition.

## Repository

- Repository: `KhadijaDawood/Nexus-`
- Current rebuild branch: `nexus-v1-rebuild`
- The repository is the technical source of truth.
- Do not ask the user to paste files that already exist in the repository. Inspect them first.
- Do not invent missing product requirements.

## Important Existing Instruction

`AGENTS.md` is a technical instruction file for the project. It currently contains an Expo v54 instruction.

Do not replace or repurpose `AGENTS.md` as Nexus product memory.

## Current Technology

Nexus is an Expo/TypeScript React Native application.

Important areas:

- `App.tsx` — current top-level flow controller
- `constants/discoveryContent.ts` — introduction, categories, and question content
- `screens/` — screen-level UI
- `components/` — reusable UI components
- `design-references/` — visual references
- `assets/` — project assets

## Current App Flow

The current implementation uses a numeric `step` state in `App.tsx`.

The currently wired sequence is:

1. Welcome
2. Introduction pages
3. Honesty
4. Discovery
5. Identity category introduction
6. First Identity question

The current implementation passes the first category and its first question into `QuestionScreen`.

Current question state includes:

- selected answer
- custom answer text

Back navigation currently decrements the step.

This describes the current implementation, not necessarily the final intended product.

## Discovery Areas

The current content defines eight discovery areas:

1. Identity — Who am I?
2. Strengths — What comes naturally to me?
3. Interests — What draws my attention?
4. Values — What matters to me?
5. Personality — How do I think and act?
6. Barriers — What's holding me back?
7. Vision — What future do I want?
8. Growth — Where do I want to go next?

## Current Identity Question

The current first Identity question is:

> When do you feel most like yourself?

Current answer options include:

- When I'm creating or building something
- When I'm learning something new
- When I'm helping someone
- When I'm completely alone with my thoughts
- When I'm with people who truly understand me
- When I'm solving a difficult problem
- When I'm exploring or experiencing something new

## Nova

Nova is presented as the AI companion throughout the experience.

Nova can help the user:

- reflect
- clarify thoughts
- ask deeper questions
- see another perspective

Nova does not decide who the user is. The user remains the person making that determination.

## Intended Outputs

The current introduction content names these eventual outputs:

- Personal Patterns
- Direction
- Focus
- Skill
- Habits
- 30-Day Goal
- Barrier Plan
- Reflection Plan
- Mission

Their complete generation logic has not yet been documented here and must not be invented.

## Design and Engineering Rules

- Inspect existing implementation before changing it.
- Inspect relevant design references before changing UI.
- Match approved designs deliberately rather than improvising.
- Do not replace working UI simply because another implementation is easier.
- Keep product logic separate from presentation where practical.
- Prefer structured content/data over repeated hard-coded content.
- Do not claim a feature is tested, deployed, or physically implemented when it is only conceptual or simulated.
- If a requirement is ambiguous, identify the ambiguity instead of silently inventing behavior.

## Change Safety

The current V1 rebuild has already been committed and pushed to `nexus-v1-rebuild`.

Before a substantial change:

1. Inspect the current branch.
2. Read the relevant files.
3. Check the relevant design reference.
4. Make the smallest coherent change.
5. Test the affected flow.
6. Commit with a descriptive message.

## Documentation Roadmap

Additional documentation will be added separately:

- `docs/NEXUS_PROJECT_STATUS.md` — current implementation status and next tasks
- `docs/NEXUS_BUILD_RULES.md` — engineering and AI coding rules
- `docs/NEXUS_USER_FLOW.md` — intended complete user journey
- `docs/NEXUS_LOGIC.md` — signal/pattern/insight reasoning model
- `docs/NEXUS_CONTENT.md` — approved questions and content
- `docs/NEXUS_DESIGN_SYSTEM.md` — visual system and design specifications

These documents should be based on repository content, approved designs, and explicit product decisions — never guesses.

## AI Working Agreement

When an AI agent works on Nexus:

1. Inspect the repository before asking the user for information.
2. Reuse existing files and decisions.
3. Do not ask the user to paste repository files unnecessarily.
4. Do not overwrite product decisions without explicit confirmation.
5. Separate repository facts from proposed improvements.
6. Before a major change, explain what will change and which files are affected.
7. After implementation, report exactly what changed and what was tested.
