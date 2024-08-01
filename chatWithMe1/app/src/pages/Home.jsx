import React, { useEffect, useState } from 'react';
import '../index'
import Slider from '../components/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleStop } from '@fortawesome/free-solid-svg-icons'

const BaseUrl = process.env.REACT_APP_SERVERBASEURL;
const Home = () => {
    const [status, setStatus] = useState("");
    const [question, setQuestion] = useState('');
    const [questions, setQuestions] = useState([]);
    const [ans, setAns] = useState([]);
    const [waiting,setWaiting]=useState(false);

    useEffect(() => {
        setQuestion('')
    }, [ans])

    const controller = new AbortController();
    const signal = controller.signal;
    const askQuestion = () => {
        if (!question) {
            setStatus("Invalid Question");
            return
        }
        const url = `${BaseUrl}/genAI/response?question=${question}`
        questions.push(question)
        setQuestion('')
        setStatus()
        setWaiting(true);
        fetch(url,{signal})
            .then((res) => {
                if (res.ok) {

                    return res.json()
                }
                console.log(res.status)
                if (res.status === 500) {
                    console.log("Server Error")
                    console.log(res)
                    setStatus(res.statusText)
                    return []
                }
            })
            .then((res) => {
                // setOutput(res)
                ans.push(res)
                console.log(res)
                setWaiting(false);



            })
            .catch((res) => {
                console.log("Server Error")
                setStatus(res.error)
                setWaiting(false);
            })

    }

    const abortFetch=()=>{
        controller.abort();
        setWaiting(false)
    }
    
    return (
        <div className=' w-full min-h-screen '>

            
            <div className='mt-24'>

            </div>

            <div>
                {questions?.map((ques, i) => {
                    return <div >
                        <h1 className=' mx-10 bg-slate-100 p-2 my-1 rounded-md'>{ques}</h1>
                        
                        {ans[i] &&
                            <h1 className=' mx-10 bg-slate-400  text-white p-2 my-1 rounded-md'>{ans[i]}</h1>
                        }

                    </div>
                })}
            </div>

            {/* {(ans || status) &&
                <div>
                    <h1 className='mt-2 mx-10 bg-slate-100 p-2 my-1 rounded-md' >{status}</h1>
                    {ans?.map((ans) => {
                        return <div className='mt-2 mx-10 bg-slate-100 p-2 my-1 rounded-md'>
                            
                            <h1>{ans}</h1>
                        </div>
                    })}
                </div>
            } */}
            {/* 
            {questions.map((value,i)=>{
                return
            })} */}


            <div className='w-full  fixed bottom-2 z-0 flex flex-row items-center justify-center'>

                <div className='w-3/4  flex flex-row items-center '>
                    <div className='w-full'>
                        <input type='text'
                            className=' outline-none w-full p-4 h-16 m-auto  bg-slate-100 border border-spacing-1 rounded-md'
                            value={question}
                            onChange={(e) => { setQuestion(e.target.value) }}
                        >

                        </input>
                    </div>
                    {waiting?<FontAwesomeIcon onClick={abortFetch} className='cursor-pointer w-10 h-10 ' icon={faCircleStop} />:<FontAwesomeIcon onClick={askQuestion} className='cursor-pointer w-10 h-10 ' icon={faCircleArrowRight} />}
                    
                </div>


            </div>
            <Slider />
        </div>
    );
};

export default Home;