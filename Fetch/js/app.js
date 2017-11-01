(function () {
  // Variable declaration
  const form = document.querySelector('.search-form')
  const searchField = document.querySelector('#search-keyword')
  let searchedForText
  const bgcontainer = document.querySelector('.masthead')
  const responseContainer = document.querySelector('#response-container')

  // Function for add header's image
  function addImage (data) {
    if (data && data.results && data.results[0]) {
      const firstImage = data.results[0]
      bgcontainer.style.backgroundImage = `url('${firstImage.urls.regular}')`
      bgcontainer.insertAdjacentHTML('afterbegin', `<p class="author">by ${firstImage.user.name}</p>`)
    }
  }

  // Function for add articles
  function addArticles (data) {
    let htmlContent = ''

    if (data.response && data.response.docs && data.response.docs.length > 1) {
      responseContainer.innerHTML = ''
      htmlContent = '<div class="container-articles">' + data.response.docs.map(
        article => `<a href="${article.web_url}" target="_blank">
                      <div class="article" style="background-image:url(${article.multimedia.length !== 0 ? 'https://nytimes.com/' + article.multimedia[0].url : '/img/default.jpg'})">
                        <h2 class="article__title">${article.headline.main}</h2>
                        <p class="article__description">${article.snippet}</p>
                      </div>
                    </a>`).join('') + '</div>'
    } else {
      responseContainer.innerHTML = ''
      htmlContent = '<div class="error">No articles availadle</div>'
    }

    responseContainer.insertAdjacentHTML('beforeend', htmlContent)
  }

  // Function for catch error with the fetch request
  function requestError (e, part) {
    console.log(e)
    responseContainer.insertAdjacentHTML('beforeend', `<p class="error">Oh no! There was an error making a request for the ${part}.</p>`)
  }

  // Capture of the user's search
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    responseContainer.innerHTML = '<div class="charge-status"></div>'
    searchedForText = searchField.value

    fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
      headers: {
        Authorization: 'Client-ID cfa940013b1dad0b1009462643b1f8f6dcd18a2f5ba1165988c54476e57eacc0'
      }
    }).then(response => {
      return response.json()
    }).then(addImage)
    .catch(e => requestError(e, 'image'))

    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=d38430c0080d4c5eaf0710f3b32eb0f1`)
    .then(response => {
      return response.json()
    }).then(addArticles)
    .catch(e => requestError(e, 'articcles'))
  })
})()
