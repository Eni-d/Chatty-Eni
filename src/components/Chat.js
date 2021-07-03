import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            id: '',
        }
    }

    updateState = (e) => {
        this.setState((state, props) => ({
            name: props.chat.name,
            id: props.chat.id
        }))
    }

    componentDidUpdate() {
        document.getElementById('modalBtn').click()
        document.getElementById('modalTitle').textContent = this.state.name
        document.getElementById('modalImg').src = `https://source.unsplash.com/random/200x200?sig=${this.state.id}`
    }

    render() {
        return (
            <div>
                
                <div style={{ display: 'flex' }}>

                    <button data-toggle="modal" data-target="#myModal" style={{display: 'none'}} id='modalBtn'></button>
                    <img src={`https://source.unsplash.com/random/200x200?sig=${this.props.chat.id}`} alt="" className="rounded-circle" style={{ width: 70, height: 70 }} id="dp" onClick={this.updateState}/>

                    <Link to={{
                            pathname: '/chatroom',
                            state: {
                                name: this.props.chat.name,
                                id: this.props.chat.id
                            }
                        }}
                        style={{
                            color: 'black',
                            textDecoration: 'none'
                        }}
                        className="w-100">
                        
                        {this.props.chat.name}
                        
                    </Link>

                </div>
                <hr />
                

                {/* Modal */}
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title" id='modalTitle'></h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            {/* Modal body  */}
                            <div className="modal-body text-center">
                                <img alt="" className="w-75" id='modalImg'/>
                            </div>

                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat
