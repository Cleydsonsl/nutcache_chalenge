import React, { Component } from "react";
import Modal from '../Component/Modal';
import implement, { Interface, type } from 'implement-js';

import './style.css';
import logo from '../assets/nutcache.png'

const Register = Interface()({
  name: String,
  date_birth: String,
  sex: String,
  email: String,
  cpf: String,
  date_start: String,
  team: String
})



class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <header>
          <a href="https://www.nutcache.com/pt-br/">
            <img src={logo} alt="Nutcache" />
          </a>
          <div className="titleD">
            <h1 className="title">Register your account!</h1>
          </div>
          <button className="registerNow" type="button" onClick={this.showModal}>
            Register NOW!
          </button>
        </header>


        <div className="Projects">
          <div>
            <strong className="name">
              Cleydson
            </strong>
            <p className="p">05/03</p>
            <p className="p">Male</p>
            <p className="p">cle.souza@</p>
            <p className="p">118</p>
            <p className="p">02/07</p>
            <p className="p">ReactJS</p>
          </div>
        </div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p className="titleModal">Register NOW!</p>
        </Modal>

      </main>
    );
  }
}

export default Dashboard;
