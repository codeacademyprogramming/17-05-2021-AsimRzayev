import { createRef } from 'react'
import currencyJson from "./rates.json";

    const Exchanger=()  => {
        const currencyValue = createRef();
    const currencySelect = createRef();
    const currencyResult = createRef();
    const currencyResultTo = createRef();
    
    const ShowMoney=()=>{
        const currencyVal = currencyValue.current.value;
        const currencyName=currencySelect.current.value;
        const cur=currencyJson.find(x=>x.code===currencyName);
        const curVal=cur.value;
        const currencyResultToVal=currencyJson.find(x=>x.code===currencyResultTo.current.value).value;
        currencyResult.current.innerHTML=currencyVal*(curVal/currencyResultToVal).toFixed(3);   
    
    }
    const changeSelection=()=>{
        let currencyTemp=currencySelect.current.value;
        currencySelect.current.value=currencyResultTo.current.value;
        currencyResultTo.current.value=currencyTemp;
        ShowMoney();
    }
        return (<div> 
            <div className="form-container">
            <div className="form-group">
                <div>
                    <label>
                    From
                    </label>
                    <input type="number" defaultValue="1" ref={currencyValue}  />
                </div>
                <div className="selection">
                    <select ref={currencySelect}>
                    {currencyJson.map((value, key) =>
                                        <option
                                            value={value.code}
                                            key={key}>
                                            {value.code}
                                        </option>
                                    )}
                    </select>
                </div>
            </div>
            <div>
            <img src={`${process.env.PUBLIC_URL}/switch.png`} alt="sekil" onClick={changeSelection}/>
            </div>

            <div className="form-group">
                <div>
                    <label>
                   To
                    </label>
                    <h3 className="excTo" ref={currencyResult}>0</h3>
                </div>
                <div className="selection" >
                    <select ref={currencyResultTo}>
                    {currencyJson.map((value, key) =>
                                        <option
                                            value={value.code}
                                            key={key}>
                                            {value.code}
                                        </option>
                                    )}
                    </select>
                </div>
            </div>
            
        </div>
        <div className="exchBtn">
        <button className="btn" onClick={ShowMoney}>Exchange</button>
        </div></div>
        )
            
        }
        
        export default Exchanger;
