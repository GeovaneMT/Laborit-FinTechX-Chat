---
name: laborit-culture
description: Interpret Laborit's company culture, frontend role expectations, and technical assessment framing to guide product decisions, scope cuts, UX direction, seniority signals, and delivery strategy. Use when Codex needs to analyze a Laborit challenge, adapt prompts or plans for this hiring context, review whether a solution feels aligned with Laborit's values, or turn the company/vacancy references into practical implementation and presentation choices.
---

# Laborit Culture

## Overview

Use this skill to convert Laborit's culture and vacancy signals into practical decisions for challenge execution.

Prioritize alignment over volume. The goal is not to maximize features. The goal is to help the work feel:

- human;
- simple;
- product-minded;
- technically reliable;
- intentional in scope and trade-offs.

## Workflow

1. Read [references/LABORIT_EMPRESA_E_VAGA.md](./references/LABORIT_EMPRESA_E_VAGA.md) first.
2. Read [references/Development Assessment (Dev Front).md](./references/Development_Assessment_Dev_Front.md) when the task involves the technical challenge, prompt-writing for the challenge, or review of a proposed solution.
3. Extract the evaluation lens before proposing solutions:
   - what Laborit values culturally;
   - what the frontend role signals technically;
   - what the challenge explicitly asks for;
   - what is likely being evaluated implicitly.
4. Translate that lens into practical guidance:
   - what to build now;
   - what to simplify or defer;
   - what UX qualities should be visible;
   - what engineering signals are worth the time;
   - what would make the work feel junior, generic, or misaligned.
5. If reviewing an artifact, judge it against alignment criteria before suggesting expansion.

## Decision Heuristics

- Prefer usefulness over novelty.
- Prefer a narrow, polished MVP over a wide but unfinished solution.
- Prefer human microcopy, clear states, and reduced friction over flashy visuals.
- Prefer product clarity and clean code over architecture theater.
- Prefer explicit trade-offs and rationale over vague ambition.

When several options are viable, choose the one that best demonstrates:

- focus on people;
- simplicity with intention;
- product thinking;
- autonomy and pragmatism;
- frontend craftsmanship with restrained scope.

## What Good Alignment Looks Like

- The solution feels helpful, not generic.
- The UX is clear, accessible, and calm.
- The implementation shows structure, not unnecessary complexity.
- The README explains decisions, trade-offs, and scope cuts clearly.
- The candidate appears to understand the problem beyond the surface prompt.

## Common Failure Modes

- Building only a generic AI chat wrapper.
- Expanding scope instead of improving finish.
- Optimizing for technical spectacle instead of user value.
- Ignoring states, feedback, and error handling.
- Treating README, testing, and delivery narrative as secondary.
- Using robotic copy or cold interactions for a human-centered challenge.

## Output Rules

- Make Laborit alignment explicit in recommendations.
- Tie each major recommendation to a likely evaluation signal.
- Be aggressive in scope cutting when extra work does not improve approval odds.
- Favor concrete, implementation-oriented guidance over abstract cultural summary.
- If confidence is limited, state the assumption and still recommend the best path.

## Reference Loading

Read [references/LABORIT_EMPRESA_E_VAGA.md](./references/LABORIT_EMPRESA_E_VAGA.md) when you need:

- the cultural values to optimize for;
- the implied expectations of the frontend role;
- the strongest seniority signals for this context;
- or guidance on what not to overbuild.

Read [references/Development Assessment (Dev Front).md](./references/Development_Assessment_Dev_Front.md) when you need:

- the exact challenge framing;
- the required technical constraints;
- the evaluation criteria;
- the sample questions the chat should handle;
- or the problem statement behind the interface.

Do not restate the references wholesale. Summarize and apply them.
