export const ProjectCard = ({ 
    image ,
    title ,
    description ,
}) => {
    return (<>
  
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={ image } className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>{ title }</h2></a>
                <p>{ description }</p>
            </div>  
    </>)
}