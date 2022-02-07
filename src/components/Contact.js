import React, {useRef} from "react";
import emailjs from '@emailjs/browser';




function Contact () {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5zobpti', 'template_f7v4soc', form.current, 'user_DSTbPrghazJ7RRma8cRQn')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className="contact" id="contact">
            
            <div className="container-fluid">

                <div className="row">
                    <div className="col-sm-12">

                        <h1 className="text-center">Contact</h1>
                    </div>

                    <div className="col-sm-12">

                        <h4 className="text-center">Hit me up width this form below, I will reply asap.</h4>
                    </div>
                </div>
                <div className="row">
                     <form ref={form} onSubmit={sendEmail}>
                         
                      <div className="mb-3"><input type="text" className="form-control" placeholder="Email" /></div>
                     <div className="mb-3"><textarea className="form-control" placeholder="Message" ></textarea></div>
                        
                        <button type="submit" className="btn btn-dark">SEND</button>
                     </form>
                </div> 
                
            </div>
            
        </div>
    )
    }

export default Contact
