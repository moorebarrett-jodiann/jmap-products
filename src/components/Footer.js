
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

function Footer(props) {
    const year = new Date().getFullYear();
    const [submitted, setSubmitted] = useState(false);
    const [showSubmittedMessage, setShowSubmittedMessage] = useState(false);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
        defaultValues: {
            email: ''
        }
    });
    
    // method to show data on submit
    const submitForm = (data) => {
        console.log("Form Successfully Submitted");
        setShowSubmittedMessage(true);
        setSubmitted(true);
        // Reset the form after submission
        reset();
    }

    // Listen for changes in the 'submitted' state and set 'showSubmittedMessage' accordingly
    useEffect(() => {
        if (submitted) {
            setShowSubmittedMessage(true);
        }
    }, [submitted]);

    // Handle the 'animationEnd' event to remove the 'form-submitted' class after animation ends
    const handleAnimationEnd = () => {
        setShowSubmittedMessage(false);
    };

    return (
        <footer>
            <div className="main-container">
                <div className="footer-wrapper">
                    <div className="info">
                        <div className="title">
                            <img src={props.url} alt="logo"/>
                            <h1>JMAP Products</h1>
                        </div>
                        <p className="copyright">Designed by JMAP &copy; {year} All rights reserved</p>
                    </div>
                    <div className="newsletter">
                        <h3>Join Our Newsletter</h3>
                        <form onSubmit={handleSubmit(submitForm)} autoComplete="off" className="flexbox">
                            <div>
                                <input {...register("email", {
                                        required: "Email Address is required.", 
                                        pattern: {
                                            value: /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/,
                                            message: "Invalid email address",
                                        },
                                    })}
                                    placeholder="Enter email"
                                    autoComplete="off"
                                    aria-invalid={errors.email ? "true" : "false"} 
                                    className={errors.email ? 'invalid' : watch("email") ? 'valid' : ''}
                                />
                                <div className="feedback">
                                    {errors.email && <p className="aria-invalid">{errors.email.message}</p>}  
                                    {showSubmittedMessage && (
                                        <span className="form-submitted" onAnimationEnd={handleAnimationEnd}>
                                        Form Submitted!
                                        </span>
                                    )}
                                </div>
                            </div>                            
                            <input type="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;