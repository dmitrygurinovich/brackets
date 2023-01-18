module.exports = function check(str, bracketsConfig) {
	let buffer = [];

	function isOpeningBracket(bracket) {
		for (let i = 0; i < bracketsConfig.length; i++) {
			if (bracketsConfig[i][0] != bracketsConfig[i][1] && bracket == bracketsConfig[i][0]) {
				return true;
			} else if (bracketsConfig[i][0] != bracketsConfig[i][1] && bracket == bracketsConfig[i][1]) {
				return false;
			} else if (bracketsConfig[i][0] === bracketsConfig[i][1] && bracket === bracketsConfig[i][0]) {

				if (buffer.length == 0) {
					return true;
				} else {
					if (bracket === buffer[buffer.length - 1]) {
						return false;
					} else {
						return true;
					}
				}
			}
		}
	}

	function searchOpeningBracketByClosing(bracket) {
		for (let i = 0; i < bracketsConfig.length; i++) {
			if (bracketsConfig[i][1] === bracket) {
				return bracketsConfig[i][0];
			}
		}
	}

	for (let a = 0; a < str.length; a++) {
		if (str.length % 2 !== 0) {
			return false;
		}
		if (isOpeningBracket(str.charAt(a))) {
			buffer.push(str.charAt(a));
		} else {
			if (buffer.length == 0) {
				return false;
			} else {
				if (searchOpeningBracketByClosing(str[a]) !== buffer[buffer.length - 1]) {
					return false;
				} else {
					buffer.pop();
				}
			}
		}
	}

	if (buffer.length == 0) {
		return true;
	} else {
		return false;
	}
}
