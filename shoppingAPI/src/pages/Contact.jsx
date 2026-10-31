import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");
    const [gender, setGender] = useState("");
    const [results, setResults] = useState("");
    const [isSubmitting, setisSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        
        event.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phoneNumber.trim() || !age || !message.trim()) {
        setResults("Please fill in all required fields.");
        return;
    } else if (age > 100) {
        alert("Please enter an age from 1-100");
        return;
    }

    // Create FormData before awaiting anything
    const formData = new FormData(event.currentTarget);

    formData.set(
        "access_key",
        "317dd95a-9cd4-4a01-aa57-b1941a128107"
    );

    setisSubmitting(true);
    setResults("Sending...");

    try {
        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await response.json();

        console.log("Web3Forms response: ", data);

        if (response.ok && data.success) {
            handleClear();
            setResults("Message sent successfully!");
        } else {
            setResults(data.message || "Submission failed.");
        }

    } catch (error) {
        console.error("Submission error:", error);
        setResults("An error has occurred. Please try again.");

    } finally {
        setisSubmitting(false);
    }
};

    const handleClear = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setAge("");
        setMessage("");
        setGender("");
        setMessage("");
    };

    return (
        <>
        
        <h2>Contact Us</h2>

        <div className="formBorder">

            <form onSubmit={handleSubmit} action="" method="POST">

                <label htmlFor="firstName">First Name:</label>

                <input id="firstName" type="text" name="firstName" value={firstName} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} required />

                <label htmlFor="lastName">Last Name: </label>

                <input id="lastName" type="text" name="lastName" value={lastName} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} required />

                <label htmlFor="email">Email:</label>

                <input id="email" type="email" name="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="phoneNumber">Phone Number: </label>

                <input id="phoneNumber" type="tel" name="phoneNumber" value={phoneNumber} placeholder="(999) 999-9999" onChange={(e) => setPhoneNumber(e.target.value)} required />

                <label htmlFor="age">Age: </label>
                
                <input id="age" type="number" name="age" value={age} placeholder="25" onChange={(e) => setAge(e.target.value)} required />

                <label htmlFor="message">Send a Message:</label>

                <textarea id="messageInput" name="message" value={message} placeholder="Send a message..." onChange={(e) => setMessage(e.target.value)} required />

                    <legend>Gender: </legend>

                    <label htmlFor="male">

                    <input id="male" type="radio" name="gender" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)}
                        />
                        Male
                    </label>

                    <label htmlFor="female">

                    <input id="female" type="radio" name="gender" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)}
                        />
                        Female
                    </label>                   

                    <p role="status">{results}</p>

                    <button id="submitBtn" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Submit"}
                    </button>

                    <button id="clearBtn" type="button" onClick={() => {handleClear(); setResults("") }}>
                        Clear
                    </button>

            </form>

        </div>

        </>
    );
    
}

export default Contact;
