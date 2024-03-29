import React from 'react'


export const Navigation = (props) => {
	if (props.isSignedIn) {
		return (
			<nav style={ { display: 'flex', justifyContent: 'flex-end', } } >
				<p onClick={ () => props.onRouteChange('signout') } className='f3 link dim black underline pa4 pointer'>Sign Out</p>
			</nav>
		)

	} else {
		return (
			<nav style={ { display: 'flex', justifyContent: 'flex-end', } } >
				<p onClick={ () => props.onRouteChange('signin') } className='f3 link dim black underline pa4 pointer'>Sign In</p>
				<p onClick={ () => props.onRouteChange('register') } className='f3 link dim black underline pa4 pointer'>Register</p>
			</nav>
		)

	}
}
