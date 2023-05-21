import React, { FC, FormEvent, FormEventHandler, useState } from 'react';
import '../styling/SubmitScreen.css';

interface Props {
    finalTime: number;
    isScoreSubmited: boolean;
    setIsScoreSubmited: (bool: boolean) => void;
    writeScoreToDB: (name: string, score: number, usedSecretCode: string) => void;
}

const SubmitScreen: React.FC<Props> = ({finalTime, writeScoreToDB, isScoreSubmited, setIsScoreSubmited}) => {
    const [username, setUsername] = useState('');
    const [secretCode, setSecretCode] = useState('');

    let handleSubmit: (event: FormEvent) => void;
    handleSubmit = async (event) => {
        event.preventDefault();
        await writeScoreToDB(username, finalTime, secretCode);
        setIsScoreSubmited(true);
    }
    return (
        <div className="SubmitScreen">
            <h1>You found everyone!</h1>
            <h3>Final time is: {Math.floor(finalTime/60)}:{finalTime%60 < 10 ? '0' + finalTime%60 : finalTime%60}</h3>
            {!isScoreSubmited ? <form className='submit' onSubmit={handleSubmit}>
                <div className='grid'>
                    <label htmlFor='name'>
                        Name: 
                    </label>
                    <input type='text' name='name' placeholder='Name' onChange={(e) => setUsername(e.currentTarget.value) }></input>
                    <label htmlFor='code'>
                        Secret code:
                    </label>
                    <input type='text' name='code' placeholder='Secret code' onChange={(e) => setSecretCode(e.currentTarget.value) }></input>
                    <button className='fullwidth' type='submit'>Submit score</button>
                </div>
                <div>You will need to input secret code in order to submit result.</div>
                <div>It was made that way to prevent profanity/joke names in results so I can sleep soundly knowing that my portfolio piece is safe.</div>
            </form> : <>
            <p>If your code was correct, results will show on leaderboard soon!</p>
            <button onClick={(e) => window.location.reload()}>Try again?</button>
            </>}
        </div>
    );
}

export default SubmitScreen;
