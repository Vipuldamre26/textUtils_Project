import { useReducer } from 'react';
import './aboutcontent.css';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


const reducer = (state, action) => {
    switch(action.type){
        case 'first':
            return  { ...state, 
                        check1: !state.check1 ? true : false,
                        display1: state.display1 === 'none' ? 'block' : 'none',    
                    }
        case 'second':
            return { ...state, 
                        check2: !state.check2 ? true : false,
                        display2: state.display2 === 'none' ? 'block' : 'none',    
                    }
        case 'third':
            return { ...state, 
                        check3: !state.check3 ? true : false,
                        display3: state.display3 === 'none' ? 'block' : 'none',    
                    }
                }
                return state;
}


const AboutContent = () => {

    const [state, dispatch] = useReducer(reducer, {
        display1: 'none',
        display2: 'none',
        display3: 'none',
        check1: false,
        check2: false,
        check3: false,
    })


    const expandPara = (e) => {
        const name = e.target.parentElement.parentElement.children[1].className;
        
        dispatch({ type: name })

    }


    return (
        <div className='about-main'>
            <div className='about-container'  onClick={(e) => expandPara(e)}>
                <div className='arrow'>
                    <strong>Analyse Your Text</strong>
                    { !state.check1 ? <IoIosArrowDown /> : <IoIosArrowUp /> }
                </div>

                <p className='first' style={{display: state.display1}}>Textutils gives you a way to analyze your text quickly and efficently.It let you to count word, count charecters or reading time required.It has both light and dark mode for better compartable.</p>
            </div>
            <div className='about-container'  onClick={(e) => expandPara(e)}>
                <div className='arrow'>
                    <strong>Analyse Your Text</strong>
                    { !state.check2 ? <IoIosArrowDown /> : <IoIosArrowUp /> }

                </div>
                <p className='second' style={{display: state.display2}}>TextUtils is a free charecter counter tool that provided instant charecter count and word count statics for a given text. TextUtils reports the number of words and charecter. Thus it is suitable for writing text with word / charecter limit.</p>
            </div>
            <div className='about-container' onClick={(e) => expandPara(e)}>
                <div className='arrow'>
                    <strong>Browser Compatible</strong>
                    { !state.check3 ? <IoIosArrowDown /> : <IoIosArrowUp /> }

                </div>
                <p className='third' style={{display: state.display3}}>This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer ,Safari,Opera etc.</p>
            </div>
        </div>
    )
}

export default AboutContent;