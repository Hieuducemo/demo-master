import { DeleteButton } from "./DeleteButton"

export const GroupMemberRemoveButton = ({facility, subFacility, actions}) => {
    console.log("gg",subFacility)
    const onClick = () => {
        console.log('jdu smazat uzivatele')
        actions.onGroupMemberRemove({facility: facility, subFacility: subFacility})
       
    }
    return (
        <DeleteButton onClick={onClick}>Del</DeleteButton>
    )
}