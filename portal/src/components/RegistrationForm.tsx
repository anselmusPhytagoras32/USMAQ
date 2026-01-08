import React from 'react';
import {Button} from "@mui/material";
import InputField from "@/components/InputField.tsx";


const RegistrationForm = () => {
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
            <form>
                <InputField label="Patient Name" name="patientName" />
                <InputField label="Age" name="age" type="number" />
                <InputField label="Address" name="address" />
            </form>
        </div>
    );
};

export default RegistrationForm;