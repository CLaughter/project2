var options = { input: false };
var dropzone = new FileDrop("dropcsv", options);
var jsonzone = document.getElementById("jsonoutput");

dropzone.event("send", function(files) {
  files.each(function(file) {
    file.readData(
      createJSON,
      function(e) {
        console.log("There was an error reading the file: " + e);
      },
      "text"
    );
  });
});

function createJSON(str) {
  var config = {
    header: true
  };
  var jsonObject = Papa.parse(str, config).data;
  jsonString = JSON.stringify(jsonObject);

  $.ajax({
    type: "POST",
    url: "/api/assets",
    contentType: 'application/json',
    data: jsonString,
  });
}
