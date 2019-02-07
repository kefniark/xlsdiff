#!/usr/bin/env node

"use strict";

var fs = require('fs');
var process = require('process');
var glob = require('glob');
var xls = require('../index.js');
var argv = require('yargs')
    .usage('Usage: xlsdiff path')
    .example('xlsdiff path')
    .help('h')
    .alias('h', 'help')
    .epilog('copyright 2018')
    .argv;

var basearr = argv._;
if (basearr == undefined || basearr.length < 1) {
    console.log('Usage: xlsdiff path');

    process.exit(1);
}

var diff = 0;
for (var j = 0; j < basearr.length; ++j) {
    var lstfile = glob.sync(basearr[j]);
    for (var i = 0; i < lstfile.length; ++i) {
        var srcfile = lstfile[i];
        if (fs.existsSync(srcfile)) {
            if (srcfile.slice(srcfile.length - 4) == '.xls' || srcfile.slice(srcfile.length - 5) == '.xlsx') {
                var filename = srcfile;
                var ptindex = srcfile.lastIndexOf('.');
                if (ptindex > 0) {
                    filename = srcfile.slice(0, ptindex);
                }

                var data = xls.xlsx2txt(srcfile);
                for (var line of data) {
                  console.log(line);
                }
                diff += data.length;
            }
        }
    }
}

process.stdout.write('¥n¥nFinish - ' + diff + ' lines found', () => {
    process.exit();
});
  