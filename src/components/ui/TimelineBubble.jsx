import React, { Component } from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

export class TimelineBubble extends Component {
    render() {
        const { date, title, subtitle, description } = this.props;
        return (
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date={date}
                iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
                <h3 className="vertical-timeline-element-title">{title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
                <p>
                    {description}
                </p>
            </VerticalTimelineElement>
        );
    }
}