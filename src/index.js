import './scss/index.scss'

import { SideMenu } from './components/SideMenu.js'

import {
  burgerButton,
  sideMenu,
  closeButton,
  navLinks,
} from './components/utils/constants.js'

const sideMenuExample = new SideMenu(sideMenu)

burgerButton.addEventListener('click', () => {
  sideMenuExample.openSideMenu()
})

closeButton.addEventListener('click', () => {
  sideMenuExample.closeSideMenu()
})

sideMenuExample.setEventListeners()

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    sideMenuExample.closeSideMenu()
  })
})
