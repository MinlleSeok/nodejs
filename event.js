// events ��� ���
var events = require('events');

// EventEmitter ��ü ����
var eventEmitter = new events.EventEmitter();

// EventHandler �Լ� ����
var connectHandler = function connected() {
	console.log("Connection Successful");

	// data_received �̺�Ʈ�� �߻���Ű��
	eventEmitter.emit("data_received");
}

// connection �̺�Ʈ�� connectHandler �̺�Ʈ �ڵ鷯�� ����
eventEmitter.on('connection', connectHandler);

// data_received �̺�Ʈ�� �͸� �Լ��� ����
// �Լ��� ���� �ȿ� ��� ��ſ�, .on() �޼ҵ��� ���ڷ� ���� �Լ��� ����
eventEmitter.on('data_received', function() {
	console.log("Data Received");
});

// connection �̺�Ʈ �߻���Ű��
eventEmitter.emit('connection');

console.log("Program has ended");