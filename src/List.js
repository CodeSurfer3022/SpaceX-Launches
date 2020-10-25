import React from 'react';
import Launch from './Launch';

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

class List extends React.Component{
    constructor(props) {
        super(props);
        this.getLaunches().then( launches => {
                let missions = [], missionInfo, mission;
                for(let launch of launches) {
                    missionInfo = getInfo(launch);
                    mission = <Launch key={missionInfo.mission_name}
                                      value={missionInfo} />;
                    missions.push(mission)
                }
                console.log(missions);
                this.setState({missions: missions});
            }
        );
    }

    async getLaunches() {
        const data = await fetch(url, {mode: 'cors'});
        return await data.json();
    }
    render() {
        if(!this.state) {
            return(
                <div>
                    wait
                </div>
            )
        }
        return(
            <div className="list">
                {this.state.missions}
            </div>
        )
    }
}

export default List;