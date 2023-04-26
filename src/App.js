import React, { Component } from "react";
import "./style.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: "",
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      "Siga os bons e aprenda com eles.",
      "O bom-senso vale mais do que muito conhecimento.",
      "O riso é a menor distância entre duas pessoas.",
      "Deixe de lado as preocupações e seja feliz.",
      "Realize o óbvio, pense no improvável e conquiste o impossível.",
      "Acredite em milagres, mas não dependa deles.",
      "A maior barreira para o sucesso é o medo do fracasso.",
    ];
  }

  quebraBiscoito() {
    const state = this.state;
    const numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    state.textoFrase = this.frases[numeroAleatorio];
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img src={require("./assents/biscoito.png")} className="img" />
        <Botao name="Abrir biscoito" acaoBtn={this.quebraBiscoito} />
        <h2 className="textoFrase">{this.state.textoFrase}</h2>
      </div>
    );
  }
}


class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.name}</button>
      </div>
    );
  }
}
