function ExerciseRunPortlet(number, titleContainer, exerciseContainer,
        title, exerciseTypeId, data, correctAnswer, showDetails,
        successMessage, failMessage) {

    var self = this;

    self.exercise = null;
    self.dom = {};
    self.config = {};
    self.data = {};
    self.url = {};
    self.color = {};

    self.color.red = 'rgb(229, 77, 66)';
    self.color.green = 'rgb(119, 193, 54)';

    self.dom.titleContainer = document.getElementById(titleContainer+number);
    self.dom.exerciseContainer = document.getElementById(exerciseContainer+number);

    self.dom.resultBlock = document.getElementById('resultBlock'+number);
    self.dom.resultBlock.message = document.getElementById('message'+number);
    self.dom.resultBlock.inner = document.getElementById('resultText'+number);

    self.dom.buttons = {};
    self.dom.buttons.done = document.getElementById('done'+number);
    self.dom.buttons.tryAgain = document.getElementById('tryAgain'+number);
    self.dom.buttons.details = document.getElementById('details'+number);
    self.dom.buttons.showCorrectAnswer = document.getElementById('showCorrectAnswer'+number);


    for (var key in self.dom.buttons) {
        var button = self.dom.buttons[key];
        button.hide = function () {
            this.style.display = 'none';
        }
        button.show = function () {
            this.style.display = 'inline-block';
        }
    }

    self.dom.resultBlock.hide = function () {
        this.style.display = 'none';
    }

    self.dom.resultBlock.show = function () {
        this.style.display = 'block';
    }

    if (exerciseTypeId === 1) {
        self.exercise = new LuckentextRun(exerciseContainer+number, data);
    } else if (exerciseTypeId === 2) {
        self.exercise = new MultipleChoiceRun(exerciseContainer+number, data)
    }

    colorize();

    self.dom.buttons.done.onclick = function () {
        finishExercise();
    }

    self.dom.buttons.tryAgain.onclick = function () {
        startExercise();
    }

    // user's role is checked in the server side. If user is not allowed to see correct answer,
    // client would not receive it, so we can use following code
    self.config.userHasPermissionToSeeCorrectAnswer = (null != correctAnswer && '' !== correctAnswer);
    self.config.showDetails = (showDetails === true);

    if (self.config.showDetails) {
        self.dom.buttons.details.onclick = function() {
            self.exercise.details(self.data.details);
            self.dom.buttons.details.hide();
        }
    }

    startExercise();

    function startExercise() {

        self.dom.resultBlock.hide();

        self.dom.buttons.done.show();
        self.dom.buttons.tryAgain.hide();
        self.dom.buttons.details.hide();
        self.dom.buttons.showCorrectAnswer.hide();

        if (self.config.userHasPermissionToSeeCorrectAnswer) {
            self.dom.buttons.showCorrectAnswer.show();
            self.dom.buttons.showCorrectAnswer.onclick = function () {
                self.exercise.setAnswer(correctAnswer);
            }
        }
        self.dom.titleContainer.innerHTML = title;
        self.exercise.render();
    }

    function finishExercise() {

        var requestData = self.exercise.getUserAnswer();

        // check exercise
        // use jSonComp from js/util/jsoncmp.js
        var resultEx = jSonCmp(requestData, correctAnswer);

        showResults(resultEx)
    }

    /**
     * Updates the exercise block's UI according to user's results.
     */
    function showResults(exercisePassed ) {
        self.exercise.blockUIElements();

        self.dom.buttons.done.hide()
        self.dom.buttons.tryAgain.show();
        self.dom.buttons.showCorrectAnswer.hide();

        self.data.exercisePassed = exercisePassed;

        renderResultBlock();

        if (self.config.showDetails) {
            self.dom.buttons.details.show();
        } else {
            self.dom.buttons.details.hide();
        }
    }

    function renderResultBlock() {

        if (self.data.exercisePassed) {
            self.dom.resultBlock.message.innerHTML = successMessage;
            self.dom.resultBlock.message.style.color = self.color.green;
            self.dom.resultBlock.inner.style.borderLeftColor = self.color.green;
        } else {
            self.dom.resultBlock.message.innerHTML = failMessage;
            self.dom.resultBlock.message.style.color = self.color.red
            self.dom.resultBlock.inner.style.borderLeftColor = self.color.red;
        }

        self.dom.resultBlock.show();
    }


    function colorize () {
        try {
            getFirstParentByClass(self.dom.exerciseContainer, 'portlet-content').style.borderColor =  getPrimaryColor();
        } catch (e) {}

        try {
            getFirstParentByClass(self.dom.exerciseContainer, 'portlet').children[0].style.backgroundColor = getPrimaryColor();
        } catch (e) {}


        var style = document.createElement("style");
        style.innerHTML = '.aui .' + 'arrow:after {color: ' + getPrimaryColor() + ';}' +
                '.aui .' + 'arrow:hover {color: ' + getPrimaryColor() + '!important; background-color: white!important ;}';
        document.head.appendChild(style);

        var buttons = document.querySelectorAll('button[class*="btn"][class*="btn-arrow"]')
        for (var i = 0; i < buttons.length; i++) {
            var button = buttons[i];
            button.style.border = '1px solid ' + getPrimaryColor();
            button.style.backgroundColor = getPrimaryColor();
            button.style.color =  'white';

            button.classList.add('arrow');
        }

        self.dom.resultBlock.inner.style.backgroundColor = getSecondaryColor();

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