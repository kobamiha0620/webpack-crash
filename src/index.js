import _ from 'lodash'
import './style.css'
import './style.scss'
import logo from './logo.png'
//名前の競合を避けるため


function component(){
	const element = document.createElement('div');
	const array = ['Hello', 'webplackl', '!!!' ]
	element.innerHTML = _.join(array, ' ')
	return element;
}

document.body.appendChild(component());
document.body.classList.add('haikei');

const image = new Image();
image.src = logo
document.body.appendChild(image);
