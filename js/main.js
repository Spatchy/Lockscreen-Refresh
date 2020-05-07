window.$ = window.jquery = require("jquery");
const fs = require("fs");

var data = fs.readFileSync('tags.ini', "utf-8");
var tags = data.split('\n');

$(document).ready(function () {

    // Get tags from doc
    var tagContainer = $("#tagContainer");
    $.each(tags, function (i) {
      var li = $('<li/>')
      .addClass('listedTag')
      .appendTo(tagContainer)
      .text(tags[i]);
      console.log("added tag:" + tags[i]);
    });

  });