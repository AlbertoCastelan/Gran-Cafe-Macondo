
const bars = document.querySelector('.header__bars');
const times = document.querySelector('.header__times');
const navlist = document.querySelector('.header__nav');

const toggleClass = () => {
  navlist.classList.toggle('active');
}

bars.addEventListener('click', toggleClass);
times.addEventListener('click', toggleClass);

/* Contact form submit */
export function sendMail(event) {

  event.preventDefault();

  let tempParams = {
      from_name: document.getElementById('input-name').value,
      from_company: document.getElementById('input-company').value,
      email_address: document.getElementById('input-company').value,
      phone_number: document.getElementById('input-phone').value,
      message_info: document.getElementById('input-message').value
  };

  const contactInfo = document.querySelector('.contact__form');

  emailjs.send('macondo_message', 'template_gnl3mzn', tempParams)
      .then(function(response){
          console.log("Success", response.status);
          alert('Thank you for your message, we will contact you as soon as possible');
  })
}

function clearValues() {
  inputs.forEach(input => input.value = '');
  message.value = '';
}
const submitMsg = document.querySelector('.contact__submit');
const inputs = document.querySelectorAll('.contact__form-input');
const message = document.querySelector('.contact__message');
submitMsg.addEventListener('click', sendMail);
submitMsg.addEventListener('click', clearValues);

