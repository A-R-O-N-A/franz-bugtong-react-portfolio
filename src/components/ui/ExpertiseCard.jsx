import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Chip } from "@mui/material"

export const ExpertiseCard = ({ 
    labels,
    icon,
    title,
    description,

}) => {
    return (<>

        <div className="skill">
            <FontAwesomeIcon icon={icon} size="3x" />
            <h3>{ title }</h3>
            <p>{ description }</p>
            <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labels.map((label, index) => (
                    <Chip key={index} className='chip' label={label} />
                ))}
            </div>
        </div>
    </>)
}