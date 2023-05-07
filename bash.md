# Bash / Shell Scripting
Scripts to execute in bash shell terminal

## Getting Started
Script file should start with `#!/bin/bash` on it's own line - Tells the computer what type of interpreter to use for the script.

_BEST PRACTICE_ - save commonly used scripts in `~/bin/` directory

Script files need to have execute permission.  To give the file `script.sh` permission: `chmod +x script.sh`

Your terminal runs a file every time it is opened to load its configuration. On Linux style shells, this is `~/.bashrc` and on OSX, this is `~/.bash_profile`. To ensure that scripts in `~/bin/` are available, you must add this directory to your PATH within your configuration file:

  PATH=~/bin:$PATH

Now any scripts in the `~/bin` directory can be run from anywhere by typing the filename.

To run script: `./script_name.sh`

## Variables
SET VARIABLE greeting to "Hello":
`greeting="Hello"`

**NOTE:** no space between variable name, equals or "hello"

ACCESS VARIABLE greeting with `$` followed by variable name:
`$greeting`

## conditionals
`if` followed by condition in `[ condition... ]` 
**NOTE:** leave a space between bracket and conditional statement
`then` runs code for condition met
`else` runs code for condition not met

`fi` closes the conditional (backwards `if` like closing parenthesis)

  if [ $index -lt 5 ]
  then
    echo $index
  else
    echo 5
  fi

### comparing numbers
Equal: `-eq`
Not equal: `-ne`
Less than or equal: `-le`
Less than: `-lt`
Greater than or equal: `-ge`
Greater than: `-g`t
Is null: `-z`

### comparing strings
Equal: `==`
Not equal: `!=`

_BEST PRACTICE_ - put variable into quotes to prevent errors for null or spaces

## loops
three loops: `for`, `while`, `until`

FOR LOOP
used to iterate through a list and execute action for each step

  for word in $paragraph
  do
    echo $word
  done

WHILE LOOP - loops while the condition is true
UNTIL LOOP - loops until the condition is true

  while [ $index -lt 5 ]
  do
    echo $index
    index=$((index + 1))
  done

**NOTE:** arithmetic in bash scripting uses the `$((...))` syntax and within the brackets the variable name is not prepended with a `$`.

## inputs

### user input
ask the user for input and save it to a variable:
  
  echo "Guess a number"
  read number
  echo "You guessed $number"

### input arguments when calling script
These arguments are entered after the script name and are separated by spaces:

  saycolors red green blue

access arguments using `$1`, `$2`, `$3` where $1 = red
**NOTE:** these are 1 indexed

A script can accept an indefinite number of input args and iterate over them using `$@`.  For the above example:

  for color in "$@"
  do
    echo $color
  done

### access external files
You can assign a set of files to a variable name using standard bash pattern matching using regular expressions. For example, to get all files in a directory, you can use the * character:

  files=/some/directory/*

You can then iterate through each file and do something:

  for file in $files
  do
    echo $file
  done

#### head
The head command reads the first few lines of any text given to it as an input and writes them to standard output (which, by default, is the display screen).

head's basic syntax is:

    head [options] [file(s)]

The square brackets indicate that the enclosed items are optional. By default, head returns the first ten lines of each file name that is provided to it.

`-n` flag can be used to specify how many lines to read
`-c` flag can be used to specify how many bytes to read

EX: 

  firstline=$(head -n1 ./source/changelog.md)

#### read
Read a line from the standard input and split it into fields.

The line is split into fields as with word splitting, and the first word is assigned to the first NAME, the second word to the second NAME, and so on, with any leftover words assigned to the last NAME.  Only the characters found in $IFS are recognized as word delimiters.

If no NAMEs are supplied, the line read is stored in the REPLY variable.

Options:
-a array	assign the words read to sequential indices of the array variable ARRAY, starting at zero
-d delim	continue until the first character of DELIM is read, rather than newline
-e	use Readline to obtain the line


## aliases
You can set up aliases for your bash scripts within your .bashrc or .bash_profile file to allow calling your scripts without the full filename. For example, if we have our saycolors.sh script, we can alias it to the word saycolors using the following syntax:

  alias saycolors='./saycolors.sh'

we could even add standard input arguments to an alias:

  alias saycolors='./saycolors.sh "green"'

In your own environment, you could add this alias to your `~/.bashrc` to make the alias active every time the terminal is started.

## arrays
