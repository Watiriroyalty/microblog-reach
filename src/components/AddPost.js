import React, { Component } from 'react';
import DefaultNavbar from '../components/DefaultNavbar';
import DefaultFooter from '../components/DefaultFooter';

class AddPost extends Component {

    addNewPost(e) {
        e.preventDefault();
        var post = {
            blogPost: this.blogPost.value,
            date: Date(),
            author: this.props.author,
            image: this.props.image
        };
        this.props.addPost(post);
        this.blogPost.value = "";
        this.blogPost.placeholder = "What are you doing?";
    }

    render() {
        return (
            <>           
            <main id="main">
            <section class="breadcrumbs">
                     <div class="container">
                        <div >
                            <h2>Welcome to Our Chiper Box</h2>      
                            </div>
                        </div>
                </section>    
               
                <section id="blog" class="blog">
      <div class="container" data-aos="fade-up">

        <div class="row">

          <div class="col-lg-8 entries">

            <article class="entry">
            <form onSubmit={(e) => this.addNewPost(e)}>
                <p><textarea ref={(input) => this.blogPost = input} placeholder="What are you doing?">
                </textarea><br />
                    <button class=" bg-primary " type="submit">Post</button>
                </p>

            </form>
            </article>
            </div>
            </div>
            </div>
            </section>
           
</main>
            </>
        );
    }
}

export default AddPost;

