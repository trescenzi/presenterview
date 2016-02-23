/**
* set interval to read localStorage
*/
window.addEventListener('storage', function() {
    update();
});

window.setInterval(updateTime, 1000);

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 39) {
    localStorage.setItem('arrowRight', localStorage.getItem('arrowRight') + 1 || 1);
  } else if (e.keyCode === 37) {
    localStorage.setItem('arrowLeft', localStorage.getItem('arrowLeft') + 1 || 1);
  }
});

var stylesheets = JSON.parse(localStorage.getItem('stylesheets'));

for (var i = 0; i <= stylesheets.length - 1; i++) {
    var linkElement = document.createElement('link');

    linkElement.setAttribute('rel', 'stylsheet');
    linkElement.setAttribute('href', stylesheets[i]);

    document.head.appendChild(linkElement);
}

/**
 * updates the notes
 */
function update() {
    var note = document.getElementById('note');
    var md = localStorage.getItem('notes');
    md = md.replace(/\s+\*/g, '\n');
    note.innerHTML = marked(md);
}
/**
 * Increment timer by 1 second
 */
var timeElapsed = 0;
function updateTime() {
  timeElapsed = timeElapsed + 1;
  var hours = Math.floor(timeElapsed / 3600);
  var minutes = Math.floor((timeElapsed - (hours * 3600)) / 60);
  var seconds = timeElapsed - (hours * 3600) - (minutes * 60);
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  document.getElementById('timer').textContent = hours + ':' + minutes + ':' + seconds;
}
/**
 * initially run the update
 */
update();
