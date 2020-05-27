import React from 'react';

const DUMMY_DATA = [
    {
        senderId: 'perborgen',
        text: 'hey'
    },
    {
        senderId: 'janedoe',
        text: 'hey there'

    },
    {
        senderId: 'perborgen',
        text: 'i am great'
    }
]

function MessageList() {
    return (
        <div className = 'message-list'>
            {
                DUMMY_DATA.map((message, index) => {
                    
                })
            }
            
        </div>
    )
}

export default MessageList;
