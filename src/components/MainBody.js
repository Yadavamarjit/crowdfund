import {React,useState} from 'react';
import './MainBody.css'
import Progress_bar from './Progress_bar'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import About from './About';
import "./Cards.css"
// import Cards from './Cards';
import Popup from './Popup';
import backProject from "../Products"
// import OrderSummary from './OrderSummary';


let backed = 89914
let backers = 5007 

const MainBody = () => {
    const [leftCounter1,setLeftCounter1]=useState(backProject.bambooStand.left)
    const [leftCounter2,setLeftCounter2]=useState(backProject.blackEditionStand.left)
    const [counter,setCounter]=useState(backed)
    const [totalBackers,setTotalbackers]=useState(backers)
    const [greet,setGreet]=useState(false)
    const continueClicked1=()=>{
        setCounter(counter+25)
        setTotalbackers(totalBackers+1)
        setshow(false)
        setGreet(true)
        setBack(false)
        setLeftCounter1(leftCounter1-1)
    }
    const continueClicked2=()=>{
        setCounter(counter+75)
        setTotalbackers(totalBackers+1)
        setBlackEdition(false)
        setGreet(true)
        setBack(false)
        setLeftCounter2(leftCounter2-1)
    }
    
    // this state is for back project button
    const [back,setBack]=useState(false)

    // this state is for changing color when bookmark button is toggled 
    const [color,setColor]=useState(false)

    // this state is for bamboo stand 
    const [show,setshow]=useState(false)

    // this state is for black edition
    const [blackEdition,setBlackEdition]=useState(false)
    // this state is for default back
    const [defaultBack,setDefaultBack]=useState(false)
    // this state is for price
    const [state,setState]=useState({
        bamboo:25,
        blackStand:75
    })

    const handleChange=e=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    // const percent=(counter/100000)*100
    const percent=(counter/100000)*100
    return (
        <div className="body-container">
            <div className="logo">
            <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#000" cx="28" cy="28" r="28"/><g fill-rule="nonzero"><path d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z" fill="#444"/><path d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z" fill="#FFF"/></g></g></svg>
            </div>
            <div className="title-txt">
                <h2>
                    Mastercraft Bamboo Monitor Riser
                </h2>
                <p className="title-note">
                    A Beautiful & handcrafted monitor stands to reduce next and eye strain.
                </p>
            </div>

        {/* condition for toggle */}

            {
                color?<div className="project-button-container">
                <span><a onClick={()=>setBack(true)} className="button">Back this project</a></span>
                <span className="bookmark-button-container">
                    <div onClick={()=>setColor(!color)} style={{backgroundColor:"rgba(27, 134, 88, 0.931)"}} className="button-right">
                        <BookmarkIcon style={{color:"white"}} />
                    </div>
                    <p style={{color:"rgba(27, 134, 88, 0.931)"}} className="btn-txt">Bookmarked</p>
                </span>
            </div>:<div className="project-button-container">
                <span><button onClick={()=>setBack(true)} className="button">Back this project</button></span>
                <span className="bookmark-button-container">
                    <div onClick={()=>setColor(!color)} className="button-right">
                        <BookmarkIcon style={{color:"white"}} />
                    </div>
                    <p className="btn-txt">Bookmark</p>
                </span>
            </div>
            }

        {/* Back this Project Modal Starts here */}

            <Popup centered size="lg" show={back}>
                <span onClick={()=>setBack(false)} className="back-close-btn">
                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fill-rule="evenodd" opacity=".4"/></svg>
                </span>
                <div className="back-title">
                    <h2 className="back-title-header">Back this Project</h2>
                    <p className="back-title-txt">
                        Want to support us in bringing Mastercraft Bamboo Monitor Riser in the World?
                    </p>
                </div>
                <div className="pledge-cardcontainer">
                    <div className="pledge-card">
                        <input onClick={()=>setDefaultBack(true)} className="radio" name="select" type="radio" />
                        <span className="back-title">
                            Pledge with no reward    
                        <p className="back-card-body-txt">
                            Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive products update via email
                        </p>
                        </span>
                        {defaultBack?<span onClick={()=>alert("You will be regularly updated about our new product By Email")} className="continue-btn">Continue</span>:""}
                    </div>

                    <div className="pledge-card">
                        <input onClick={()=>setshow(true)} className="radio" name="select" type="radio" />
                        <span className="back-title">{backProject.bambooStand.name}</span>
                        <span className="pledge-price">Pledge $25 or more</span>
                        <span className="back-title left">{leftCounter1}<span className="left-txt">left</span></span>
                        <p className="back-card-body-txt">{backProject.bambooStand.orderDetails} </p>
                        {show?<span className="pledge-txt">Enter your pledge<span className="input-button"><span className="input-container">$<input name="bamboo" onChange={handleChange} value={state.bamboo} className="input-box"></input></span><span onClick={continueClicked1} className="continue-btn">Continue</span></span></span>:""}
                    </div>

                    <div className="pledge-card">
                        <input onClick={()=>setBlackEdition(true)} className="radio" name="select" type="radio" />
                        <span className="back-title">{backProject.blackEditionStand.name} </span>
                        <span className="pledge-price">Pledge $75 or more</span>
                        <span className="back-title left">{leftCounter2}<span className="left-txt">left</span></span>
                        <p className="back-card-body-txt">{backProject.blackEditionStand.orderDetails} </p>
                        {blackEdition?<span className="pledge-txt">Enter your pledge<span className="input-button"><span className="input-container">$<input name="blackStand" onChange={handleChange} value={state.blackStand} className="input-box"></input></span><span onClick={continueClicked2} className="continue-btn">Continue</span></span></span>:""}
                    </div>

                    <div className="pledge-card sold">
                        <input onClick={()=>{alert(`Sorry ${backProject.mahoganySpecialEdition.name} is out of stock`)}} className="radio" name="select" type="radio" />
                        <span className="back-title ">{backProject.mahoganySpecialEdition.name}</span>
                        <span className="pledge-price">Pledge for $200</span>
                        <span style={{color:"red"}} className="back-title left">0<span className="left-txt">left</span></span>
                        <p className="back-card-body-txt">{backProject.mahoganySpecialEdition.orderDetails} </p>
                    </div>   
                </div>
            </Popup>

        {/* Back this Project Modal Ends here */}

        {/* condition for togging bookmark button end here */}
        <div className="backers-container">
            <div className="backers">
                {/* <h3>${89914+(+addBackers)}</h3> */}
                <h3>${counter}</h3>
                <p>of 100,000 backed</p>
            </div>
            <div className="backers">
                <h3>{totalBackers}</h3>
                <p>total backers</p>
            </div>
            <div className="backers">
                <h3>56</h3>
                <p>days left</p>
            </div>
        </div>
        <Progress_bar className="progressbar"  bgcolor="rgba(27, 134, 88, 0.931)" progress={percent}  />
        <About/>
        
        {/* Cards */}

        <div className="cards-container">
            <div className="card-container">
                <div className="card-title">
                    <span className="left-header">{backProject.bambooStand.name}</span>
                    <span className="right-header">Pledge $25 or more</span>
                    <p className="card-text">{backProject.bambooStand.orderDetails}</p>
                    <div className="card-footers">
                            <span className="footer-text">
                                <h4>
                                    {leftCounter1}
                                </h4>
                                <p>left</p>
                            </span>
                        <span onClick={()=>setBack(true)} className="reward-btn">Select Reward</span>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className="card-title">
                    <span className="left-header">{backProject.blackEditionStand.name}</span>
                    <span className="right-header"><p>Pledge $75 or more</p></span>
                    <div className="card-text">
                        <p>{backProject.blackEditionStand.orderDetails}</p>
                    </div>
                    <div className="card-footers">
                            <span className="footer-text">
                                <h4>
                                    {leftCounter2}
                                </h4>
                                <p>left</p>
                            </span>
                        <span onClick={()=>setBack(true)} className="reward-btn">Select Reward</span>
                    </div>
                </div>
            </div>

            <div className="card-container card-container-empty">
                <div className="card-title">
                    <span className="left-header">{backProject.mahoganySpecialEdition.name}</span>
                    <span className="right-header"><p>Pledge $200 or more</p></span>
                    <div className="card-text">
                        <p>{backProject.mahoganySpecialEdition.orderDetails}</p>
                    </div>
                    <div className="card-footers">
                            <span className="footer-text">
                                <h4 style={{color:"red"}}>
                                    0
                                </h4>
                                <p>left</p>
                            </span>
                        <span onClick={()=>setBack(true)} className="reward-btn">Select Reward</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Cards Section ends here */}

        <Popup aria-labelledby="contained-modal-title-vcenter" size="lg" centered show={greet}>
            <div className="greet-container">
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#3CB3AB" cx="32" cy="32" r="32"/><path stroke="#FFF" stroke-width="5" d="M20 31.86L28.093 40 44 24"/></g></svg>
            <h3 className="greet-title">Thanks for your support!</h3>
            <p className="greet-txt">Your pledge bring us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed</p>
            <span onClick={()=>setGreet(false)} className="greet-btn">Got it!</span>
            </div>
        </Popup>
        </div>
    );
}

export default MainBody;
