import React, { useState } from 'react';

const Forms: React.FC = () => {
    const [formInfo, setFormInfo] = useState({ nombrecito: '', sexo: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
    };
    return (
        <>
            <form className='container mt-24 flex flex-col items-center'>
                <input
                    type='text'
                    value={formInfo.nombrecito}
                    name='nombrecito'
                    placeholder='Nombre'
                    onChange={handleChange}
                />
                <label htmlFor='Hombre'>Hombre</label>
                <input type='radio' name='sexo' id='sexo' value='hombre' onChange={handleChange} />
                <label htmlFor='Mujer'>Mujer</label>
                <input type='radio' name='sexo' id='sexo' value='mujer' onChange={handleChange} />
            </form>
            <h3 className=''>
                <pre>{JSON.stringify(formInfo, null, 3)}</pre>
            </h3>
        </>
    );
};

export default Forms;
