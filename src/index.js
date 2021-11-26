import _ from 'lodash'
//import * as utilities  from './utilities'
//名前の競合を避けるため

import LION from './utilities'

console.log(LION.say());

function component(){
	const element = document.createElement('div');
	const array = ['Hello', 'webplackl', '!!!' ]
	element.innerHTML = _.join(array, ' ')
	return element;
}

document.body.appendChild(component());


