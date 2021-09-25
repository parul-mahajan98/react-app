/*jshint esversion:6*/
import React, { Component } from 'react';

import { connect } from 'react-redux';

import { createVehicle } from '../vehicle/vehicleActions';



class CreateVehicleComponent extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            vehicle_Name: '',
            vehicle_Model: '',
            vehicle_Year: '',
            chassis_Number: '',
            registration_Number: '',
            fuel_Type: ''

        };
        this.changeVehicleNameHandler = this.changeVehicleNameHandler.bind(this);
        this.changeVehicleModelHandler = this.changeVehicleModelHandler.bind(this);
        this.changeVehicleYearHandler = this.changeVehicleYearHandler.bind(this);
        this.changeChassisNumberHandler = this.changeChassisNumberHandler.bind(this);
        this.changeRegistrationNumberHandler = this.changeRegistrationNumberHandler.bind(this);
        this.changeFuelTypeHandler = this.changeFuelTypeHandler.bind(this);
        this.saveVehicle = this.saveVehicle.bind(this);
    }

    changeVehicleNameHandler = (event) => {
        this.setState({ vehicle_Name: event.target.value });
    }
    changeVehicleModelHandler = (event) => {
        this.setState({ vehicle_Model: event.target.value });
    }
    changeVehicleYearHandler = (event) => {
        this.setState({ vehicle_Year: event.target.value });
    }
    changeChassisNumberHandler = (event) => {
        this.setState({ chassis_Number: event.target.value });
    }
    changeRegistrationNumberHandler = (event) => {
        this.setState({ registration_Number: event.target.value });
    }
    changeFuelTypeHandler = (event) => {
        this.setState({ fuel_Type: event.target.value });
    }


    saveVehicle = (e) => {
        e.preventDefault();
        // let vehicle = {
        //     vehicle_Name: this.state.vehicle_Name,
        //     vehicle_Model: this.state.vehicle_Model,
        //     vehicle_Year: this.state.vehicle_Year,
        //     chassis_Number: this.state.chassis_Number,
        //     registration_Number: this.state.registration_Number,
        //     fuel_Type: this.state.fuel_Type
        // };

        // console.log('vehicle => ' + JSON.stringify(vehicle));

        // VehicleService.createVehicle(vehicle).then(res => {

        //     this.props.history.push('/vehicles');
        // });

        this.props.onAdd(this.state);


    }

    cancel() {
        this.props.history.push('/vehicles');
    }

    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef);
    };

    render() {
        return ( <
            div > < br / > < br / >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "card col-md-6 offset-md-3 offset-md-3" > < br / >
            <
            h2 className = "text-center" > Add Vehicle < /h2> <
            div className = "card-body" >
            <
            form >
            <
            div className = "form-group" >
            <
            label > Vehicle_Name < /label> <
            input placeholder = "vehicle name"
            name = "vehicle_Name"
            className = "form-control"
            value = { this.state.vehicle_Name }
            onChange = { this.changeVehicleNameHandler }
            ref = { this.inputRef }
            /> < /
            div > <
            div className = "form-group" >
            <
            label > Vehicle_Model < /label> <
            input placeholder = "vehicle model"
            name = "vehicle_Model"
            className = "form-control"
            value = { this.state.vehicle_Model }
            onChange = { this.changeVehicleModelHandler }
            /> < /
            div > <
            div className = "form-group" >
            <
            label > Vehicle_Year < /label> <
            input placeholder = "vehicle year"
            name = "vehicle_Year"
            className = "form-control"
            value = { this.state.vehicle_Year }
            onChange = { this.changeVehicleYearHandler }
            /> < /
            div > <
            div className = "form-group" >
            <
            label > Chassis_Number < /label> <
            input placeholder = "chassis number"
            name = "chassis_Number"
            className = "form-control"
            value = { this.state.chassis_Number }
            onChange = { this.changeChassisNumberHandler }
            /> < /
            div > <
            div className = "form-group" >
            <
            label > Registration_Number < /label> <
            input placeholder = "registration number"
            name = "registration_Number"
            className = "form-control"
            value = { this.state.registration_Number }
            onChange = { this.changeRegistrationNumberHandler }
            /> < /
            div > <
            div className = "form-group" >
            <
            label > Fuel_Type < /label> <
            input placeholder = "fuel type"
            name = "fuel_Type"
            className = "form-control"
            value = { this.state.fuel_Type }
            onChange = { this.changeFuelTypeHandler }
            /> < /
            div >

            <
            button className = "btn btn-success"
            onClick = { this.saveVehicle } > Save < /button> <
            button className = "btn btn-danger"
            onClick = { this.cancel.bind(this) }
            style = {
                { marginLeft: "10px" }
            } > Cancel < /button>


            <
            /form> < /
            div > <
            /div> < /
            div > <
            /div> < /
            div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        vehicles: state.vehicle.vehicles,
        loading: state.vehicle.loading,
        error: state.vehicle.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (vehicle) => {
            dispatch(createVehicle(vehicle));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateVehicleComponent);