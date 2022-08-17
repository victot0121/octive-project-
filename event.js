const form = document.querySelector('.form')
const Name = document.querySelector('#name')
const eventsContainer = document.querySelector('.events-container')


 const showEvents = () => {
 
   const output = `
          <div class="card">
            <div class="card--details">
              <div>
                <h3> Dear ${Name.value} you just book an event and we will get back to you in a minute</h3>
              </div>
            </div>
          </div>
          `
      eventsContainer.innerHTML += output;
 } 



form.addEventListener('submit', e => {
   e.preventDefault()
   showEvents()

  })