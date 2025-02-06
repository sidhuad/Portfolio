import '../styles/ProjectCard.css'

export default function Project({project}){
    const {source, name, description} = project;

    return(
     <card className="cardStyle my-4">
        <a href="https://google.com">
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