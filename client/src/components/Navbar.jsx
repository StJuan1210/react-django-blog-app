import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import axiosInstance from '../AxiosSetUp';

const Navbar = () => {
	const history = useHistory();
	let temp = ''
	const [username, setUsername] = useState(temp)

	useEffect(() => {
		localStorage.getItem('username') ? temp = localStorage.getItem('username') : temp = ''
		setUsername(temp)
	}, [])

	const handleLogout = () => {
		axiosInstance.post('user/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token')
		}).then(() => {
			localStorage.removeItem('access_token')
			localStorage.removeItem('refresh_token')
			localStorage.removeItem('username')
			setUsername('')
			history.push('/')
		})
	}

	return (
		<div className="navbar bg-base-100">
			<div class="flex-1">
			<h1 className='stat-value ml-2'><Link to="/">FATMUG</Link></h1>
			</div>
			<div class="flex-none">
			<ul class="menu menu-horizontal p-0 ml-5">
				<li>{username && <p>Welcome, {username}</p>}</li>
			</ul>
		</div>
		<div class="navbar bg-base-100">
			
			{!username&&<div class="navright">
				<a class="btn btn-outline btn-primary">{<Link to="/login">Login</Link>}</a>
			</div>}
			{!username&&<div class="ml-5">
				<a class="btn btn-outline btn-primary"><Link to='/register'>Register</Link></a>
			</div>}
			{username&&<div class="navrightonlog">
				<a class="btn btn-outline btn-primary">{<Link to="/myblogs">My Articles</Link>}</a>
				</div>}
			{username&&<div onClick={handleLogout} class="ml-5">
				<a class="btn btn-outline btn-primary">Logout</a>
			</div>}
			<div class="ml-5">
				<a class="btn"><Link to="/create">New Article</Link></a>
			</div>
			</div>
		</div>
	);
}

export default Navbar;