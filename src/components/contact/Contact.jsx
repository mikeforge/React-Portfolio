import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className='c'>
            <div className='c-mid'>
                <p className='c-desc'>Reach out if you have any questions</p>
                <form>
                    <input type='text' placeholder="Name" name="user_name" />
                    <input type='text' placeholder="Subject" name="user_subject" />
                    <input type='text' placeholder="Email" name="user_email" />
                    <textarea rows="5" placeholder='Message' name='message' />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
