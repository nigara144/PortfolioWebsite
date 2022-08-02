import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import React from 'react'
import './projects/projects.css'
import "react-circular-progressbar/dist/styles.css";
import { grey } from "@mui/material/colors";


const percentage1 = 90;

const CircularProgressBar = () => {
    return (
        <div className="bar">
            <CircularProgressbar
                value={percentage1}
                text={`${percentage1}%`}
                styles={buildStyles({
                    pathColor: `#9D5448`,
                    textColor: '#9e9e9e',
                    trailColor: '#d6d6d6'
                })}
            />
            <p>English</p>
        </div>
    )
}

export default CircularProgressBar