//Gruntfile
module.exports = function(grunt) {

  // requirejs compile options
  var compileOptions = {
      mainConfigFile: 'app/main.js',
      baseUrl: 'app',
      include: ['main'],
      out: 'dist/main.min.js',
      removeCombined: false,
      findNestedDependencies: true,

      //Removes console.logs for production
      onBuildWrite: function (moduleName, path, contents) {
          if(/(.*)js\/modules\/(.*)/.test(path)) return contents.replace(/console.log(.*);/g, ';');
          return contents;
      }
  };

  //Initializing the configuration object
  grunt.initConfig({
    // Task server
    //pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
            port: 3030, // custom port
            base: 'app/', // current directory for 'index.html' is root
            keepalive: true, // keep the server alive indefinitely
            open: {
              target: 'http://localhost:3030',
            }
          }
        }
     },
     requirejs: {
         compile: {
             options : compileOptions
         },
         paths: {
           handlebars: "../vendor/bower_components/handlebars/handlebars.runtime"
         }
     },
     sass:{
       dist:{
         options:{

         },
         files:{
           "./app/assets/css/style.css":'./app/assets/scss/main.scss'
         }
       },dev: {
         options: {
           style: 'expanded'
         },
         files: {
           "./app/assets/css/style.css":'./app/assets/scss/main.scss'
         }
       }
     },
     watch: {
    	 
    	 scss:{
             files: ['app/assets/css/*.scss'],
             tasks: ['sass'],
             // Reloads the browser
             options: {
               livereload: true  
             }
           },
    	 requirejs: {
             // Watch only main.js so that we do not constantly recompile the .js files
             files: [ 'app/main.js', 'app/scripts/dist/templates.js'],
             tasks: [ 'requirejs' ,'handlebars'],
             // Reloads the browser
             options: {
               livereload: true  
             }
         }
     },
     handlebars: {
		 "app/scripts/dist/templates.js": ["app/templates/*.html"]
     }
    });
  //Plugin loading
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
//  //Task definition
  grunt.registerTask('default', ['sass','handlebars']);
  grunt.task.run('default');
};
