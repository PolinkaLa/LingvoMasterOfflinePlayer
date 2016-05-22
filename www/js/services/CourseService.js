function CourseService () {

	/**
	 * function which allows to get the list of courses available for a current user
	 * @param  {string} userLogin - email of current user
	 * @return {array[object]} - list of courses with brief information about them
	 */
	this.getUserCoursesList = function(userLogin) {
		var userCoursesList = [
			{	name: "English A2",
            	author: "Кристина Матвеева",
                img: "../../../test_data/layout_set_logo.jpg"
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
            {	name: "English A2",
            	author: "Кристина Матвеева",
                img: "../../../test_data/layout_set_logo.jpg"
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
			img: "../../../test_data/layout_set_logo.jpg",
			name: "English A2",
			author: "Кристина Матвеева",
            annatation: "English language course covering A2 (Elementary - Pre-Intermediate) level CEFR.",
            about: "",
            lesson: ["Lesson 1", "Lesson 2"],
            test: ["Test 1"]
		}
		return information;
	}
};

var courseService = new CourseService();