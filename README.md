# jGrunt

> A Grunt-init template for creating Joomla! 3.0 CMS components.

[node.js]: http://nodejs.org/
[grunt-init]: http://gruntjs.com/project-scaffolding
[grunt]: http://gruntjs.com

## Installation
This application requires [node.js][], [grunt][] and [grunt-init][] to be installed.

Once grunt-init is installed, place this template in your `~/.grunt-init/`
directory. It's recommended that you use git to clone this template into that
directory, as follows:

```
git clone https://github.com/pfitzer/jGrunt.git ~/.grunt-init/jGrunt
```

_(Windows users, see [the documentation][grunt-init] for the correct
destination directory path)_

## Usage

At the command-line, cd into an empty directory, run this command and follow
the prompts.

```
grunt-init jGrunt
```

Then install all dependencies.

```
npm install
```

All the files for the component are located in the directory named `component`, this is where all your development happens. 

To create a zipped file for your component run the command below.

```
grunt build
```

Your file will be saved in the directory named `build`.

_Note that this template will generate files in the current directory, so be
sure to change to a new directory first if you don't want to overwrite existing
files._

## Contribute

Feel free to do so.
