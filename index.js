// Code your solutions in this file
function writeCards(names, occasion) {
    const cards = [];
    for (let name in names) {
        cards.push(`Thank you, ${names[name]}, for the wonderful surprise gift!`);
    }
    return cards
}

function countDown (count) {
    while (count + 1 > 0) {
        console.log(count--);
      }
}