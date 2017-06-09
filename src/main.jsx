import 'babel-polyfill'
import 'main.scss'

import React from 'react'
import ReactDOM from 'react-dom'

const Main = () => (
	<div>
		<img src={require('img/logo.png')}/>
		<h1>Hello from DayOne Stack</h1>
	</div>
)

ReactDOM.render(<Main />, document.getElementById('main'))
