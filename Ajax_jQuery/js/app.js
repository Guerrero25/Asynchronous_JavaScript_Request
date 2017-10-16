(function () {
  const form = document.querySelector('.search-form')
  const searchField = document.querySelector('#search-keyword')
  let searchedForText
  const bgcontainer = document.querySelector('.masthead')
  const responseContainer = document.querySelector('#response-container')

  function addImage (data) {
    if (data && data.results && data.results[0]) {
      const firstImage = data.results[0]
      bgcontainer.style.backgroundImage = `url('${firstImage.urls.regular}')`
    }
  }

  function addArticles (data) {
    let htmlContent = ''

    if (data.response && data.response.docs && data.response.docs.length > 1) {
      responseContainer.innerHTML = ''
      htmlContent = '<div class="container-articles">' + data.response.docs.map(
        article => `<a href="${article.web_url}" target="_blank"><div class="article" style="background-image:url(${article.multimedia.length !== 0 ? 'https://nytimes.com/' + article.multimedia[0].url : '/img/default.jpg'})">
                        <h2 class="article__title">${article.headline.main}</h2>
                        <p class="article__description">${article.snippet}</p>
                      </div>`).join('') + '</div>'
    } else {
      responseContainer.innerHTML = ''
      htmlContent = '<div class="error">No articles availadle</div>'
    }

    responseContainer.insertAdjacentHTML('beforeend', htmlContent)
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault()
    responseContainer.innerHTML = '<div class="charge-status"></div>'
    searchedForText = searchField.value

    $.ajax({
      url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`,
      headers: {
        Authorization: 'Client-ID cfa940013b1dad0b1009462643b1f8f6dcd18a2f5ba1165988c54476e57eacc0'
      }
    }).done(addImage)

    $.ajax({
      url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=d38430c0080d4c5eaf0710f3b32eb0f1`
    }).done(addArticles)
  })
})()
