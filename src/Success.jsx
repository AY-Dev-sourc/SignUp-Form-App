
import icon from './assets/images/icon-success.svg'

export default function Success({RenderCard}) {
    



    return(
        <>
            <div className="success">
                <figure className="icon">
                    <img src={icon} alt="success" />
                </figure>
                <h1 className="success-title">
                    Thanks for subscribing!
                </h1>
                <p className="success-paragraph">
                    A confirmation email has been sent to <span>ash@loremcompany.com.</span>
                    Please open it and click the button inside to confirm your subscription.
                </p>
                <button 
                    type="button"
                    onClick={RenderCard}>
                    Dismiss message
                </button>
            </div>
        </>
    );
}