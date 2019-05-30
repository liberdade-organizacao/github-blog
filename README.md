# GitHub blog

If you are like me, you probably want to blog from the command line with your favorite text editor instead of going to a website and use a random editor that probably will not help you as much as you wanted. This is why I wrote this: I want to use Github as the database for my serverless blog. The idea is:

1. Create a Github repository to store your posts.
1. In your website, include the Javascript files to load and retrieve blog posts.

Simple, right? Now let's get into the details...

## Posts repository

Your posts repository must contain an `index.json` file organized as a list of JSON objects containing the following fields:

- `link`: indicates what is the path to the file containing the post data
- `title`: contains the blog post title
- `description`: shortly describes what your post is about

The remaining files can blog posts in whatever format you want (as long as you are able to use it).


## Blog repository

To use the `github-blog` library, use [GitCDN](https://www.gitcdn.xyz) to enable the use of the `GithubBlog` variable. It will probably look like this:

``` html
<script src="https://www.gitcdn.xyz/repo/liberdade-organizacao/github-blog/master/github-blog.min.js"></script>

<script>
    var postLink = '';
    var blog = new GithubBlog('liberdade-organizacao/posts');
    blog.loadIndex(function(index) {
        postLink = index[0].link;
    });

    blog.loadPost(postLink, function(post) {
        console.log(post);
    });
</script>
```


# Development

To run unit tests, you will need:

- A simple HTTP server

## Unit tests

Run your favorite HTTP server (I suggest `python -m http.server 8000` or `ruby -run -e httpd . -p 8000` though) in the root folder of this repository and access the `test.html`. It will run the unit tests for this project using [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/).
