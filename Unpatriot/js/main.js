'use scrict';

{
  const logo = document.querySelector('.logo-title')
  const survise = document.querySelector('.s');
  const portfolio = document.querySelector('.p');
  const member = document.querySelector('.m');
  const company = document.querySelector('.c');


  logo.addEventListener('click',()=>{
    window.scroll(0,0)
  });
  survise.addEventListener('click',()=>{
    window.scroll(0,400)
  });
  portfolio.addEventListener('click',()=>{
    window.scroll(0,680)
  });
  member.addEventListener('click',()=>{
    window.scroll(0,1400)
  });
  company.addEventListener('click',()=>{
    window.scroll(0,1900)
  });
}