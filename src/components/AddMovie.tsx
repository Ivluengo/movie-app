import { useState } from 'react';

interface AddMovieProps {
    setNewQuery: React.Dispatch<React.SetStateAction<string>>;
}

const AddMovie: React.FC<AddMovieProps> = ({ setNewQuery }) => {
    const [inputText, setInputText] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputText.trim().length > 2) {
            setNewQuery(inputText);
        }
        setInputText('');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    return (
        <div>
            <form className='row flex gap-8 justify-center' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='¡Busca una película!'
                    onChange={handleInputChange}
                    value={inputText}
                />
                <button className='bg-red-400 text-white border-0'>Buscar</button>
            </form>
        </div>
    );
};

export default AddMovie;
