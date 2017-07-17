import React from 'react'
import { render } from 'react-dom'
import { InsRoute } from './components/InsRoute'

window.React = React

render(
	<InsRoute />,
	document.getElementById('my-container')
)