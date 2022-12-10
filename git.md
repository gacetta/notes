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

---
## checkout
---
the checkout command will copy any snapshot from the repo to the working directory.
`git checkout <commit-hash>`

checkout is also used for switching branches.

---
## tag
---
`git tag <tag-name>` allows you to name a commit for later reference
`git tag` lists all available tags

tags will be listed in `log` as well


---
## Questions
---
- I now understand that GitHub is not dropbox.  It's not about files / folders AKA organization.  It's about project storage and accessibility.
- With that understanding, I now realize that you may have 100s or 1000s of repos in your account.  Since there's no real organization, and since it's dangerous to rename repos, does that mean you have a base folder on your local machine, say CODING, that corresponds to your github account?  And as a result contains 100-1000 folders that are linked to your repo.  Hopefully the naming is good so you can find it when you need.
- Follow up, dropbox has a selective sync feature if you don't want to store files locally.  Can you do that with github?  If you're not using a repo any more, can you just delete it locally and then clone it if you need it?
- If I chose Dropbox/Coding as my location for all my repos, is that a good idea or bad idea?
