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

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>

        <div className="projects-grid">

            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={millennium_gpt} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>AI integrated Data Visualization Software</h2></a>
                <p>Developed an integrated data visualization software with report automation and custom chatbot by utilizing DeepSeek R-1 model</p>
            </div>

            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={millennium_gpt} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Millennium GPT v1</h2></a>
                <p>An offline AI chatbot built with PHP and ReactJS and Typescript utilizing Ollama server and Meta's Llama 3.2:3b model</p>
            </div>

            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={momotalk} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>RSA-AES end-to-end encrypted messaging app</h2></a>
                <p>Implemented end-to-end encryption for messages using hybrid RSA and AES crytography. Utilized Django for backend and ReactJS for frontend</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={python_rag} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>RAG terminal character chatbot</h2></a>
                <p>Explored RAG and vector embeddings implementation for customizing AI chatbots, built using Python.</p>
            </div>

        </div>
    </div>
    );
}

export default Project;