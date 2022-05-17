//IMPORT

import { Clock } from "./components/clock/Clock.js";
import { socials } from "./components/socials/socials.js";
import { clockData } from "./data/clockData.js";
import { socialsData } from "./data/socialsData.js";

//EXECUTION
new Clock("#clock_1", clockData); // Norint paleisti objektinį javaScript turinį rašome :"new" prieš objektą.
socials("footer .socials", socialsData);
