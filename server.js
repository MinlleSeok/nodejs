var http = require('http');
var fs = require('fs');
var url = require('url');

// ���� ����
http.createServer( function (request, response) {
	// URL �ڿ� �ִ� ���丮/�����̸� �Ľ�
	var pathname = url.parse(request.url).pathname;

	console.log("Request for " + pathname + " received.");

	// ���� �̸��� ����ִٸ� index.html�� ����
	if (pathname == "/") {
		pathname = "/index.html";
	}

	// ������ �б�
	fs.readFile(pathname.substr(1), function (err, data) {
		if (err) {
			console.log(err);
			// �������� ã�� �� ����
			// HTTP Status: 404 : NOT FOUND
			// Content Type: text/plain
			response.writeHead(404, {'Content-Type': 'text/html'});
		} else {
			/*
			�������� ã��
			HTTP ��� ����
			HTTP Status: 200 : OK
			Content Type: text/plain
			*/
			response.writeHead(200, {'Content-Type': 'text/html'});

			/*
			Response Body �� "Hello World"�� ����
			response.end("Hello World\n");
			*/
		
			// ������ �о�ͼ� responseBody�� �ۼ�
			response.write(data.toString());
		}
		// responseBody ����
		response.end();
	});
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081");