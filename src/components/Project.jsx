export default function Project({project}){
    const {source, name, description} = project;
    
    return(
        <Card style={{width:'18rem'}}>
        <Card.Img variant="top" src={source}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};