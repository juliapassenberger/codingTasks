
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function TopBar() {

    return (
        <div className='nav-top'>
            <Navbar className="bg-body-tertiary">

                {/* Simple whie bar at the top */}
                {/* I only added this as a bootstrap component because the task said to use other components, otherwise would have been easier to just create this simple bar on my own */}
                <Container>

                    <Navbar.Brand > Welcome</Navbar.Brand>

                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: Olivia Sharp...
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>

            </Navbar>
        </div>
    )
}