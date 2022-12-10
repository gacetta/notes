# git

---
## git log
---
a way to view the history of commits

`git log` opens a pager to view all commits (quit with 'q')

**GIT LOG OPTIONS**
Using git log options is a way to control what `log` displays:
(documentation here: https://git-scm.com/docs/git-log)

`git --no-pager log` prints log to terminal (warning - could be lengthy)
`git log --oneline` displays condensed log information
`git log --max-count=2` displays a maximum of 2 commits
`--since='5 minutes ago'` displays all commits since 5 min ago
`--until='5 minutes ago'` displays all commits until 5 min ago
`--author='gacetta'` displays all commits from author
`--all'` displays all commits

**PRETTY FORMATS**
another customizable way to view `git log` information:
(documentation here: https://git-scm.com/docs/pretty-formats)

Some formats to try:
`git log --pretty=oneline`

**FANCY LOG**
`git log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short`

understanding in detail:
- `--pretty="..."` defines the format of the output
- `%h` is the abbreviated hash of the commit
- `%d` are any decorations on the commit (e.g. branch heads or tags)
- `%ad` is the author date
- `%s` is the comment
- `%an` is the author name
- `--graph` informs git to display the commit tree in an ASCII graph layout
- `--date=short` keeps the date format nice and short

---
## Common aliases
---
defined in .gitconfig file in the home directory