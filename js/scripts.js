$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    let sentence = $('input#sentence').val();

    console.log(sentence);

    let sentenceSplit = sentence.split("");
    let finalSentence = [];
    console.log(sentenceSplit);

    for (let i=0; sentenceSplit.length > i; i+=1) {
      let finalSentence = sentenceSplit[i];
      if (finalSentence === "a" || finalSentence === "e" || finalSentence === "i" || FinalSentence === "o" || finalSentence === "u") {
      finalSentence[i] = '-';
      } else {
        
        alert ("test ");
      }

  });
});
