import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

import { MainDetails } from "./ui/MainDetails";

function Main() {

  return (
    <div className="container">
      <div className="about-section">

        <MainDetails
          githubLink={'https://github.com/A-R-O-N-A'}
          linkedinLink={'https://www.linkedin.com/in/franz-bugtong-a94ba6352/'}
          name={'Franz R. Bugtong'}
          title={'Software Engineer'}
          email={'franzbugtong0411@gmail.com'}
        />

      </div>
    </div>
  );
}

export default Main;