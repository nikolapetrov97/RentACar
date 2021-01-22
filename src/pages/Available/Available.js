import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Table } from 'react-bootstrap'
import Input from '../../components/Input/Input'
import Modal from '../../components/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import './Available.css'

const Available = () => {

    const [vehicle, setVehicle] = useState({});
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    // const storeFavs = useSelector(state => state.favAlbum);

    const handleShow = () => setShow(true);

    const handleClose = () => {

        const form = {

        }

        // dispatch(addCustomer(form));

        setShow(false)
    }

    const renderRentModal = () => {
        return (
            <Modal
                show={show}
                handleClose={handleClose}
                modalTitle={'Rent a Car'}
                btnTitle="Rent"
            >
                <Input
                    value={email}
                    placeholder={`Customer Email`}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <select
                    className="form-control"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}>
                    <option>Select Vehicle</option>
                    {/* {
                        createCategoryList(storeCategory.categories).map(option =>
                            <option key={option.value} value={option.value}>{option.name}</option>)
                    } */}
                </select>
            </Modal>
        )
    }

    const renderVehicles = () => {
        return (
            <Table className="availableTable" style={{ fontSize: 12 }} responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>#</th>
                        <th>Picture</th>
                        <th>Type</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Fuel</th>
                        <th>Seats</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th>Button</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // product.products.length > 0 ?
                        //     product.products.map(product =>
                        //         <tr key={product._id}>
                        //             <td>1</td>
                        //             <td>{product.name}</td>
                        //             <td>{product.price}</td>
                        //             <td>{product.quantity}</td>
                        //             <td>{product.category.name}</td>
                        //         </tr>
                        //     ) : null
                    }
                </tbody>
            </Table>
        )
    }

    return (
        <Layout>
            <div className="availableMainWrapper">

                <h1>AVAILABLE VEHICLES</h1>

                <div className="availableList">
                    {renderVehicles()}
                </div>
                {renderRentModal()}
            </div>
        </Layout>
    )

}

export default Available