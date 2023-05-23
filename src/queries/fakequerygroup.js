export const SingleGroup = {
    
        data: {
          facilityPage: [
            {
              id: "66275ffa-a7b3-11ed-b76e-0242ac110002",
              name: "Hlavní komplex",
              lastchange: "2023-05-03T19:23:58.915196",
              geometry: null,
              geolocation: null,
              type: {
                id: "764217ee-a7a0-11ed-b76e-0242ac110002",
                name: "areál"
              },
              masterFacility: null,
              subFacilities: [
                {
                  id: "662763a6-a7b3-11ed-b76e-0242ac110002",
                  name: "Budova A"
                }
              ]
            },
            {
              id: "662763a6-a7b3-11ed-b76e-0242ac110002",
              name: "Budova A",
              lastchange: "2023-05-03T19:23:58.919685",
              geometry: null,
              geolocation: null,
              type: {
                id: "76421cf8-a7a0-11ed-b76e-0242ac110002",
                name: "budova"
              },
              masterFacility: {
                id: "66275ffa-a7b3-11ed-b76e-0242ac110002",
                name: "Hlavní komplex"
              },
              subFacilities: [
                {
                  id: "66276464-a7b3-11ed-b76e-0242ac110002",
                  name: "Patro 1"
                }
              ]
            },
            {
              id: "66276464-a7b3-11ed-b76e-0242ac110002",
              name: "Patro 1",
              lastchange: "2023-05-03T19:23:58.924179",
              geometry: null,
              geolocation: null,
              type: {
                id: "76421e10-a7a0-11ed-b76e-0242ac110002",
                name: "patro"
              },
              masterFacility: {
                id: "662763a6-a7b3-11ed-b76e-0242ac110002",
                name: "Budova A"
              },
              subFacilities: [
                {
                  id: "662764dc-a7b3-11ed-b76e-0242ac110002",
                  name: "Místnost 101"
                },
                {
                  id: "6627654a-a7b3-11ed-b76e-0242ac110002",
                  name: "Místnost 102"
                }
              ]
            },
            {
              id: "662764dc-a7b3-11ed-b76e-0242ac110002",
              name: "Místnost 101",
              lastchange: "2023-05-03T19:23:58.928402",
              geometry: null,
              geolocation: null,
              type: {
                id: "76421faa-a7a0-11ed-b76e-0242ac110002",
                name: "učebna"
              },
              masterFacility: {
                id: "66276464-a7b3-11ed-b76e-0242ac110002",
                name: "Patro 1"
              },
              subFacilities: []
            },
            {
              id: "6627654a-a7b3-11ed-b76e-0242ac110002",
              name: "Místnost 102",
              lastchange: "2023-05-03T19:23:58.932238",
              geometry: null,
              geolocation: null,
              type: {
                id: "76421faa-a7a0-11ed-b76e-0242ac110002",
                name: "učebna"
              },
              masterFacility: {
                id: "66276464-a7b3-11ed-b76e-0242ac110002",
                name: "Patro 1"
              },
              subFacilities: []
            }
          ]
        }
      }
  


/**
 * "Jakoze" dotaz na server, ma shodnou signaturu s "pravym" dotazem.
 * stringify a parse je pouzito pro uplnou kopii promenne, aby se nevracela stale stejna skupina, pri modifikaci obsahu by to delalo problemy.
 * @param {*} id 
 * @returns 
 */
export const fakeQueryGroup = async (id) => ({json: () => {
    const json = JSON.stringify(SingleGroup)
    const result = JSON.parse(json)
    return {'groupById': {...result, id: id }}
}})