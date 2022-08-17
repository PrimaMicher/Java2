const cards = document.querySelectorAll('.memory-card');

cards.forEach ( card =>{
    // Add Evant Listener to every card
    card.addEventListener('click', flipCard)
})