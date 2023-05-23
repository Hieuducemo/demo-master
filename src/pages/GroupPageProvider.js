import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GroupMembersCard } from 'components/GroupMembersCard';
import { GroupLarge } from 'components/GroupLarge';

import { fakeQueryGroup } from 'queries/fakequerygroup';
import { GroupFetch } from 'reducers/GroupAsyncActions';
import { actions } from './AppProvider';

/**
 * Komponenta, ktera je zaclenena ve strukture s Providerem, tedy se store, importuje si akce a poskytuje je podrizenym komponentam
 * @param {*} param0 
 * @returns 
 */
export const GroupPageProvider = ({id}) => {

    //vyber vsech skupin ze store
    const facilities = useSelector(state => state.facilities)
    //vyber idcka u skupiny, ktere bylo vybrano
    const selectedId = useSelector(state => state.facilities.selectedId)
    //vyber skupiny ze store, ktera ma byt zobrazena
    const facility = facilities[id] //|| {id: id}
    console.log(facilities)

    //console.log(group)
    
    
    useEffect(
        () => {
            console.log('GroupPageProvider refetch ' + id)
            actions.groupFetch(id)           
        }, [id, selectedId]
    )

    if (facility) {
        //skupina je ve store
        return (          
            <GroupLarge facility={facility} actions={actions}/>       
        )
    } else {
        
        return (
            <div>Loading... {id}, {facility}</div>
        )
    }
}