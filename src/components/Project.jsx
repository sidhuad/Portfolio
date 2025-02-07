import '../styles/ProjectCard.css'

export default function Project({project}){
    const {source, name, description,projectName} = project;

    return(
     <card className="cardStyle my-4">
        <a href={`https://github.com/sidhuad/${projectName}`}>
            <img src={source} alt="desc"/>
        </a>
        <cardTitle>
                <h3>{name}</h3> 
        </cardTitle>
        <cardDescription>
            {description}
        </cardDescription>

     </card>   
    )
};