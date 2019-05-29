# GitHub blog

If you are like me, you probably want to blog from the command line with your favorite text editor instead of going to a website and use a random editor that probably will not help you as much as you wanted. This is why I wrote this: I want to use Github as the database for my serverless blog. The idea is:

1. Create a Github repository to store your posts.
1. In your website, include the Javascript files to load and retrieve blog posts.

Simple, right? Now let's get into the details...

## Posts repository

``` sh
# TODO Add information on how to do this
```

## Blog repository

``` javascript
// Add information on how to use the posts repo
```

# Development

To run unit tests, you will need:

- A simple HTTP server

## Unit tests

Run your favorite HTTP server (I suggest `python -m http.server 8000` or `ruby -run -e httpd . -p 8000` though) in the root folder of this repository and access the `test.html`. It will run the unit tests for this project using [Mocha and Chai](https://mochajs.org/).
