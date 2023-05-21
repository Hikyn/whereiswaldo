import React, { FC } from 'react';
import '../styling/SubmitScreen.css';

interface Props {
    finalTime: number;
}

const SubmitScreen: React.FC<Props> = ({finalTime}) => {

    return (
        <div className="SubmitScreen">
            <h1>You found everyone!</h1>
            <h3>Final time is: {Math.floor(finalTime/60)}:{finalTime%60 < 10 ? '0' + finalTime%60 : finalTime%60}</h3>
            <form className='submit'>
                <div className='grid'>
                    <label htmlFor='name'>
                        Name: 
                    </label>
                    <input type='text' name='name' placeholder='Name'></input>
                    <label htmlFor='code'>
                        Secret code:
                    </label>
                    <input type='text' name='code' placeholder='Secret code'></input>
                    <button className='fullwidth' type='submit'>Submit score</button>
                </div>
                <div>You will need to input secret code in order to submit result.</div>
                <div>It was made that way to prevent profanity/joke names in results so I can sleep soundly knowing that my portfolio piece is safe.</div>
            </form>
        </div>
    );
}

export default SubmitScreen;
