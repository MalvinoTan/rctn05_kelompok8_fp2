import { Card, ListGroup } from "react-bootstrap";

const AboutSection = ({ data }) => {
    return (
        <Card style={{ width: "80%", margin: "0 auto" }} className="my-4">
            <Card.Body >
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle>{data.id}</Card.Subtitle>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item active style={{ textAlign: "center" }}>Done</ListGroup.Item>
                {
                    data.progress.map((item, itemIdx) => (
                        <ListGroup.Item key={itemIdx}>{item}</ListGroup.Item>
                    ))
                }
            </ListGroup>
        </Card>
    );
};

export default AboutSection;