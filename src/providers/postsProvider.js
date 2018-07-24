import posts from '../stubs/posts';

var Posts = new Object();

Posts.posts = posts;

Posts.getPosts = function() {
    return this.posts;
}

Posts.addPost = function(post) {
    this.posts.push(post);
}

export default Posts;