const CLASS_OPEN_MANGADEX = "openMangaDex"

/**
 * Add table row.
 * @param {object} _manga Manga data object.
 */
function addRow(_manga) {
    var table = document.getElementById("table")
    var button = document.createElement("button")
    button.classList.add(CLASS_OPEN_MANGADEX)
    button.classList.add("btn")
    button.classList.add("btn-info")
    button.type = "button"
    button.innerHTML = "MangaDex"
    button.onclick = function () {
        window.open("https://mangadex.org/title/" + _manga.id + "/", "_blank").focus();
    };
    var row = table.insertRow(table.rows.length)
    row.insertCell(0).innerHTML = _manga.title
    row.insertCell(1).innerHTML = _manga.volumes
    row.insertCell(2).innerHTML = _manga.chapters
    row.insertCell(3).appendChild(button);
}

/**
 * Open all links.
 */
function openAll() {
    Array.from(document.getElementsByClassName(CLASS_OPEN_MANGADEX)).forEach((element) => {
        element.onclick();
    });
}

/**
 * Run this when page has loaded.
 */
function onload() {
    // Add change event handeler for file input.
    document.getElementById('fileInput').addEventListener(
        "change",
        function () {
            // Clear table.
            while (
                document.getElementById("table").rows.length > 1
            ) table.deleteRow(1);

            // Loop files.
            for (var i = 0; i < this.files.length; i++) {
                // Read file.
                var fr = new FileReader();
                fr.onload = function (e) {
                    // Parse file to JSON array.
                    JSON.parse(e.target.result).forEach(manga => {
                        // Add manga.
                        addRow(manga)
                    });
                }
                fr.readAsText(this.files[i]);
            }
        }
    );
}