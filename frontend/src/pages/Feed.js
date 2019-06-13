import React, { Component } from 'react';
import api from '../services/api';
// css
import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

export default class Feed extends Component {
    
    state = {
        feed: []
    };

    async componentDidMount() {
        const response = await api.get('posts');
        this.setState({ feed: response.data });
    }

    render() {
        return (
            <section id="post-list">
                { this.state.feed.map(post => (
                    <article key={post._id}>

                        <header>
                            <div className="user-info">
                                <span> {post.author}</span>
                                <span className="place"> {post.place} </span>
                            </div>
                            <img src={more} alt="Mais"/>
                        </header>

                        <img src={`http://localhost/files/${post.image}`} alt="Post"/>

                        <footer>
                            <div className="actions">
                                <img src={like} alt=""/>
                                <img src={comment} alt=""/>
                                <img src={send} alt=""/>
                            </div>

                            <strong>{post.likes} curtidas</strong>

                            <p> {post.description} <span>{post.hashtag}</span> </p>
                        </footer>

                    </article>

                ))}

            </section>
        );
    }
}