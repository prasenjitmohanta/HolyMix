document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach(function (item) {
      const questionBtn = item.querySelector('.question-btn');
      const answer = item.querySelector('.answer');
  
      questionBtn.addEventListener('click', function () {
        // Hide all other answers
        faqItems.forEach(function (otherItem) {
          if (otherItem !== item) {
            otherItem.querySelector('.answer').style.display = 'none';
          }
        });
  
        // Toggle display of this answer
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      });
    });
  });
  