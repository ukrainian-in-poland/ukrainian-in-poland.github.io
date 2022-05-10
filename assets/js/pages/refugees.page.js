import { HeaderComponents } from "../components/header.components.js"
import { RefugeesContent } from "../components/refugees-content.components.js"
import { SidebarComponents } from "../components/sidebar.component.js"

export const RefugeesPage = () => {

  return `
  ${HeaderComponents(2)}

  <main class="main container d-flex">

    <div class="main__content">
      <ul class="main__content__list">
        ${RefugeesContent()}
      </ul>
    </div>

    ${SidebarComponents('refugees')}
    
  </main>
  `
}