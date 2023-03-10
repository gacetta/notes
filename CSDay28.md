# Ideation STAGE 1

Build things that:

1. challendge you technically
2. solve problemsn you face as developers or customers
3. Are sensitive to each team member's priorities

Structure:

- at whiteboard or google doc, list team member's priorities (may be technical, learning, product priorities)
- generate 10-15 ideas
- asses each idea against core goals (including list of individual priorities)
- may require additional research into feasibility maybe some MVP coding
- return to idaes and reassess based on research/MVP coding

TIPS:

- common themes, then maybe try to generate a bunch of ideas around that theme
- avoid becoming overly attached to a project
- avoid separating from group and devloping ideas independently. focus on collaborative approach

# STAGE 2- 5

2. refine scope, start small with MVP
3. complete brief
4. execute into the unknown
5. iterate

PRIORITIES: async/await, useContext, trello board

# SCRUM workflow

A progress board is created, where project tasks are divided across a team, and managed incrementally to completetion

Dev team works on tasks in one to two week stretched, called sprints.

# TEAM

Product Owner - defines priorities and has final sign-off on completed features.
Scrum Master - manages the scrum board, assigns tasks, and makes sure the team follows a specific workflow
Development Team - works on assigned tasks in organized sprints, through completion. Provides feedback on progress.

Meet twice a day. Morning and Mid-day

# Process - SCRUM BOARD

- `stories`: represent the various requirements that must be met in order to build the product.
- `to be started`: stories are split up into a number of tasks. These tasks should be clear, concise, and achievable within the current sprint.
- `in progress`: devs take ownership of tasks from "To Be Started" column and move them to 'In Progress'
- `verify`: once a task has reached the testing phase, it is moved into this column.
- `done`: once tested successfully, tasks are moved to a done list when completed.

ASANA

# Daily Standups

course of a spring cycle, team meets daily for 15-min review of current sprint

Questions asked by scrum master:

1. What did you do yesterday to work towards your sprint goals?
2. what are you doing today to work toward your goals?
3. are you encountering roadblocks?

---

# Advanced GIT & GitHub

---

## Fork and Pull

the method we use during codesmith

## Collaboration

Two ways on GitHub:

1. `Organizations`: account owner can create many teams with differeing permission level for various repos
2. `Collaborators`: repo owner can add collaborators with read and write access to a single repo

## Pull Requests

Two models:

- `Fork & Pull Model` (WORKFLOW A): public repo for which we don't have push (write) access
- `Shared Repository Model` (WORKFLOW B): Used in a private repo for which we do have push access. (Fork is not required in this case)

# WORKFLOW A

used commonly across public GitHub. Used for open source

1. Create organization and repo
   a. create an organization for the group[. create a repo within the organism
   b. create application boilerplate (as a group)

- before everyone forks and clones, setup basic folder / file structure as well as some basic files.
- one person should fork and clone the initial organization repo (probably Owner)
- everyone works on setting it up

2. fork
3. clone
4. create new feature branch
   as best practice, make changes to a `feature-branch`
   `git checkout -b [new-feature]`
5. Push to origin
6. Submit a Pull Request

- navigate to [new-feature] branch.
- click on pull request
  6b. PR specifics to include:
- the `problem` you were solving
- your `solution` to the problem: why did you solve this problem the way you did?
- Any notes on `testing` this functionallity
- (optional) include screenshots / gifs

7. Merge the PR

- review changes
- then click Merge button to merge request into the main branch

# Requiring updates from upstream remote

1. as you're developing in your feature branch, you'll want to pull in updates from the original upstream branch.
2. Do this by adding an upstream alias and fetching.
3. Git pull will update your working directory and local .git directory

# git merge

mergin is the safest way to copy changes from one branch to another
`git checkout [new-feature]`
`git merge master`

# Workflow B

1. create organization
2. create boilerplate as a group

- everyone work together to create boilerplate repo

3. initialize main & dev branches

- main branch only for production
- dev branch is during development
- set up restrictions to require at least 2 reviews before merging into either branch

4. each member clones repo
5. Create a new feature branch
   as a best practice you'll make changes to a 'feature-branch' Depending on your feature you may branch off on Master or Dev. _NOTE_ add your name 'Michael/navBar'
6. make your updates and
   6b. merge updates from dev

- switch to dev branch
- pull any current updates from dev
- switch back to you 'feature branch'
- merge in the changes
- resolve any conflicts

7. Push updates to Repo
8. Create Pull Request
9. Submit a Pull Request
10. Review Pull Request

# adding multiple users to a single commit

1. collect the name and email for each co-author. if a person chooses to keep; their email address private, you should use their github provided no-reply email
2. type commit message with no closing quote. two empty lines, then emails
