import  {useState}  from "react";
import Err from "./Err";

import illustration_S from './assets/images/illustration-sign-up-mobile.svg';
import illustration_M from './assets/images/illustration-sign-up-tablet.svg';
import illustration_L from './assets/images/illustration-sign-up-desktop.svg';

export default function Card({onSuccess}) {
    const [Input,SetInput] = useState('');
    const [Error, SetError] = useState('');

    function IsEmail(email){ return /^[^\s@]+@[^\s@]+[^/s@]$/.test(email)};

    function Validation() {
        let err = '';
        if(!Input.trim()) { 
            err = 'Valid email required'
        }
        else if (!IsEmail(Input)){ 
            err = 'Please enter valid email address'
        }
        SetError(err);
        return err;
    }

    function SetData(e) {
        e.preventDefault();
        if(!Validation()){onSuccess();}
    }

    return(
        <>
            <main className="Card-Container">
                <figure className="image">
                    <picture>
                        <source srcSet={illustration_L} media="(min-width: 60em)" />
                        <source srcSet={illustration_M} media="(min-width: 60em)" />
                        <img src={illustration_S} alt="illustration" />
                    </picture>
                </figure>
                <div className="form-container">
                    <h1 className="form-title">Stay updated!</h1>
                    <p className="description">
                        Join 60,000+ product managers receiving monthly updates on:
                    </p>
                    <ul className="List">
                        <li>Product discovery and building what matters</li>
                        <li>Measuring to ensure updates are a success</li>
                        <li>And much more!</li>
                    </ul>
                    <form 
                        action="/" 
                        className="form"
                        onSubmit={SetData}>
                        <div className="labels">
                            <label htmlFor="email">Email address</label>
                            <Err 
                                name="email" 
                                msg={Error}
                            />
                        </div>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            placeholder="email@company.com"
                            onChange={(e)=>SetInput(e.target.value)}
                            value={Input}
                            className={Error && "input error"} 
                        />
                        <button type="submit">
                            Subscribe to monthly newsletter
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}