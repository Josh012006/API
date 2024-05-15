import Accordion from 'react-bootstrap/Accordion';
import User from './User';


function UserList ({ListOfUsers}) {
    return(
        <Accordion defaultActiveKey="1">
            {ListOfUsers.map(j => {
                    return <User Person = {j}></User>
                }
            )}
        </Accordion>
    )
}

export default UserList;