/**
 * Get available tags from the json file
 * 
 * @returns {Promise<Array<String>>}
 */
async function getAvailableTags() {
	return await fetch('./../json/elements.json').then(
		(response) => {
			if (response.ok) {
				return response.json()
			}
			throw new Error('Can\'t fetch elements.json')
		}
	)
}

/**
 * Check if the given tag is available
 * 
 * @param {string} tag
 * @returns {boolean}
 */
async function tagAvailability(tag) {

	/** @type {Array<String>} */
	const tags = await getAvailableTags().then(
		(json) => { 
			return json.elements
		}
	)

	return tags.includes(tag)

}

/**
 * 
 * @returns {void}
 */
function search() {
	/** @type {string} */
	const tag = document.getElementById('search-tag').value

	if (tagAvailability(tag)) {
		console.log(tag)
	} else {
		throw new Event('Tag not available')
	}
}

chrome.scripting.executeScript({
	target: { tag: 'body' },
	func: () => console.log('ok')
})


document.querySelector('.btn-submit').addEventListener('click', () => {
	search()
})