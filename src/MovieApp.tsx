import { useState } from 'react';
import AddMovie from './components/AddMovie';
import uniqid from 'uniqid';
import MovieGrid from './components/MovieGrid';

const MovieApp: React.FC = () => {
    const [newQuery, setNewQuery] = useState('Matrix');

    return (
        <div className='mt-24'>
            <h1 className='text-center'>MovieApp</h1>
            <AddMovie setNewQuery={setNewQuery} />
            <MovieGrid movieQuery={newQuery} key={uniqid()} />;
        </div>
    );
};

export default MovieApp;
