module.exports = function(grunt) {

	// Configuración del proyecto.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'app/css/style.min.css': 'app/scss/main.scss' // Destino: Origen
				}
			}
		},

		handlebars: {
			compile: {
				options: {
					namespace: 'JST'
				},
				files: {
					'app/js/compiled-templates.js': 'app/templates/**/*.hbs' // Destino: Origen
				}
			}
		},

		watch: {
			livereload: {
				files: ['app/**/*'], // Ficheros que se van a vigilar.
				options: { livereload: true } // Habilitamos livereload en el puerto por defecto (35729) para cuando cambien los ficheros bajo vigilancia.
			},
			css: {
				files: ['**/*.scss'], // Ficheros que se van a vigilar.
				tasks: ['sass'] // Tarea(s) a ejecutar cuando cambien los ficheros bajo vigilancia.
			},
			templates: {
				files: ['**/*.hbs'], // Ficheros que se van a vigilar.
				tasks: ['handlebars'] // Tarea(s) a ejecutar cuando cambien los ficheros bajo vigilancia.
			}
		}
	});

	// Carga de plugins que proveen de las tareas.
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Tarea(s) por defecto.
	grunt.registerTask('default', ['watch']);
};
