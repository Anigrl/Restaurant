import './style.css';
import firstLoad from './firstload';
import aboutUs from './about';
import conatactPage from './contact';
 
document.addEventListener('DOMContentLoaded', firstLoad())

const menu = document.querySelector('#menu');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');


contact.addEventListener('click',conatactPage)
menu.addEventListener('click', firstLoad)
about.addEventListener('click', aboutUs)

console.log('hlo webpack from watch')

