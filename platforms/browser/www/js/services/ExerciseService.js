function ExerciseService () {

	this.getExercisesList = function (сourseId) {
		var listExercises = [
			{
				exerciseTypeId: 1,
				title: 'Present Simple Gaps',
				data: getTemplate("../../../test_data/lucken.html"),
				correctAnswer: '{"1":"0","2":"0","3":"0","4":"0","5":"0","6":"0","7":"0","8":"0","9":"0","10":"0","11":"0","12":"0","13":"0","14":"0","15":"0","16":"0","17":"0","18":"0","19":"0","20":"0","21":"0","22":"0","23":"0","24":"0","25":"1","26":"1","27":"1","28":"1","29":"1"}'
			},
			{
				exerciseTypeId: 2,
				title: 'Health ilness verb collocations',
				data: getTemplate("../../../test_data/test.json"),
				correctAnswer: '{"1":[432],"2":[529],"3":[73],"4":[895],"5":[941]}'
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
