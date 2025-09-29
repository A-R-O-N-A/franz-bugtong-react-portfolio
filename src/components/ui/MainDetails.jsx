import { GitHub } from "@mui/icons-material";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MainDetails = ({
    githubLink,
    linkedinLink,
    name,
    title,
    email,
}) => {
    return (
        <>
            <div className="image-wrapper">
                {/* <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg" alt="Avatar" /> */}
            </div>
            <div className="content">
                <div className="social_icons">
                    <a href={githubLink} target="_blank" rel="noreferrer"><GitHub /></a>
                    <a href={linkedinLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
                <h1>{name}</h1>
                <p>{title}</p>
                <br />
                <p className="text-xs">{email}</p>

                <div className="mobile_social_icons">
                    <a href={githubLink} target="_blank" rel="noreferrer"><GitHub /></a>
                    <a href={linkedinLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </div>
        </>
    );
}