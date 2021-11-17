import React , {Component} from 'react';
import './Profil.css';


class Profil extends Component {
    render(){
        return(
            <div className="Profil">

                <div className="container">
                    <h3 className="nom"> {this.props.Nom}</h3>
                    <div className="img">
                        <img src={this.props.img} width="200px" height="200px" ></img>
                    </div>
                    <h4 className="naissance">Né en {this.props.naissance}</h4>
                    <h4 className="role">Rôle : {this.props.role}</h4>
                </div>

                    <button className="style" onClick={this.changeColor}> Changer de style </button>
            </div>
        )
    }
}

export default Profil;