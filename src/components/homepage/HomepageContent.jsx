import { useReducer, useRef } from 'react';
import './homepagecontent.css';



const reducer = (state, action) => {

    if (action.type === 'uppercase') {
        return { ...state, text: state.text.toUpperCase() }
    }
    else if (action.type === 'updateText') {
        return { ...state, 
                    text: action.payload.textvalue, 
                    numOfWords : action.payload.number,
                    numOfChar: action.payload.charNum, 
                    time: action.payload.wordTime,
                 }
    }
    else if (action.type === 'lowercase') {
        return { ...state, text: state.text.toLowerCase() }
    }
    else if (action.type === 'clear') {
        return { ...state, text: '', 
                    numOfWords: 0, 
                    numOfChar : 0,
                    time: 0 

                }
    }
    else if (action.type === 'removeSpace') {
        return { ...state, text: action.payload }
    }

    return state;
}


// *********************************************************

const HomepageContent = () => {



    const [state, dispatch] = useReducer(reducer, {
        text: '',
        numOfWords: 0,
        numOfChar: 0,
        time: 0
    })

    // ********************************************************

    const copyText = () => {
        var copyText = state.text;
        try {
            navigator.clipboard.writeText(copyText);
            toast('Text copied to clipboard');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    // *************************************************************

    const removeExtraSpace = () => {
        let text = state.text;
        let arr = text.split(' ');
        console.log(arr);
        let newStr = '';

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== '') {
                newStr += arr[i];
                newStr += ' ';
            }
        }

        dispatch({ type: 'removeSpace', payload: newStr });

    }


    // ************************************************************


    const textValueChange = (e) => {

        let textvalue = e.target.value;
        let arr = textvalue.split(' ');
        // console.log(arr);

        let number = 0;
        let charNum = 0;
        let wordTime = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== '') {
                number += 1;
                wordTime += 0.8;
            }
        }

        let charArr = textvalue.split('');

        for(let i = 0; i < charArr.length; i++){
            if(charArr[i] !== ' '){
                charNum += 1;
            }
           
        }

        console.log(charNum);


        dispatch({ type: 'updateText', payload: {textvalue, number, charNum, wordTime} })
    }



    return (
        <div className='homepage-main'>
            <div className='home-container'>

                <h1>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
                <div className='container1'>
                    <span>Enter Your Text Here:</span>

                    <textarea value={state.text} onChange={(e) => textValueChange(e)} className='text1'></textarea>

                    <div className='button'>
                        <button onClick={() => dispatch({ type: 'uppercase' })} className='btn1'>Convert Uppercase</button>
                        <button onClick={() => dispatch({ type: 'lowercase' })} className='btn2'>Convert Lowercase</button>
                        <button onClick={() => dispatch({ type: 'clear' })} className='btn3'>Clear Text</button>
                        <button onClick={copyText} className='btn4'>Copy to Clipboard</button>
                        <button onClick={removeExtraSpace} className='btn5'>Remove extra Spaces</button>
                    </div>
                </div>

                <div className='container2'>
                    <h2>Summery Of Your Text</h2>
                    <p>Nummber of words : {state.numOfWords} </p>
                    <p>Number of charecters : {state.numOfChar} </p>
                    <p>Reading Time: {state.time} </p>
                    <strong>Preview Document</strong>
                    <textarea value={state.text} className='text2'></textarea>
                </div>
            </div>
        </div>
    )
}

export default HomepageContent;