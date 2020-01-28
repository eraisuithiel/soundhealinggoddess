import './../sass/styles.scss';
import nav from './nav';
import contactForm from './contactForm';

nav();

if(document.querySelector('#submit-btn')){
  const submit = document.querySelector('#submit-btn');
  submit.addEventListener('click', contactForm);
}
