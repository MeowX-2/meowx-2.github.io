---
title: Sample Markdown Blog Post
date: Aug 5, 2026
tag: Math
---

Welcome to my new clutter-free Markdown blog post! Here you can write pure Markdown text without any HTML tags.

### Mathematical Equations

Here is an inline LaTeX formula: $\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}$.

And here is a display LaTeX formula centered on its own line:

$$\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$$

### Embedded Images

You can add images using simple Markdown syntax:

![Sample Image Caption](uploads/icon.png)

### Embedded Video

You can embed YouTube videos or HTML5 videos directly:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 12px; margin: 1.5rem 0;"></iframe>

### Code Snippets

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print([fibonacci(i) for i in range(10)])
```
