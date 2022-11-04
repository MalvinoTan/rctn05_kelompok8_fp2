import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";
import { addCart } from "../../redux/ProductsSlice";

const ProductCard = ({ data }) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleAdd = (e, data) => {
        e.preventDefault();

        const auth = JSON.parse(localStorage.getItem("auth"));

        if (!auth) {
            navigate("/login");
        } else {
            if (auth.roles === "admin") {
                Swal.fire({
                    title: "You are an admin!",
                    icon: "error"
                });
            } else {
                dispatch(
                    addCart({
                        cartData: data,
                        qty: 1,
                        isCart: false
                    })
                );
                Swal.fire({
                    title: "Added to Cart",
                    icon: "success"
                });
            }
        }
    };

    return (
        <Col>
            <Card style={{ minHeight: "30rem" }} className="m-2 mt-4">
                <Card.Img variant="top" src={data.image} alt="thumbnail" style={{ height: "15rem" }} />
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Subtitle className="my-3">{data.category}</Card.Subtitle>
                    <Card.Text>{data.description}</Card.Text>
                    <Button variant="info" as={Link} to={`/product-detail/${data.id}`}>Detail</Button>{" "}
                    <Button as={Link} variant="success" onClick={(e) => handleAdd(e, data)}>Add to Cart</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ProductCard;