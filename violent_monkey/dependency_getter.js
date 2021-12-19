// ==UserScript==
// @name        New script - archlinux.org
// @namespace   Violentmonkey Scripts
// @match       https://archlinux.org/packages/*/*/*
// @grant       none
// @version     1.0
// @author      -
// @description 12/19/2021, 5:46:28 PM
// ==/UserScript==

const dependencies = document.querySelector('#pkgdepslist')
const dependenceList = dependencies.querySelectorAll('li')

window.getDependecies = () => {
	let depsString = ''
	dependenceList.forEach(dep => {
		depsString += ` ${dep.children[0].innerText}`
	})
	
	console.log(depsString)
}