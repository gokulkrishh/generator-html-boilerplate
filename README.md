html-boilerplate
=================

A simple HTML5 Boiletplate generator to create a site with help of gulp.js. If you don't know what is gulp.js and how it works go here: [Automation using grunt and gulp](http://gokulkrishh.github.io/2014/10/27/Task-Automation-using-grunt-and-gulp/)

## Get Started, Install Dependency Packages through terminal:

If you dont have node, then go to http://nodejs.org/

```bash
$ npm install -g yo
$ npm install -g gulp
```

## Install generator now:

```bash
$ npm install -g generator-html-boilerplate
```

First create a folder and cd into:

```bash
$ mkdir <folder-name> && cd $_
```

Create a new application with:

```bash
$ yo html-boilerplate <app-name> (or) yo html-boilerplate
```

Everything is set, npm will automatically install, if not:

```bash
$ npm install
```

Save the pain of copy pasting library files like jQuery, Bootstrap etc

Gulp will take care of including it in the build without stopping the local server. Just type below command in terminal.

```bash
$ bower install --save <library-name>
```

## Finally, type:

```bash
$ gulp
```

## Get list of tasks

```bash
$ gulp help
```

## If your code is ready to production, use below command

```bash
$ gulp prod
```

The above command will uglify and minify HTML, CSS and JS files.

## If you think this generator can be improved even more, create an issue and give me a pull request


## License

The MIT License
Copyright (c) 2014 gokulakrishnan (http://gokulkrishh.github.io/).

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
