import React, {useState} from 'react';
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import actions from '../api'

function Forum(props) {

    let [post, setPost] = useState('')
    // let [subject, setSubject] = useState('')
    let history = useHistory()

    const handleChange= (e) => {
        setPost(e.target.value)

    }

    const handleSubmit = async e => {
        e.preventDefault()

        let res = await actions.addPost({post})
        history.push('/forum')
        console.log('plant!')
    }

    return (
        <div style={{border: '1px solid black'}}>
            <div className="message-box">
                <div>
                    Create post
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Subject" onChange={handleChange}/>
                    <textarea cols="40" rows="5" onChange={handleChange}/>
                    <button>Plant!</button>
                </form>
                <div>
                    <h3>POSTS</h3>
                    <div>
                        all the posts here
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forum;