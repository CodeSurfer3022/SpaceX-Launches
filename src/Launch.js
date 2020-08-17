import React from 'react';

function Launch(props) {
    return(
        <div>
            <br />
            {console.log(props.value)}
            <div>
                {props.value.mission_name}#{props.value.flight_number}
            </div>
            <div>
                {props.value.mission_ids}
            </div>
            <div>
                {props.value.launch_year}
            </div>
            <div>
                {props.value.launch_success ? "true" : "false"}
            </div>
            <div>
                {props.value.launch_landing}
            </div>
            <br />
        </div>
    )
}

export default Launch;