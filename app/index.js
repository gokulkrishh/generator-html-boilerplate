'use strict';

var yeoman = require('yeoman-generator'),
		yosay  = require('yosay'),
		chalk  = require('chalk');


var generator = yeoman.generators.Base.extend({

	init : function () {
		this.log(yosay('Welcome to html-boilerplate tool powered by yeoman && gulp'));
		this.log(chalk.yellow('Author : gokulkrishh (http://github.com/gokulkrishh) \n'));

		//In end install dependencies
		this.on('end', function () {
			if (!this.options['skip-install']) {
				this.installDependencies();
			}
		});
	},

	askFor : function () {
		var done = this.async();

		this.prompt({
			type : 'input',
			name : 'appname',
			message : 'Your application name ? ',
			default : this.appname
		}, function (ans) {

			this.appname = ans.appname;
			done();
		}.bind(this));
	},

	bower : function () {
		var bower = {
			name : this.appname,
			description : '',
			dependencies : {}
		};

		//copy bower.json file
		this.write('bower.json', JSON.stringify(bower, null, 2));
	},
	appFiles : function () {
		//creating folder structure
		this.mkdir('app');
		this.mkdir('app/css');
		this.mkdir('app/js');
		this.mkdir('app/js/vendor');
		this.mkdir('app/fonts');
		this.mkdir('app/images');
		this.mkdir('bower_components');

		//copy files
		this.copy('_index.html', 'app/index.html');
		this.copy('_main.js', 'app/js/main.js');
		this.copy('_styles.css', 'app/css/styles.css');
		this.copy('_app.scss', 'app/css/app.scss');
	},
	configFiles : function () {
		//copy config files
		this.copy('_editorconfig', '.editorconfig');
		this.copy('_jshintrc', '.jshintrc');
		this.copy('_gitignore', '.gitignore');
		this.copy('_bowerrc', '.bowerrc');

		//copy gulp & pkg.json file
		this.copy('_package.json', 'package.json');
		this.copy('_gulpFile.js', 'gulpFile.js');
	}
});

module.exports = generator;
