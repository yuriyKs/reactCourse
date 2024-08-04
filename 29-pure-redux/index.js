import store from './redux/store.js'
import getCurrentTime from './utils/getCurrentTime.js'
import { addCurentTime, clearTimes } from './redux/actionCreators.js'

const addTimeBtn = document.querySelector('#addTime')
const listItem = document.querySelector('#timesList')
const clearTimesBtn = document.querySelector('#clearTimes')

addTimeBtn.addEventListener('click', () => {
  store.dispatch(addCurentTime())
})

store.subscribe(() => {
  listItem.innerHTML = ''
  const times = store.getState()
  times.forEach((time) => {
    let li = document.createElement('li')
    li.innerText = time

    listItem.appendChild(li)
  })
})

clearTimesBtn.addEventListener('click', () => {
  store.dispatch(clearTimes())
})

// const unsubscribe = store.subscribe(() =>
//   console.log(`Just Updated ${store.getState()}`)
// ) // обновления вкючены

// store.dispatch({
//   type: 'ADD_CURRENT_TIME',
//   payload: '11:30:00',
// })

// store.dispatch({
//   type: 'ADD_CURRENT_TIME',
//   payload: '11:32:00',
// })

// store.dispatch({
//   type: 'ADD_CURRENT_TIME',
//   payload: '11:37:00',
// })

// unsubscribe() // обновления отключаются

// store.dispatch({
//   type: 'ADD_CURRENT_TIME',
//   payload: '11:41:00',
// })
