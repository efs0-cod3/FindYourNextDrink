//The user will enter a cocktail. 
// Get a cocktail name,
// photo, and
// instructions and place them in the DOM
let drink_section = document.getElementById('drinks-section');
document.querySelector('button').addEventListener('click', getDrink)


let cards = '',dat,slides;

function getDrink() {
    let drink = document.querySelector('.input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
                for (let item in data) {
                 dat = data[item]

                    dat.forEach((drnk) => {
                        cards += `
    <div class="card ${drnk.strDrink}">
    <img class="drink-img" src="${drnk.strDrinkThumb}" alt="Drink Img">
    <h2 class="drink-name">${drnk.strDrink}</h2>
    <p class="instructions">${drnk.strInstructions}</p>
    </div>
    `               
                    })
                }
                slides = document.getElementsByClassName('card'),
        addActive = function(slide) {slide.classList.add('active')},
        removeActive = function(slide) {slide.classList.remove('active')};
    addActive(slides[0]);
    
 if(slides.length == 1){
addActive(slides[0])
 }else{
    setInterval(function (){
        for (var i = 0; i < slides.length; i++){
          if (i + 1 == slides.length) {
            addActive(slides[0]);
            slides[0].style.zIndex = 100;
            setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
            break;
          }
          if (slides[i].classList.contains('active')) { 
            slides[i].removeAttribute('style');
            setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
            addActive(slides[i + 1]);
            break;
          }
        } 
      }, 4000);
 }
            
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
        drink_section.innerHTML = cards
}


    
  
    