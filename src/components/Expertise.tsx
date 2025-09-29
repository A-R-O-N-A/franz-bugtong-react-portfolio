import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

import { ExpertiseCard } from "./ui/ExpertiseCard";

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Django",
    "Python",
    "Laravel",
    "PHP",
    "SQL",
    "Postman",
];

const labelsThird = [
    "Llama",
    "DeepSeek",
    "Ollama",
    "LangChain",
    "Hugging Face",
    "Python"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">

                <ExpertiseCard
                    labels={labelsFirst}
                    icon={faReact}
                    title={'Full Stack Web Development'}
                    description={'I have built full stack applications using Django (python), Laravel (php), and ReactJS (javascript).'}

                />

                <ExpertiseCard
                    labels={labelsThird}
                    icon={faPython}
                    title={'GenAI and LLM'}
                    description={'Leveraged AI into my projects utilized AI models from DeepSeek, and Meta\'s Llama.'}

                />

            </div>
        </div>
    </div>
    );
}

export default Expertise;