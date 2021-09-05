import React,{useState} from 'react'
let backed = 89914
let backers = 5007 
export default function Prac() {
    const [counter,setCounter]=useState(backed)
    const [totalBackers,setTotalbackers]=useState(backers)
    const continueClicked1=()=>{
        setCounter(counter+25)
        setTotalbackers(totalBackers+1)
    }
    const continueClicked2=()=>{
        setCounter(counter+75)
        setTotalbackers(totalBackers+1)
    }
    return (
        <div>
            <div>
                <button onClick={continueClicked1}><h3>Backed 25</h3></button>
                <button onClick={continueClicked2}><h3>Backed 75</h3></button>
            </div>
            <div>
                <h2>backed {counter}</h2>
                <h2>backed {totalBackers}</h2>
            </div>
        </div>
    )
}
