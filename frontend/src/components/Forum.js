import React from 'react';
import {Link} from 'react-router-dom'

function Forum(props) {

    function beginners(){
        console.log('hello')
    }



    return (
        <div style={{border: '1px solid black'}}>
            <div className="message-box">
                <div>
                    Create post
                </div>
                <form>
                    <input type="text" placeholder="Subject or Question"/>
                    <textarea></textarea>
                </form>
            </div>
        </div>
    );
}

export default Forum;