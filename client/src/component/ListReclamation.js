import React, { Component } from "react";
import "./CSS/scolarite.css"
import axios from "axios";
import arrow from "../images/arrow.png";
import arrowRight from "../images/arrowRight.png";
import Header from "../component/header";
import IsConnect from "../component/isConnect";
import jwt_decode from "jwt-decode"
import close from "../images/close.png";
import user from "../images/user.png";
import password from "../images/password.png";
import Modal from "react-modal";
import "./CSS/main.css"
import "./CSS/dayGrid.css"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


import {
    MDBBtn,
    MDBContainer,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBModal, MDBModalBody, MDBModalFooter,
    MDBModalHeader,
    MDBRow,
    MDBCol,MDBCard,MDBCardBody,MDBTable,MDBTableBody,MDBTableHead
} from "mdbreact";


class ListReclamation extends Component {
    constructor() {
        super();
        this.state = {
            isconnect: false,
            isShowing: false,
            modalIsOpen: false,
            listRec:[]
        };


    }

    componentDidMount() {


        console.log(jwt_decode(localStorage.token).user.reclamations)
        var obj = []
        var listVar = this.props.location.state.reclamations.response;

        console.log(listVar)
        this.setState({

            listRec : listVar

        })
    }


    componentWillMount(){
        if (localStorage.token !== undefined) {
            this.setState({
                isConnect: true
            });
        }



    }
    isconnect() {
        if (localStorage.token !== undefined) {
            return <IsConnect disconnect={this.disconnect.bind(this)} />;
        } else {
            return <></>;
        }
    }
    disconnect() {
        this.props.history.push({
            pathname: "/"
        });
    }
    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        });
    }


    render() {


            return (
            <>
                <Header/>
                <div hidden={!this.state.isConnect}>{this.isconnect()}</div>
                <div className="container-fluid containerBodyS">

                    <div className="row">
                        <div className="col-lg-11 colBodyS">
                            <p><span><img className="arrow" src={arrow} alt="arrow"/></span>Scolarité</p>

                                <div className="tabNotes">
                                    <h2>Réclamations</h2>
                                    <table className="table table-condensed">
                                        <thead>
                                        <tr>
                                            <th>Matière</th>
                                            <th>Description</th>
                                            <th>Date</th>
                                            <th>Etat</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.props.location.state.reclamations.map(rec => {
                                            if(rec.etat==='En Attente'){
                                            return (
                                                <tr key={rec._id}>
                                                    <td>{rec.matiere}</td>
                                                    <td>{rec.contenu}</td>
                                                    <td>{rec.date.toString()}</td>
                                                    <td>{rec.etat}</td>
                                                </tr>
                                            );
                                            }
                                        })
                                        }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }

}

export default ListReclamation;
