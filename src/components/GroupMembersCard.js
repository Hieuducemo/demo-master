import Card from "react-bootstrap/Card";

import { GroupMembersTable } from './GroupMembersTable';
import { GroupMemberAddButton } from "./GroupMemberAddButton";
/**
 * Renders a card containing a list of group members.
 */
export const GroupMembersCard = ({facility, actions}) => {

    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    <th>Subfacilities</th>< br></br>
                    <th><GroupMemberAddButton facility={facility} actions={actions} /></th>
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <GroupMembersTable facility={facility} actions={actions}/>
            </Card.Body>
        </Card>
    )
}