function CourseService () {

	/**
	 * function which allows to get the list of courses available for a current user
	 * @param  {string} userLogin - email of current user
	 * @return {array[object]} - list of courses with brief information about them
	 */
	this.getMyCoursesList = function(userLogin) {
		var myCoursesList = [{}];
		return myCoursesList; 
	}

	/**
	 * function which allows to get the list of downloaded are available to study for the current user
	 * @param  {string} userLogin - email of current user
	 * @return {array[object]} - list of courses with brief information about them
	 */
	this.getDownloadedCoursesList = function(userLogin) {
		var downloadedCoursesList = [];
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
			imgURL: "",
			name: "",
			author: "",
            annatation: "",
            about: "",
            lesson: [],
            test: []
		}
		return information;
	}
};