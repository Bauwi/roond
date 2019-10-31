export const splitCircle = (circles, id) =>
  circles.map(circle => {
    if (circle.id === id) {
      return {
        ...circle,
        children: [
          { id: `${id}1`, children: [] },
          { id: `${id}2`, children: [] }
        ]
      }
    }

    if (!!circle.children.length) {
      return {
        ...circle,
        children: splitCircle(circle.children, id)
      }
    }
    return circle
  })

const circles = [
  {
    id: '1',
    children: [
      {
        id: '11',
        children: [{ id: '111', children: [] }, { id: '112', children: [] }]
      },
      { id: '12', children: [] }
    ]
  },
  {
    id: '2',
    children: [
      { id: '21', children: [] },
      {
        id: '22',
        children: [{ id: '221', children: [] }, { id: '222', children: [] }]
      }
    ]
  }
]

JSON.stringify(splitCircle(circles, '21'))
