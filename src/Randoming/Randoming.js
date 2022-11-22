import { useState } from "react"
import "./Randoming.css"

const Randoming = ()=>{

    // Set Initial state of Length and 3 Number at 0
    const [Length,setLength] = useState(0);
    const [Num1,setNum1] = useState(0);
    const [Num2,setNum2] = useState(0);
    const [Num3,setNum3] = useState(0);

    // Set initial Checked in checkbox = false (unchecked)
    const [Digit2chk ,setDigit2chk] = useState(false);
    const [Digit3chk ,setDigit3chk] = useState(false);
    const [Digit4chk ,setDigit4chk] = useState(false);
    const [Digit5chk ,setDigit5chk] = useState(false);
    const [Digit6chk ,setDigit6chk] = useState(false);

    const [BtnLock,SetBtnLock] = useState(true);

        // Digit selecting from checkbox linked to Digit function : Set the value of length = target value (Value of the checkbox) 
        const Digit = (event)=>{ setLength(event.target.value); SetBtnLock(false); }

        // On the change of Digit checkbox condition : filter out other checkbox to be unchecked (Only checked 1 of them)
        const DigitChg = (event) =>{
            // eslint-disable-next-line
            if(event.target.value==2){ setDigit2chk(true); setDigit3chk(false);  
                setDigit4chk(false); setDigit5chk(false); setDigit6chk(false);}
            // eslint-disable-next-line                
            if(event.target.value==3){ setDigit2chk(false); setDigit3chk(true);  
                setDigit4chk(false); setDigit5chk(false); setDigit6chk(false);}
            // eslint-disable-next-line 
            if(event.target.value==4){ setDigit2chk(false); setDigit3chk(false);  
                setDigit4chk(true); setDigit5chk(false); setDigit6chk(false);}
            // eslint-disable-next-line 
            if(event.target.value==5){ setDigit2chk(false); setDigit3chk(false);  
                setDigit4chk(false); setDigit5chk(true); setDigit6chk(false);}
            // eslint-disable-next-line 
            if(event.target.value==6){ setDigit2chk(false); setDigit3chk(false);  
                setDigit4chk(false); setDigit5chk(false); setDigit6chk(true);}   }
    
        // Randoming button clicking event
        const Random = ()=>{

            // Construct new Number to randomly generate related to the Length (or Digit)
            let newNum1 = 10**(Length-1)+Math.ceil(Math.random()*9*10**(Length-1))-1;
            let newNum2 = 10**(Length-1)+Math.ceil(Math.random()*9*10**(Length-1))-1;
            let newNum3 = 10**(Length-1)+Math.ceil(Math.random()*9*10**(Length-1))-1;

            // Set Each number generated
            setNum1(newNum1); setNum2(newNum2); setNum3(newNum3); }

    // Average Value of 3 number generated
    const NumAvg = Math.round((Num1+Num2+Num3)/3)


    return (
        <div className="RandomingDiv">
            <h3>Randoming page</h3>

            <p>{">>> >>>"} Please select Digit for Randoming {"<<< <<<"}</p>
            <div className="Randoming-length">
                <input className="Randoming-checkbox" type={"checkbox"} checked={Digit2chk} value={2} onClick={Digit} onChange={DigitChg} /><p>2-Digit</p>
                <input className="Randoming-checkbox" type={"checkbox"} checked={Digit3chk} value={3} onClick={Digit} onChange={DigitChg} /><p>3-Digit</p>
                <input className="Randoming-checkbox" type={"checkbox"} checked={Digit4chk} value={4} onClick={Digit} onChange={DigitChg} /><p>4-Digit</p>
                <input className="Randoming-checkbox" type={"checkbox"} checked={Digit5chk} value={5} onClick={Digit} onChange={DigitChg} /><p>5-Digit</p>
                <input className="Randoming-checkbox" type={"checkbox"} checked={Digit6chk} value={6} onClick={Digit} onChange={DigitChg} /><p>6-Digit</p>
            </div>

            <div className="Randoming-3Num">
                <div className="Randoming-Num">{Num1}</div>
                <div className="Randoming-Num">{Num2}</div>
                <div className="Randoming-Num">{Num3}</div>
            </div>
            
            <p>Average Number from Randoming</p>
            <div className="Randoming-NumAvg">{NumAvg}</div>
            
            <button className="Randoming-btn" disabled={BtnLock} onClick={Random}>Randoming</button>
        </div>
    )
}

export default Randoming;