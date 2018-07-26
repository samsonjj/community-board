import {serialize, deserialize} from 'react-serialize';

class postsProvider {

    getPosts() {
        var posts = JSON.parse(localStorage.getItem('posts'));
        for(let i = 0; i < posts.length; i++)
        {
            console.log(posts[i]);
            posts[i].body = deserialize(posts[i].body);
        }
        return posts;
    }

    addPost(post) {
        var posts = JSON.parse(localStorage.getItem('posts'));
        post = JSON.parse(serialize(post));
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    updatePost(id, key, value) {
        if(key === 'body') {
            value = JSON.parse(serialize(value));
        }

        var posts = this.getPosts();
        for(let i = 0; i < posts.length; i++) {
            if(posts[i].id === id) {
                posts[i][key] = value;
            }
        }
        localStorage.setItem('posts', JSON.stringify(posts));
    }
}


var Posts = new postsProvider();

export default Posts;