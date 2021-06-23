import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container className = 'not-found mt-5'>
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to='/'>Back to the homepage</Link>
        </Container>
    );
}

export default NotFound;