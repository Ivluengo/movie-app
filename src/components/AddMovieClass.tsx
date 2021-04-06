import { Component } from 'react';

interface AddMovieProps {
    setMovies: React.Dispatch<React.SetStateAction<string[]>>;
}

interface AddMovieState {
    inputText: string;
}

class AddMovieClass extends Component<AddMovieProps> {
    state: AddMovieState = {
        inputText: '',
    };
    // constructor(props: AddMovieProps) {
    //     super(props);
    //     this.handleInputChange = this.handleInputChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (this.state.inputText.trim().length > 2) {
            this.props.setMovies((oldMovies) => [...oldMovies, this.state.inputText]);
        }
        this.setState({
            inputText: '',
        });
    };

    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inputText: e.target.value,
        });
    };

    render() {
        return (
            <div>
                <form className='row flex gap-8 justify-center' onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        placeholder='¡Busca una película!'
                        onChange={this.handleInputChange}
                        value={this.state.inputText}
                    />
                    <button className='bg-red-400 text-white border-0'>Buscar</button>
                </form>
            </div>
        );
    }
}

export default AddMovieClass;
