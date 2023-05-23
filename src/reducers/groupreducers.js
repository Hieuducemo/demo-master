import { createSlice } from '@reduxjs/toolkit'

import { CreateItem, DeleteItem, ReplaceItem, UpdateItem, SelectItem } from './keyedreducers';

/**
 * stavova funkce, ktera pridat uzivatele ze skupiny 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */

const GroupMemberAdd = (state, action) => {
  console.log('volani stavove funkce, add')
  const g = action.payload.FacilityId
  const newMember = action.payload.member
  console.log("php", g)
  const facility = state[g]
  facility.subFacilities.push(newMember)
  return state
}

/**
 * stavova funkce, ktera odebere uzivatele ze skupiny 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const GroupMemberRemove = (state, action) => {
    console.log('volani stavove funkce, smazat uzivatele')
    const g = action.payload.facility
    const u = action.payload.subFacility
    console.log("pp",u)
    const facility = state[g.id]
    facility.subFacilities = facility.subFacilities.filter(subFacility => subFacility.id !== u.id)
    return state
}

/**
 * Stavova funkce, ktera provede update uzivatele ve skupine
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
/*const GroupMemberUpdate = (state, action) => {
    const g = action.payload.facility
    const u = action.payload.subFacilities
    const facility = state[g.id]
    facility.subFacilities = facility.subFacilities.map(subFacilities =>
      subFacilities.id === u.id ? { ...subFacilities, ...u } : subFacilities)
    return state
  }
*/
/*const GroupMemberUpdate = (state, action) => {
    const g = action.payload.facility
    const u = action.payload.subFacilities
    const facility = state[g.id]

    facility.subFacilities = facility.subFacilities.map(subFacility =>
      subFacility.id === u.id ? { ...subFacility, name: u.name } : subFacility
    )
  
    return state
  }*/
  const GroupMemberUpdate = (state, action) => {
    const g = action.payload.facility
    const u = action.payload.subFacility
    console.log("ff",u)
    const facility = state[g.id]
      facility.subFacilities = facility.subFacilities.map(subFacility =>
        subFacility.id === u.id ? { ...subFacility, name: u.name } : subFacility
      )
    return state
  }
  
 /**
 * Stavova funkce, ktera provede update type ve skupine
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */

 const FacilityTypeUpdate = (state, action) => {
  console.log("volani funkce typeupdate")
  const g = action.payload.facility  
  const Type = action.payload.newType
  const facility = state[g.id]
  console.log("type",Type)
  facility.type = { ...facility.type, id: Type.id, name: Type.name }

  return state
}


 
  

  

/**
 * Kompletni rez budocim store.
 * Obsluhuje skupiny
 */
export const GroupSlice = createSlice({
    name: 'groups',
    initialState: {},
    reducers: {
        group_add: CreateItem,
        group_delete: DeleteItem,
        group_replace: ReplaceItem,
        group_update: UpdateItem,
        group_select: SelectItem,

        group_memberRemove: GroupMemberRemove,
        group_memberUpdate: GroupMemberUpdate, 
        group_memberAdd: GroupMemberAdd,
        group_TypeUpdate:FacilityTypeUpdate
    }
})

//z rezu odvozene akce
export const GroupActions = GroupSlice.actions
//z rezu odvozeny stavovy automat
export const GroupReducer = GroupSlice.reducer