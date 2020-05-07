window.$ = window.jquery = require("jquery");
const fs = require("fs");

var data = fs.readFileSync('tags.ini', "utf-8");
var tags = data.split('\n');

function initFile () {
    let filename = "tags.ini";
    //Check if file exists
    if(fs.existsSync(filename)) {
        let data = fs.readFileSync(filename, 'utf8');
        console.log(data);
    } 
    else {
        console.log("File Doesn\'t Exist. Creating new file.")
        fs.writeFile(filename, '', (err) => {
            if(err){
                console.log(err)
            }
        });
    }
}

function loadTagsFromArray () {
    // Load tags to page from array
    var tagContainer = $("#tagContainer");
    $.each(tags, function (i) {
      var li = $('<li/>')
      .addClass('listedTag')
      .attr("id", "listedTag"+i)
      .appendTo(tagContainer)
      .text(tags[i]);
      console.log("added tag:" + tags[i]);
    });
}

function saveArray () {
    dataToWrite = tags.join("\n");
    fs.writeFileSync("tags.ini", dataToWrite, "utf-8");
}

function removeTag (tagId) {
    $("#"+tagId).remove();
    tagIndex = tagId.split("listedTag")[1];
    tags.splice(tagIndex, 1);
    saveArray();
}

function createEventListeners () {
    //add tags to array
    $("#addButton").on("click", function () {
        tags.push($("#tagBox").val());
        $("#tagContainer").empty();
        loadTagsFromArray(); // Refresh list
        saveArray();
    });

    $(".listedTag").on("click", function (event) {
        removeTag(event.target.id);
    });
}

$(document).ready(function () {
    initFile();
    loadTagsFromArray();
    createEventListeners();
});

