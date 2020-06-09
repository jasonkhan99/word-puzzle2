$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    let sentence = $('input#sentence').val();
    

    console.log(sentence);

    let sentenceSplit = sentence.split("");
  
    console.log(sentenceSplit);
    
    for (let i=0; sentenceSplit.length > i; ++i) {
      if (sentenceSplit[i] === 'a' || sentenceSplit[i] === 'e' || sentenceSplit[i] === 'i' || sentenceSplit[i] === 'o' || sentenceSplit[i] === 'u') {
        sentenceSplit[i] = '-';
      }
    }
    
    let sentenceJoin = sentenceSplit.join('');
    console.log(sentenceSplit);
    $('.output').append(('<p>' + sentenceJoin + '<p>'));
        

  });
});
