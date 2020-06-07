// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const headerMaker = document.querySelector('.header-container')
function Header(item) {
    const headDiv = document.createElement('div')
    const spanTag = document.createElement('span')
    const headH1 = document.createElement('h1')
    const spanTag1 = document.createElement('span')

    headDiv.appendChild(spanTag)
    headDiv.appendChild(headH1)
    headDiv.appendChild(spanTag1)


    headDiv.classList.add('header')
    spanTag.classList.add('date')
    spanTag1.classList.add('temp')

    spanTag.textContent = 'SMARCH 28, 2019'
    headH1.textContent = ' Lambda Times'
    spanTag1.innerHTML = '98&deg'

return headDiv
}
const newHead = Header()
headerMaker.appendChild(newHead);