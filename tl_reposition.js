

// Ad Image

element = document.querySelectorAll("#adm-widget-dsk-tab-ros-rail-top");
element = document.querySelector("#adm-widget-dsk-tab-ros-rail-top");
//ad = document.getElementsByClassName("#adm-widget-dsk-tab-ros-rail-top");




// Content
content = document.querySelectorAll("article.c-content");
content = document.querySelector("article.c-content");
//content = document.getElementsByClassName("article.c-content");



// all the p elements in the article
paragraphs = document.querySelectorAll("article.c-content > p")



// first paragraph in article
first = document.querySelectorAll("article.c-content > p")[0]



// moving an element into content
content.insertBefore(element, third)
node wher you want to put element.insertBefore(element you want to move, location you want to place it before)





var fragment = document.createDocumentFragment();
var z = document.createElement('div');
z.innerHTML = document.querySelectorAll("#adm-widget-dsk-tab-ros-rail-top")
fragment.appendChild(z);


//   content.insertBefore(element, content.getElementsByTagName('p')[2]);






// figure out if an element is a node
function isNode(o){
    return (
        typeof Node === "object" ? o instanceof Node:
        o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName === "string");}

//Returns true if it is a DOM element    
function isElement(o){
  return (
    typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
);





// function position_ad (contentSelector, placementSelector, depth) {
// 	// get the position of the node before which you want to relocate placement
// 	var position_before = depth + 1;
// 	// skip over empty paragraphs
// 	while (contentSelector.getElementsByTagName('p')[position_before].children.length === 0) {
// 		console.log("empty paragraph")
// 		position_before += 1
// 	}
// 	contentSelector.insertBefore(placementSelector, contentSelector.getElementsByTagName('p')[position_before]);

	}





	// function position_ad (contentSelector, placementSelector, depth) {
	// // get the position of the node before which you want to relocate placement
	// //var position_before = depth + 1;
	// // skip over empty paragraphs
	// count = 0
	// while (contentSelector.getElementsByTagName('p')[depth].children.length === 0) {
	// 	console.log("empty paragraph");
	// 	console.log(contentSelector.getElementsByTagName('p')[depth]);
	// 	depth ++ ;
	// 	count ++;
	// 	//return depth;
	// }
	// console.log(count);
	// contentSelector.insertBefore(placementSelector, contentSelector.getElementsByTagName('p')[depth]);

	}




	// function position_ad (contentSelector, placementSelector, depth) {
	// // get the position of the node before which you want to relocate placement
	// //var position_before = depth + 1;
	// // skip over empty paragraphs
	// count = 0
	// while (contentSelector.getElementsByTagName('p')[depth].length === 0) {
	// 	console.log("empty paragraph");
	// 	console.log(contentSelector.getElementsByTagName('p')[depth]);
	// 	depth ++ ;
	// 	count ++;
	// 	//return depth;
	// }
	// console.log(count);
	// contentSelector.insertBefore(placementSelector, contentSelector.getElementsByTagName('p')[depth]);

	}

// works the first time, but not the second time -- may need to move element out of article and then back in (using element.parentElement)
element = document.querySelector("#adm-widget-dsk-tab-ros-rail-top");
content = document.querySelector("article.c-content");

function position_ad (contentSelector, placementSelector, depth) {
// get the position of the node before which you want to relocate placement
//var position_before = depth + 1;
// skip over empty paragraphs
count = 0
while (contentSelector.getElementsByTagName('p')[depth].innerHTML.trim() === "") {
	console.log("empty paragraph");
	console.log(contentSelector.getElementsByTagName('p')[depth]);
	depth ++ ;
	count ++;
	//return depth;
}
console.log(count);
contentSelector.insertBefore(placementSelector, contentSelector.getElementsByTagName('p')[depth]);

}



// includes the empty paragraphs when counting depth
element = document.querySelector("#adm-widget-dsk-tab-ros-rail-top");
content = document.querySelector("article.c-content");

function position_ad (contentSelector, placementSelector, depth) {
// skip over empty paragraphs
try {
	//if ad is currently positioned in article, move it to bottom that it can be repositioned in the correct location
	if (element.parentElement == contentSelector) {
		var temp_parentElement = contentSelector.lastElementChild
		console.log(temp_parentElement);
		contentSelector.insertBefore(placementSelector, temp_parentElement);
	}

	count = 0
	while (contentSelector.getElementsByTagName('p')[depth].innerHTML.trim() === "") {
		console.log("empty paragraph");
		console.log(contentSelector.getElementsByTagName('p')[depth]);
		depth ++ ;
		count ++;
		//return depth;
	}
	console.log(count);

	var new_pos = contentSelector.getElementsByTagName('p')[depth]
    console.log(new_pos);
	contentSelector.insertBefore(placementSelector, contentSelector.getElementsByTagName('p')[depth]);
}
catch(err) {
	fireError(err);
}
}


function fireError(e) {
	console.log("error");
}






	// while (new_depth <= depth) {
	// 	for (paragraph of contentSelector.getElementsByTagName('p')) {
	// 		if (paragraph.innerHTML.trim() !== "") {
	// 			new_depth ++;
	// 		}
	// 	}
	// }






// try new_depth calculcation is wrong, also while loop doesnt' work with for loop beneath it

element = document.querySelector("#adm-widget-dsk-tab-ros-rail-top");
content = document.querySelector("article.c-content");

function position_ad (contentSelector, placementSelector, depth) {
// skip over empty paragraphs
try {
	//if ad is currently positioned in article, move it to bottom that it can be repositioned in the correct location
	if (element.parentElement == contentSelector) {
		var temp_parentElement = contentSelector.lastElementChild
		console.log(temp_parentElement);
		contentSelector.insertBefore(placementSelector, temp_parentElement);
	}

	//update depth to account for empty p tags
	var count = 0
	var new_depth = 0
	var paragraph


	while (count < depth) {
		for (paragraph of contentSelector.getElementsByTagName('p')) {
			new_depth ++;
			console.log(paragraph);
			if (paragraph.innerHTML.trim() !== "") {
				count ++;
			}
			if (count === depth) {
				break
			}
		}
	}

	console.log(new_depth);


	var new_pos = contentSelector.getElementsByTagName('p')[new_depth]
    console.log(new_pos);
	contentSelector.insertBefore(placementSelector, contentSelector.getElementsByTagName('p')[new_depth]);
}
catch(err) {
	fireError(err);
}
}


function fireError(e) {
	console.log("error");
}



