import Card from "react-bootstrap/Card";
import { GroupMembersCard } from './GroupMembersCard';
import { GroupNameInput } from "./GroupNameInput";
import { GroupTypeInput } from "./GroupTypeInput"

/**
 * Renders a card describing a group im detailed form.
 * @param {*} param0 
 * @returns 
 */

export const GroupLarge = ({facility, actions}) => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    Skupina {facility.id} <br />
                    {facility.name} <br />
                    <GroupNameInput facility={facility} actions={actions} /> <br />
                    <GroupTypeInput facility={facility} actions={actions} />
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <GroupMembersCard facility={facility} actions={actions} />
            </Card.Body>
            <Card.Body>
                {JSON.stringify(facility)}
            </Card.Body>
        </Card>
    )
}