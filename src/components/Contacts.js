import React from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
    // EmailJS
    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_Ti8bVWvNguH73hIZXl2FI";

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <div id="contact"  className="contacts">
            <div class="text-center">
                <h1>Contact Me</h1>
                <p>Fill out the form below and I will get back with you as soon as possible.</p>
            </div>

            <div className="container">
                <form onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        { /* Name Input */ }
                        <div className="text-center">
                        <input
                        type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                        />
                        <div className="line"></div>
                        </div>
                        { /* Phone Input */ }
                        <div className="text-center">
                        <input
                        type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            name="phone"
                        />
                        <div className="line"></div>
                        </div>
                        { /* Email Input */ }
                        <div className="text-center">
                        <input
                        type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                        />
                        <div className="line"></div>
                        </div>
                        { /* Subject Input */ }
                        <div className="text-center">
                        <input
                        type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject"
                        />
                        <div className="line"></div>
                        </div>
                    </div>

                    <div className="col-md-6 col-xs-12">
                        { /* Description */ }
                        <div className="text-center">
                        <textarea
                        type="text"
                            className="form-control"
                            placeholder="Leave any feedback here."
                            name="description"
                        ></textarea>
                        <div className="line"></div>
                        </div>
                        <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts;