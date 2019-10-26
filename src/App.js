import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.component'
import Section from "./components/section.component";
import Section2 from "./components/section2.component";
import Blog from './components/blog.component'
import BlogEntry from "./components/blog.entry.component";
import Form from './components/form.component'
import Footer from "./components/footer.component";
import Navigation from "./components/navigation.component";
function App() {
  return (
    <div className="App">

            <Section title="ithinkso.digital" paragraph="bring digital to center of your business thinking"/>
            <Section2 paragraph={[
                <span className="highlight-container"><span className="highlight">We work with business to help them become digital,</span></span>,
                "focus on the right thing and growth. We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & dev, lead generation.",
                <span className="highlight-container"><span className="highlight"> We work with you, not for you.</span></span>,
            ]}
            />
        <Form paragraph={[
            <span className="highlight-container"><span className="highlight">If you’re a business owner on the fence about creating a website, I’ll save you some time—you need one. A good one.</span></span>, "A professionally designed, lead-catching, sales-increasing, brand-differentiating website. We can help you! Just fill the form for more information"
        ]}
        />
        <Footer/>
        <div className="get-bottom">Lorem ipsum</div>
    </div>
  );
}

export default App;
