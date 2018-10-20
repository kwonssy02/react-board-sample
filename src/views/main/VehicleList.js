import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

class VehicleList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vehicleList: []
        };
    }

    componentDidMount() {
        
    }

    render() {
        const { vehicleList } = this.state;
        return (
            <div>
                <h3>차량 조회</h3>
                <Table striped hover>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Vehicle Type</td>
                            <td>Owner</td>
                            <td>Ownership</td>
                            <td>Color</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Vehicle Type</td>
                            <td>Owner</td>
                            <td>Ownership</td>
                            <td>Color</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Vehicle Type</td>
                            <td>Owner</td>
                            <td>Ownership</td>
                            <td>Color</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Vehicle Type</td>
                            <td>Owner</td>
                            <td>Ownership</td>
                            <td>Color</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Vehicle Type</td>
                            <td>Owner</td>
                            <td>Ownership</td>
                            <td>Color</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Vehicle Type</td>
                            <td>Owner</td>
                            <td>Ownership</td>
                            <td>Color</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Vehicle Type</td>
                            <td>Owner</td>
                            <td>Ownership</td>
                            <td>Color</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Vehicle Type</td>
                            <td>Owner</td>
                            <td>Ownership</td>
                            <td>Color</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default VehicleList;