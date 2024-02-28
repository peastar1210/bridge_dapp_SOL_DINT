import { Flex, Grid, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
	faTwitter,
	faFacebook,
	faLinkedin,
	faGithub,
	faTelegram,
	faDiscord,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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

import { Saira_Condensed } from "next/font/google";

const Sairaondensed = Saira_Condensed({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
});

export default function Footer() {
	return (
		<Flex
			direction="column"
			position="fixed"
			w="full"
			mb="40px"
			bottom="0px"
			alignItems="center"
			gap="20px"
			className={Sairaondensed.className}
		>
			<Text color="rgba(250, 250, 250, 0.7)" fontSize="13px">
				@ 2024 DinarTether
			</Text>
			<Flex gap="6px">
				<Link href="https://facebook.com/dinartether">
					<FontAwesomeIcon
						icon={["fab", "facebook"]}
						size="lg"
						color="rgba(250, 250, 250, 0.7)"
					/>
				</Link>
				<Link href="https://twitter.com/dinartether">
					<FontAwesomeIcon
						icon={["fab", "twitter"]}
						size="lg"
						color="rgba(250, 250, 250, 0.7)"
					/>
				</Link>
				<Link href="https://www.linkedin.com/company/dinartether">
					<FontAwesomeIcon
						icon={["fab", "linkedin"]}
						size="lg"
						color="rgba(250, 250, 250, 0.7)"
					/>
				</Link>
				<Link href="https://www.youtube.com/channel/UCzFQ3yDgK-TotWgxQfMJzRQ">
					<FontAwesomeIcon
						icon={["fab", "youtube"]}
						size="lg"
						color="rgba(250, 250, 250, 0.7)"
					/>
				</Link>
				<Link href="https://t.me/dinar_tether">
					<FontAwesomeIcon
						icon={["fab", "telegram"]}
						size="lg"
						color="rgba(250, 250, 250, 0.7)"
					/>
				</Link>
				<Link href="https://discord.com/invite/srvN6WWwpg">
					<FontAwesomeIcon
						icon={["fab", "discord"]}
						size="lg"
						color="rgba(250, 250, 250, 0.7)"
					/>
				</Link>
				<Link href="https://www.instagram.com/dinartether">
					<FontAwesomeIcon
						icon={["fab", "instagram"]}
						size="lg"
						color="rgba(250, 250, 250, 0.7)"
					/>
				</Link>
			</Flex>
			<Flex gap="60px" textAlign="center">
				<Link href="https://dinartetherwallet.com/page/6/Privacy-policy">
					<Text
						color="rgba(250, 250, 250, 0.7)"
						decoration="underline"
						fontSize="15px"
						_hover={{
							color: "#ECCC81",
							fontWeight: "600",
						}}
					>
						Private Policy
					</Text>
				</Link>
				<Link href="https://dinartetherwallet.com/#about">
					<Text
						color="rgba(250, 250, 250, 0.7)"
						decoration="underline"
						fontSize="15px"
						_hover={{
							color: "#ECCC81",
							fontWeight: "600",
						}}
					>
						About
					</Text>
				</Link>
				<Link href="https://dinartetherwallet.com/page/3/Cookies-policy">
					<Text
						color="rgba(250, 250, 250, 0.7)"
						decoration="underline"
						fontSize="15px"
						_hover={{
							color: "#ECCC81",
							fontWeight: "600",
						}}
					>
						Cookie Policy
					</Text>
				</Link>
			</Flex>
		</Flex>
	);
}
