import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

import { TimelineBubble } from "./ui/TimelineBubble";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education</h1>

        <VerticalTimeline>

          <TimelineBubble
              date="2022 - present"
              title={'BSIT at CLSU'}
              subtitle={'Science City, Munoz, Nueva Ecija, Philippines'}
              description={'Full-stack Web Development, GenAI/LLM, Project Management, Django, ReactJS, Laravel'}
          />

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;