import React from "react";
import { useState, useContext } from 'react'
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { CartContext } from '../CartContext' 

function NavBarComponent() {
  const [show, setShow] = useState(false)
  const cart = useContext(CartContext)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart Items {(productCount)}</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productCount > 0 ?
            <>
              <p>Items in your cart:</p>
                {cart.items.map((currentProduct, idx) => (
                  <h1>{currentProduct.id}</h1>
                ))}

                <h1>Total: {cart.getTotalCost()}</h1>
                
                <Button variant="success">
                  Purchase Items!
                </Button>
            </>
            :  
            <h1>There are no items in your cart!</h1>
        }
          <h1>This is the modal body</h1>
        </Modal.Body>        
      </Modal>
    </>
  );
}

export default NavBarComponent;
