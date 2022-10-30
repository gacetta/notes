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

SUE TUTOTRIAL

Create a new branch (branching off of main, please)!  And make some more changes to the Hello.js file (or to any file really).  Then do a commit (or several, depending how bored you are).  You can feel free to push it to GitHub if you want some practice setting upstream and all, or you can leave it locally…you’re choice.

That’s all — we’re just going to need a fresh branch with some changes and commits already made on it for the next lesson.  So do that, then sit tight and I’ll be back with you in a few.

Congrats, I just approved and merged your pull request!  :tada:  Normally, there’d be a step where I’d first review the code in your pull request, I’d write you comments and ask you to make any modifications, you’d make those changes, do a new commit and push those changes for me to review again…lather, rinse, repeat.  And then eventually I’d approve the pull request.  But this code looked PERFECT :blush: so I went ahead and merged it!

Your code is now part of the main branch!  First pull request merged — a big milestone at any company.  Woo-hoo!! :clap::tada:
Now what??

What happens now is that all of us (you, me, Carl in Ohio…) need to make sure we update the main branches on our local machines, so we’re all always working from the most up-to-date version of that “bible” branch.  Otherwise, some people will be working from the new version of that branch, others will be working from the old version….it’s bound to cause a mess.

To update your local main branch, first move over to that main branch locally (git checkout main).  Now we need to pull down the current version of the code that exists on the main branch on GitHub, so that the main branch on our local computer matches the main branch on GitHub.  The command for that, intuitively enough, is git pull    First, though, let’s take a moment to think back to how we have our local branches set up to track remote branches on GitHub.  Remember --set-upstream?  We set an upstream for each branch we created and pushed to GitHub.  (And it was already done for us on the “main” branch when we originally cloned this repo from GitHub.)  So, each branch on our local machine tracks a probably-similarly-named branch on GitHub.  The “main” branch on our local machine tracks the “main” branch in our GitHub repo, “another-branch-michael-made” tracks the “another-branch-michael-made” branch in our GitHub repo, etc.  So, as with git push, if you’re working from the “main” branch on your local machine and you want to pull the changes from the “main” branch on GitHub down into that local “main” branch, all you have to type is  git pull and GitHub will know what to do.

So, confirm that you’re on the main branch on your local machine, then go ahead and do a git pull.  Git will do its thing, giving you a status update of how many files have been changed, etc.  And (barring any complications:crossed_fingers:), when git completes that task, it’ll return you to your standard terminal prompt, and you can go on with your work, knowing that you’re now working from the most recent version of the main branch!  Woo-hoo!  Go ahead, type npm start and check out the newest version of our app in the browser!  Notice anything new? Yeah, I approved my own pull request also.  :blush:  We both had made changes, we both pushed them to GitHub and created a pull request, both our pull requests were approved and the code merged, and now, with git pull, we both now have added all those changes to our local machines’ main branch!

All good!  We can all now create branches off our newly-updated “main” branch and be confident we’re all working from the same starting point!

But wait…what about that branch that you just started and have already made changes to, and now the main branch has changed and your fancy new-branch is out of date because it was branched off the OLD version of the main branch???  :flushed:  Now that new-branch is out-of-date, because you based it on what you THOUGHT was the main branch, before the main branch was changed behind your back!  :face_with_symbols_on_mouth:  Guess you’ll need to start again and redo all that hard work!!!  <sigh>  There really SHOULD be a way that you can pull those new changes that were merged into the “main” branch, into your “new-branch”, without wasting all the work you did before you knew about the changes to “main”!!

And of course there is a way to do that.  :grin:  In fact there are several ways to do that.  FYI, we’re going to pick one way to do it — the company you wind up working for may decide to do it differently!  For the sake of making sure your and my versions of git are configured to behave the same way, before you do the next step, please run the following command to tell git what we want it to do.  You only have to run this code once — it’ll set a global configuration on git (for all repos).  You can easily configure it differently down the line if you decide you want to.  But for now, please run git config --global pull.rebase false  (We’re not going to get into rebasing in this tutorial — later when you have time you can research that and decide if you want to reset that setting to true!)  Now please close VSCode completely and reopen so we know that setting takes effect.

Now, with your practice-git repo open, switch over to your new-branch.  Step #1, before we start pulling new changes from the main branch into new-branch, is to make sure you’ve saved and committed any work you’ve done on new-branch — git won’t let you start merging anything until it knows you have your current work saved, so you can revert back to it later if necessary!  What we’re about to do (pulling in new changes) may indeed alter what you’ve done on this new-branch, and if things go south, as they sometimes do, you want to make sure you have your current version saved!  So go ahead and do a git status, and if there are any changes to this branch that you haven’t yet staged and committed, go ahead and do that now.
Now, in order to pull the current changes from main into this new-branch, we’re going to do another git pull on this branch.  BUT, this time we don’t want to pull changes from the “new-branch” on GitHub (if new-branch even exists on GitHub yet).   If we wanted to do that, a simple git pull would suffice.  Instead, this time we want to pull all changes from the “main” branch on the remote (aka origin) and incorporate them into our local “new-branch”.   The command for that will be git pull origin main  The git pull part of that tells git we want to pull code, origin tells git we want to pull it from the remote, and main tells it that we want to pull from the main branch.  So, confirm that you’re on new-branch locally, then go ahead and run git pull origin main  WITH ANY LUCK, after git has done its thing, you’ll see all the new changes from “main” are now incorporated into your local “new-branch” also!  Success!  :tada:
If you’re NOT so lucky :woozy_face: you’ll wind up with something called a merge conflict.  All that means is that some code that you’ve written on new-branch conflicts with some new code you’re pulling from main, and unfortunately git, as smart as it is, can’t ALWAYS figure out which of those two versions should take precedence!  So git needs you to tell it which version of the code you want to keep.
Git will walk you through resolving the merge conflict, and hopefully they’ll it’ll be clear!  Unfortunately, it may be different on your and my computers, so see what you can do, and feel free to send me a screenshot if you get stuck!  One possible option is that you’ll see code that is highlighted in a couple different colors (on my laptop, a lovely green and blue.)  And probably if you scroll down a button that says “Resolve in Merge Editor”   If you click on that button, it’ll display the two versions of the code side-by-side, so you can easily compare the two, and it’ll say something like “Accept Incoming” and “Accept Current” over each of the two options.  Make your choice, click on either Accept Incoming or Accept Current (or check the box next to the version you want, if that exists…)  In any case, scroll through and pick what version you want of any conflicting code, then click “Complete Merge”.  Then, back in your terminal, type git add . to stage all the changes you just accepted, followed by git commit -m ‘some message’ to commit the latest version.  Done!
Another possibility is that you’ll get a bunch of lines in the terminal starting with one that says “Please enter a commit message to explain why this merge is necessary,”  If that’s the case, first press i which stands for “insert”, then, to accept the default commit message, press “esc”, then type :wq (yes, starting with a colon), and press enter.  No need to do a commit after that version of merging — it’s done for you.
OK, I know all of that was probably a bit confusing, but hopefully you got through it and have gotten at least an overall concept of the git pull workflow.  I wanted you to at least get a taste of it because honestly git pull origin main might be the command you type the most times in your long and storied career!  You’re going to wear out those keys on your keyboard.  Normally you’ll run git pull origin main AT LEAST every morning when you start work, and perhaps several times a day if that main branch gets updated often.  Because you certainly don’t want to go for days working with what you thought was the most current version of the main branch, only to find out days later that you have to do all sorts of modifications because you didn’t realize that the main branch had changed!  So, your day goes something like this:  have morning coffee, sit down at computer, checkout the branch you want to be working on, do git pull origin main, do some work, maybe commit and push some code to GitHub to prove you’ve been productive, go have an early lunch with friends (hope no one notices you were gone more than an hour), come back to desk, do git pull origin main, do a little more work, take coffee break, come back, git pull origin main, etc. until end of day.
Just one more important thing to add:  It’s a very good idea to also get into the habit of running npm install every time you do a git pull!  (Or the shorthand version, npm i )  Just make it a mindless habit:  git pull origin main followed by  npm install.   npm install will check the package.json file for you, and update or add any dependencies that might have changed.  Of course, if there were no changes to the package.json file, running npm install will be inconsequential.  I suppose you could check to see if there were changes to package.json and decide whether to run npm i based on whether anything’s changed.  But that’s kinda just added work.  There’s really no downside to running npm i even if nothing’s changed, and trust me, more than once you’ll save yourself some major panic when you do a git pull, then try npm start and run into a crashing app and all sorts of error messages.  You then spend however-much time trying to debug, until it finally dawns on you that all you needed to do was run npm install.  <sigh>  So make it a habit:   git pull origin main then npm install  You’ll thank yourself later.
OK, that’s it for this lesson.  And really, I think we’re basically done!  But follow up and let me know if you have any questions, and if I think of anything to add I’ll feel free.  :slightly_smiling_face:  Thanks for indulging me — this has been fun to talk through all of this!  Hope it’s been helpful and not overwhelming.  And hope all’s going well with the show!!


OK, pull request approved and branch merged!  Now, BEFORE you start the last lesson, make sure to do this part (need to do it BEFORE you run git pull on the main branch — not sure where you are in the lessons.  The instructions below were from the October 2 message.)

Create a new branch (branching off of main, please)! And make some more changes to the Hello.js file (or to any file really). Then do a commit (or several, depending how bored you are). You can feel free to push it to GitHub if you want some practice setting upstream and all, or you can leave it locally…you’re choice.

Typical day:
Get coffee, sit down to start work
`git pull origin main`
`npm install`
Do some work on the most up to date version of the file (even though you're not working on the main branch)
Take lunch, come back a while later.  Code might have changed!
`git pull origin main`
`npm install`
Do some more work on the most up to date version (even if nothing has changed, you're sure it hasn't)
ETC.

## Conventional Commits

The commit message should be structured as follows:

    <type>[optional scope]: <description>

    [optional body]

    [optional footer(s)]

The commit contains the following structural elements, to communicate intent to the consumers of your library:

1. `fix:` a commit of the _type_ `fix` patches a bug in your codebase (this correlates with `PATCH` in Semantic Versioning).

2. `feat:` a commit of the _type_ `feat` introduces a new feature to the codebase (this correlates with `MINOR` in Semantic Versioning).

3. `BREAKING CHANGE:` a commit that has a footer `BREAKING CHANGE:`, or appends a `!` after the type/scope, introduces a breaking API change (correlating with `MAJOR` in Semantic Versioning). A `BREAKING CHANGE` can be part of commits of any _type_.

4. _types_ other than `fix:` and `feat:` are allowed, such as `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, and others.

5. footers other than `BREAKING CHANGE: <description>` may be provided and follow a convention similar to git trailer format.

Additional types are not mandated by the Conventional Commits specification, and have no implicit effect in Semantic Versioning (unless they include a BREAKING CHANGE). A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., `feat(parser): add ability to parse arrays.`

### Conventional Commit Examples

**Commit message with description and breaking change footer**

    feat: allow provided config object to extend other configs

    BREAKING CHANGE: `extends` key in config file is now used for extending other config files

**Commit message with ! to draw attention to breaking change**

    feat!: send an email to the customer when a product is shipped

**Commit message with scope and ! to draw attention to breaking change**

    feat(api)!: send an email to the customer when a product is shipped

**Commit message with both ! and BREAKING CHANGE footer**

    chore!: drop support for Node 6

    BREAKING CHANGE: use JavaScript features not available in Node 6.

**Commit message with no body**

    docs: correct spelling of CHANGELOG

**Commit message with scope**

    feat(lang): add Polish language

**Commit message with multi-paragraph body and multiple footers**

    fix: prevent racing of requests

    Introduce a request id and a reference to latest request. Dismiss
    incoming responses other than from latest request.

    Remove timeouts which were used to mitigate the racing issue but are
    obsolete now.

    Reviewed-by: Z
    Refs: #123

### Conventional Commit Types

- `build:` The commit alters the build system or external dependencies of the product (adding, removing, or upgrading dependencies).

- `change:` The commit changes the implementation of an existing feature.

- `chore:` The commit includes a technical or preventative maintenance task that is necessary for managing the product or the repository, but it is not tied to any specific feature or user story. For example, releasing the product can be considered a chore. Regenerating generated code that must be included in the repository could be a chore.

- `ci:` The commit makes changes to continuous integration or continuous delivery scripts or configuration files.

- `deprecate:` The commit deprecates existing functionality, but does not remove it from the product. For example, sometimes older public APIs may get deprecated because newer, more efficient APIs are available. Removing the APIs could break existing integrations so the APIs may be marked as deprecated in order to encourage the integration developers to migrate to the newer APIs while also giving them time before removing older functionality.

- `docs:` The commit adds, updates, or revises documentation that is stored in the repository.

- `feat:` The commit implements a new feature for the application.

- `fix:` The commit fixes a defect in the application.

- `perf:` The commit improves the performance of algorithms or general execution time of the product, but does not fundamentally change an existing feature.

- `refactor:` The commit refactors existing code in the product, but does not alter or change existing behavior in the product.

- `remove:` The commit removes a feature from the product. Typically features are deprecated first for a period of time before being removed. Removing a feature from the product may be considered a breaking change that will require a major version number increment.

- `revert:` The commit reverts one or more commits that were previously included in the product, but were accidentally merged or serious issues were discovered that required their removal from the main branch.

- `security:` The commit improves the security of the product or resolves a security issue that has been reported.

- `style:` The commit updates or reformats the style of the source code, but does not otherwise change the product implementation.

- `test:` The commit enhances, adds to, revised, or otherwise changes the suite of automated tests for the product.