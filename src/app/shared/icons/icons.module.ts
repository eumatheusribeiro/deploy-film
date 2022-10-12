import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar as farCalendar, faClock as farClock, faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faBookmark, faChevronLeft, faChevronRight, faCouch, faFlag, faHeart, faHeartCrack, faHome, faLightbulb, faMagnifyingGlass, faPencil, faQuestion, faSquareXmark, faStar, faStarHalfStroke, faStepForward, faTicket, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  exports: [
    FontAwesomeModule
  ]
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faTicket,
      faMagnifyingGlass,
      faStar, faChevronLeft,
      faChevronRight,
      faHome,
      faHeart,
      faHeartCrack,
      faUser,
      faLightbulb,
      faBookmark,
      faCouch,
      faStepForward,
      faStar,
      farStar,
      faStarHalfStroke,
      farCalendar,
      farClock,
      faVideo,
      faFlag,
      faSquareXmark,
      faPencil,
      faQuestion
    );
  }
 }
