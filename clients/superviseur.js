var socket = io('http://localhost:8081');

function reinitialize() {
  socket.emit('reinitialize');
}

function initGame() {
  socket.emit('initGame');
}

function nextQuestion() {
  socket.emit('nextQuestion');
  clearTimeout(window.timeoutId);
  window.timeoutId = setTimeout(() => {
    socket.emit('timeout');
  }, 10000);
}

socket.on('endRound', function() {
  clearTimeout(window.timeoutId);
});
