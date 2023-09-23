const statusArray = ['update', 'delete', 'pending']

function changeStatus(element) {
  const oldStatusIndex = statusArray.indexOf(element.className)
  const newStatusIndex = oldStatusIndex + 1 >= statusArray.length ? 0 : oldStatusIndex + 1
  element.className = statusArray[newStatusIndex]
  element.textContent = statusArray[newStatusIndex]
}
