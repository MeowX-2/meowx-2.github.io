---
title: HintSpark — Multi-AI Math Assistant
date: August 4, 2026
tag: Code & Math
---

**HintSpark** (Math Helper) is a modern, responsive web application, native desktop application, and Android-installable PWA designed for reading and organizing mathematical essays, complete with KaTeX expression rendering and an interactive **Multi-AI Math Assistant** which uses `Google Gemini` and `Anthropic Claude` API.

The complete source code is available on [GitHub](https://github.com/MeowX-2/math-helper). The whole app was designed with Python and is mainly designed for math and physics students.

### Why?
I didn't like how AI throws a random answer that is overly verbose and has many "out of sense" answers. So I made an app which will make AI help with math problems without just giving away the "copy-paste-ready" solution. I also added a note-writing feature which generates new notes (and saves them in the app), supporting LaTeX and Markdown. Moreover, the AI is text-based and follows the bring-your-own-key framework.

I tried to keep it resource-light and clean for the eyes. Next, I will probably integrate Wikipedia support for the app.

### Guided Math Tutor Concept

Unlike standard AI search engines or chatbots that immediately output full solutions, HintSpark acts as a *guided math tutor*. It provides progressive hints and probing prompts to help students develop analytical problem-solving skills independently.

### Key Features

- **Multi-AI Guided Tutor:** Engine supporting Google Gemini API (`gemini-1.5-flash`, `gemini-2.0-flash`, `gemini-1.5-pro`) and Anthropic Claude API (`claude-3-5-sonnet`, `claude-3-5-haiku`) with automatic provider routing.
- **Bring-Your-Own-Key (BYOK):** Users can securely configure their own API keys via the UI modal; server keys are kept protected.
- **Auto `.env` Config:** Inputting keys via the UI modal automatically writes a clean local `.env` file.
- **KaTeX Math Rendering:** Full support for inline math like $\int_0^\infty f(x)dx$ and display LaTeX formulas:
  $$\sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}$$
- **Mathematical Essay Feed:** Substack-style article grid with dynamic tag filters (*Number Theory*, *Calculus*, *Algebra*, *Geometry*) and search.
- **Community Publishing:** Publish mathematical stories with automatic read-time and LaTeX complexity estimation.
- **Cross-Platform Deployment:** Run as a Flask web app, native desktop app via `pywebview`, or Android PWA.

Check out the live repository and contribute on [GitHub](https://github.com/MeowX-2/math-helper). Any suggestions are welcome.
