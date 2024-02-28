import { library } from "@fortawesome/fontawesome-svg-core";
import {
	fab,
	faTwitter,
	faFacebook,
	faLinkedin,
	faGithub,
	faTelegram,
	faDiscord,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
	library.add(
		fab,
		faTwitter,
		faFacebook,
		faLinkedin,
		faGithub,
		faTelegram,
		faDiscord,
		faInstagram
	);
}
export default initFontAwesome;
