// Move the button to a random position
function moveButton(button) {
    var container = document.querySelector('.container');
  
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;
  
    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;
  
    var maxX = containerWidth - buttonWidth;
    var maxY = containerHeight - buttonHeight;
  
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);
  
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
  }
  
  // Event listener for button hover
  function handleButtonHover(event) {
    moveButton(event.target);
  }
  
  // Event listener for button click
  function handleButtonClick(event) {
    var button = event.target;
  
    if (button.id === 'yesBtn') {
      alert('Thank you, LOVE YOU !');
    } else if (button.id === 'noBtn') {
      moveButton(button);
    }
  }
  
  // Event listeners for the buttons
  var yesBtn = document.querySelector('#yesBtn');
  var noBtn = document.querySelector('#noBtn');
  
  yesBtn.addEventListener('click', handleButtonClick);
  noBtn.addEventListener('click', handleButtonClick);
  noBtn.addEventListener('mouseover', handleButtonHover);
  