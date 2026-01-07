import React from 'react';
import {Button} from "@mui/material";


const BaseForm = () => {
    // This function runs when the user clicks a "Submit" button
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevents the page from refreshing

        // This grabs all the data from the form inputs automatically
        const formData = new FormData(e.currentTarget);

        // Get specific values using the 'name' attribute from the inputs
        const patientName = formData.get('patientName');
        const age = formData.get('age');
        const email = formData.get('email');

        console.log({ patientName, age, email });
    };

    return (
        <div>
            {/*We attach the submit handler here */}
            <form className="form" onSubmit={handleSubmit}>

                {}
                <div className="form_group">
                    <label htmlFor="patient_name" className="form_label">
                        Patient Name:
                    </label>
                    <input
                        type="text"
                        id="patient_name"
                        name="patientName" // Important: This is the key for data
                        className="form_input"
                    />
                </div>

                {}
                <div className="form_group">
                    <label htmlFor="patient_age" className="form_label">
                        Patient Age:
                    </label>
                    <input
                        type="number"
                        id="patient_age"
                        name="age"
                        className="form_input"
                    />
                </div>

                {}
                <div className="form_group">
                    <label htmlFor="patient_email" className="form_label">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="patient_email"
                        name="email"
                        className="form_input"
                    />
                </div>

                {}
                <Button ></Button>
            </form>
        </div>
    );
};

export default BaseForm;