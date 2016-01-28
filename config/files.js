/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
    //Override file patterns here
    return {
        ngtemplates: {
            dest: "generated/angular/template-cache.js"
        },
        js: {
            vendor: [
                "vendor/js/underscore/1.8.3/underscore.js",
                "vendor/js/jquery/1.10.2/jquery.js",
                "vendor/js/jquery/1.10.4/jquery-ui.js",
                "vendor/js/angular/1.3.15/angular.js",
                "vendor/js/angular/1.3.15/angular-route.js",
                "vendor/js/angular/1.3.15/angular-cookies.js",
                "vendor/js/angular/1.3.15/angular-resource.js",
                "vendor/js/angular/1.3.15/angular-animate.js",
                "vendor/js/angular/1.3.15/angular-touch.js",
                "vendor/js/ui-bootstrap/0.12.1/ui-bootstrap-tpls.js",
            ],
            app: [
                "app/js/app.js",
                "app/js/**/*.js"
            ]
        },
        webfonts: {
            vendor: "vendor/webfonts/**/*.*",
            root: "fonts"
        },
        css: {
            vendor: [
                "vendor/css/bootswatch/3.3.4/darkly/bootstrap.css"
            ],
            app: ["app/css/**/*.css"]
        }
    };
};