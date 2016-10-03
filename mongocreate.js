/**
 * Module dependencies.
 */

var express = require('express'),
    fs = require('fs');
    

var mongoCollection = {
    "name" : "",
    "partnerId" : "",
    "email" : "",
    "type" : "Reseller",
    "organization" : "ObjectId('56eff486ce06f403008fff66)",
    "active" : "",
    "allUsers" : [
    ]
}

 //mongoimport --host ds023495.mlab.com --port 23495 --db heroku_sp2b7r7p --username heroku_sp2b7r7p --password 5ehc3nldfh58b6m58k0g5th9vm --collection partners  --type json --file finalMongoDbData.json --jsonArray
 
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

fs.readFile('dummy_data.json', 'utf8', function (err, data) {
            if (err) throw err;
            var sampleDataSet = JSON.parse(data);

            var body = [];

            sampleDataSet.forEach(function (item) {
                //body.push({"index": {"_index": _index, "_type": _type}});
                //body.push(item);
                var mongoCollection = new Object();
                mongoCollection.name = item.partner_name;
                mongoCollection.partnerId = item.partner_id;
                mongoCollection.email = item.partner_email;
                mongoCollection.type  = "Reseller";
               /// mongoCollection.type = "Reseller" ;
                 mongoCollection.organization = {"$oid":"56eff486ce06f403008fff66"};


                mongoCollection.active = item.active;
               
                //console.log(":" + JSON.stringify(item));

                body.push(mongoCollection);
                
            });

           console.log("body:" + JSON.stringify(body));

            console.log("body:" + body.length);

            fs.writeFile('finalMongoDbData.json', JSON.stringify(body, null, 2) , 'utf-8');
            
        });

