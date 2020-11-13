import React from 'react';

// import '../styling/contact.css';

const Contact = () => (
    <>
        <h5 className="text-center pt-2 pb-2">Contact Me</h5>

        <form>
            <div className="form-group pl-2">
                <label for="exampleFormControlName1">Name</label>
                <input type="text" className="form-control" placeholder="Full Name" />
            </div>
            <div className="form-group pl-2">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="form-group pl-2">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Please write me a message!"></textarea>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-outline-secondary mr-4">Submit</button>
            </div>
        </form>
    </>
);

export default Contact;