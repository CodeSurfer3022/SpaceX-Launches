import React from 'react';
import Option from './Option';

let years = [];
for(let year = 2006; year <= 2020; year ++) {
      years.push(<Option key={year} value={year}/>)
}

function Filters() {

    return(
        <div>
            Filters
            <div>
                Launch Year
                {years}
            </div>
            <div>
                Succesful Launch
                <Option value="Yes"/>
                <Option value="No"/>
            </div>
            <div>
                Succesful Landing
                <Option value="Yes"/>
                <Option value="No"/>
            </div>
        </div>
    )
}

export default Filters;