import React from 'react';
import {Link} from 'react-router-dom'

function Forum(props) {

    function beginners(){
        console.log('hello')
    }

    return (
        <div style={{border: '1px solid black'}}>
            <div className="Topics" style={{border:"1px solid black", width:'20%'}}>
                <h3>Beginners</h3>
                <h3>Propagation</h3>
                <h3>Dying Plants</h3>
            </div>

            <div className="message-box">
                <form>
                    <textarea placeholder="type your message here"></textarea>
                    <button>SEND</button>
                </form>
            </div>
        </div>
    );
}

export default Forum;