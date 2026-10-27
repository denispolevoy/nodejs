import EventEmitter from 'events';

class Post extends EventEmitter {
  likesQty = 0;
  constructor(author, text) {
    super();
    this.author = author;
    this.text = text;
    this.on('likePost', username => console.log(`${username} liked your post!`));
    this.on('error', error => console.log(error));
  }

  like(username) {
    if (!username) {
      return this.emit('error', new Error('No username in the like request!'));
    }
    this.likesQty += 1;
    this.emit('likePost', username);
  }
}

const myPost = new Post('Denis', 'My great post!');

// console.log(myPost.author);
// console.log(myPost.text);
// console.log(myPost.likesQty);
myPost.like('Alice');
setTimeout(() => myPost.like(), 2000);
setTimeout(() => myPost.like('Denis'), 3000);
// console.log(myPost.likesQty);
