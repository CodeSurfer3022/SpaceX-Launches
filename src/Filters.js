import React from 'react';
import Option from './Option';

let years = [];
for(let year = 2006; year <= 2020; year ++) {
      years.push(<Option key={year} value={year}/>)
}

function Filters() {

    return(
        <div className="filterContainer">
            <div className="filters">
                <h2>Filters</h2>
                <div className="section">
                    <h3>Launch Year</h3>
                    <hr />
                    <div className="options">
                        {years}
                    </div>
                </div>
                <div className="section">
                    <h3>Succesful Launch</h3>
                    <hr />
                    <div className="options">
                        <Option value="Yes"/>
                        <Option value="No"/>
                    </div>
                </div>
                <div className="section">
                    <h3>Succesful Landing</h3>
                    <hr />
                    <div className="options">
                        <Option value="Yes"/>
                        <Option value="No"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters;