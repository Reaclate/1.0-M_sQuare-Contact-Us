import React, {useState} from "react";
import logo from '../assets/img/logo-bg.png'
import illustrator from '../assets/img/illustrator.svg'
import './contact.css';

export default function Contact (){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
function handleSubmit(e){
    e.preventDefault();
    alert(`Thanks for your message, We will back to you soon!`);
    window.location.reload();
}

    return(
        <>
        <div className="container bg-white mt-5 rounded text-center">
           
        <div className="row">
            <div className="col-sm-6">
                <img src={illustrator} alt="logo" className="illus-img mb-5" />
            </div>
        <div className="col-sm-6">
        <img src={logo} alt="logo" className="img-fluid" />
            <h2 className ="text-decoration-underline text-black" > 
            Contact Us 
            </h2>
            <form className="container bg-white mt-4 w-100 text-center rounded" onSubmit={handleSubmit}>
            
            <input 
            type="text" placeholder="Enter your Full Name" 
            className="w-75 my-4 border rounded border-secondary p-2" 
            required
            onChange={setName} />

            <input 
            type="email" placeholder="Enter your Email" 
            className="w-75 mb-4 border rounded border-secondary p-2" 
            required
            onChange={setEmail}
            />

            <textarea 
            type="text" placeholder="Message" rows={5} cols={50} 
            className="textarea w-75 mb-3 border rounded border-secondary p-2 mw-100 mh-25 m "
            required
            onChange={setMessage}
            >
            </textarea>
          

            <button 
            type="submit"
            className="btn w-75 mb-3" style={{backgroundColor:'#FF9900', color:'white'}}
            >
                Submit
            </button>
            </form>
        </div>

        </div>
        <div className="row mt-3">
        <p>
            Designed By <a href="https://t.me/uixnature">Uix Nature</a> &
            Developed By <a href="https://github.com/Reaclate">Reactlate</a>
        </p>
        </div>
        </div>
        </>
    )
}