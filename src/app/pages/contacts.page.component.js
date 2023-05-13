import { WFMComponent } from "../../framework";

class ContactsPageComponent extends WFMComponent {
  constructor(config) {
    super(config);
  }
  events() {
    return {
      "click .collapsible": "onContactsClick",
    };
  }

  //desturctarization to get target not event.target
  onContactsClick({ target }) {
    if (!target.classList.contains("collapsible-header")) return;

    this.el
      .querySelectorAll(".js-contacts")
      .forEach((element) => element.classList.remove("active"));

    target.parentNode.classList.add("active");
  }
}

export const contactsPageComponent = new ContactsPageComponent({
  selector: "app-contacts-page",
  template: `
  <div class="row" >
    <div class="columns col s6 offset-s3">
      <ul class="collapsible popout collapsible-accordion" >
        <li class="js-contacts">
          <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
          <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li class="js-contacts">
          <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
          <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li class="active js-contacts">
          <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
          <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
      </ul>
    </div> 
  </div>    
  `,
});
