window.$ = window.jquery = require("jquery");
let fs = require("fs");

function loadTags () {
    let filename = "tags.json";
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

loadTags();