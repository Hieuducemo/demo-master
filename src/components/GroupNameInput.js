import { TextInput } from './TextInput';

export const GroupNameInput = ({facility, actions}) => {
    const onchange = (value) => {
        console.log("changed", value)

        actions.groupAsyncUpdate({...facility, name: value})
            .then(json=>console.log("GroupNameInput", json.data.facilityUpdate.msg))
    }
    return (
        <TextInput id={facility.id} value={facility.name} placeholder={"název skupiny"} onChange={onchange}/>
    )
}