import Doughnutchart from './Doughnut';
import './AccRemain.css'

const AccRemain = (prop)=> {

    const Data = Object.values(prop);               // Obtain prop from MainForm.js and get only the value of it as "Data"
    
    //Amount Data (w/ Percentage)
    
    const AmountData = Data[0].map(data=>{       // Data array element at index 0 = Object (Filter out Prototype Array <=(found by console.log) )
        return [data.amount,data.type]                       // Get the amount from all Object to assign as "AmountData"
    })

        // Income Data

        const IncomeData = AmountData.filter(element=>{
                return element[0]>0                              
        })
            const IncomeItem = IncomeData.map(element=>{
                return element[0];
            })
            const IncomeSum = IncomeItem.reduce((accumulator,element)=>{
                return Number(accumulator)+Number(element);             
            },0)
        
        // Expense Data
        // eslint-disable-next-line
        const ExpenseData = AmountData.filter(element=>{
            if(element[1]==="Type : Expense"){
                return element[0]<0
            }
        })
            const ExpenseItem = ExpenseData.map(element=>{
                return element[0];
            })
            const ExpenseSum = ExpenseItem.reduce((accumulator,element)=>{     // Find the sum in Expense
                return Number(accumulator)+Number(element);
            },0)

        // Investing Data
        // eslint-disable-next-line
        const InvestingData = AmountData.filter(element=>{
            if(element[1]==="Type : Investing"){
                return element[0]<0
            }
        })
            const InvestingItem = InvestingData.map(element=>{
                return element[0];
            })
            const InvestingSum = InvestingItem.reduce((accumulator,element)=>{     // Find the sum in Expense
                return Number(accumulator)+Number(element);
            },0)       

        // Remaining Sum    

        const RemainSum = parseFloat(IncomeSum.toFixed(2))+parseFloat(ExpenseSum.toFixed(2))+parseFloat(InvestingSum.toFixed(2)); // Fixed the sum as two-decimal Float sum
        const ABSRemainSum = parseFloat(IncomeSum.toFixed(2))-parseFloat(ExpenseSum.toFixed(2))-parseFloat(InvestingSum.toFixed(2));
        
        // Percentage
        
        const IncPercent = IncomeSum===0&&ExpenseSum===0? Number(0).toFixed(2) : Number(IncomeSum/ABSRemainSum*100).toFixed(2);
        const ExpPercent = IncomeSum===0&&ExpenseSum===0? Number(0).toFixed(2) : Number(Math.abs(ExpenseSum/ABSRemainSum*100)).toFixed(2);
        const InvPercent = IncomeSum===0&&ExpenseSum===0? Number(0).toFixed(2) : Number(Math.abs(InvestingSum/ABSRemainSum*100)).toFixed(2);
        
        // Display String
        
        const RemainSumSTR = parseFloat(RemainSum).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            const IncomeSTR = parseFloat(IncomeSum).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");    
            const ExpenseSTR = parseFloat(ExpenseSum).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            const InvestingSTR = parseFloat(InvestingSum).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            
    const RemainData = [IncomeSum,Math.abs(ExpenseSum),Math.abs(InvestingSum),ABSRemainSum];

    return(
        <div>
            <div className="OuterChartDiv">
                <p>Income/Expense/Investing</p>
                <div className="ChartDiv">
                    <Doughnutchart Data={RemainData}/>
                </div>
            </div>
            
            
            <div className="TableField">
                <th>
                    <tr>
                        <td>Type</td>
                        <td>Amount</td>
                        <td>Percentage</td>
                    </tr>
                </th>
                <tbody>
                    <tr>
                        <td>Income</td>
                        <td>{IncomeSTR}</td>
                        <td>{IncPercent} %</td>
                    </tr>
                    <tr>
                        <td>Expense</td>
                        <td>{ExpenseSTR}</td>
                        <td>{ExpPercent} %</td>
                    </tr>
                    <tr>
                        <td>Investing</td>
                        <td>{InvestingSTR}</td>
                        <td>{InvPercent} %</td>
                    </tr>
                    <tr className="LastTBSummary">
                        <td>Remain</td>
                        <td>{RemainSumSTR}</td>
                    </tr>
                </tbody>
            </div>    
        </div>
            
    )
}

export default AccRemain;