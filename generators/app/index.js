const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  welcome() {
    this.log("Welcome to steelesh's front-end project generator!");
  }

  writing() {
    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('index.html')
    );
    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );
    this.fs.copy(
      this.templatePath('package-lock.json'),
      this.destinationPath('package-lock.json')
    );
    this.fs.copy(this.templatePath('app'), this.destinationPath('app'));
    this.fs.copy(this.templatePath('assets'), this.destinationPath('assets'));
  }

  end() {
    this.log(' ');
    this.log(
      'Finished generating! Before running, make sure you have the Gulp CLI installed globally, and you do NOT have Gulp itself installed globally.'
    );
    this.log(' ');
    this.log(
      "Once you have the Gulp CLI installed globally, you can run 'gulp' in this project directory to run Gulp!"
    );
    this.log(' ');
  }
};
