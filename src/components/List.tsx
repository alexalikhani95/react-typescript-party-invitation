import React from 'react'

interface PeopleProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[]
}

const List: React.FC<PeopleProps> = ({ people }) => {
  return (
    <div>
      List component
    </div>
  )
}

export default List