import React, { useState } from 'react'
import { Picker } from "emoji-mart";
import './livechat.css'

const ChatInput = ({placeholder}) => {
    // const [value, setValue] = useState()

    const inputField = document.getElementById("input-area");

    function emojisPicker() {
    // Create the emoji picker
    const picker = new Picker({
        onSelect: (emoji) => {
        // Insert the selected emoji into the input field
        inputField.value += emoji.native;
        },
    });

    // Open the emoji picker
    picker.showPicker(inputField);
    };


  return (
       <>
            <div className="chat-input">
                <form action="submit">
                    <textarea 
                        // onChange={e => setValue(e.target.value)}
                        name="" id="input-area" cols="30" rows="10" 
                        placeholder={ placeholder }>
                    </textarea>
                    <div className="input-tools">
                        <div className="emojis">
                            <i className='fa fa-smile-o' onClick={emojisPicker}></i>
                            <i className='fa fa-bold'></i>
                            <i className='fa fa-italic'></i>
                            <i className='fa fa-quote-right'></i>
                        </div>
                        <button>Send<span><i className='fa fa-arrow-right'></i></span></button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ChatInput