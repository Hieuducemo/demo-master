import { SelectInput } from "./Selectlist";

export const GroupTypeInput=({facility,actions})=>{
    const onchange = (value) => {
        console.log("changed", value)
        const newType = {
             id:value.type.id, name:value.type.name
        }

        actions.onFacilityTypeUpdate({facility, newType })
        
    }
    return <SelectInput id={facility.id} value={facility.type.id} placeholder={facility.type.name} onChange={onchange} />
}