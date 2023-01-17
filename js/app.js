const hamburgerButton =  document.querySelector('#menu-btn')
const hamburgerItem = document.querySelector('#menu-items')

hamburgerButton.addEventListener('click', ()=>{
hamburgerButton.classList.toggle('open')
hamburgerItem.classList.toggle('flex')
hamburgerItem.classList.toggle('hidden')
})

