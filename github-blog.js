function get(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            callback(JSON.parse(request.responseText));
        } else {
            callback({error: "Bad request"});
        }
    };
    request.onerror = function() {
        callback({error: "Connection error"});
    };
    request.send();
}

function GithubBlog(postsRepo) {
    this.src = postsRepo;

    this.loadIndex = function(callback) {
        get(`https://www.gitcdn.xyz/repo/${this.src}/master/index.json`, callback);
    }

    this.getPost = function(postId) {
        return null;
    }
}
