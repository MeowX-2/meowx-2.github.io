---
title: NeoVim & Random Coding Setups With It
date: September 19, 2024
tag: Code
---

So, those who know me closely knows I stan for `NeoVim`. I won't blabber around NeoVim too much like a weirdo (spoiler: I will). I am mainly writing about the functionality of some configs, which I may forget (another reason is to flex, but that's unrelated). These are available on [GitHub](https://github.com/MeowX-2/nvim). My configs are heavily influenced by [this playlist](https://www.youtube.com/playlist?list=PLsz00TDipIffreIaUNk64KxTIkQaGguqn) (and some Google/Reddit/Github searching as needed).
I mostly use it for writing codes for the blog, `LaTeX` notes, and occassional rants, thanks to [neorg](https://github.com/nvim-neorg/neorg).

![NeoVim Screenshot](uploads/nvim-1.jpg)

### Basics & Things That I Find Cool

- **Theme**: [Gruvbox material](https://github.com/f4z3r/gruvbox-material.nvim)
- **Fonts**: [JetBrains Mono Nerd Font](https://github.com/ryanoasis/nerd-fonts/releases/download/v3.2.1/JetBrainsMono.zip). Note that using a nerd-font in the terminal is mandatory as it is optimized to be used with icons.
- **Statusbar**: Basically the bar at the bottom, the one I am using is [lualine](https://github.com/nvim-lualine/lualine.nvim).
- **File explorer**: [nvim-tree](https://github.com/nvim-tree/nvim-tree.lua). However, [neo-tree](https://github.com/nvim-neo-tree/neo-tree.nvim) is popular too.
- **Syntax highlighting**: Treesitter.
- **Completions**: Mason with LSP servers, and some custom snippets for TeX, C++, HTML/CSS.

### VimTeX

As I need to write a lot of stuff in `LaTeX`, it's been a life-saver. `LaTeX` setup with NeoVim as a text editor and Zathura as the PDF viewer is a perfect marriage. Zathura is minimal, more importantly, it supports `SyncTeX`: You can click a particular line in the PDF, which will take you to the line corresponding to the `.tex` file.

> Note: It’s also important to install both the `zathura` and `zathura-pdf-poppler` plugin.

In `~/.config/zathura/zathurarc` add the following:

```ini
set synctex true
set synctex-editor-command "nvr --remote-silent +%{line} %{input}"
```

The code below sets up the default PDF viewer for VimTeX in NeoVim. Add these in `~/.config/nvim/init.lua`:

```lua
vim.g.vimtex_view_method = 'zathura'
vim.g.latex_view_general_viewer = 'zathura'
vim.g.vimtex_compiler_progname = 'nvr'
```

[Here](https://github.com/MeowX-2/nvim/tree/main/snippets/tex) are custom `LaTeX` snippets of my template, which suit Neovim. Thanks to [@nafis277](https://github.com/nafis277) for creating these snippets.
