const r = rolly({
    view: document.querySelector('#app'),
    native: false,
    limitInertia: false,
    mouseMultiplier: 0.5,
    touchMultiplier: 1.5,
    firefoxMultiplier: 30,
    preventTouch: true,
    change: function () {
          modal.classList.remove('show')
    }
  
  });
  r.init();


let   neme = document.querySelector('#name'),
      email = document.querySelector('#email'),
      texts = document.querySelector('#text'),
      button = document.querySelector('#btnForm');
const tables = document.querySelector('#tab'), 
      bolx = document.querySelector('#bolx'), 
      exits = document.querySelector('#exit');
      
function form() {
      button.addEventListener('click', (ivent)=> {
          ivent.preventDefault()
          console.log(neme.value, 'имя');  
          console.log(email.value, 'Емаил'); 
          console.log(texts.value, 'Текст'); 
          postData('http://serc', { answer: {name:neme.value, email:email.value, message:texts.value, type: 'form'} })
            .then((data) => {
              tables.innerHTML = '';
              tables.insertAdjacentHTML('afterbegin', data);
              bolx.classList.add('an_open'),
              bolx.classList.remove('an_close');
            console.log(data);
            });
      })

      
}
exits.addEventListener('click', ()=> {
  bolx.classList.add('an_close');
  setTimeout(() => {
    bolx.classList.remove('an_open');
  }, 800);
 
 
})

form();



async function postData(url = '', data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return await response.text(); // parses JSON response into native JavaScript objects
}
    
   