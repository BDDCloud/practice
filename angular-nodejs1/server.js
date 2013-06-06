var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200,
        {
            "Content-Type" : "application/json"
            ,"Access-Control-Allow-Origin" : "*"
        });
    //response.write("\")]}',\n\"[{ 'description':'read angular ebook', 'id': '1234-5678' }, { 'description':'add e2e tests', 'id': '1234-4321' }]");
    response.write("[{ \"description\":\"read angular ebook\", \"id\": \"1234-5678\" }, { \"description\":\"add e2e tests\", \"id\": \"1234-4321\" }]");
    response.end();
}).listen(8123);