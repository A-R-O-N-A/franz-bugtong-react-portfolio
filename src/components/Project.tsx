import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';


import millennium_gpt from '../assets/projects/millennium_gpt/millennium_gpt_home.png'
import momotalk from '../assets/projects/momotalk/momotalk_backend.png'
import python_rag from '../assets/projects/python_rag/python_rag.png'
import al1se from '../assets/projects/al1se/al1se_demo.png'

import { ProjectCard } from "./ui/ProjectCard";

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>

        <div className="projects-grid">

            <ProjectCard
                title={'AL1SE - AI integrated Data Visualization Software'}
                description={'Developed an integrated data visualization software with report automation and custom chatbot by utilizing DeepSeek R-1 model'}
                image={al1se}
            />

            <ProjectCard
                title={'Millennium GPT'}
                description={'An offline AI chatbot built with PHP and ReactJS and Typescript utilizing Ollama server and Meta\'s Llama 3.2:3b model'}
                image={millennium_gpt}
            />

            <ProjectCard
                title={'MomoTalk - RSA-AES end-to-end encrypted messaging app'}
                description={'Implemented end-to-end encryption for messages using hybrid RSA and AES crytography. Utilized Django for backend and ReactJS for frontend'}
                image={momotalk}
            />

            <ProjectCard
                title={'RAG terminal character chatbot'}
                description={'Explored RAG and vector embeddings implementation for customizing AI chatbots, built using Python.'}
                image={python_rag}
            />


        </div>
    </div>
    );
}

export default Project;