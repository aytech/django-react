import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUser, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button, Form, Modal } from 'react-bootstrap'
import { Translation } from 'react-i18next'
import LoginAlert from './login-alert'

const LoginModal = (props) => {
  return (
    <Translation>
      {
        (t) => (
          <Modal show={ props.open } onHide={ props.closeModal }>
            <Modal.Header closeButton>
              <Modal.Title>
                <FontAwesomeIcon icon={ faUser } />
                <span className="label">{ t('Login') }</span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="username">
                  <Form.Control type="email" placeholder={ t('Your user name') } />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Control type="password" placeholder={ t('Your password') } />
                </Form.Group>
                <LoginAlert type="error" />
                <LoginAlert type="success" />
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={ props.closeModal }>
                <FontAwesomeIcon icon={ faTimes } />
                <span className="label">{ t('Close') }</span>
              </Button>
              <Button variant="primary" onClick={ () => this.login(t) }>
                <FontAwesomeIcon icon={ faSignInAlt } />
                <span className="label">{ t('Login') }</span>
              </Button>
            </Modal.Footer>
          </Modal>
        )
      }
    </Translation>
  )
}

export default LoginModal