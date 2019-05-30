describe('Assumptions', function() {
    describe('Strings', function() {
        it('Should interpolate as expected', function() {
            var name = "Joe";
            var result = `Hello ${name}!`
            var expected = "Hello Joe!";
            chai.assert.equal(result, expected);
        });
    });
});

describe('Github Blog', function() {
  describe('index() function', function() {
    it('should load the index from an existing blog', function(done) {
      var blog = new GithubBlog('liberdade-organizacao/posts');
      blog.loadIndex(function(index) {
          chai.assert.notExists(index.error);
          chai.assert.isAbove(index.length, 3);
          for (var i = 0; i < index.length; i++) {
              var post = index[i];
              chai.assert.exists(post.link);
              chai.assert.exists(post.title);
              chai.assert.exists(post.description);
          }
          done();
      });
    });

    it('should not load the index from an invalid blog', function(done) {
      var notBlog = new GithubBlog('liberdade-organizacao/nothing-really');
      notBlog.loadIndex(function(index) {
          chai.assert.exists(index.error);
          done();
      });
    });
  });
});
