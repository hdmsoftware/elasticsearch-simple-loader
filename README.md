# arcfixsearch

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.7.6.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.

## ES import
curl -XPUT localhost:9200/_bulk --data-binary @dataAug.json

Caused by: java.lang.IllegalArgumentException: Invalid format: "03/29/2016" is malformed at "/29/2016"


GET my_index/_search
{
  "query": {
    "term": {
      "is_published": 1 
    }
  }
}

{
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "partner_name": "Neque"
          }
        },
        {
          "match": {
            "region": "Latin"
          }
        }
      ]
    }
  }
}


{
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "partner_name": "Neque"
          }
        },
        {
          "match": {
            "region": "Latin"
          }
        }
      ]
    }
  }
}

{
    "query":{
            "wildcard":{
                "partner_name" : "*eque*"
            }
        }
}

{
    "range" : {
        "date" : {
            "gte" : "now-1d/d",
            "lt" :  "now/d"
        }
    }
}
