function makeInternalGetRequest(url, callback) {
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

function GithubBlog(postsRepo) {
    this.src = postsRepo;

    this.loadIndex = function(callback) {
        makeInternalGetRequest(`https://raw.githubusercontent.com/${this.src}/master/index.json`, function(response) {
            if (response.error) {
                callback(response);
            } else {
                callback(JSON.parse(response));
            }
        });
    }

    this.loadPost = function(postLink, callback) {
        makeInternalGetRequest(`https://raw.githubusercontent.com/${this.src}/master${postLink}`, callback);
    }
}
