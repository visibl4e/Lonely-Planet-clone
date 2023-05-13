import { notFound } from "./common/not.found.component";
import { aboutPageComponent } from "./pages/about.page.component";
import { contactsPageComponent } from "./pages/contacts.page.component";
import { destinationPageComponent } from "./pages/destinations.page.component";
import { homePageComponent } from "./pages/home.page.component";

export const appRoutes = [
  { path: "", component: homePageComponent },
  { path: "destinations", component: destinationPageComponent },
  { path: "about", component: aboutPageComponent },
  { path: "contacts", component: contactsPageComponent },
  { path: "**", component: notFound },
];
