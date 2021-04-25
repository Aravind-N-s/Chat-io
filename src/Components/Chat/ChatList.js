import React from 'react'
import {chatAxios} from '../../utils/axios';
import {Link} from 'react-router-dom'

class ChatList extends React.Component{
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        chatAxios.get('/chat',{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
        .then(response =>{
            this.setState(() => ({
                list: response.data
            }))
        })
        .catch(err =>{
            alert(err)
        })
    }
    render(){
        return(
            <div style={{marginTop:"10%"}}>
                {this.state.list.map(lists => {
                    return(
                        <div key={lists._id}>
                            <Link to={`/chats/${lists._id}`}>{lists.group}</Link><br/>
                            <p>{lists.desc}</p>
                        </div>
                    )   
                })}
            </div>
        )
    }
}

export default ChatList