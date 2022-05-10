import wrappedHashRouter from "../component/hashRouter.js";

export const SidebarComponents = (sidebar) => {
  const menuItem = {
    refugees: [
      {link: '#/Refugees/Financial_Assistance', text: 'Фінансова допомога', icon: 'ri-hand-coin-line'}, 
    ]
  };

  const items = menuItem[sidebar].reduce((elem, i) => {
    if (wrappedHashRouter.get() === i.link) {
      return elem + `
      <li class='sidebar__navbar__item'>
        <a class='sidebar__navbar__link active w-block d-flex' href="${i.link}"><i class='sidebar__navbar__link__icon ${i.icon}'></i> ${i.text}</a>
      </li>`
    }
    return elem + `
      <li class='sidebar__navbar__item'>
        <a class='sidebar__navbar__link w-block d-flex' href="${i.link}"><i class='sidebar__navbar__link__icon ${i.icon}'></i> ${i.text}</a>
      </li>`
  }, ``)

  return `
  <aside class='sidebar'>
      <nav class='sidebar__navbar'>
        <ul class='sidebar__navbar__list'>
          ${items}
        </ul>
      </nav>
    </aside>
  `
}