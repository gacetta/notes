# What is Git?

## Event Planner Analogy  
You're planning an event with a team of colleagues.  You're on a desert island with no internet and only using physical coppy of the guest list.  How would you collaborate?  

* Scenario 1 - main central binder
    * only one master binder at a location (your place)
    * each collaborator visits you to make an entry
* Scenario 2 - maintain local binders
    * each collaborator maintains their own binder.
    * merge party to merge all your entries, finalize what goes into the even.  Some entries may be duplicates.  Someone will have to manually look over this merge to avoid duplicates
* Scenario 3 - magic binders
    * each collaborator has a magic binder with a sync button and a push button.
    * when you hit the push button, you send an updated guest list to everyone.  
    * when you hit sync button, you receive the latest updated version that was pushed
    * RESULT - everyone can work on their own, more efficient, if a binder is lost, someone else has a backup

---
## Git (not GitHub)
Not to be confused with GitHub

`Git` is a free, open-sourced distributed version control system

It stores files over a period of time (like snapshots).  You can revert to old versions if something should fail.  Back up versions and tracks changes (who made them, what they were, when they were made)

---

## History

`Version control` is method in keeping track of changes to a file or program.  

Local Version Control System:  
* One method is saving a new file with an updated name each time a change is made: version1.txt, version2.txt, version3.txt etc.  
* This "version database" is local to one user's computer

Centralized version control system:  
* Another method is to keep a version database on a central server.  The most up to date version is available on that server and everyone can access it.  
* It's equivalent to scenario 1 of checking out the master binder.

Distributed version controlled system / `git`:
* Everyone has access to all the files at all time.  
* Magic Binders
* Everyone has a clone of the server computer.  
* Back ups if the server fails
---
## Git Basics
2 ways to get a project locally:  
* Upload a project from local and turn that into a Git repo
* clone an existing repo

3 States:
* `Modified` - file is changed but not committed to database
* `Staged` - file is marked as ready to be part of the next commit snapshot
* `Committed` - data uploaded to local database (push).

Main Commands:
* `git clone` - points to an existing repo and makes a copy of its content to your local system in the current working directory
* `git init` - initializes a repository locally.  Use if you want to take a local project folder and push that to GitHub
* `git add file_name` (or git add .) - adding all files to track, send to staging, etc.
* `git commit -m "commit message"` - captures a snapshot of the files as is.  Essentially in the "staging" state
* `git push` - interacting with the server repository

Additional Useful Commands:  
* `git status` - shows modified files in working directory, staged for your next commit.
    * `git status -s` is a shorter version
    * first column is the staging area status, second column is working tree status
* `git log`
* `git remote - v` - shows the location of the server you are currently interacting with 
* `git fetch <remote>` - pulls all data that isn't available locally, but does not modify what is currently being worked on 
* `git pull` - pulls all data and merges with current files

Merging and Merge conflicts - (similar to duplicate files on dropbox...)

---
## Branching
* Main line of development (master branch / main) and continue to do work without messing with the main line
* in other VCS, one would have to create a copy of code and this can get messy and time-consuming
* switching between branches can happen very quickly
* git encourages workflows that branch and merge often, even multiple times a day
* `git checkout branchName` reassigns the `HEAD` to point to `branchName` (`HEAD` points to `master` by default)
---
## GitHub Issues
A way to give feedback about a file.  Such as "There is a typo in line 55" or "There is a misspelled word in line 20"  

Each issue has an id number so you can respond to specific issues in the messages of commits.  Such as "I fixed the typo as per #10."
* the issue will be closed if your comment uses the syntax "fixes #id" such as "This fixes #10"

Additionally, each commit has a `hash` which is a unique id that can be used to reference each commit.  If that `hash code` is pasted into an issue comment, it will appear as a link.  

---
## Git and GitHub for Projects

### Questions
- do you typically `git fetch` before a `git pull`?
- dealing with merge conflicts?  Does that require a meeting of everyone who has worked on the file?
- 

### Forking vs Pull Request
**Fork** is taking someone's repo and copying it into your own repo.  Now you can make changes and do whatever you want without affecting the original repo.
**Pull Request** is asking to add something to the original repo that was forked.  **push** and **pull** are funny terms.  **Push** is sending information _away from the source_ and **Pull** is collecting information _towards the source_.  So a **pull request** is saying "would you please, original repo, pull my changes?"

---
## Git Cheat Sheet
---
## Setup
Configuring user information used across all local repos
* `git config --global user.name “[firstname lastname]"` - sets a name that is identifiable for credit when review version history
* `git config --global user.email “[valid-email]”` - set an email address that will be associated with each history marker
* `git config --global color.ui auto`
set automatic command line coloring for Git for easy reviewing

---
## Setup & Init
Configuring user info, initializing and cloning repos
* `git init` - initialize an existing directory as a Git repository
* `git clone [url]` - retrieve an entire repository from a hosted location via URL
---
## Stage & Snapshot
Working with snapshots and the Git staging area
* `git status` - shows modified files in working directory, staged for your next commit
    * `git status -s` shows less verbose output
* `git add [file]` - add a file as it looks now to your next commit (stage)
* `git reset [file]` - unstage a file while retaining the changes in working directory
* `git diff` - diff of what is changed but not staged
* `git diff --staged` - diff of what is staged but not yet commited
* `git commit -m “[descriptive message]”` - commit your staged content as a new commit snapshot
---
## Branch & Merge
Isolating work in branches, changing context and integrating changes

* `git branch` - list your branches. a `*` will appear next to the currently active branch
    * "oh-my-zsh" defaults to scrollable `pager` display.  To avoid this behavior use `git --no-pager branch`
* `git branch [branch-name]` - create a new branch at the current commit
* `git checkout` - switch to another branch and check it out into your working directory
* `git merge [branch]` - merge the specified branch’s history into the current one
* `git log` - show all commits in the current branch’s history
---
## INSPECT & COMPARE
Examining logs, diffs and object information
* `git log` - show the commit history for the currently active branch
* `git log branchB..branchA` - show the commits on branchA that are not on branchB
* `git log --follow [file]` - show the commits that changed file, even across renames
* `git diff branchB...branchA`- show the diff of what is in branchA that is not in branchB
* `git show [SHA]` - show any object in Git in human-readable format
---
## TRACKING PATH CHANGES
Versioning file removes and path changes
* `git rm [file]` - delete the file from project and stage the removal for commit
* `git mv [existing-path] [new-path]` - change an existing file path and stage the move
* `git log --stat -M` - show all commit logs with indication of any paths that moved
---
## IGNORING PATTERNS
Preventing unintentional staging or commiting of files

    logs/
    *.notes
    pattern*/

Save a file with desired paterns as `.gitignore` with either direct string matches or wildcard globs.

`git config --global core.excludesfile [file]` - system wide ignore patern for all local repositories  

---
## SHARE & UPDATE
Retrieving updates from another repository and updating local repos
* `git remote add [alias] [url]` - add a git URL as an alias
* `git fetch [alias]` - fetch down all the branches from that Git remote
* `git merge [alias]/[branch]` - merge a remote branch into your current branch to bring it up to date
* `git push [alias] [branch]` - Transmit local branch commits to the remote repository branch
* `git pull` - fetch and merge any commits from the tracking remote branch
---
## REWRITE HISTORY
Rewriting branches, updating commits and clearing history
* `git rebase [branch]` - apply any commits of current branch ahead of specified one
* `git reset --hard [commit]` - clear staging area, rewrite working tree from specified commit
---
## TEMPORARY COMMITS
Temporarily store modified, tracked files in order to change branches
* `git stash` - Save modified and staged changes
* `git stash list` - list stack-order of stashed file changes
* `git stash pop` - write working from top of stash stack
* `git stash drop` - discard the changes from top of stash stack

---

## From Sue Tutorial
---
### Git vs GitHub
In a nutshell:  Git is local to your machine, GitHub is in the cloud.  Git is personal to you, GitHub can be shared with others.

---
`git status` - will show the current status of `git`.  What branch you're on, what has been commited, what changes are not staged for commit, etc.

---
`git restore` - what you use when you realize you made changes that you don’t want and just need to get back to the way the code was before you started screwing around with it!

To restore one file, add the file name:  
        
    git restore src/Components/Hello.js

To restore all changed files, use the period shorthand:

    git restore .

`restore` can also be used to `unstage` a file before `committing`.

    git restore --staged file-path

or

    git restore --staged .

---
`git branch` - returns a list of all the branches on the current machine and which one is currently in use

    git branch

**NOTE:** `git branch` defaults to pager view (`q` to quit).  To view in-terminal, use:

     git --no-pager branch


To delete a branch, use the `-d` flag:

    git branch -d branch-name-to-delete

**NOTE:** you must be on a branch OTHER than the branch you want to delete to successfully delete a branch.

---
`git checkout` - navigates to a different branch.  

    git checkout another-branch

To create a new branch, use the `-b` flag:

    git checkout -b new-branch

NOTE: when you create a new branch, you're ccreating a copy of the current branch you're working on when you type the command.

---
`git add` - moves a file to the staging area.

For a single file:

    git add file-path

For multiple files:

    git add .

---

`git commit` - is how we commit changes.

    git commit -m 'Message for the commit'
    git commit -m "Double quotes work as well"

---

`git log` - shows a history of all the commits made so far on the branch

    git log

Sometimes `git log` shows too much info, so the shorter version:

    git log --oneline

---
`git diff` - shows what's changed between files (only works before a commit)

    git diff

To show differences in just ONE file:

    git diff file-path
---
`git reset` - reverts to an earlier commit on the branch

    git reset commitNumber

---
`git push` - how we push our branch to GitHub

    git push --set-upstream origin your-branch-name

`--set-upstrem` tells git that we want to create a link between our local branch and a branch in our remote repository  

`origin` refers to the remote repository.  origin = remote  

`your-branch-name` refers to the name of the remote branch you want to have linked to your local branch.  If a remote branch by the name you indicate already exists in your GitHub repo, your local branch will get linked to that existing remote branch.  If a remote branch by that name doesn’t yet exist (which is normally the case), git/GitHub will automatically create a branch with that name on GitHub.

**NOTE:** you only have to `--set-upstream` once in the lifespan of a branch.

**NOTE:** the shorthand for `git push --set-upstream origin your-branch-name` is `git push -u origin your-branch-name`

---
