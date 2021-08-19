A sample project that demonstrates how a cookie can be created by a server and stored on the client-side 
and can then be used in subsequent requests to the server to identify the user making the requests. 

I had created this project because during one of my other projects I had experienced a bug whereby the cookie was shown on the servers response header,
however the cookie was not being stored in the browser, so I had created a project in isolation to solve this issue.

### Demo:
![Demonstrating Cookie Storage/Usage](https://github.com/RamanSB/CookieDemo/blob/master/client/public/cookie-demo%20copy.gif)

Note: Upon selecting set-cookie, the server generates a cookie and sets it on the servers response header. This cookie was visible on the response-header but was never visible on the 'Application tab', changes had to be made in order for the cookie to be persisted on the front-end (Application Tab) - when check cookie button is clicked, the server checks the 'req.cookies' field on the request object (this field is only populated because the cookie-parser library has been used). The cookie can be used to identify which user is making a request.
