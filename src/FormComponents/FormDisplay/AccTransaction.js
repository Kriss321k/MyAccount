import './AccTransaction.css'
import AccItems from './AccItems'
import { v4 as uuidv4 } from 'uuid';


const AccTransaction = (prop)=> {

    const Data = prop.newItem;

    const removeButton = (btn,index)=>{
        prop.remove(index);
    }

    return(
        <div className="TransactionDiv" >
            {Data.map(element=>{
                return <div className='ListItem' key={uuidv4()}><AccItems detail={element.detail} amount={element.amount} type={element.type} 
                        time = {element.time} key={element.Id}/>
                <button onClick={removeButton}>remove</button></div>
            })}
            
        </div>
    )
}

export default AccTransaction;