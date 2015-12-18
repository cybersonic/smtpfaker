var mailin = require('mailin');
var fs = require('fs');
var commandLineArgs = require('command-line-args');
var dateFormat = require('dateformat');

var cli = commandLineArgs([
    {name: 'port', alias:'p', type: Number, defaultOption: 8025},
    {name: 'directory', alias:'d', type: String, defaultOption: "./"}
]);

var options = cli.parse();
var port = options.port ? options.port : 8025;
var path = options.path ? options.path: "./";

mailin.start({
    port:port,
    disableWebhook: true
});


mailin.on('message', function(connection, data, content){
    var messagename = dateFormat(new Date(data.date), "yyyymmddhhMMss");


    console.log(messagename)
    if(data.hasOwnProperty("html")){
        fs.writeFile(path + messagename + ".html", data.html);
    }
    fs.writeFile(path + messagename + ".txt", content);
    //console.log(data);
});
