import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { Table } from 'react-bootstrap'
import Input from '../../components/Input/Input'
import Modal from '../../components/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import nextId from "react-id-generator";
import './Customers.css'
import { addCustomer, updateCustomer, deleteCustomer } from '../../actions/customers.action'

const Customers = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(null);
    const [idUpdate, setIdUpdate] = useState(null);
    const [showAdd, setShowAdd] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const storeCustomers = useSelector(state => state.customers);
    const dispatch = useDispatch();
    const id = nextId();

    useEffect(() => {
        console.log(storeCustomers)
    }, [storeCustomers]);

    const handleShowAdd = () => setShowAdd(true)
    const handleShowUpdate = () => setShowUpdate(true)

    const deleteCustomers = (id) => {
        dispatch(deleteCustomer(id))
    }


    const handleCloseAdd = () => {

        const form = {
            id: id,
            name: name,
            email: email,
            phone: phone,
            priceToPay: 0,
            rentCount: 0
        }
        dispatch(addCustomer(form));
        setShowAdd(false)
    }

    const handleCloseUpdate = () => {

        const form = {
            id: idUpdate,
            name: name,
            email: email,
            phone: phone,
        }
        dispatch(updateCustomer(form));
        setShowUpdate(false)
    }

    const renderCustomers = () => {
        return (
            <Table className="customerTable" style={{ fontSize: 12 }} responsive="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Price to Pay</th>
                        <th>Count of Rents</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        storeCustomers.customerList.length > 0 ?
                            storeCustomers.customerList.map(customer =>
                                <tr onClick={() => { setIdUpdate(customer.id) }
                                } key={customer.id} style={{ color: "rgb(168, 168, 168)", fontSize: "1.1rem" }}>
                                    <td>{customer.name}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phone}</td>
                                    <td>{customer.priceToPay}</td>
                                    <td>{customer.rentCount}</td>
                                    <td><i class="fas fa-pen" style={{ color: "white" }} onClick={handleShowUpdate} /></td>
                                    <td><i class="fas fa-times" style={{ color: "white" }} onClick={() => { deleteCustomers(idUpdate) }} /></td>
                                </tr>
                            ) : "No customers"
                    }
                </tbody>
            </Table>
        )
    }

    const renderUpdateCustomerModal = () => {
        return (
            <Modal
                show={showUpdate}
                handleClose={handleCloseUpdate}
                modalTitle={'Update Customer'}
                btnTitle="Update Customer"
            >
                <Input
                    value={name}
                    placeholder={`Name`}
                    onChange={(e) => { setName(e.target.value) }}
                />
                <Input
                    value={email}
                    placeholder={`Email`}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <Input
                    value={phone}
                    placeholder={`Mobile Phone`}
                    onChange={(e) => { setPhone(e.target.value) }}
                />
            </Modal>
        )
    }


    const renderAddCustomerModal = () => {
        return (
            <Modal
                show={showAdd}
                handleClose={handleCloseAdd}
                modalTitle={'Add New Customer'}
                btnTitle="Add Customer"
            >
                <Input
                    value={name}
                    placeholder={`Name`}
                    onChange={(e) => { setName(e.target.value) }}
                />
                <Input
                    value={email}
                    placeholder={`Email`}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <Input
                    value={phone}
                    placeholder={`Mobile Phone`}
                    onChange={(e) => { setPhone(e.target.value) }}
                />
            </Modal>
        )
    }

    return (
        <Layout>
            <div className="customersMainWrapper">

                <div class="btnAdd" onClick={handleShowAdd}>
                    <svg>
                        <rect x="0" y="0" fill="none" width="166" height="45" />
                    </svg>
                        ADD CUSTOMER
                    </div>


                <div className="customersList">
                    {renderCustomers()}
                </div>
                {renderAddCustomerModal()}
                {renderUpdateCustomerModal()}
            </div>
        </Layout>
    )

}

export default Customers