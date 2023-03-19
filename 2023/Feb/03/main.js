const buttons = document.querySelectorAll(".question__button");

buttons.forEach((button) => {
  button.addEventListener("click", toggleFAQ);
  const qButton = button
  return qButton
});

function toggleFAQ(evt) {
  const question = evt.target.parentElement;
  const answer = question.children[0].children[1];

  question.classList.toggle("active");
  if (question.classList.contains("active")) {
    answer.style.maxHeight = answer.scrollHeight + "px";
  } else {
    answer.style.maxHeight = 0;
  }
}
