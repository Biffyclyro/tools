// ==UserScript==
// @name        Hide Trash Sites
// @namespace   Violentmonkey Scripts
// @match       https://www.google.com/search
// @grant       none
// @version     1.0
// @author      João Senna
// @description 11/7/2022, 1:56:39 PM
// ==/UserScript==

const trashLinks = ['https://www.facebook.com', 'https://www.instagram.com']

const search = document.querySelector('#rso')
const divs = search.querySelectorAll('div')

const links = Array.from(divs)

links.forEach(l => {
	const link = l.querySelector('cite')

	if (link) {
		const textos = link.innerHTML.split('<')

		if (trashLinks.includes(textos[0])) {
			l.setAttribute('hidden', 'true')
		}
	}
})
