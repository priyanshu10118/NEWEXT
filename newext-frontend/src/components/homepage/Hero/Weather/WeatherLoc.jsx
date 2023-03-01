import React from "react";
import './weatherLoc.css'
import { ChevronRightIcon, SunIcon } from "@heroicons/react/24/outline"

export default function WeatherLoc() {
  return (
    <div className="container-weatherloc">
      <div className="weatherloc">
        <div className="layout-flex">
          <h6>Bhubaneshwar, Odisha</h6>
          <ChevronRightIcon className="weatherloc-icon--more" />
        </div>
        <div className="layout-flex">
          <p className="weatherloc-temperature">18&deg;</p>
          <div className="layout-flex--direction">
            <p className="weatherloc-weather">Sunny</p>
            <p className="weatherloc-daydate">Tuesday, 3 Jan</p>
          </div>
          <SunIcon className="weatherloc-icon--weather" />
        </div>
      </div>
    </div>
  )
}
