export class SideMenu {
  constructor(sideMenuName) {
    this._sideMenuName = sideMenuName
  }

  openSideMenu() {
    this._sideMenuName.classList.add('side-menu_opened')
  }

  closeSideMenu() {
    this._sideMenuName.classList.remove('side-menu_opened')
  }

  setEventListeners() {
    this._sideMenuName.addEventListener('mousedown', (evt) => {
      //именно таргет, иначе закрывается и по клику на сам попап
      if (evt.target === this._sideMenuName) {
        this.closeSideMenu()
      }
      if (evt.target.classList.contains('side-menu__close-button')) {
        this.closeSideMenu()
      }
    })
  }
}
