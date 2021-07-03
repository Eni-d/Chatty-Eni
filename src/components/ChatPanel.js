import React, { Component } from 'react'
import Chat from './Chat'

export default class ChatPanel extends Component{
    render() {
        return (
            this.props.chats.map(chat => (
                <Chat chat={chat} key={ chat.id }/>
            )) 
        )
    }
}

