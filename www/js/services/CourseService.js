function CourseService () {

	/**
	 * function which allows to get the list of courses available for a current user
	 * @param  {string} userLogin - email of current user
	 * @return {array[object]} - list of courses with brief information about them
	 */
	this.getUserCoursesList = function(userLogin) {
		var userCoursesList = [
			{	name: "Course 1",
            	author: "Author Author",
            	img: "../../../test_data/1.png"
            },
            {	name: "Course 2",
                author: "Author Author",
                img: "../../../test_data/2.jpg"
            },
            {	name: "Course 3",
                author: "Author Author",
                img: "../../../test_data/3.jpg"
            }
		];
		return userCoursesList;
	}

	/**
	 * function which allows to get the list of downloaded are available to study for the current user
	 * @param  {string} userLogin - email of current user
	 * @return {array[object]} - list of courses with brief information about them
	 */
	this.getDownloadedCoursesList = function(userLogin) {
		var downloadedCoursesList = [
			{	name: "Course 1",
            	author: "Author Author",
                img: "../../../test_data/1.png"
            },
            {	name: "Course 2",
                author: "Author Author",
                img: "../../../test_data/2.jpg"
            },
            {	name: "Course 3",
            	author: "Author Author",
                img: "../../../test_data/3.jpg"
            }
		];
		return downloadedCoursesList;
	}

	/**
	 * function which allows to get the list lesson of course
	 * @param  {number} idCourse - the unique number of the course
	 * @return {array[string]} - the list lesson of course
	 */
	this.getCourseMap = function(idCourse) {
		var lessonList = [];
		return lessonList;
	}

	/**
	 * function which allows to get basic information about course
	 * @param  {number} idCourse - the unique number of the course
	 * @return {object} - the object containing basic information about the course
	 */
	this.getInfoCourses = function(idCourse) {
		var information = {
			img: "../../../test_data/1.png",
			name: "Course",
			author: "Author Author",
            annatation: "This course is designed for beginners to learn English.",
            about: "A detailed course description is missing",
            lesson: ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4", "Lesson 5"],
            test: ["Test 1", "Test 2", "Test 3"]
		}
		return information;
	}
};

var courseService = new CourseService();