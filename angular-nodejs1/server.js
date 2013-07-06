var http = require("http");
var todo =
    [
        { description: "read angular ebook", id: "1234-5678" },
        { description: "add e2e", id: "5678-1234" }
    ];
http.createServer(function(request, response) {

    if(request.method.toLowerCase() == 'get')
    {
        response.writeHead(200,
            {
                "Content-Type" : "application/json"
                ,"Access-Control-Allow-Origin" : "*"
            });

        response.write(JSON.stringify(todo));
        response.end();

    }
    else if(request.method.toLowerCase() == 'post')
    {
        todo.push({ description: "read javascript good parts", id: "2343-1238"});
    }
}).listen(8123);