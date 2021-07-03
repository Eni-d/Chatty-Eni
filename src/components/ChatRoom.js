import React, { Component } from 'react'

export class ChatRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.location.state.name,
            id: this.props.location.state.id,
            message: '',
            messages: []
        }
        console.log(this.state)
    }

    sendMsg = (e) => {
        this.setState((state, props) => ({
            messages: [...state.messages, state.message],
            message: ''
        }))
    }

    handleOnChange = (e) => {
        this.setState((state, props) => ({
            message: e.target.value 
        }))
    }

    render() {
        return (
            <div className="container">
                <div style={{ backgroundColor: '#F47B7B', padding: 10, boxShadow: '0px 10px 20px darkgrey', display: 'flex' }} className='mt-3'>
                    <img src={`https://source.unsplash.com/random/200x200?sig=${this.state.id}`} alt="" className="rounded-circle" style={{ width: 70, height: 70 }} id="dp" onClick={this.updateState}/>
                    <h3 className="text-light ml-5 mt-3">{this.state.name}</h3>
                </div>
                <div className="card mb-3" style={{boxShadow: '0px 10px 20px darkgrey'}}>
                    <div className="card-body">
                        <div className="body" style={{ height: 400 }}>
                            {this.state.messages.map((message) => (
                                <p key={message} className="card ml-auto w-50" style={{ padding: 10, boxShadow: '0px 10px 20px darkgrey', display: 'block' }}>
                                    {message}
                                </p>
                            )) }
                        </div>

                        <hr />

                        <div style={{display: 'flex'}}>

                            <textarea name="" id="textArea" cols="30" rows="1" className="form-control mr-2" style={{ borderRadius: 20, backgroundColor: '#F3F2F3' }} placeholder="Type your message here" onChange={this.handleOnChange} value={this.state.message}></textarea>

                            <button className="btn text-light" style={{backgroundColor: '#F47B7B', borderRadius: 30}} onClick={this.sendMsg}>
                                <i className="la la-paper-plane la-1x"></i>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatRoom
