import React, { Component } from 'react';
//import logo from '../Microscope-icon.png';
//import '../App.css';
import AddPost from './../components/AddPost';
import Post from './../components/Post';
import { initialPosts } from '../posts.js';
import { defaultUser } from '../users.js';
import { initialUser } from '../users.js';
import DefaultFooter from '../components/DefaultFooter';
import DefaultNavbar from '../components/DefaultNavbar';


class App extends Component {

  constructor() {
    super();
    this.state = {
      posts: initialPosts,
      user: initialUser,
      isLoggedIn: false
    };

    this.addPostToPostList = this.addPostToPostList.bind(this);
    this.autoLogin = this.autoLogin.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

  }

  addPostToPostList(post) {
    var ts = Date.now();
    var newPost = {};
    newPost['post' + ts] = post;
    var currentPosts = { ...this.state.posts };
    var newPosts = Object.assign(currentPosts, newPost);
    this.setState({ posts: newPosts });
  }

  autoLogin() {
    this.setState({
      user: defaultUser,
      isLoggedIn: true
    })

  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  addNewUser(event) {
    const user = this.state.user;
    const value = event.target.value;
    const name = event.target.name;
    user[name] = value;

    this.setState({
      user
    });
  }


  handleLogout() {
    this.setState({
      user: initialUser,
      isLoggedIn: false
    })
  }


  render() {
    return (
        <>
       
      <DefaultNavbar/> 
     
        <div className="container">
          <div className="row">
            <div className="four columns">
             
            <div className="eight columns">
              <div className="content">
                <AddPost
                  addPost={this.addPostToPostList}
                  author={this.state.user.fullName}
                  image={this.state.user.profilePic} />
                <div className='postList'>
                  {
                    Object
                      .keys(this.state.posts)
                      .map(key => <Post key={key} meta={this.state.posts[key]} />)
                      .reverse()
                  }
                </div>
              </div>
            </div>
          </div>
         
        </div>

        
      </div>
      <DefaultFooter />
      </>
    );
  }
}

export default App;
