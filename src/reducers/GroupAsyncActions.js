import { GroupActions } from "./groupreducers" 

import { GroupQuerySmall } from "queries/GroupQuerySmall"
import { GroupQueryLarge } from "queries/GroupQueryLarge"
import { fakeQueryGroup }  from 'queries/fakequerygroup'
import { authorizedFetch } from "queries/authorizedFetch"
/**
 * Ask for the item on server and adds it or update it in the store to the heap
 * @param {*} id 
 * @returns promise
 */
export const GroupFetchHelper = (id, query, resultselector, dispatch, getState) => {
    const log = (text) => (p) => {
        console.log(text)
        console.log(JSON.stringify(p))
        return p
    }
    const p = query(id)
        .then(
            response => response.json(),
            error => error
        )
        .then(
            j => log('incomming')(j)
        )
        // .then(
        //     response => log('received')(response.json()),
        //     error => error
        //     //error
        //     )
        .then(
            json => log('converted')(resultselector(json)),
            error => error
        )
        .then(
            json => log('dispatching')(dispatch(GroupActions.group_update(json))),
            error => error
        )

    return p
}

/**
 * Fetch the group from server checks its type and asks once more for detailed data. Finally puts the result in the store.
 * @param {*} id 
 * @returns 
 */
export const GroupFetch = (id) => (dispatch, getState) => {
    const groupSelector = (json) => json.data.facilityById
    const bodyfunc = async () => {
        let facilityData = await GroupFetchHelper(id, GroupQuerySmall, groupSelector, dispatch, getState)
        
        if (facilityData.type !== "764217ee-a7a0-11ed-b76e-0242ac110002") {
            facilityData = await GroupFetchHelper(id, GroupQueryLarge, groupSelector, dispatch, getState)
        }
        return facilityData
    }
    return bodyfunc()
}

/**
 * Fetch the group from server checks its type and asks once more for detailed data. Finally puts the result in the store.
 * @param {*} id 
 * @returns 
 */
export const GroupFakeFetch = (id) => (dispatch, getState) => {
    //console.log('GroupFakeFetch')
    const groupSelector = (json) => json.facilityById
    const bodyfunc = async () => {
        let facilityData = await GroupFetchHelper(id, fakeQueryGroup, groupSelector, dispatch, getState)
        dispatch(GroupActions.group_select(facilityData))
        return facilityData
    }
    return bodyfunc()
}


export const GroupAsyncUpdate = (facility) => (dispatch, getState) => {
    const groupMutationJSON = (facility) => {
        return {
            query: `mutation ($id: ID!, $name: String!, $lastchange: DateTime!) {
                facilityUpdate(facility: {id: $id, name: $name, lastchange: $lastchange}) {
                  id
                  msg
                  facility {
                    id
                    lastchange
                  }
                }
              }`,
            variables: facility
            }
        }

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify(groupMutationJSON(facility))
    }


    return fetch('/api/gql', params)
    //return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json()
        )
        .then(
            json => {
                const msg = json.data.facilityUpdate.msg
                if (msg === "fail") {
                    console.log("Update selhalo")
                } else {
                    //mame hlasku, ze ok, musime si prebrat token (lastchange) a pouzit jej pro priste
                    const lastchange = json.data.facilityUpdate.facility.lastchange
                    dispatch(GroupActions.group_update({...facility, lastchange: lastchange}))
                }
                return json
            }
        )   
}