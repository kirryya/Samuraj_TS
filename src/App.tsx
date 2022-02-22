import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <div className="header">1</div>
            <div className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </div>
            <div className="content">
                <div>
                    <img src="https://storge.pic2.me/c/1360x800/323/582b0f346f341.jpg"
                         alt="Фоновая картинка"/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                        <div>
                            post1
                        </div>
                        <div>
                            post2
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default App
