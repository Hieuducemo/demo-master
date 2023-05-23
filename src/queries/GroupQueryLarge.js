import { authorizedFetch } from 'queries/authorizedFetch'

/**
 * Funkce, ktera id namapuje na json predstavujici "velky" (podrobny) dotaz na server
 * @param {*} id 
 * @returns 
 */
export const GroupQueryLargeJSON = (id) => ({
    "query":
        `query($id: ID!) {
            facilityById(id: $id) {
                id
                name
                lastchange
                geometry
                geolocation
                type {
                    id
                    name
                }
                masterFacility {
                    id
                    name
                }
                subFacilities {
                    id
                    name
                }
            }
        }`,
    "variables": {"id": id}
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns 
 */
export const GroupQueryLarge = (id) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(GroupQueryLargeJSON(id)),
    })