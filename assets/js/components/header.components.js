import wrappedHashRouter from "../component/hashRouter.js";

export const HeaderComponents = (activeLink) => {
  const menuItem = [
    {text: 'Головна', link: '#/Home'},
    {text: 'Біженцям', link: '#/Refugees/Financial_Assistance'},
  ];

  const i = menuItem.reduce((elem, i, index) => {
    if (activeLink -1 == index) {
      return elem + `<li class="header__navbar__item">
              <a class="header__navbar__link active" href="${i.link}">${i.text}</a>
            </li>`
    }
    return elem + `<li class="header__navbar__item">
              <a class="header__navbar__link" href="${i.link}">${i.text}</a>
            </li>`
  }, ``)


  return `
  <header class="header w-block">
    <div class="header__container container d-flex">

      <nav class="header__navbar">
        <ul class="header__navbar__list d-flex">
          ${i}
        </ul>
      </nav>


      <button class="header__theme-btn ri-sun-line js--theme-btn"></button>
    </div>
  </header>
  `
};