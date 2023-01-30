module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            build: {
                files: {
                    'build/css/main.css': 'src/less/main.less'
                }
            }
        },
        
        uglify: {
            build: {
                files: {
                    'build/js/main.js': 'src/js/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('build', ['less', 'uglify'])
    grunt.registerTask('default', ['build'])
}
