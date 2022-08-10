import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import React from 'react'
import './projects/projects.css'
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./animations/AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";

const CircularProgressBar = ({ lang, percentage, level }) => {
    return (
        <div className="bar">
            <AnimatedProgressProvider className="bar_animation"
                valueStart={0}
                valueEnd={percentage}
                duration={1.4}
                easingFunction={easeQuadInOut}
                text={`${percentage}%`}
            >
                {value => {
                    const roundedValue = Math.round(value);
                    return (
                        <CircularProgressbar
                            value={value}
                            text={`${roundedValue}%`}
                            strokeWidth={6}
                            styles={buildStyles({
                                pathColor: `#9D5448`,
                                textColor: '#9e9e9e',
                                trailColor: '#d6d6d6',
                                pathTransition: "none"
                            })}
                        />
                    );
                }}</AnimatedProgressProvider>
            <div className="lang_text">
                <p className="languages">{lang}</p>
                <p className="lang_level">{level}</p>
            </div>
        </div>
    )
}

export default CircularProgressBar