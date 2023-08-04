import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle, faCalendar as farCalendar, faClock as farClock, faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faBookmark, faCalendar, faChevronCircleLeft, faChevronCircleRight, faChevronLeft, faChevronRight, faClock, faCouch, faDoorOpen, faFlag, faGlobe, faHeart, faHeartCrack, faHome, faLanguage, faLightbulb, faMagnifyingGlass, faPencil, faPlus, faQuestion, faSquareXmark, faStar, faStarHalfStroke, faStepForward, faTicket, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';

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
      faQuestion,
      faChevronCircleLeft,
      faChevronCircleRight,
      faCalendar,
      faLanguage,
      faGlobe,
      faClock,
      faArrowLeft,
      faPlus,
      faDoorOpen,
      faFacebook,
      faYoutube,
      faTwitch,
      faTwitter,
      faPlayCircle
    );
  }
 }
