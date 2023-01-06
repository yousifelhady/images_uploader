import React from 'react';

const GroupsList = (props) => {
    const handleClick = (e) => {
        const groupId = e.target.id
        console.log(groupId)
        props.groupClicked(groupId)
    }
    console.log(props.groups)
    return (
        <div>
            <ul className='no-bullets'>
                {
                    props.groups.map(group => {
                        return <li onClick={handleClick} id={group._id} key={group._id}>{group.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default GroupsList