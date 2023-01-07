import React from 'react';

const GroupsList = ({ groups, groupClicked }) => {
    const handleClick = (e) => {
        const groupId = e.target.id
        groupClicked(groupId)
    }
    console.log(groups)
    return (
        <div>
            <ul className='no-bullets'>
                {
                    groups.map(group => {
                        return <li onClick={handleClick} id={group._id} key={group._id}>{group.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default GroupsList