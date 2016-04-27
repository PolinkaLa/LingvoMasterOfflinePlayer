function MultipleChoiceRun(exerciseContainer, data) {

    var self = this;
    var response = getTemplate('../../templates/multiplichoiceruntemplate.html');
    self.exerciseContainer = document.getElementById(exerciseContainer);

    self.data = JSON.parse(data);

    this.render = function render(callback) {
        self.exerciseContainer.innerHTML = renderTemplate(response, {data: self.data, shuffle: shuffle});
    }

    this.blockUIElements = function blockUIElements() {
        var checkBoxes = self.exerciseContainer.querySelectorAll('input[type="checkbox"][answerId]');
        for (var i = 0; i < checkBoxes.length; i++) {
            var checkBox = checkBoxes[i];
            checkBox.disabled = true;
        }

        var labels = self.exerciseContainer.querySelectorAll('label');
        for (var i = 0; i < labels.length; i++) {
            var label = labels[i];
            label.classList.add('blocked');
        }
    }

    this.getUserAnswer = function getUserAnswer() {
        // see multiplechoiceeditor.js for format
        var userAnswer = {};

        var answersNodes = self.exerciseContainer.getElementsByClassName('answers');
        for (var i = 0; i <answersNodes.length; i++) {
            var questionNumber = i + 1;
            userAnswer[questionNumber] = [];
            var ckeckedInputs = answersNodes[i].querySelectorAll('input[type="checkbox"][answerId]:checked');
            for (var k = 0; k < ckeckedInputs.length; k++) {
                var input = ckeckedInputs[k];
                try{
                    userAnswer[questionNumber].push(parseInt(input.getAttribute('answerId')));
                } catch (e) {
                    console.error('Cannot get checked option:\n' + e);
                }
            }
        }
        return JSON.stringify(userAnswer);
    }

    this.setAnswer = function setAnswer(answer) {

        var checkBoxes = self.exerciseContainer.querySelectorAll('input[type="checkbox"][answerId]');
        for (var i = 0; i < checkBoxes.length; i++) {
            var checkBox = checkBoxes[i];
            checkBox.checked = false;
        }

        var answer = JSON.parse(answer);
        for (var questionNumber in answer) {
            var questionAnswers = answer[questionNumber];
            for (var i = 0; i < questionAnswers.length; i++) {
                var answerId = questionAnswers[i];
                self.exerciseContainer.querySelector('input[type="checkbox"]'
                        + '[answerId="' + answerId + '"]').checked = true;
            }
        }
    }

    this.details = function details(detailsStringified) {
        var details = JSON.parse(detailsStringified);
        for (var questionNumber in details) {
            var questionDetails = details[questionNumber];
            for (var answerId in questionDetails) {
                if (questionDetails[answerId]) {
                    self.exerciseContainer.querySelector('div[answerId="' + answerId + '"]').classList.add('is-right');
                } else {
                    self.exerciseContainer.querySelector('div[answerId="' + answerId + '"]').classList.add('is-wrong');
                }
            }
        }
    }

    this.getPrimaryColor = function getPrimaryColor() {
        return '#9B5DB3';
    }

    this.getSecondaryColor = function getSecondaryColor() {
        return '#F5EEF7';
    }

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