import React from 'react';

let url = "https://api.spacexdata.com/v3/launches?limit=100";

function getInfo(response) {
    return {
        mission_name: response.mission_name,
        flight_number: response.flight_number,
        mission_ids: response.mission_id,
        launch_year: response.launch_year,
        launch_success: response.launch_success,
        launch_landing: response.launch_landing
    }
}

class Launch extends React.Component{
    constructor(props) {
        super(props);
        this.getLaunches().then( response => {
            let missions = [];
                for(let mission of response) {
                    missions.push(getInfo(mission));
                }
                console.log(missions);
            }
        );
    }

    async getLaunches() {
        const data = await fetch(url, {mode: 'cors'});
        const response = await data.json();
        console.log(response);
        return response;
    }
    render() {
        return(
            <div>

            </div>
        )
    }
}

export default Launch;