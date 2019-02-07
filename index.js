"use strict";

var xlsx = require('node-xlsx');

function xlsx2txt(xlsxfile) {
    var obj = xlsx.parse(xlsxfile);
    var data = [];
    var txt = "";
    if (obj.length > 0) {
        for (var tab = 0; tab < obj.length; tab++) {
            var csvobj = obj[tab].data;

            for (var y = 0; y < csvobj.length; ++y) {
                txt +=  obj[tab].name + ' | ';
                for (var x = 0; x < csvobj[y].length; ++x) {
                    if (csvobj[y][x] != undefined) {
                        txt += csvobj[y][x];
                    }

                    if (x < csvobj[y].length - 1) {
                        txt += ' | ';
                    }
                }

                data.push(txt);
                txt = '';
            }
        }
    }
    return data;
}

exports.xlsx2txt = xlsx2txt;