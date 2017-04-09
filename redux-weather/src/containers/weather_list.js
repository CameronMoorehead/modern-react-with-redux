import React, { Component } from 'react'
import { connect } from 'react-redux'
import WeatherChart from '../components/chart'

class WeatherList extends Component {
  renderWeather(cityData) {
    const temperatureData = cityData.list.map(temperature => {
      return temperature.main.temp
    })
    const pressureData = cityData.list.map(pressure => {
      return pressure.main.pressure
    })
    const humidityData = cityData.list.map(humidity => {
      return humidity.main.humidity
    })

    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td><WeatherChart color={"red"} data={temperatureData} units={"K"} /></td>
        <td><WeatherChart color={"blue"} data={pressureData} units={"hPa"}/></td>
        <td><WeatherChart color={"black"} data={humidityData} units={"%"}/></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperatur (K)</th>
            <th>Pressure (HPA)</th>
            <th>Humidity (pc%)</th>
          </tr>
        </thead>
        <tbody>
            {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps, null)(WeatherList)
