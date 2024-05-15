import Accordion from 'react-bootstrap/Accordion';

function User ({Person = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
}}) {
    return(
        <Accordion.Item eventKey={Person.id}>
            <Accordion.Header>{`${Person.name} (#${Person.username})`}</Accordion.Header>
            <Accordion.Body className='container'>
                <div className = "row">
                    <div className = "col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
                        <h1>Contact</h1>
                        <div>
                            Email: <a href={`mailto:${Person.email}`} style = {{color: 'blue', textDecoration: 'none'}}>{Person.email}</a> <br />
                            Phone: {Person.phone}
                        </div>
                    </div>
                    <div className = "col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
                        <h1>Address</h1>
                        <div>
                            Street: {Person.address.street} <br />
                            Suite: {Person.address.suite} <br />
                            City: {Person.address.city} <br />
                            ZipCode: {Person.address.zipcode}
                        </div>
                    </div>
                    <div className = "col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
                        <h1>Professional</h1>
                        <div>
                            Website: <a href={`${Person.website}`} style = {{color: 'blue', textDecoration: 'none'}}>{Person.website}</a> <br />
                            Company Name: {Person.company.name} <br />
                            Catch Phrase: {Person.company.catchPhrase} <br />
                            Business Strategy: {Person.company.bs}
                        </div>
                    </div>
                </div>
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default User;