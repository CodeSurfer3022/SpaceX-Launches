import React from 'react';
import Option from './Option';

let years = [];
for(let year = 2006; year <= 2020; year ++) {
      years.push(<Option key={year} year={year}/>)
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
                <Option />
                <Option />
            </div>
            <div>
                Succesful Landing
                <Option />
                <Option />
            </div>
        </div>
    )
}

export default Filters;