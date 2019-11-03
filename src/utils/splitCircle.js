export const splitCircle = (circles, id, occurences) =>
  circles.map(circle => {
    if (circle.id === id) {
      return {
        ...circle,
        children: new Array(occurences).fill().map((child, i) => ({
          id: `${id}${i}`,
          children: []
        }))
      }
    }

    if (!!circle.children.length) {
      return {
        ...circle,
        children: splitCircle(circle.children, id, occurences)
      }
    }
    return circle
  })
