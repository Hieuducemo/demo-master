import { GroupMemberTableRow } from "./GroupMemberTableRow"

/**
 * List of members as a table
 * @param {*} param0 
 * @returns 
 */
export const GroupMembersTable = ({facility, actions}) => {
    console.log(facility.subFacilities)
    return (
        <table className="table table-hover table-stripped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Nástroje</th>
                </tr>
            </thead>
            <tbody>
                {facility?.subFacilities?.map(
                    (m, index) => <GroupMemberTableRow key={m.id} subFacility={m} index={index + 1} actions={actions} gid={facility.id}/>
                )}
            </tbody>
        </table>
    )
}