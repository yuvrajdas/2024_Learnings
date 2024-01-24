function createPost(post) {

    return new Promise((resolve, reject) => {
  
      setTimeout(() => {
  
        posts.push(post);
  
        resolve(post);
  
      }, 1000);
  
    });
  
  }
  
  
  
  function updateLastUserActivityTime() {
  
    return new Promise((resolve, reject) => {
  
      setTimeout(() => {
  
        lastActivityTime = new Date();
  
        resolve(lastActivityTime);
  
      }, 1000);
  
    });
  
  }
  
  
  
  function deletePost(postId) {
  
    return new Promise((resolve, reject) => {
  
      setTimeout(() => {
  
        const index = posts.findIndex(post => post.id === postId);
  
        if (index !== -1) {
  
          posts.splice(index, 1);
  
          resolve();
  
        } else {
  
          reject(new Error("Post not found"));
  
        }
  
      }, 1000);
  
    });
  
  }
  
  
  
  let posts = [];
  
  let lastActivityTime = null;
  
   
  
  createPost({ id: 1, content: "Hello, World!" })
  
    .then(() => updateLastUserActivityTime())
  
    .then(updatedLastActivityTime => {
  
      console.log("Posts:", posts);
  
      console.log("Last Activity Time:", updatedLastActivityTime);
  
      return deletePost(1);
  
    })
  
    .then(() => {
  
      console.log("Post successfully deleted");
  
      console.log("Remaining Posts:", posts);
  
    })
  
    .catch(error => console.error(error));
  
  