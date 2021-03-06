/*
 * grunt-init-jGrunt
 * https://github.com/pfitzer/jGrunt
 *
 * Copyright (c) 2013 Qawelesizwe
 * Licensed under the MIT license.
 */

"use strict";

// Basic template description.
exports.description = 'Create a Joomla! component.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'For more information about how to use this template, ' +
    'please visit https://github.com/pfitzer/jGrunt';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
    'install_. After that, you may execute project tasks with _grunt_. For ' +
    'more information about installing and configuring Grunt, please see ' +
    'the Getting Started guide:' +
    '\n\n' +
    'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';


var toCamelCase = function (txt) {
    function toUpperCaseFirst(word) {
        word = word.toLowerCase();

        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    if (txt.indexOf('-') >= 0) {
        txt = txt.replace(/ /g, ' ');
    }

    if (txt.indexOf(' ') >= 0) {
        var words = txt.split(' '), result = [];

        words.forEach(function (word) {
            result.push(toUpperCaseFirst(word))
        });

        return result.join('');
    }

    return toUpperCaseFirst(txt);
};


// The actual init template.
exports.template = function (grunt, init, done) {

    init.process({type: 'grunt'}, [
        // Prompt for these values.
        init.prompt('name', function (value, props, done) {

            var name = toCamelCase(value);

            // Replace 'grunt-contrib' with 'grunt' and give a warning
            done(null, name);
        }),

        init.prompt('description', 'Joomla! component.'),

        init.prompt('version', '0.0.1'),

        init.prompt('repository'),

        init.prompt('homepage'),

        init.prompt('bugs'),

        init.prompt('licenses', 'GNU GPLv3'),

        init.prompt('author_name', 'Pfister Michael'),

        init.prompt('author_email', 'michael@mp-development.de'),

        init.prompt('author_url', 'http://www.mp-development.de'),

        init.prompt('grunt_version'),

        init.prompt('node_version', grunt.package.engines.node)
    ],

        function (err, props) {

            // Set a few grunt-plugin-specific properties.
            props.short_name = props.name.replace(/^grunt[\-_]?/, '').replace(/[\W_]+/g, '_').replace(/^(\d)/, '_$1');
            props.main = 'Gruntfile.js';
            props.npm_test = 'grunt test';
            props.keywords = ['gruntplugin'];
            props.dependencies = {
                'simple-prompt': '~0.0.4'
            };
            props.devDependencies = {
                'grunt-contrib-compress': '~0.5.2',
                'grunt-exec': '~0.4.2',
                'grunt-contrib-jshint': '~0.6.0',
                'grunt-available-tasks': '~0.5.0'
            };
            props.peerDependencies = {
                'grunt': props.grunt_version
            };

            // Files to copy (and process).
            var files = init.filesToCopy(props);

            // Add properly-named license files.
            init.addLicenseFiles(files, props.licenses);

            // Actually copy (and process) files.
            init.copyAndProcess(files, props, {noProcess: 'tmpl/**'});

            // Generate package.json file.
            init.writePackageJSON('package.json', props);

            // All done!
            done();
        });

};
