import React, {Component} from 'react';
import '../style/blog.entry.component.css';
import Footer from "./footer.component";

class BlogEntry extends Component {
    state = {
        post: [],
    };
    componentDidMount() {
        const postId = this.props.match.params.id
        fetch(`http://127.0.0.1:8000/its/post/${postId}`)
            .then(response => response.json())
            .then(data => this.setState({
                post: Array.isArray(data) ? data : [data],
            }));


    };


    entryTitle = () => this.state.post.map((item, id) => <span>{item.post_title}</span>);
    // entryTitle = () => this.state.post.map((item, id) => <div>{item.fields.post_title}</div>);
    entryContent = () => this.state.post.map((item, id) => <span>{item.post_text}</span>);
    // entryContent = () => this.state.post.map((item, id) => <div>{item.fields.post_text}</div>);
    entryAuthor = () => this.state.post.map((item, id) => <span>{item.post_author}</span>);
    entryImg = () => this.state.post.map((item, id) =>item.post_img);
    entryImgAlt = () => this.state.post.map((item, id) =>item.post_img_alt);

    render() { return (


        <div>
            <div className="post-content">


                <div className="blog-post">
                    <div className="blog-entry-picture-frame">
                        <img className="blog-entry-picture"
                             src={this.entryImg()}
                             alt={this.entryImgAlt()}></img>
                    </div>
                    <div className='blog-entry'>
                        {/*<div className="img-blog-entry"></div>*/}
                        <div className="column-blog-entry column-blog-entry-left">
                            <p className="blog-entry-author">{this.entryAuthor()}   </p>
                            <h1 className="blog-entry-title"><span className="highlight-container-blog"><span className="highlight">{this.entryTitle()}</span></span></h1>
                            <p className="blog-entry-content initial-letter">
                                { this.entryContent()}
                            </p>
                        </div>
                        <div className="column column-blog-entry-right"></div>
                    </div>
                </div>


            </div>
            <Footer/>
        </div>


    );
    }

}

export default BlogEntry



