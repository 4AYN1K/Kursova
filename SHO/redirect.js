
const setLocation = (location) => {
	return [() => {document.location = location}, location]
}

const setFuncToElem = (elemSelector, funcOrhref) => {
	try {
		let elems = document.querySelectorAll(elemSelector)

		const setToElem = (elem) => {
			switch (elem.nodeName) {
			case 'A':
				elem.href = funcOrhref[1]
				break;
			case "BUTTON":
				elem.onclick = funcOrhref[0]
				break;
			}
		}
		for (let elem of elems) {
			setToElem(elem)
		}

	} catch (err) {
		console.log(`Element of selector - "${elemSelector}" is not found`)
	}
}

window.onload = () => {

	let indexes = [
		['#homeA', 'index.html'],
		['#notFoundA', '404.html'],
		['#blogA', 'blog.html'],
		['#buthomeA','index.html'],
		['.video-button', '404.html'],
		['#workA', 'index.html#work'],
		['#contactA', 'index.html#contact']
	]

	indexes.map( (item) => {setFuncToElem(item[0], setLocation(item[1]))})
}