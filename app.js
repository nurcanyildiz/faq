let questions = [
    {
        question: 'How many team members can I invite?',
        answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
    },
    {
        question: 'What is the maximum file upload size?',
        answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
    },
    {
        question: 'How do I reset my password?',
        answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
    },
    {
        question: 'Can I cancel my subscription?',
        answer: ' Send us a message and we’ll process your request no questions asked.'

    },
    {
        question: 'Do you provide additional support?',
        answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'

    }

]




for (let i = 0; i < questions.length; i++) {
    const faq = document.querySelector('#faq');
    const divElement = document.createElement('div');
    const textQuestion = document.createElement('p');
    const textAnswerTag = document.createElement('p');
    textQuestion.classList.add('text-question');
    textAnswerTag.classList.add('hidden');
    textQuestion.addEventListener('click', function () {

        if (textAnswerTag.classList.contains('hidden')) {
            textAnswerTag.classList.remove('hidden');
        } else {
            textAnswerTag.classList.add('hidden');
        }
    })

    textQuestion.innerHTML = questions[i].question + '<hr>';
    textAnswerTag.innerHTML = questions[i].answer + '<hr>';

    faq.appendChild(divElement);
    divElement.appendChild(textQuestion);
    divElement.appendChild(textAnswerTag);
    console.log();

}

