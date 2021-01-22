import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { Table } from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Input from '../../components/Input/Input'
import Modal from '../../components/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import nextId from "react-id-generator";
import './Vehicles.css'
import { addVehicle } from '../../actions/vehicles.action';
import carpng from '../../pictures/car.png'


const Vehicles = () => {

    const [value, setValue] = useState(null)
    const [vehiclePictures, setVehiclePictures] = useState([]);
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState(null);
    const [fuel, setFuel] = useState('');
    const [seats, setSeats] = useState(null);
    const [price, setPrice] = useState(null);
    const [count, setCount] = useState(null);
    const [type, setType] = useState('');
    const [show, setShow] = useState(false);
    const storeVehicles = useSelector(state => state.vehicles)
    const dispatch = useDispatch();
    const id = nextId();

    useEffect(() => {
        console.log(storeVehicles)
    }, [storeVehicles, value]);


    const handleShow = () => setShow(true);

    const handleClose = () => {

        const form = {
            id: id,
            brand: brand,
            model: model,
            year: year,
            fuel: fuel,
            seats: seats,
            price: price,
            count: count,
            type: type,
            vehiclePictures: vehiclePictures
        }
        dispatch(addVehicle(type, form));
        setShow(false)
    }

    const handleSelect = (e) => {
        setValue(e)
    }

    const handleVehiclePictures = (e) => {
        setVehiclePictures([
            ...vehiclePictures,
            e.target.files[0]
        ]);
    }

    const vehicleMap = (type) => {
        let result = {}
        switch (type) {
            case "Estate":
                result = storeVehicles.estateList.length > 0 ?
                    storeVehicles.estateList.map(vehicle =>
                        <tr key={vehicle.id} style={{color:"rgb(168, 168, 168)", fontSize: "1.1rem"}}>
                            <td>{vehicle.vehiclePictures.map(pic => <img src={pic} alt="" />)}</td>
                            <td>{vehicle.brand}</td>
                            <td>{vehicle.model}</td>
                            <td>{vehicle.year}</td>
                            <td>{vehicle.fuel}</td>
                            <td>{vehicle.seats}</td>
                            <td>{vehicle.price}</td>
                            <td>{vehicle.count}</td>
                            <td>{vehicle.type}</td>
                        </tr>
                    ) : "No items"
                break;
            case "Economy":
                result = storeVehicles.economyList.length > 0 ?
                    storeVehicles.economyList.map(vehicle =>
                        <tr key={vehicle.id} style={{color:"rgb(168, 168, 168)", fontSize: "1.1rem"}}>
                            <td>{vehicle.vehiclePictures.map(pic => <img src={carpng} alt="" style={{height:"4rem"}} />)}</td>
                            <td>{vehicle.brand}</td>
                            <td>{vehicle.model}</td>
                            <td>{vehicle.year}</td>
                            <td>{vehicle.fuel}</td>
                            <td>{vehicle.seats}</td>
                            <td>{vehicle.price}</td>
                            <td>{vehicle.count}</td>
                            <td>{vehicle.type}</td>
                        </tr>
                    ) : "No items"
                break;
            case "Luxury":
                result = storeVehicles.luxuryList.length > 0 ?
                    storeVehicles.luxuryList.map(vehicle =>
                        <tr key={vehicle.id} style={{color:"rgb(168, 168, 168)", fontSize: "1.1rem"}}>
                            <td>{vehicle.vehiclePictures.map(pic => <img src={pic} alt="" />)}</td>
                            <td>{vehicle.brand}</td>
                            <td>{vehicle.model}</td>
                            <td>{vehicle.year}</td>
                            <td>{vehicle.fuel}</td>
                            <td>{vehicle.seats}</td>
                            <td>{vehicle.price}</td>
                            <td>{vehicle.count}</td>
                            <td>{vehicle.type}</td>
                        </tr>
                    ) : "No items"
                break;
            case "Suv":
                result = storeVehicles.suvList.length > 0 ?
                    storeVehicles.suvList.map(vehicle =>
                        <tr key={vehicle.id} style={{color:"rgb(168, 168, 168)", fontSize: "1.1rem"}}>
                            <td>{vehicle.vehiclePictures.map(pic => <img src={pic} alt="" />)}</td>
                            <td>{vehicle.brand}</td>
                            <td>{vehicle.model}</td>
                            <td>{vehicle.year}</td>
                            <td>{vehicle.fuel}</td>
                            <td>{vehicle.seats}</td>
                            <td>{vehicle.price}</td>
                            <td>{vehicle.count}</td>
                            <td>{vehicle.type}</td>
                        </tr>
                    ) : "No items"
                break;
            case "Cargo":
                 result = storeVehicles.cargoList.length > 0 ?
                    storeVehicles.cargoList.map(vehicle =>
                        <tr key={vehicle.id} style={{color:"rgb(168, 168, 168)", fontSize: "1.1rem"}}>
                            <td>{vehicle.vehiclePictures.map(pic => <img src={pic} alt="" />)}</td>
                            <td>{vehicle.brand}</td>
                            <td>{vehicle.model}</td>
                            <td>{vehicle.year}</td>
                            <td>{vehicle.fuel}</td>
                            <td>{vehicle.seats}</td>
                            <td>{vehicle.price}</td>
                            <td>{vehicle.count}</td>
                            <td>{vehicle.type}</td>
                        </tr>
                    ) : "No items"
                break;
                default:
                    result = "No result"
        }
        return result
    }

    const renderVehicles = () => {
        return (
            <Table className="vehicleTable" style={{ fontSize: 12 }} responsive="sm">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Fuel</th>
                        <th>Seats</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicleMap(value)}
                </tbody>
            </Table>
        )
    }


    const renderAddVehicleModal = () => {
        return (
            <Modal
                show={show}
                handleClose={handleClose}
                modalTitle={'Add New Vehicle'}
                btnTitle="Add Product"
            >
                <select
                    className="form-control"
                    value={type}
                    onChange={(e) => setType(e.target.value)}>
                    <option>Select Type</option>
                    <option>Economy</option>
                    <option>Estate</option>
                    <option>Luxury</option>
                    <option>Suv</option>
                    <option>Cargo</option>
                </select>
                <Input
                    value={brand}
                    placeholder={`Brand`}
                    onChange={(e) => { setBrand(e.target.value) }}
                />
                <Input
                    value={model}
                    placeholder={`Model`}
                    onChange={(e) => { setModel(e.target.value) }}
                />
                <Input
                    value={year}
                    placeholder={`Construction Year`}
                    onChange={(e) => { setYear(e.target.value) }}
                />
                <select
                    className="form-control"
                    value={fuel}
                    onChange={(e) => setFuel(e.target.value)}>
                    <option>Select Fuel Type</option>
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>Hybrid</option>
                    <option>Electric</option>
                </select>
                <Input
                    value={seats}
                    placeholder={`Number of seats`}
                    onChange={(e) => { setSeats(e.target.value) }}
                />
                <Input
                    value={price}
                    placeholder={`Price per day`}
                    onChange={(e) => { setPrice(e.target.value) }}
                />
                <Input
                    value={count}
                    placeholder={`Count of vehicles`}
                    onChange={(e) => { setCount(e.target.value) }}
                />
                {
                    vehiclePictures.length > 0 ?
                        vehiclePictures.map((pic, index) => <div key={index}>{JSON.stringify(pic)}</div>) : null
                }

                <input type="file" name="VehiclePicture" onChange={handleVehiclePictures}></input>

            </Modal>
        )
    }

    return (
        <Layout>
            <div className="vehicleMainWrapper">
                <div className="btnsWrapper">
                    <div>
                        <h1>Vehicle Type: {value}</h1>
                        <DropdownButton
                            variant="secondary"
                            title="Choose Vehicle Type"
                            id="dropdown-menu-align-right"
                            onSelect={handleSelect}
                        >
                            <Dropdown.Item eventKey="Economy">Economy</Dropdown.Item>
                            <Dropdown.Item eventKey="Estate">Estate</Dropdown.Item>
                            <Dropdown.Item eventKey="Luxury">Luxury</Dropdown.Item>
                            <Dropdown.Item eventKey="Suv">SUV</Dropdown.Item>
                            <Dropdown.Item eventKey="Cargo">Cargo</Dropdown.Item>
                        </DropdownButton>
                    </div>

                    <div class="btnAdd" onClick={handleShow}>
                        <svg>
                            <rect x="0" y="0" fill="none" width="166" height="45" />
                        </svg>
                        ADD VEHICLE
                    </div>
                </div>


                <div className="vehiclesList">
                    {renderVehicles()}
                </div>
                {renderAddVehicleModal()}
            </div>
        </Layout>
    )

}

export default Vehicles