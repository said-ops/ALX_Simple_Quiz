function checkAnswer(){
    const correctAnswer = "4";
    let userAnswer = null;
    let feedback = document.querySelector("feedback");
    let inputs =document.querySelectorAll("input[name='quiz']");

    inputs.forEach(element => {
        if(element.checked===true)
        userAnswer=element.value;
    });
   if (userAnswer === correctAnswer)
    feedback.textContent = "Correct! Well done";
   else
   feedback.textContent = "That's incorrect. Try again!"
}
document.getElementById('submit-answer').addEventListener('click',checkAnswer);