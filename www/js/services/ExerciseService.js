function ExerciseService () {

	this.getExercisesList = function (сourseId) {
		var listExercises = [
			{
				exerciseTypeId: 1,
				title: 'Perfekt, 3 Varianten. Was ist richtig?',
				data: getTemplate("../../../test_data/lucken.html"),
				correctAnswer: '{"1":2,"2":1,"3":1,"4":1,"5":2,"6":3,"7":2,"8":1}'
			},
			{
				exerciseTypeId: 2,
				title: 'Listen and choose the correct answer',
				data: getTemplate("../../../test_data/test.json"),
				correctAnswer: '{"1":[3]}'
			}
		];
		return listExercises;
	}


	this.getExercise = function(exerciseId) {
		var ex = bdAccess.open('read', exerciseId)
		return ex;
		// var exercise_1 = {
		// 	exerciseTypeId: 1,
		// 	title: 'Perfekt, 3 Varianten. Was ist richtig?',
		// 	data: getTemplate("../../../test_data/lucken.html"),
		// 	correctAnswer: '{"1":2,"2":1,"3":1,"4":1,"5":2,"6":3,"7":2,"8":1}'
		// };
		// var exercise_2 = {
		// 	exerciseTypeId: 2,
		// 	title: 'Listen and choose the correct answer',
		// 	data: getTemplate("../../../test_data/test.json"),
		// 	correctAnswer: '{"1":[3]}'
		// }
		// if (exerciseId == 1) {
		// 	return exercise_1
		// }
		// else {
		// 	return exercise_2
		// }
		//return ex;
	};
};

var exerciseService = new ExerciseService();
