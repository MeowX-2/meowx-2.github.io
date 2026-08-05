---
title: HintSpark — Mathematical Insights & Multi-AI Math Assistant
date: August 4, 2026
tag: Code
---

**HintSpark** (Math Helper) is a modern, responsive web application, native desktop application, and Android-installable PWA designed for reading and publishing mathematical essays, complete with KaTeX expression rendering and an interactive **Multi-AI Math Assistant** powered by `Google Gemini` and `Anthropic Claude`.
The complete source code is available on [GitHub](https://github.com/MeowX-2/math-helper).

### Guided Math Tutor Concept

Unlike standard AI search engines or chatbots that immediately output full solutions, HintSpark acts as a *guided math tutor*. It provides progressive hints and probing prompts to help students develop analytical problem-solving skills independently.

### Key Features

- **Multi-AI Guided Tutor:** Engine supporting Google Gemini API (`gemini-1.5-flash`, `gemini-2.0-flash`, `gemini-1.5-pro`) and Anthropic Claude API (`claude-3-5-sonnet`, `claude-3-5-haiku`) with automatic provider routing.
- **Bring-Your-Own-Key (BYOK):** Users can securely configure their own API keys via the UI modal; server keys are kept protected.
- **Auto `.env` Config:** Inputting keys via the UI modal automatically writes a clean local `.env` file.
- **KaTeX Math Rendering:** Full support for inline $\int_0^\infty f(x)dx$ and display $$\sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}$$ LaTeX formulas.
- **Mathematical Essay Feed:** Substack-style article grid with dynamic tag filters (*Number Theory*, *Calculus*, *Algebra*, *Geometry*) and search.
- **Community Publishing:** Publish mathematical stories with automatic read-time and LaTeX complexity estimation.
- **Cross-Platform Deployment:** Run as a Flask web app, native desktop app via `pywebview`, or Android PWA.

Check out the live repository and contribute on [GitHub](https://github.com/MeowX-2/math-helper).
