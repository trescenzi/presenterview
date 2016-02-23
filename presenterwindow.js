/**
* set interval to read localStorage
*/
window.addEventListener('storage', function() {
    update();
});

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 39) {
    localStorage.setItem('arrowRight', localStorage.getItem('arrowRight') + 1 || 1)
  } else if (e.keyCode === 37) {
    localStorage.setItem('arrowLeft', localStorage.getItem('arrowLeft') + 1 || 1)
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
    note.innerHTML = localStorage.getItem('notes');
}
/**
 * initially run the update
 */
update();
