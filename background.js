/**
 * Remove elements from the DOM
 * 
 * @param {Array<HTMLElement>} tags
 * @returns {void} 
 */
 function removeElements($tags) {
	Array.from($tags).forEach(($el) => {
		$el.remove()
	})
}

chrome.scripting.executeScript({
	target: { tag: tags },
	func: removeElements
})