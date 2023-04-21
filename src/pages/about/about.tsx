import React, { useState } from 'react'

interface ListItem {
  id: number
  name: string
}

const ListPage: React.FC = () => {
  const [list, setList] = useState<ListItem[]>([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ])

  const handleDelete = (id: number) => {
    setList(list.filter(item => item.id !== id))
  }

  return (
    <div>
      <h1>List Page</h1>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListPage
