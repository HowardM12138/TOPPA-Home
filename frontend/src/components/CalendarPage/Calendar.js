import { ReactEmbeddedGoogleCalendar } from "react-embedded-google-calendar";
import NavBar from "../NavBar";
import { useEffect, useState } from "react";
import { getUser } from "../UserSession";

//npm package出现tree dependency problems时，在install的时候加 --legacy-peer-deps
//google calendar的public url可以在calendar的setting中找到

export default function Calendar() {
	const [Url, setUrl] = useState(null);
	useEffect(() => {
		setUrl(
			"https://calendar.google.com/calendar/embed?src=yangjingfeng0705%40berkeley.edu&ctz=America%2FLos_Angeles"
		);
	}, []);

	return (
		<div>
			<NavBar />
			{Url && (
				<ReactEmbeddedGoogleCalendar
					publicUrl={Url}
					height='740px'
					width='100%'
				/>
			)}
		</div>
	);
}
