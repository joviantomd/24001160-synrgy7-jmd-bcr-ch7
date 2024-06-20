import React from "react";
import './LoginPage.css'
import { Form } from "react-bootstrap";
const LoginUser: React.FC = () => {
    return (
        <div className="body">
            <div className="imagecars">
                <img className="carsimage" src="https://res.cloudinary.com/dsozzm34s/image/upload/v1718532743/ch-7/image_2_aostct.jpg" alt="" />
            </div>
            <div className="inputlogin">
                <div className="rectangle"></div>
                <div>
                    <p className="titledashboard">
                        Welcome, Admin BCR
                    </p>
                </div>
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Input Your Email" />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Input Password" />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default LoginUser