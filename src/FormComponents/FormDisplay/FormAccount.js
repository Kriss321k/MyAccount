import './FormAccount.css'
import { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


const FormAccount = (prop)=>{

    // Submit form and Data

    const [AccDetail,setAccDetail] = useState("");
    const [AccAmount,setAccAmount] = useState("");
    const [CheckedValue,setCheckedValue] = useState("");

    const onChangeAccDetail = (event)=>{
        setAccDetail(event.target.value);
    } 

    const onChangeAccAmount = (event)=>{
        setAccAmount(event.target.value);
    }

    const submitAccForm = (event)=> {
        event.preventDefault();
        
        let TimeStamp = new Date()

            let Minute = TimeStamp.getMinutes();
            let Hour = TimeStamp.getHours();
            let Day = TimeStamp.getDate();
            let Month = TimeStamp.getMonth()+1;
            let Year = TimeStamp.getFullYear();

            let DateString = String("Date : " + Day + "/" + Month + "/" + Year + " , " + "Time : " + Hour + "." + Minute);
                    
        const AccItem = {
            detail : AccDetail,
            amount : CheckedValue==="Type : Income"? Number(AccAmount).toFixed(2): Number(-AccAmount).toFixed(2),
            type : CheckedValue,
            time : DateString,
            Id : uuidv4()
        }

        prop.OnAddnewData(AccItem);
        setAccDetail("");
        setAccAmount("");

    }

        // Form validation checking num and detail input

        const [FormInvalid,setFormInvalid] = useState(true);

        useEffect(()=>{
            const CheckData = AccDetail.trim().length>0&&AccAmount.length>0;
            const CheckNums = !isNaN(AccAmount);
            const Check = document.querySelector("#ChecknumMSG");
                Check.classList.add("Checknum-hidden");

            if(CheckData&&CheckNums){
                setFormInvalid(false);
            }
            if(!CheckData){
                setFormInvalid(true);
            }
            if(!CheckNums||AccAmount<0){
                Check.classList.remove("Checknum-hidden");
                setFormInvalid(true);
            }
                
        },[AccDetail,AccAmount]);

        // Checkbox Validation

        const [IncUnchecked ,setIncUnchecked] = useState(false);
        const [ExpUnchecked ,setExpUnchecked] = useState(false);
        const [InvUnchecked ,setInvUnchecked] = useState(false);

            function IncChgCheck () {
                setCheckedValue("Type : Income");

                setIncUnchecked(true); setExpUnchecked(false); setInvUnchecked(false);
            }

            function ExpChgCheck () {
                setCheckedValue("Type : Expense");

                setIncUnchecked(false); setExpUnchecked(true); setInvUnchecked(false)
            }

            function InvChgCheck () {
                setCheckedValue("Type : Investing");

                setIncUnchecked(false); setExpUnchecked(false); setInvUnchecked(true)
        }

    return(
    <div>
        <form className="formAcc" onSubmit={submitAccForm}>
            <p>Please Input Expense/Income Detail here</p>
            <input type="text" placeholder="Input Text here ....." onChange={onChangeAccDetail} value={AccDetail}></input>
            <p>Income/Expense/Investing ?</p>
            <div className="formAcc-checkbox">
                <div className="Acc-checkbox"> <input type="checkbox" id="IncCheckbox" value="Income" checked={IncUnchecked} onChange={IncChgCheck}></input> <p> &nbsp;Income</p> </div>
                <div className="Acc-checkbox"> <input type="checkbox" id="ExpCheckbox" value="Expense" checked={ExpUnchecked} onChange={ExpChgCheck}></input> <p> &nbsp;Expense</p> </div>
                <div className="Acc-checkbox"> <input type="checkbox" id="InvCheckbox" value="Investing" checked={InvUnchecked} onChange={InvChgCheck}></input> <p> &nbsp;Investing</p> </div>
            </div> 
            <p>Please Input the Amount Detail here</p>
            <input type="float" placeholder="Input Number here ....." onChange={onChangeAccAmount} value={AccAmount}></input>
            <h4 className="ChecknumMSG" id="ChecknumMSG">..... Please input the positive number into the following field</h4>
            <button type="submit" style={{fontWeight:"bold",fontSize:"25px"}} disabled={FormInvalid}>Submit</button>  
        </form>
            
    </div>
    )
}

export default FormAccount;