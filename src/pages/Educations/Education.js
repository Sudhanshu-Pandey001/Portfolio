import React from 'react'
import "./Education.css"

import { MdSchool } from "react-icons/md";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
  return (
    <>
      <div className="container education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Education Details</h2>
        <hr />

        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2023 - 2024"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
    >
    <h3 className="vertical-timeline-element-title">MCA</h3>
    <h4 className="vertical-timeline-element-subtitle">Online, IN</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>

{/* copy paste   */}

<VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2022 - 2023"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
    >
    <h3 className="vertical-timeline-element-title">B.A.</h3>
    <h4 className="vertical-timeline-element-subtitle">Up-Ghazipur, IN</h4>
   
  </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    </>
  )
}

export default Education
