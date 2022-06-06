cardArray =[
    {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
]
const cards = document.getElementById('cards')
cardArray.sort(()=> 0.5 -Math.random())
console.log(cardArray)

for(i=0; i<cardArray.length; i++){
    const card = document.createElement('img')
    card.setAttribute('src','images/blank.png')
    card.setAttribute('class','mt-4')
    card.setAttribute('data-id',i)
    card.addEventListener('click',flip)
    cards.append(card)

}
const selected =[]
function flip(){
    let card_id = this.getAttribute('data-id')
    console.log(cardArray,card_id)
    console.log("card   ",cardArray[card_id])
    selected.push(cardArray[this.data_id])

    console.log(cardArray[card_id])
    this.setAttribute('src',cardArray[card_id].img)
    if(selected.length ==2 && selected[0] == selected[1]){
        console.log('finded')
    }
    console.log("selected item ",selected)
}