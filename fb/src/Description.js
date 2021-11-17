import React , {Component} from 'react';
import './Description.css';


class Description extends Component {


    state = 
    {
        countA: 0,
        countB: 0,
        countC: 0
    }


    LikeA = (e) => 
    {
        this.setState({
            countA: this.state.countA +1
        })
    }


    LikeB = (e) => 
    {
        this.setState({
            countB: this.state.countB +1
        })
    }

    LikeC = (e) => 
    {
        this.setState({
            countC: this.state.countC +1
        })
    }
   

    render(){

        return(
            <div className="Description">

                <div className="publi"> {this.props.publi} </div>
                <br/>
                <div className="bio"> {this.props.bio}</div>
 

                <button onClick={this.LikeA} className="buttonLike"> 
                    <img src="like.png" width="25px" height="25px"></img>
                    {this.state.countA}
                </button>

            </div>


        )
    }
}

export default Description;