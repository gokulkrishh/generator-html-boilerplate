html-boilerplate
=================

A simple html generator to create a site with help of gulp.js

## Get Started, Install Dependency Packages through terminal:

If you dont have node, then go to http://nodejs.org/

```bash
$ npm install -g yo
$ npm install -g bower
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

Create new application with:

```bash
$ yo html-boilerplate <app-name> (or) yo html-boilerplate
```

Everything is set, npm will automatically install, if not:

```bash
$ npm install
```

Save the pain of copy pasting libraries

Gulp will take care of including it in the build without stopping the local server. Just type below command.

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

## If you think generator can be improved even more, give me a pull request

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
