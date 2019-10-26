import React, {Component} from 'react';
import  {Link} from 'react-router-dom';
import Footer from "./footer.component";


class Blog extends Component {
    state = {
        postsList: [],
    };


    componentDidMount() {
        fetch('http://127.0.0.1:8000/its/blog/')
            .then(response => response.json())

            .then(data => this.setState({
                postsList: data,
            }));
    };

    renderList = () => this.state.postsList.map((item, id) =>
        (<div key={id}><h2><Link className ="blog-list-title" to={`/blog/post/${item.id}`} >{item.title}</Link></h2><p>{item.tldr}</p></div>)

    );

    render() { return (

<div className="">
    <div className="Section">
        <div className="column column-blog-left posts-listing">
            <h1><span className="highlight-container-blog"><span className="highlight">ithinkso.digital</span></span> blog:</h1>
            {this.renderList()}
        </div>
        <div className="column column-blog-right">

        </div>
    </div>
    <Footer/>
</div>


    );
    }
}
export default Blog;