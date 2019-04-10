import React,{Component} from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import TrafficReport from './traffic'

class UserView extends Component{
    logout=()=>{
        localStorage.clear()
        window.location.href="/"
    }

    render(){
        return(
            <div>
            <TrafficReport />
            </div>
        )
    }
}

export default UserView