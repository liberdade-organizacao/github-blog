class GitlabBlog {
  constructor(repo) {
    this.repo = `https://glcdn.rawgit.org/${repo}/master`;
  }

  loadIndex(callback) {
    var request = new XMLHttpRequest();
    request.open('GET', `${this.repo}/index.blog.json`, true);
    request.onload = function() {
      return callback(JSON.parse(this.response));
    };
    request.onerror = function() {
      return callback({
        error: "Failed to load index.blog.json"
      });
    };
    request.send();
  }

  loadPost(address, callback) {
    const resource = `${this.repo}/${address}`
    var request = new XMLHttpRequest();
    request.open('GET', resource, true);
    request.onload = function() {
      return callback(this.response);
    };
    request.onerror = function() {
      return callback({
        error: `Failed to load ${resource}`
      });
    };
    request.send();
  }
}
