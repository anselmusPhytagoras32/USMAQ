import React from 'react';
import {TextField} from "@mui/material";

interface InputFieldProps {
    label: string;
    name: string;
    type?: string;
}

const InputField = ({label, name, type = "text"}:InputFieldProps) => {
    return (
        <div>
            <TextField
                        label = {label}
                        id={name}
                        variant="outlined"
                        type={type}
                        name={name} // key for data
                        className="form_input"
                        size={"small"}
                        margin="normal" />
        </div>
    );
};

export default InputField;