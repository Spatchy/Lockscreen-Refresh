window.$ = window.jquery = require("jquery");
const fs = require("fs");

var data = fs.readFileSync('tags.ini', "utf-8");
var tags = data.split('\n');

function loadTagsFromArray () {
    // Load tags to page from array
    var tagContainer = $("#tagContainer");
    $.each(tags, function (i) {
      var li = $('<li/>')
      .addClass('listedTag')
      .appendTo(tagContainer)
      .text(tags[i]);
      console.log("added tag:" + tags[i]);
    });
}

function saveArray () {
    dataToWrite = tags.join("\n");
    fs.writeFileSync("tags.ini", dataToWrite, "utf-8");
}

function createEventListeners () {
    //add tags to array
    $("#addButton").on("click", function () {
        tags.push($("#tagBox").val());
        $("#tagContainer").empty();
        loadTagsFromArray(); // Refresh list
        saveArray();
    });
}

$(document).ready(function () {
    loadTagsFromArray();
    createEventListeners();
});