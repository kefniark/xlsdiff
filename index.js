"use strict";

var xlsx = require('node-xlsx');

function xlsx2txt(xlsxfile) {
    var obj = xlsx.parse(xlsxfile);
    var txt = "";
    if (obj.length > 0) {
        for (var tab = 0; tab < obj.length; tab++) {
            var csvobj = obj[tab].data;

            for (var y = 0; y < csvobj.length; ++y) {
                txt +=  obj[tab].name + ' | ';
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

                // use multiple console.log big ones can be truncated on mac
                console.log(txt);
                txt = '';
            }
        }
    }
    return txt;
}

exports.xlsx2txt = xlsx2txt;