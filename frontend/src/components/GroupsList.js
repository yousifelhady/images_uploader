import React, { useCallback } from 'react'
import { List, Button } from 'antd'

const GroupsList = ({ groups, groupClicked }) => {
  const handleClick = useCallback((groupId, groupName) => {
    groupClicked(groupId, groupName)
  }, [groupClicked])

  return (
    <List
      dataSource={groups}
      bordered
      size='small'
      renderItem={item => (
        <List.Item onClick={() => handleClick(item._id, item.name)}>
          <List.Item.Meta
            title={
              <Button
                type='text'
              >
                {item.name}
              </Button>
            }
          />
        </List.Item>
      )}
    >
    </List>
  )
}

export default GroupsList