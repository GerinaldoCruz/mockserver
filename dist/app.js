const createAndAppend = (parent,tag, text, className = '') => {
   const element = document.createElement(tag)
   element.textContent = text
   if (className) element.className = className
   parent.appendChild(element)
   return element
}

const createMovieCard = (movie) => {
   const item = document.createElement('div')
   item.className = 'movie'

   createAndAppend(item, 'h2', movie.title)
   createAndAppend(item, 'p', movie.genre, 'genre')
   createAndAppend(item, 'p', movie.synopsis)

   return item
}

const populateMovies = async () => {
   const moviesContainer = document.querySelector('#movies')
   moviesContainer.innerHTML = ''

   const response = await fetch('http://localhost:3001')
   const mockData = await response.json()

   for (const movie of mockData) {
      const card = createMovieCard(movie)
      moviesContainer.appendChild(card)
   }
}

document.querySelector('#fetch').addEventListener('click', () => {
   populateMovies()
})
