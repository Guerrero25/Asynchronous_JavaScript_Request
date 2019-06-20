# Asynchronous request with Javascript

Examples the differents ways to make a Ajax request in Javascript

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
// onload is a callback, it will be called when the server responses
serverRequest.onload = function () {
   const data = JSON.parse(this.responseText) // The server response is saved in the variable responseText
   
   // Do something with the data
}

serverRequest.send() // Triggers the request
```

You can see a complete example using the [Unplash](https://unsplash.com/developers) and [New York Time](https://developer.nytimes.com/) APIs [here](Ajax_XmlHttpRequest/js/app.js).
