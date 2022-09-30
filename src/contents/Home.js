import React, { Component } from 'react'
import profilepic from '../img/irin.jpg'
import Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect';


class Home extends Component{
    render() {
        return (
            <div className="condiv home">
              <img src='https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/289784026_1644397249262753_1152563163790045868_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8pX-gTdU_jcAX-9CIiN&_nc_ht=scontent.fbkk12-1.fna&oh=00_AT-oOH1uxuA1DNYARzBQGthxNV5ZH40UJj-4T1PGkE1wzA&oe=632C38A2' alt='profile' className='profilepic'></img>
                <ReactTypingEffect text={['I am Irin Andris', 'I am a web Developer']} speed={80} eraseDelay={200} className="typingeffect"></ReactTypingEffect>
                <Social />
            </div>
        );
    }
}
export default Home;