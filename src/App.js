import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    componentDidMount() {
        let videoObject = {
            container: '#video', //容器的ID或className
            variable: 'player',//播放函数名称
            video:'http://47.75.146.52:8686/room/123.m3u8'//视频地址
        };
        let player = new window.ckplayer(videoObject);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div id="video"></div>
                </header>
            </div>
        );
    }
}

export default App;
