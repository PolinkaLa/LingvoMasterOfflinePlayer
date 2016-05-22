function ExerciseService () {

	this.getExercisesList = function (lessonId) {
		var listExercises;
		if (lessonId == 1) {
			listExercises = [
			{
				exerciseTypeId: 1,
				title: 'Present Simple Gaps',
				data: getTemplate("../../../test_data/9105.txt"),
				correctAnswer: '{"1":"0","2":"0","3":"0","4":"0","5":"0","6":"0","7":"0","8":"0","9":"0","10":"0","11":"0","12":"0","13":"0","14":"0","15":"0","16":"0","17":"0","18":"0","19":"0","20":"0","21":"0","22":"0","23":"0","24":"0","25":"1","26":"1","27":"1","28":"1","29":"1"}'
			},
			{
				exerciseTypeId: 2,
				title: 'Diana`s new job',
				data: getTemplate("../../../test_data/9107.txt"),
				correctAnswer: '{"1":[389],"2":[369],"3":[567],"4":[764],"5":[450],"6":[521]}'
			}
			];
		}
		else if (lessonId == 2) {
			listExercises = [
			{
				exerciseTypeId: 2,
				title: 'Health ilness verb collocations',
				data: getTemplate("../../../test_data/9221.txt"),
				correctAnswer: '{"1":[432],"2":[529],"3":[73],"4":[895],"5":[941]}'
			},
			{
				exerciseTypeId: 2,
				title: 'Multiple choice Free time',
				data: getTemplate("../../../test_data/9227.txt"),
				correctAnswer: '{"1":[642],"2":[449],"3":[723],"4":[256],"5":[711],"6":[693],"7":[745],"8":[868]}'
			}
			]
		}

		return listExercises;
	}

	this.getListTest = function(lessonId) {
		if (lessonId == 1) {
			return 0;
		}
		else if (lessonId == 2) {
			return 1;
		}
	}


	this.getExercise = function(exerciseId) {
		// var test = {
		// 	exerciseTypeId: ,
		// 	title: '',
		// 	data: getTemplate("../../../test_data/9231.txt"),
		// 	correctAnswer: ''
		// };

		var test = {
			exerciseTypeId: 1,
			title: 'Likes dislikes gaps filling',
			data: getTemplate("../../../test_data/9234.txt"),
			correctAnswer: '{"1":["tidying"],"2":["meeting"],"3":["getting up"],"4":["eating"],"5":["brushing"],"6":["taking"],"7":["going"]}'
		};

		return test
	};
};

var exerciseService = new ExerciseService();
