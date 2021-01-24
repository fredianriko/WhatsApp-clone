import React, {useRef} from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import {useContacts} from '../context/ContactsProvider'

export default function NewContactModal({closeModal}) {
    const IdRef = useRef();
    const nameRef = useRef();
    const { createContact} = useContacts()
    
    function handleSubmit(e){
        e.preventDefault();
        
        createContact(IdRef.current.value, nameRef.current.value)
        closeModal();
    }

  return (
    <div>
        
            <Modal.Header closeButton >Create Contact</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" ref={IdRef} required></Form.Control>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} required></Form.Control>
                    </Form.Group>
                    <Button type="submit">Create </Button>
                </Form>
            </Modal.Body>
      
    </div>
  )
}
