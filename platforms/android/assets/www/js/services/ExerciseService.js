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
		var lesson = {
        	ex1: "Shopping is a new kind of hobby or just a waste of time? A lot of people find it the best treatment for a bad mood. Buying new clothes may bring pleasant emotions and change image for the better. But a lot of people consider shopping to be a waste of time and money. Men usually do not like to go shopping very much. And women cannot resist the temptation of buying a new becoming dress.",
        	ex2: "Buying food is not so interesting for me. I usually do not have much time for that. That's why I often go to the nearest supermarket, where I may buy everything I need. Along with fish, milk, fruit and vegetables that I usually buy, I also choose something sweet, like biscuits or a cake. That makes shopping in a supermarket more pleasant.",
        	ex3: "When I come home after classes I start preparing my dinner. It usually consists of vegetable soup for the first course, stewed fish with vegetables for the second one and stewed fruits or jelly for dessert. I do not have supper, as I do not want to overeat before going to bed. But sometimes I eat an apple or drink a glass of apple juice. I think, the food I choose is healthy and helps me to keep fit."
        }
		return lesson;
	}
};


////////////////////////////////////////////////////////////////////////////////
/**
 * @param namespace {string} portlet instance namespace (unique prefix for portlet-scope DOM)
 * @param exerciseContainer {string} container node id attribute
 * @param exerciseTypeId {number} exercise type id, for choosing the rendering processor
 * @param data {string} (html or stringified JSON) exercise content. Format and structure
 * are dependent on the exercise type
 * @param finishExerciseURL {string} URL to the action method for processing the results of
 * doing the exercise
 * @param showDetails {boolean} let the user see the correct answers for the exercise
 * @param correctAnswer {string} (stringified JSON) correct answers for the exercise, structure
 * is dependent on the exercise type
 * @param lastAttempt {object} information about the previous attempts on the exercise
 * @param successMessage {string} localized user message for a successful exercise attempt
 * @param failMessage {string} localized user message for a failed exercise attempt
 */
function ExerciseRun() //exerciseTypeId, data
{

	var exerciseContainer = 'bodyOfPage';
//	var exerciseTypeId = 1;
//	var data = getTemplate("../../../test_data/lucken.html");

	var exerciseTypeId = 2;
    var data = getTemplate("../../../test_data/test.json");
	var self = this;

	self.exercise = null;
	self.dom = {};
	self.config = {};
	self.data = {};
	self.url = {};
	self.color = {};

	self.color.red = 'rgb(229, 77, 66)';
	self.color.green = 'rgb(119, 193, 54)';

	self.dom.exerciseContainer = document.getElementById(exerciseContainer);


	if (exerciseTypeId === 1) {
		self.exercise = new LuckentextRun(exerciseContainer, data);
		self.exercise.render();
	} else if (exerciseTypeId === 2) {
		self.exercise = new MultipleChoiceRun(exerciseContainer, data)
		self.exercise.render();
	}

	function getFirstParentByClass(node, clazz) {
		var parent = node.parentElement;
		if (parent == null) return;
		if (parent.classList.contains(clazz)) {
			return parent;
		} else {
			return getFirstParentByClass(parent, clazz)
		}
	}

	function getPrimaryColor() {
		try {
			return self.exercise.getPrimaryColor();
		} catch (e) {
			return 'rgb(255, 125, 145)';
		}
	}

	function getSecondaryColor() {
		try {
			return self.exercise.getSecondaryColor();
		} catch (e) {
			return 'FFEEF2';
		}
	}
}

function LuckentextRun(exerciseContainer, data) {
	var self = this;
    self.exerciseContainer = document.getElementById(exerciseContainer);
	this.render = function render(callback) {
		var response = getTemplate('../../templates/luckentextruntemplate.html');
		self.exerciseContainer.innerHTML = renderTemplate(response, {data: data})
	}
}

function MultipleChoiceRun(exerciseContainer, data) {
	var self = this;
	self.exerciseContainer = document.getElementById(exerciseContainer);

	self.data = JSON.parse(data);

	this.render = function render(callback) {
		var response = getTemplate('../../templates/multiplichoiceruntemplate.html');
		self.exerciseContainer.innerHTML = renderTemplate(response, {data: self.data, shuffle: shuffle});
	};

	function shuffle(array) {
    		var currentIndex = array.length, temporaryValue, randomIndex ;
    		// While there remain elements to shuffle...
    		while (0 !== currentIndex) {
    			// Pick a remaining element...
    			randomIndex = Math.floor(Math.random() * currentIndex);
    			currentIndex -= 1;
    			// And swap it with the current element.
    			temporaryValue = array[currentIndex];
    			array[currentIndex] = array[randomIndex];
    			array[randomIndex] = temporaryValue;
    		}
    		return array;
    	}
}