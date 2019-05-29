describe('Github Blog', function() {
  describe('index() function', function() {
    it('should load the index from an existing blog', function(done) {
      var blog = new GithubBlog('liberdade-organizacao/posts');
      chai.assert.notExists(blog.index.error);
    });

    it('should not load the index from an invalid blog', function(done) {
      var notBlog = new GithubBlog('liberdade-organizacao/nothing-really');
      chai.assert.exists(notBlog.index.error);
    });
  });
});
