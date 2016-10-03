/**
 * Module dependencies.
 */

var express = require('express'),
    elasticsearch = require('elasticsearch'),
    fs = require('fs');
    


var client = new elasticsearch.Client({
    host: connectionString,
    log: 'debug'
});

var _index = "arcfix";
var _type = "clients'";

var count = 0;
fs.readFile('dummy_data.json', 'utf8', function (err, data) {
            if (err) throw err;
            var sampleDataSet = JSON.parse(data);

            var body = [];

            sampleDataSet.forEach(function (item) {
                body.push({"index": {"_index": _index, "_type": _type}});
                body.push(item);
                count ++;
            });

            client.bulk({
                body: body
            }, function (err, resp) {
               console.log("Indexing Completed!" + count);

            })
        });

