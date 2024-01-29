import {userContext} from './context'
import React from 'react'

export default function Content2(){
    let [user,setUser] = React.useContext(userContext)

    const contentStyle = {
        backgroundColor:'#ddd',
        textAlign:'center',
        margin:10,
        padding:10
    }
    const onClickSignin = (event) => {
        event.preventDefault()
        setUser('Pirapat')
    }
    return (
        <div style={contentStyle}>
          {
            (user)
            ? <span>Hello {user}</span>
            : <span>Please <a href='/' onClick={onClickSignin}>Signin</a></span>
          }
        </div>
    )
}