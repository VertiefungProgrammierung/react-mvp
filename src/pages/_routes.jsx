import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SettingsPage from "./settings";
import KalenderPage from "./kalender";
import ActivityPage from "./activity";
import EngagePage from "./engage";
import ManagePage from "./manage";
import ExplorePage from "./explore";
import VerticalTimeline from "./VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimelineElement";
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';
import SchoolIcon from '@material-ui/icons/School';
import '../styles/main.css';
import '../style.css';

const timelineElements = [
  <VerticalTimelineElement
    onTimelineElementClick={() => {
      // eslint-disable-next-line no-alert
      alert('onTimelineElementClick event fired');
    }}
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management,
      Team Leading
    </p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>User Experience, Visual Design</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>User Experience, Visual Design</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">
      Content Marketing for Web, Mobile and Social Media
    </h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>Strategy, Social Media</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">
      Agile Development Scrum Master
    </h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>Creative Direction, User Experience, Visual Design</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">
      Bachelor of Science in Interactive Digital Media Visual Imaging
    </h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>Creative Direction, Visual Design</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  />,
];

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/engage/activity">
          <VerticalTimeline layout="1-column">{timelineElements} </VerticalTimeline>
        </Route>
        <Route path="/engage/kalender">
          <KalenderPage />
        </Route>
        <Route path="/engage">
          <EngagePage />
        </Route>
        <Route path="/manage">
          <ManagePage />
        </Route>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/">
          <ExplorePage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
