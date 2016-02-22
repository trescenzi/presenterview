/**
* set interval to read localStorage
*/
window.addEventListener('storage', function() {
    update();
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
