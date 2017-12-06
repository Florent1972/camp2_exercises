const request = require("request");

function fetchPosts(output){
  request(
    {
      url: "http://jsonplaceholder.typicode.com/posts",
      method: "GET"
    },
    function(error, response, body) {
      output(body);
    });
}

function fetchPostByUser(userId, output){
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts?userId=${userId}`,
      method: "GET"
    },
    function(error, response, body) {
      output(body);
    });
}

function fetchPost(postId, output){
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${postId}`,
      method: "GET"
    },
    function(error, response, body) {
      output(body);
    });
}

function fetchUsers(output){
  request(
    {
      url: "http://jsonplaceholder.typicode.com/users",
      method: "GET"
    },
    function(error, response, body) {
      output(body);
    });
}

function fetchUser(userId, output){
  request(
    {
      url: `http://jsonplaceholder.typicode.com/users/${userId}`,
      method: "GET"
    },
    function(error, response, body) {
      output(body);
    });
}

function fetchComments(output){
  request(
    {
      url: "http://jsonplaceholder.typicode.com/comments",
      method: "GET"
    },
    function(error, response, body) {
      output(body);
    });
}

function fetchCommentsByPost(postId, output){
  request(
    {
      url: `http://jsonplaceholder.typicode.com/comments?postId=${postId}`,
      method: "GET"
    },
    function(error, response, body) {
      output(body);
    });
}

function callback(result){
  console.log(result);
}
fetchCommentsByPost(1, callback);

module.exports = {
  fetchPosts: fetchPosts,
  fetchPostByUser: fetchPostByUser,
  fetchPost: fetchPost,
  fetchUsers: fetchUsers,
  fetchUser: fetchUser,
  fetchComments: fetchComments,
  fetchCommentsByPost: fetchCommentsByPost,
  publishPost: publishPost,
  publishComment: publishComment
};

function publishPost(myUserId, myTitle, myBody, output){
  request(
    {
      url: "http://jsonplaceholder.typicode.com/posts",
      method: "POST",
      form: {
        userId: myUserId,
        title: myTitle,
        body: myBody
      }},
    function(error, response, body) {
      output(body);
    });
}
publishPost(2 ,"title", "body", callback);

function publishComment(myPostId, myName, myEmail, myBody, output){
  request(
    {
      url: "http://jsonplaceholder.typicode.com/comments",
      method: "POST",
      form: {
        postId: myPostId,
        name: myName,
        email: myEmail,
        body: myBody
      }},
    function(error, response, body) {
      output(body);
    });
}
publishComment(4 ,"name", "email", "body", callback);
