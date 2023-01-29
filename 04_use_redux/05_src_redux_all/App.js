import React, { Component } from 'react'
import CountContainer from './containers/count_container'

export default class App extends Component {
	render() {
		return (
			<div>
				{/* <CountContainer store={store}/> */}
				{/* 把store写到入口文件index.js中 */}
				<CountContainer />
			</div>
		)
	}
}