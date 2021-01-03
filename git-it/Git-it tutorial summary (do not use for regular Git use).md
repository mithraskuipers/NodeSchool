# Get Git #

[Install Git on your computer and configure your name and email]

## Install Git

Download git from https://git-scm.com/download/win
Automatically adds git to path.

## Configure Git
git config --global user.name "Mithras Kuipers"
git config --global user.username "mithraskuipers"
git config --global user.email "mithraskuipers@gmail.com"

# Repository #

[Create a new repository on your computer]

Note: This title actually makes no sense. A repository is a directory that lives on a GitHub server.
What you will actually learn here is to dedicate a local directory to be synchronized with your
GitHub directory.

## Repositories

A repository is a collection of related items. 
In the case of writing software it is a collection of files related to a software project, 
like a project folder with all relevant files inside it. That is actually what it will 
look like on your computer. Sometimes they're called "repos" for short.

You tell Git what your project is and Git will start tracking all of the changes to that folder.
This process makes it a "Git repository", which is a folder of items being tracked by Git.

A Git repository is a repository in which Git tracks when files are added, subtracted, 
or even a single letter in a file is changed. It also tracks who did the changes and when it is tracked by Git.

In software, tracking changes this way is called "version control"

## Using Terminal

Terminal (or Bash) is a way to instruct your computer to do things by typing commands instead of clicking 
applications with a mouse. You can even use a text editor for code in your terminal, like Vim, so that you
never have to leave.

You can use programs in Terminal that have a command-line interface (CLI), meaning that they can be run 
with commands in terminal. Git is one of these programs. 

In Git-it you'll learn a few basic command-line actions (in addition to Git commands) for navigating your 
computer.

## Create a Repository

### Initilize Git repository
1. Browse in CMD to desired Git repository
2. git init
3. Double check whether it is Git repository:
	git status

# Commit To It #

[Create a file in your new repository, add something to that file and commit that change with Git]

## Commits
The concept of "commits" are essential in Git.
Commits are the moments you SAVE and DESCRIBE the work you have done. 
They are the ticks in the timeline of your project's history.

### Add file to your Git directory
This file has to be already inside your Git directory

If you try to add a file that it outside of your Git directory you will get an error, such as:
fatal: not a git repository (or any of the parent directories): .git

1. git add <file_name>
2. git commit -m "<comment message>"

### Add all new files in the Git directory
git add .

### Check file differences
Suppose you add'd and commit'd a newer version of a file that was already added to your repository
you can use Git to view the differences between the current file and how it was at your last commit.

git diff

#### Command overview
Check status of changes to a repository
git status
View changes to files
git diff
Add a file's changes to be committed
git add <FILENAME>
To add all files changes
git add .
To commit (aka save) the changes you've added with a short message describing the changes
git commit -m "your commit message"

# GitHubbin #

## Working Better, Together

# Remote Control
Connect your local repository to a remote one and push changes to it.

## Remotes
When you add and commit something from your local computer to GitHub, 
it means that a copy of your file lives on one of GitHub's servers. 
This makes your GitHub repository a REMOTE repository because it is not on your computer.

By "pushing" you "local" copies to your GitHub repository you keep your remote repository up-to-date.

Because you always have a local copy of the file(s) you have pushed, there is no need to download
the files again from your remote repository.

However, suppose you work together with someone else, that other person might not have the same local files as you.
For this person to have the same local files as you that person needs not to "push" but instead "pull" the 
changes from the remote onto his computer.

This way everyone can work together on a project without needing access to your locally stored copies.

## Create a Remote Repository
To sync a local version with one stored on GitHub.com first create a new remote repository on GitHub.com
1. Go to github.com
2. log in
3. click on the + icon in the top right corner
4. click on New repository
5. Give it a name that matches your local repository's name and give it a description.
6. Make it public.
7. Leave .gitignore and license set to none.
8. Click create repository.

## Connect your Local to your Remote
Now you learn how to add sync a local folder to your newly made github repository.
You need to tell Git to remember a particular address of the remote folder on GitHub's servers.
Note: You can have multiple remote folders, thus each remote folder requires a name.
The primary remote folder is typically named "origin"

### Connect your local folder to your primary remote folder.
After these steps your local repository now knows where your remote repository (named origin) lives on GitHub's servers.

At the top of your newly created remote repository you see "Quick Setup".
1. Select the HTTPS button
2. Copy the address. This address is the address of your repository on GitHub's servers.
3. git remote add origin <github_address>

e.g. 
git remote add origin https://github.com/mithraskuipers/test.git

Note: If you have Windows and use GitHub Desktop, then a remote named 'origin' is autom. created in your
local repository. In that case you only need to tell what URL to associate with origin.
Use this command instead of the git remote add command:

git remote set-url origin <github_address>

## Push Work to your Remote
This means that you want to send everything you did locally to your remote repository on GitHub.
This is something you will do so that your remote version is up to date and matches the state of your local version.

Important:
Git uses a branching system, such that you can work on different parts of a project at different times.
By default the first branch is named "master". When you push to, or pull from, a project you tell Git
the branch name you want and the name of the remote that it lives on.

1. git push origin master

Check whether everything was synced by going to your remote repository's page on GitHub.com.

### Command overview
Add remote connections
git remote add <REMOTENAME> <URL>
Set a URL to a remote
git remote set-url <REMOTENAME> <URL>
Pull in changes
git pull <REMOTENAME> <BRANCHNAME>
View remote addresses
git remote -v
Push changes
git push <REMOTENAME> <BRANCH>

# Forks and Clones #

[Fork a project from GitHub.com and clone it locally]

## Forks
Instead of syncing your local work to a remote server, you can also work with other people and other projects.
When you "fork" a repository you create a copy of it on your GitHub account (yes remotely, not locally!).
You forked copy begins its life as a remote repository. 

Forks are used for creating your own version of a project.

This divesion from the original is like taking a fork in the road or contributing back your changes to the original project.

To get a forked repository from your GitHub account onto your local computer, you "clone" it.

First you fork a repository from someone else (= copy to your GitHub account).
Then you clone this copy to your local machine.

This cloning action copies the remote repository such that you can work on it locally.

## Fork the Patchwork Repository

We will now work with a project located at github.com/jlord/patchwork.
0. Log in to github.com
1. Go to github.com/jlord/patchwork
2. In the top right corner click on "Fork".
3. Wait until the forking animation is done. You have a copy on your account.
4. Copy your fork's HTTP URL from the address bar in your browser (e.g. https://github.com/mithraskuipers/patchwork)

## Clone your Fork Locally
1. git clone <fork's HTTP URL>

example
git clone https://github.com/mithraskuipers/patchwork

E.g. go to the root of your general local Git folder. 
And run git clone https://github.com/mithraskuipers/patchwork
You will now have a new folder inside this general local Git folder, named "patchwork"

2. cd patchwork

You now have a copy of the repository on your computer and it is automatically connected
to the remote repository (your forked copy) on your GitHub account.

See whether you have set up the correct addresses
3. git remote -v

example output
C:\Users\Mithras Kuipers\Documents\MEGA\NodeSchool\Git-it\patchwork>git remote -v
origin  https://github.com/mithraskuipers/patchwork (fetch)
origin  https://github.com/mithraskuipers/patchwork (push)

## Connect to the Original Repository
What if the original repository, that you forked, happens to frequently change?
You are able to pull in those changes as well! 
Instead of using git clone <fork's HTTP URL>, use git remote add upstream <github remote url>.git

example
git remote add upstream https://github.com/jlord/patchwork.git

### Command overview
Add a remote
git remote add <REMOTENAME> <URL>
Change a remote URL
git remote set-url <REMOTENAME> <URL>
View remote connections
git remote -v

# Branches Aren't Just For Birds #

Add a branch, locally, to your forked repository to work on your changes.

## Branches
Git repositories use branches to isolate work when needed. 
It's common practice when working on a project or with others on a project to 
create a branch to keep your working changes in. This way you can do your work 
while the main, commonly named 'master', branch stays stable. When the work on 
your branch is finished you merge it back into the 'master' master branch.

You can literally branch off of your master branch, then do some work, 
and then merge your updates back into the 'master'.

You can even branch off of a branch if you need to.
That is, the master branch does not need to be the base.

## GitHub Pages
GitHub will automatically serve and host static website files in branches named 'gh-pages'. 
This free service is called GitHub Pages. 

Since the project you forked creates a website, its main branch is named 'gh-pages' instead of 'master'. 

All repositories that have a 'gh-pages' branch with website files can be found, live online, using this pattern for the URL:

http://githubusername.github.io/repositoryname


## Create a branch
When you create a branch, Git copies everything from the current branch you're on and places 
it in the branch you've requested be made.

While still inside of your local 'patchwork' repository, type git status to see what branch 
you're currently on. Git should reply that you're on the 'gh-pages' branch.

example output:
C:\Users\Mithras Kuipers\Documents\MEGA\NodeSchool\Git-it\patchwork>git status
On branch gh-pages
Your branch is up to date with 'origin/gh-pages'.

git branch <BRANCHNAME>

Now you have a branch with a new name that is identical to 'gh-pages'.

Branches are case-sensitive so name your branch exactly the way your GitHub name appears.

To go into that branch and work on it you checkout a branch. Go on your new branch:

git checkout <BRANCHNAME>

## Create a new file
- Create new file named "add-<USERNAME>.txt" where username is your username. E.g. "add-mithraskuipers.txt"
- In this file write your GitHub username. E.g. "mithraskuipers"
- Save this file in the "contributors" folder in Patchwork. That is, Patchwork/contributors/add-mithraskuipers.txt

## Check-in
Go through the steps for checking in a project
1. git status
2. git add <contributors/FILENAME>
3. git commit -m "commit message"
git push origin <BRANCH NAME>