const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const email = document.getElementById('mail');
const messageInput = document.getElementById('msg');
const label = document.getElementByIdId('label'),

const alertParent = document.querySelector('.btn-submit-alert');
const alertMsg = document.createElement('p');
alertParent.appendChild(alertMsg);
alertMsg.innerText = 'Please enter a valid email address.';
alertMsg.style.backgroundColor = '#fff';
alertMsg.style.color = '#127e4d';
alertMsg.style.fontWeight = '600';
alertMsg.style.textShadow = '1px 1px 5px #60C095';
alertMsg.style.padding = '10px';
alertMsg.style.visibility = 'hidden';

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    alertMsg.style.visibility = 'visible';
    email.style.border = ' 2px solid #60C095';
    email.style.boxShadow = '1px 1px 10px #008552';

    setTimeout(() => {
      alertMsg.style.visibility = 'hidden';
      email.style.border = '1px solid #d0d9d4';
      email.style.boxShadow = 'none';
    }, 8000);
    e.preventDefault();
  } else {
    alertMsg.style.visibility = 'hidden';
    email.style.border = '1px solid #d0d9d4';
  }
});

form.addEventListener('input', () => {
  const input = {
    enterName: nameInput.value,
    enterEmail: email.value,
    enterMessage: messageInput.value,
  };
  localStorage.setItem('dataStorage', JSON.stringify(input));
});

let savedDataStorage = localStorage.getItem('dataStorage');
savedDataStorage = JSON.parse(savedDataStorage);

window.onload = () => {
  if (savedDataStorage) {
    nameInput.value = savedDataStorage.enterName;
    email.value = savedDataStorage.enterEmail;
    messageInput.value = savedDataStorage.enterMessage;
  }
};
