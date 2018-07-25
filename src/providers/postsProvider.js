class postsProvider {

    constructor() {
    }

    getPosts() {
        var posts = JSON.parse(localStorage.getItem('posts'));
        return posts;
    }

    addPost(post) {
        var posts = JSON.parse(localStorage.getItem('posts'));
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    updatePost(id, key, value) {
        var posts = this.getPosts();
        for(let i = 0; i < posts.length; i++) {
            if(posts[i].id == id) {
                posts[i][key] = value;
            }
        }
        localStorage.setItem('posts', JSON.stringify(posts));
    }
}


var Posts = new postsProvider();

export default Posts;