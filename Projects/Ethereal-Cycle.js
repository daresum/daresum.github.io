
let linkGrid = document.getElementById('link-grid')
let linkCount = 371; // Accounted 6 empty grid items for first and last row
let links = [
  `linkGoesHere`,
  `linkGoesHere`,
  `linkGoesHere`,
  `linkGoesHere`,
  `linkGoesHere`,
  //etc...
]

for(let i = 0; i < linkCount; i++){
  if( i < 3 || (i>3 && i<7)){
    let gridEmptyItem = document.createElement('span')
    gridEmptyItem.classList.add('grid-item-empty')
    gridEmptyItem.id = `empty-item-${i}`
    linkGrid.appendChild(gridEmptyItem)
  } else {
    // links.push(`testLink${i+1}`)
    let gridItem = document.createElement('span')
    gridItem.classList.add('grid-item')
    gridItem.id = `link-to-${i+1}`
    // gridItem.href = links[i] //Popolni links so site linkoj, i odkomentiraj go ova
    //gridItem.href = `https://www.youtube.com/watch?v=ej-3_OyWXbA`
    //gridItem.target = "_blank"
    linkGrid.appendChild(gridItem)
  }
}