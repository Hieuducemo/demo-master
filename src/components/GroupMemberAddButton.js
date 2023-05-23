import { useState } from 'react';
import { v1 } from 'uuid';
import {AddButton} from './AddButton'

export const GroupMemberAddButton = ({ facility, actions }) => {
  const [newMember, setNewMember] = useState({
    id: '',
    name: '',
  })

  const handleAddMember = () => {
    const FacilityId = facility.id; 

    const member = {
      id: v1(),
      name: newMember.name,
    }
    console.log("heo",FacilityId)
    actions.onGroupMemberAdd({FacilityId, member})
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }))
  }

  return (
    <div>
      <input type="text" name="name" placeholder="Name" value={newMember.name} onChange={handleChange} />
      <AddButton onClick={handleAddMember}>Add Member</AddButton>
    </div>
  );
};


