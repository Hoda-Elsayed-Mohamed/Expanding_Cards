 const cards = document.querySelectorAll('.card')
 const containerEl = document.querySelector('.container')
 
 containerEl.addEventListener('click', (e)=>{
    
    cards.forEach(card => {
    if(e.target.dataset == card.dataset){
        card.classList.add('active')
    }else{
        card.classList.remove('active')
    }

     });
 })