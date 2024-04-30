// App.jsx
import React, { Component } from "react";
import photo from "./assets/femme.webp";

class App extends Component {
  state = {
    person: {
      fullName: "women",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc:  photo ,
      profession: "Développeur",
    },
    show: false,
    elapsedTime: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        {/* show profil */}
        {this.state.show && (
          <div>
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt="Personne" />
            <p>{this.state.person.profession}</p>
          </div>
        )}
        {/* show / hide profil */}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Basculer le profil
        </button>
        {/* timelaps */}
        <p>Temps écoulé : {this.state.elapsedTime} secondes</p>
      </div>
    );
  }
}

export default App;
