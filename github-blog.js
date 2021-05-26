function GithubBlog(postsRepo, blog_file) {
    this.src = postsRepo;
    this.blog_file = (!!blog_file)? blog_file : "index.blog.json";

    this.makeInternalGetRequest = function(url, callback) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                callback(request.responseText);
            } else {
                callback({error: "Bad request"});
            }
        };
        request.onerror = function() {
            callback({error: "Connection error"});
        };
        request.send();
    }

    this.loadIndex = function(callback) {
        this.makeInternalGetRequest(`https://raw.githubusercontent.com/${this.src}/master/${this.blog_file}`, function(response) {
            if (response.error) {
                callback(response);
            } else {
                callback(JSON.parse(response));
            }
        });
    }

    this.loadPost = function(postLink, callback) {
        this.makeInternalGetRequest(`https://raw.githubusercontent.com/${this.src}/master/${postLink}`, callback);
    }
}
