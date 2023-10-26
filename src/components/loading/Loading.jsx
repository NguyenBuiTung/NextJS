import { Spinner } from "react-bootstrap";

function Loading() {
    return (
        <div style={{textAlign:"center"}}>
        <Spinner  animation="border" variant="primary" />
        </div>
    );
}

export default Loading;