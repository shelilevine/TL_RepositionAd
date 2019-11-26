function position_ad (contentSelector, placementSelector, depth) {
	try {
		//if ad is currently positioned in article, move it to bottom that it can be repositioned in the correct location (so <p> tag in the ad will not be counted in positioning)
		if (element.parentElement == contentSelector) {
			var temp_parentElement = contentSelector.lastElementChild
			contentSelector.insertBefore(placementSelector, temp_parentElement);
		}

		//update depth to account for empty <p> tags (assuming original depth only considers paragraphs with content)
		var count = 0
		var new_depth = 0
		var paragraph
		while (count < depth) {
			for (paragraph of contentSelector.getElementsByTagName('p')) {
				new_depth ++;
				if (paragraph.innerHTML.trim() !== "") {
					count ++;
				}
				if (count === depth) {
					break
				}
			}
		}

		// move element to new position
		contentSelector.insertBefore(placementSelector, contentSelector.getElementsByTagName('p')[new_depth]);
	}
	catch(err) {
		// if error, fire error pixel to Triplelift server
		fireError(err);
	}
}



function fireError(e) {
    const elem = document.createElement("IMG");
    const ref = encodeURIComponent(document.URL);
    const inv_code = "variety_desktop_top_300x250";
    let src = "//eb2.3lift.com/sce?block=";
    src += "custom_js_error";
    src += "&ref=" + ref;
    src += "&lvl=2";
    src += "&inv_code=" + inv_code;
    src += "&e=" + encodeURIComponent(e);
    elem.src = src;
}
