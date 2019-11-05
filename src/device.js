const isIOS = () => {
  var iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ];

  if (!!navigator.platform) {
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()){ return true; }
    }
  }

  return false
};


const smsLink = (message) => {
	const msg = encodeURIComponent(message);
  let href = 'sms:';

  // XXX can someone check if there are differences between IOS vers??
	// I have seen an old note that &body will not work on iOS 6, 7
  // Does this mean iOS 6 and 7 use the android version?
	if(isIOS()) {
		href += "&body=" + msg;
	} else {
		href += "?body=" + msg;
	}

	return href
};


module.exports = { isIOS, smsLink };
