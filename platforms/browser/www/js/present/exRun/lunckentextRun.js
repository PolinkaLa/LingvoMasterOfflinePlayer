function LuckentextRun(exerciseContainer, data) {
    var self = this;
    self.exerciseContainer = document.getElementById(exerciseContainer);
    this.render = function render(callback) {
        var response = getTemplate('../../templates/luckentextruntemplate.html');
        self.exerciseContainer.innerHTML = renderTemplate(response, {data: data})

    }

    this.blockUIElements = function blockUIElements() {
        var selects = self.exerciseContainer.querySelectorAll('select');
        for (var i = 0; i < selects.length; i++) {
            var select = selects[i];
            select.disabled = true;
        }

        var inputs = self.exerciseContainer.querySelectorAll('input');
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            input.disabled = true;
        }
    }

    this.getUserAnswer = function getUserAnswer() {
        var userAnswer = {};

        var inputs = self.exerciseContainer.querySelectorAll('input');
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];

            var luckenId = input.getAttribute('luckenId');
            var value = input.value;
            if (luckenId != null && value !== '') {
                userAnswer[luckenId] = value.trim();
            }
        }

        var selects = self.exerciseContainer.querySelectorAll('select');
        for (var i = 0; i < selects.length; i++) {
            var select = selects[i];

            var luckenId = select.getAttribute('luckenId');

            if (luckenId == null || luckenId == undefined || luckenId === '') {
                continue;
            }

            var selectedOption = select.options[select.selectedIndex];
            if (selectedOption !== undefined) {
                optionId = selectedOption.getAttribute('optionid');
                if (optionId !== null && optionId !== undefined && optionId !== '' ) {
                    userAnswer[luckenId] = optionId;
                }
            }
        }

        return JSON.stringify(userAnswer);
    }

    this.setAnswer = function setAnswer(answer) {
        var answer = JSON.parse(answer);

        for (var luckenId in answer) {
            var lucken = self.exerciseContainer.querySelector('*[luckenid="' + luckenId + '"]');
            if (lucken.tagName === 'SELECT') {
                var options = lucken.children;
                for (var i = 0; i < options.length; i++) {
                    var option = options[i];
                    if (parseInt(option.getAttribute('optionId')) === parseInt(answer[luckenId])) {
                        option.selected = true;
                    }
                }
            } else if (lucken.tagName === 'INPUT'){
                if (typeof answer[luckenId] === 'string') { //if it is user answer
                    lucken.value = answer[luckenId];
                } else {                                    //if it is correctAnswer
                    lucken.value = answer[luckenId][0];
                }
                resize(lucken);
            }
        }

    }
    self.red = '#E54D42';
    self.green = '#29BB9C';

    this.details = function details(details) {
        var details = JSON.parse(details);
        //var luckens = self.exerciseContainer.querySelector('*[luckenid]');
        for ( var luckenId in details) {
            var lucken = self.exerciseContainer.querySelector('*[luckenid="' + luckenId + '"]');
            if (details[luckenId]) {
                lucken.style.backgroundColor = self.green;
            } else {
                lucken.style.backgroundColor = self.red;
            }
            lucken.style.color = 'white';
        }
    }

    this.getPrimaryColor = function getPrimaryColor() {
        return '#2ABB9C';
    }

    this.getSecondaryColor = function getSecondaryColor() {
        return '#E3F6F2';
    }

    function resize(input) {
        var length = (input.value.length + 1);
        if ((length * 8) > 40) {
            input.style.width = (length * 8) + 'px';
        } else {
            input.style.width = '40px';
        }
    }
}