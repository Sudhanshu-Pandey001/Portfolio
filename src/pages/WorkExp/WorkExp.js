import React from 'react'
import "./WorkExp.css"

import { SiReact } from "react-icons/si";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkExp = () => {
  return (
    <>
      <div className="work" id="work-exp">
        <div className="container work-exp">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Work Experience</h2>
        <hr />
        <VerticalTimeline lineColor='#1e1e2c'>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#1e1e2c' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2024 - present"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<SiReact />}
  >
    <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">xyz, pvt ltd</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>

{/* coyp paste  */}

<VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#1e1e2c' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2023 - present"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<SiReact />}
  >
    <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">xyz, pvt ltd</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>

{/* copy paste  */}

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#1e1e2c' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2023 - present"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<SiReact />}
  >
    <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">xyz, pvt ltd</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>

{/* copy paste  */}
         
<VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#1e1e2c' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2023 - present"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<SiReact />}
  >
    <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">xyz, pvt ltd</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

export default WorkExp
