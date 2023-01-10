import React, { useCallback } from 'react'
import { List, Button } from 'antd'

const GroupsList = ({ groups, groupClicked }) => {
  const handleClick = useCallback((groupId) => {
    groupClicked(groupId)
  }, [groupClicked])

  return (
    <List
      dataSource={groups}
      bordered
      style={{ maxHeight: '585px', overflow: 'auto' }}
      size='small'
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={
              <Button
                type='text'
                onClick={() => handleClick(item._id)}
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