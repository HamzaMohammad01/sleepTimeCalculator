let sleeptime = (hrs, min, daytime, sleepNow, fall_asleep_at) => {
	let date = new Date();
	let hour, minutes;

	if (sleepNow === false) {
		hour = hrs;
		// if (daytime === "PM") hour += 12;
		minutes = min;
	} else {
		hour = date.getHours();
		minutes = date.getMinutes();
	}

	date.setHours(hour);
	date.setMinutes(minutes);

	let bufferTime = 14 * 60000;

	let cycle1, cycle2, cycle3, cycle4, cycle5, cycle6;

	if (sleepNow === false && fall_asleep_at === false) {
		cycle1 = new Date(date.getTime() - 5400000 - bufferTime);
		cycle2 = new Date(date.getTime() - 5400000 * 2 - bufferTime);
		cycle3 = new Date(date.getTime() - 5400000 * 3 - bufferTime);
		cycle4 = new Date(date.getTime() - 5400000 * 4 - bufferTime);
		cycle5 = new Date(date.getTime() - 5400000 * 5 - bufferTime);
		cycle6 = new Date(date.getTime() - 5400000 * 6 - bufferTime);
	} else {
		cycle1 = new Date(date.getTime() + 5400000 + bufferTime);
		cycle2 = new Date(date.getTime() + 5400000 * 2 + bufferTime);
		cycle3 = new Date(date.getTime() + 5400000 * 3 + bufferTime);
		cycle4 = new Date(date.getTime() + 5400000 * 4 + bufferTime);
		cycle5 = new Date(date.getTime() + 5400000 * 5 + bufferTime);
		cycle6 = new Date(date.getTime() + 5400000 * 6 + bufferTime);
	}

	let formatted = {
		cycle1: {
			// id: 'cycle1',
			hour:
				cycle1.getHours() > 12
					? cycle1.getHours() - 12
					: cycle1.getHours(),
			minutes:
				String(cycle1.getMinutes()).length < 2
					? `0${cycle1.getMinutes()}`
					: cycle1.getMinutes(),
			daytime: cycle1.getHours() > 12 ? "PM" : "AM",
		},
		cycle2: {
			// id: cycle2,
			hour:
				cycle2.getHours() > 12
					? cycle2.getHours() - 12
					: cycle2.getHours(),
			minutes:
				String(cycle2.getMinutes()).length < 2
					? `0${cycle2.getMinutes()}`
					: cycle2.getMinutes(),
			daytime: cycle2.getHours() > 12 ? "PM" : "AM",
		},
		cycle3: {
			// id: cycle3,
			hour:
				cycle3.getHours() > 12
					? cycle3.getHours() - 12
					: cycle3.getHours(),
			minutes:
				String(cycle3.getMinutes()).length < 2
					? `0${cycle3.getMinutes()}`
					: cycle3.getMinutes(),
			daytime: cycle3.getHours() > 12 ? "PM" : "AM",
		},
		cycle4: {
			// id: cycle4,
			hour:
				cycle4.getHours() > 12
					? cycle4.getHours() - 12
					: cycle4.getHours(),
			minutes:
				String(cycle4.getMinutes()).length < 2
					? `0${cycle4.getMinutes()}`
					: cycle4.getMinutes(),
			daytime: cycle4.getHours() > 12 ? "PM" : "AM",
		},
		cycle5: {
			// id: cycle5,
			hour:
				cycle5.getHours() > 12
					? cycle5.getHours() - 12
					: cycle5.getHours(),
			minutes:
				String(cycle5.getMinutes()).length < 2
					? `0${cycle5.getMinutes()}`
					: cycle5.getMinutes(),
			daytime: cycle5.getHours() > 12 ? "PM" : "AM",
		},
		cycle6: {
			// id: cycle6,
			hour:
				cycle6.getHours() > 12
					? cycle6.getHours() - 12
					: cycle6.getHours(),
			minutes:
				String(cycle6.getMinutes()).length < 2
					? `0${cycle6.getMinutes()}`
					: cycle6.getMinutes(),
			daytime: cycle6.getHours() > 12 ? "PM" : "AM",
		},
	};

	for (const key in formatted) {
		if (formatted[key].hour == 0) formatted[key].hour = 12;
		if (formatted[key].hour.toString().length < 2)
			formatted[key].hour = `0${formatted[key].hour}`;
	}

	let result = [
		`${formatted.cycle1.hour}:${formatted.cycle1.minutes} ${formatted.cycle1.daytime}`,
		`${formatted.cycle2.hour}:${formatted.cycle2.minutes} ${formatted.cycle2.daytime}`,
		`${formatted.cycle3.hour}:${formatted.cycle3.minutes} ${formatted.cycle3.daytime}`,
		`${formatted.cycle4.hour}:${formatted.cycle4.minutes} ${formatted.cycle4.daytime}`,
		`${formatted.cycle5.hour}:${formatted.cycle5.minutes} ${formatted.cycle5.daytime}`,
		`${formatted.cycle6.hour}:${formatted.cycle6.minutes} ${formatted.cycle6.daytime}`,
	];

	if (sleepNow === false && fall_asleep_at === false) result.reverse();

	return result;
};

// console.log(sleeptime(9, 45, "PM", false));
module.exports = sleeptime;
