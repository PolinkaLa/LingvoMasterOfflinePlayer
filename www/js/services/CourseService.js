function CourseService () {
	/**
	 * function to get a list of available courses to the user
	 * @param  {string} userLogin - email user
	 * @return {array[course]} listCourse - array of course
	 */
	this.getListCourses = function(userLogin) {
		var course = {
			name: "",
			author: "",
            img: ""
		};
		var lisrCourse = [];
		return listCourses;
	};

	/**
	 * function to get information, content and exercises of course
	 * @param  {number} idCourse - unique number of the course
	 * @return {course} course - object stores the data of course
	 */
	this.getCourse = function(idCourse){
		var сourse = {
			name: "",
			author: "",
            img: "",
            content: {};
            exercise: {}
		}
		return course;
	}
};