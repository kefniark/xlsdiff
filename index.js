"use strict";

var xlsx = require('node-xlsx');

function xlsx2txt(xlsxfile) {
    var obj = xlsx.parse(xlsxfile);
    var txt = "";
    if (obj.length > 0) {
        var csvobj = obj[0].data;

        for (var y = 0; y < csvobj.length; ++y) {
            for (var x = 0; x < csvobj[y].length; ++x) {
                if (csvobj[y][x] != undefined) {
                    var str = csvobj[y][x].toString();

                    if (str.indexOf(',') >= 0) {
                        txt += '"';
                        txt += csvobj[y][x];
                        txt += '"';
                    }
                    else {
                        txt += csvobj[y][x];
                    }
                }

                if (x < csvobj[y].length - 1) {
                    txt += ' | ';
                }
            }
            txt += '\r\n';
        }
    }
    return txt;
}

exports.xlsx2txt = xlsx2txt;