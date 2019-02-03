import moment from "moment";

export const formatTime = time => {
	const momentDuration = moment.duration(time, "seconds");
	let durationZero = "";
	let additionalZero = "";
	if (momentDuration.seconds() < 10) {
		durationZero = 0;
	}

	if (momentDuration.minutes() < 10) {
		additionalZero = 0;
	}

	let finalTime;

	if (momentDuration.hours() > 0) {
		finalTime = `${momentDuration.hours()}:${additionalZero}${momentDuration.minutes()}:${durationZero}${momentDuration.seconds()}`;
	} else {
		finalTime = `${additionalZero}${momentDuration.minutes()}:${durationZero}${momentDuration.seconds()}`;
	}
	return finalTime;
};
