const ques = document.querySelectorAll('.ques');
const answers = document.querySelectorAll('.ans');

function selectItem(e){
    removeShow();
    const answer = document.querySelector(this.class);
    answer.classList.add('show');
}

function removeShow(){
    answers.forEach(item => item.remove('show'));
}

ques.forEach(item => item.addEventListener('click',selectItem));