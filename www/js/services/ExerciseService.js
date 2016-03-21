function ExerciseService () {
	/**
	 * function to get list exercixes of course
	 * @param  {number} idCourse - the unique number of the course
	 * @return {array[string]}          [description]
	 */
	this.getExercisesList = function (idCourse) {
		var listExercises = [];
		return listExercises;
	}

	/**
	 * function to get object Exercise
	 * @param  {number} idExercise - the unique munber of exercise
	 * @return {object} - the object describing the exercise
	 */
	this.getExercise = function(idExercise) {
		var ex = {
			name: "";
			//something else
		}
		return ex;
	}

};