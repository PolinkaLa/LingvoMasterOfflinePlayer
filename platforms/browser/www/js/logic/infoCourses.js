function Info () {

    this.getInfo = function () {
        var infoCourse = {
            img: "../../../test_data/1.png",
            name: "Course",
            author: "Author Author",
            annatation: "This course is designed for beginners to learn English. Corresponds to the level A1 in the European system of evaluation levels.",
            about: "A detailed course description is missing",
            lesson: ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4", "Lesson 5"],
            test: ["Test 1", "Test 2", "Test 3"],
            link: "https://www.dropbox.com/s/9yrnsqbxrzll2z8/course.zip?dl=0"
        }
        return infoCourse;
    } 
      
    this.toDownload = function(link) {
        var fileTransfer = new FileTransfer();
        fileTransfer.download(
            link,
            fileURL,
            function(entry) {
                console.log("download complete: " + entry.toURL());
            },
            function(error) {
                console.log("download error source " + error.source);
                console.log("download error target " + error.target);
                console.log("upload error code" + error.code);
            },
            false,
            {
                headers: {
                    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                }
            }
        );
    }
}

var INFO = new Info();
