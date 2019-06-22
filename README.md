# Asynchronous requests with Javascript

This repository contains three examples of the differents ways to make a Asynchronous request in JavaScript.  As result of the Things learned on the Udacity's Course [Asynchronous JavaScript Requests](https://classroom.udacity.com/courses/ud109).

To learn more about this and all about the web the recomendation is read the [Mozilla Developer Network documentation](https://developer.mozilla.org/en-US/).

## What is AJAX?

AJAX stands for **A**synchronous **J**avaScript **A**nd **X**ML. In a nutshell, it is the use of the XMLHttpRequest object to communicate with servers. It can send and receive information in various formats, including JSON, XML, HTML, and text files. AJAX’s most appealing characteristic is its "asynchronous" nature, which means it can communicate with the server, exchange data, and update the page without having to refresh the page.

The two major features of AJAX allow you to do the following:

* Make requests to the server without reloading the page
* Receive and work with data from the server

If you want to learn a bit more about AJAX check it out to the [MDN doc](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)


## How to make a HTTP request

#### Using the XMLHttpRequest object

Despite its name, [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) can be used to retrieve any type of data as JSON or HTML, not just XML.

For using it you need to create a instance of the object XMLHttpRequest

```javascript
const serverRequest = new XMLHttpRequest();

// Configure the request
serverRequest.open('GET',`https://server-domain.com?q=query`) // Add HTTP method and server URL
// onload is a callback
// It will be called when the server responses
serverRequest.onload = function () {
   const data = JSON.parse(this.responseText) // The server response is saved in the variable responseText
   
   // Do something with the data
}

serverRequest.send() // Triggers the request
```

You can see a complete example using the [Unplash](https://unsplash.com/developers) and [New York Time](https://developer.nytimes.com/) APIs [here](Ajax_XmlHttpRequest).

#### Using jQuery

jQuery is a small JavaScript library, its propose is to make much easier to use Javascript on your website. jQuery also simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.

If you would like learn more about jQuery you can read the [API documentation](https://api.jquery.com/).

```javascript
// "$" is a global variable declarated when import jQuery
// It has a lot of function to make much easier JavaScript
$.ajax({ url: `https://server-domain.com?q=query`  }).done(function (data) {
   // Do something with the data
})
```
You can see a complete example using the [Unplash](https://unsplash.com/developers) and [New York Time](https://developer.nytimes.com/) APIs [here](Ajax_jQuery).

#### Using Fetch API

The [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) is a new native way to make HTTP requests with a more powerful and flexible feature set than using the XMLHttpRequest. It uses [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) instead callback functions.

the `fecth()` method recivies as first param the path of the API you want to make the request and it returns a promise.

```javascript
fetch(`https://server-domain.com?q=query`)
   .then(response => {
      // Handle the response like a JSON object
      return response.json()
   })
   .then(function (data) {
      // Do something with the data
   })
   .catch(e => {
      // Handle the error
   }))
```

You can see a complete example using the [Unplash](https://unsplash.com/developers) and [New York Time](https://developer.nytimes.com/) APIs [here](Fetch).

Keep learning!.
