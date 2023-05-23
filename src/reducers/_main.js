import { GroupActions } from "./groupreducers"
import { GroupFetch, GroupFakeFetch, GroupAsyncUpdate } from "./GroupAsyncActions"


/**
 * vytvori actions, ktere pri volani uz vse radne provedou
 * jsou zahrnuty i "asynchronni" akce
 * @param {*} dispatch 
 * @returns 
 */
export const bindGroupActions = (dispatch) => {
    return {
        onGroupUpdate: (g) => dispatch(GroupActions.group_update(g)),
        onGroupAdd: (g) => dispatch(GroupActions.group_add(g)),
    
        onGroupMemberRemove: ({subFacility, facility}) => dispatch(GroupActions.group_memberRemove({subFacility, facility})),
        onGroupMemberUpdate: (payload) => dispatch(GroupActions.group_memberUpdate(payload)),
        onGroupMemberAdd: ({FacilityId,member}) => dispatch(GroupActions.group_memberAdd({FacilityId,member})),
        onFacilityTypeUpdate: ({facility,newType}) =>dispatch(GroupActions.group_TypeUpdate({facility, newType})),

        groupFetch: (id) => dispatch(GroupFetch(id)),
        
        groupFakeFetch: (id) => dispatch(GroupFakeFetch(id)),    
       
        groupAsyncUpdate: (facility) => dispatch(GroupAsyncUpdate(facility))
    }
}