import React from 'react';
import Option from './Option';

let years = [];
for(let year = 2006; year <= 2020; year ++) {
      years.push(<Option key={year} value={year}/>)
}

function Filters() {

    return(
        <div className="filters">
            Filters
            <div className="section">
                Launch Year
                <hr />
                <div className="options">
                    {years}
                </div>
            </div>
            <div className="section">
                Succesful Launch
                <hr />
                <div className="options">
                    <Option value="Yes"/>
                    <Option value="No"/>
                </div>
            </div>
            <div className="section">
                Succesful Landing
                <hr />
                <div className="options">
                    <Option value="Yes"/>
                    <Option value="No"/>
                </div>
            </div>
        </div>
    )
}

export default Filters;