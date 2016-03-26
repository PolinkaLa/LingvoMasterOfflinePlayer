function Info () {
    this.getInfo = function () {
        var infoCourse = {
            img: "../../../test_data/1.png",
            name: "Course",
            author: "Author Author",
            annatation: "This course is designed for beginners to learn English. Corresponds to the level A1 in the European system of evaluation levels.",
            about: "A detailed course description is missing",
            lesson: ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4", "Lesson 5"],
            test: ["Test 1", "Test 2", "Test 3"]
        }
        return infoCourse;
    }    
}

var info = new Info();
