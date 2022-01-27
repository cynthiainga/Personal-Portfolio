const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const email = document.getElementById('mail');
const messageInput = document.getElementById('msg');

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
