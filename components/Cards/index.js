// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

 const cardContainer = document.querySelector('.cards-container')
function gitHubCard(author){

    // creat the element 
    const artiCleDiv = document.createElement('div')
    const headLine = document.createElement('div')
    const auThorDiv = document.createElement('div')
    const imgDiv = document.createElement('div')
    const image = document.createElement('img')
    const spanTag = document.createElement('span')

    artiCleDiv.classList.add('card')
    headLine.classList.add('headline')
    auThorDiv.classList.add('author')
    imgDiv.classList.add('img-container')

    headLine.textContent = author.headline;
    image.src = author.authorPhoto
    spanTag.textContent = author.authorName


   artiCleDiv.appendChild(headLine)
   artiCleDiv.appendChild(auThorDiv)
   auThorDiv.appendChild(imgDiv)
   imgDiv.appendChild(image)
   auThorDiv.appendChild(spanTag)

   return artiCleDiv
}
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {   
  
    console.log('this is good way to try', response.data.articles)

    response.data.articles.bootstrap.forEach((item)=>{
        cardContainer.appendChild(gitHubCard(item))
    })
    response.data.articles.javascript.forEach((item)=>{
        cardContainer.appendChild(gitHubCard(item))
    })
    response.data.articles.jquery.forEach((item)=>{
        cardContainer.appendChild(gitHubCard(item))
    })
    response.data.articles.node.forEach((item)=>{
        cardContainer.appendChild(gitHubCard(item))
    })
    response.data.articles.technology.forEach((item)=>{
        cardContainer.appendChild(gitHubCard(item))
    })
 
})
.catch(error =>{
    console.log('It is a bad idea', error )
})

