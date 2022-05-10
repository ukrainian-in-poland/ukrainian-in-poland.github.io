import wrappedHashRouter from "../component/hashRouter.js";
import { refugeesDatabase } from "../database/refugees-content.db.js";

export const RefugeesContent = (parent) => {
  let arr;

  if (wrappedHashRouter.get() === '#/Refugees/Financial_Assistance') {
    arr = refugeesDatabase.financialAssistance;
  }



   return arr.reduce((elem, i) => {
    return elem + `
    <li class='main__content__item w-block'>
      <h3>${i.title}</h3>
      <hr>
      <p>${i.text}</p>
    </li>
    `
   }, ``)
}