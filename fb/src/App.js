import React , {Component } from 'react';
import Profil from './Profil';
import Publication from './Description';
import './App.css';

  class App extends Component{

      state = 
      {
        Nom : "Tormund FLÉAU D'OGRES",
        naissance:'281 avant J-C chez les sauvageons.',
        img :'A.jpeg',
        role : 'Protéger le Nord',
        publi: 'Publié il y a 2 heures :',
        bio : "Habitant au nord du Mur, je pars affronter le Night King afin de préserver l'humanité. Je pars dans ce combat la semaine prochaine avec mes compagnons, cette guerre me tient à coeur car elle a lieu dans le Nord du territoire, là d'où je viens.",
        countA: 0,
        countB: 0,
        countC: 0
      }
 

    changeProfilA = (e) => {
      this.setState({
        Nom : "Tormund FLÉAU D'OGRES",
        naissance : '281 avant J-C chez les sauvageons.',
        img :'A.jpeg',
        role :'Protéger le Nord',
        publi: 'Publié il y a 2 heures :',
        bio : "Habitant au nord du Mur, je pars affronter le Night King afin de préserver l'humanité. Je pars dans ce combat la semaine prochaine avec mes compagnons, cette guerre me tient à coeur car elle a lieu dans le Nord du territoire, là d'où je viens."
      })
    }


    changeProfilB = (e) => {
      this.setState({
        Nom : 'Brienne DE TORTH',
        naissance : '279 avant J-C dans un endroit secret.',
        img :'B.jpeg',
        role :'Protéger les Stark',
        publi: 'Publié il y a 37 minutes :',
        bio : "Étant la protectrice des Stark, je pars affronter le Night King afin de protéger Arya. Je suis sûre qu'elle l'affrontera et je me dois donc d'aller l'aider dans ce rude combat. Comme dirait un célèbre savant : '' Not Today ! ''"
      })
    }


    changeProfilC = (e) => {
      this.setState({
        Nom : 'Samwell TARLY',
        naissance : '269 avant J-C à Winterfell.',
        img :'C.jpeg',
        role :'Bouquiner',
        publi: 'Publié il y a 17 heures :',
        bio : "Étant un grand fan de lecture, je me dois de ne pas aller affronter le Night King. En effet, je dois veiller sur les livres, leur protection me tient à coeur. Je n'ai pas peur de la guerre, j'ai juste des choses plus importantes à faire."
      })
    }


    render(){
      return (

        <div className="App">

          <div className="bannière">
            <button className="button" onClick={this.changeProfilA} > Tormund </button>
            <button className="button" onClick={this.changeProfilB} > Brienne </button>
            <button className="button" onClick={this.changeProfilC} > Sam </button>

          </div>


          <div className="titre">   <img src="msn.jpeg" width="90px" height="90px"></img> &nbsp; MSN de Winterfell</div>

          <Profil 

            Nom = {this.state.Nom}
            naissance = {this.state.naissance}
            img ={this.state.img}
            role = {this.state.role}

          />

          <br/>

          <Publication
          
            publi = {this.state.publi}
            bio = {this.state.bio}
          
          />
        </div>
      );
    }
  }

export default App;