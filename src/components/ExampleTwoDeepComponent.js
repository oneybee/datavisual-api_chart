import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Li } from '../styles/style';
import s from '../styles/exampleTwoDeepComponent.style';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'Recharts';


var obj = {  
  method: 'GET',
  headers: {
    'X-Auth-Token': 'e600784123014d489c796ab72ed9587d'
  },
}

class ExampleTwoDeepComponent extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      loaded: false,
    }
  }
  componentDidMount() {
    return fetch('http://api.football-data.org/v1/competitions/394/leagueTable',obj)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: [
            {name: 'Bayern', goalsAgainst: responseJson.standing[0].goalsAgainst, goals: responseJson.standing[0].goals, amt: 2400},
            {name: 'Dortmund', goalsAgainst: responseJson.standing[1].goalsAgainst, goals: responseJson.standing[1].goals, amt: 2210},
            {name: 'Leverkusen', goalsAgainst: responseJson.standing[2].goalsAgainst, goals: responseJson.standing[2].goals, amt: 2290},
            {name: 'Gladbach', goalsAgainst: responseJson.standing[3].goalsAgainst, goals: responseJson.standing[3].goals, amt: 2000},
            {name: 'Schalke 04', goalsAgainst: responseJson.standing[4].goalsAgainst, goals: responseJson.standing[4].goals, amt: 2181},
            {name: 'Mainz', goalsAgainst: responseJson.standing[5].goalsAgainst, goals: responseJson.standing[5].goals, amt: 2500},
            {name: 'Hertha', goalsAgainst: responseJson.standing[6].goalsAgainst, goals: responseJson.standing[6].goals, amt: 2100},
              ]
          })
        this.setState({loaded: true});
        console.log(this.state.data)
      })
    }
  render() {
    if (this.state.loaded == false)
      return (<h1>loading..</h1>)
    else
    return (
      <div>
        <LineChart width={900} height={300} data={this.state.data} margin={{right: 200}}>
         <XAxis dataKey="name"  />
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey="goals" stroke="#8884d8" activeDot={{r: 8}}/>
         <Line type="monotone" dataKey="goalsAgainst" stroke="#82ca9d" />
        </LineChart>
        {
          this.state.data.map( (dynamicData,key)=>
          <div key={key}>
          {console.log('dynamicData', dynamicData)}
            </div>
          )
        }      
        <h4> 2015-2016 시즌 분데스리가 상위 7팀 득점(goals), 실점(goalsAgainst) </h4>
      </div>



    )
  }
}

export default ExampleTwoDeepComponent;