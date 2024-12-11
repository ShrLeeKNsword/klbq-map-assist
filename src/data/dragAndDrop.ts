let value: any

export const getDragValue = () => {
  return value
}

export const setDragValue = (ref: any) => {
    value = ref
}

document.body.addEventListener('touchend', (e) => {
  const currentDragValue = getDragValue()
  if(!currentDragValue) return
  const touchElements = document.elementsFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
  const target = touchElements[1]
  if(target && target.className == 'pikaso') {
    const EventClass = e.constructor
    const eventClone = new EventClass(e.type, e)
    target.dispatchEvent(eventClone)
  }
})
