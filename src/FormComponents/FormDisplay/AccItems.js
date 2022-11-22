import './AccItems.css'


const AccItems = (prop)=> {
    const {detail,amount,type} = prop;

    const AmountSTR = parseFloat(amount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    return(
            <div className="Item-Box">
                <div className="Item-Detail">
                    <div className="Detail">{detail}</div>  <div className="Amount">{AmountSTR} &#3647;</div>    
                </div>
                <div className="Item-Type">{type}</div>
            </div>
    )
}

export default AccItems;