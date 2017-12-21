var socket = io('http://localhost:8081');

function reinitialize() {
	socket.emit('reinitialize');
}

function nextQuestion() {
	socket.emit('nextQuestion');
}