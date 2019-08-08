// Buttons
const bottomDrawerButton = document.querySelector('.btm-drawer-btn')
const topDrawerButton = document.querySelector('.top-drawer-btn')
const leftDrawerButton = document.querySelector('.left-drawer-btn')
const rightDrawerButton = document.querySelector('.right-drawer-btn')
// Containers
const bottomDrawerContainer = document.querySelector('.bottom-drawer')
const topDrawerContainer = document.querySelector('.top-drawer')
const leftDrawerContainer = document.querySelector('.left-drawer')
const rightDrawerContainer = document.querySelector('.right-drawer')

// Toggle BOTTOM Drawer between OPEN & CLOSED
bottomDrawerButton.addEventListener('click', () => {
  if (bottomDrawerContainer.style.display === 'none') {
    topDrawerContainer.style.display = 'none'
    leftDrawerContainer.style.display = 'none'
    rightDrawerContainer.style.display = 'none'
    bottomDrawerContainer.style.display = 'block'
  } else {
    bottomDrawerContainer.style.display = 'none'
  }
})

// Toggle TOP Drawer between OPEN & CLOSED
topDrawerButton.addEventListener('click', () => {
  if (topDrawerContainer.style.display === 'none') {
    topDrawerContainer.style.display = 'flex'
    leftDrawerContainer.style.display = 'none'
    rightDrawerContainer.style.display = 'none'
    bottomDrawerContainer.style.display = 'none'
  } else {
    topDrawerContainer.style.display = 'none'
  }
})

// Toggle LEFT Drawer between OPEN & CLOSED
leftDrawerButton.addEventListener('click', () => {
  if (leftDrawerContainer.style.display === 'none') {
    topDrawerContainer.style.display = 'none'
    leftDrawerContainer.style.display = 'flex'
    rightDrawerContainer.style.display = 'none'
    bottomDrawerContainer.style.display = 'none'
  } else {
    leftDrawerContainer.style.display = 'none'
  }
})

// Toggle RIGHT Drawer between OPEN & CLOSED
rightDrawerButton.addEventListener('click', () => {
  if (rightDrawerContainer.style.display === 'none') {
    topDrawerContainer.style.display = 'none'
    leftDrawerContainer.style.display = 'none'
    rightDrawerContainer.style.display = 'flex'
    bottomDrawerContainer.style.display = 'none'
  } else {
    rightDrawerContainer.style.display = 'none'
  }
})
