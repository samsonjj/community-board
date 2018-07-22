import posts from '../stubs/posts';

var Posts = new Object();

Posts.getPosts = function() {
    return posts;
}

export default Posts;