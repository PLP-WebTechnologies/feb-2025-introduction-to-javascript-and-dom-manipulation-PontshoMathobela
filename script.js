function changeContent() {
    const text = document.getElementById('intro-text');
    text.textContent = 'The text and style have been updated!';
    text.style.color = 'blue';
    text.style.fontWeight = 'bold';
    text.style.fontSize = '18px';
  }
  
  function addElement() {
    const container = document.getElementById('dynamic-container');
    const newPara = document.createElement('p');
    newPara.textContent = 'A new paragraph has been added!';
    newPara.id = 'new-paragraph';
    container.appendChild(newPara);
  }
  
  function removeElement() {
    const para = document.getElementById('new-paragraph');
    if (para) {
      para.remove();
    }
  }
  