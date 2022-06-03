import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from  'react-router-dom';
import axiosInstance from "../AxiosSetUp";

const Update = () => {
	const { slug } = useParams();
	const [isLoading, setIsLoading] = useState(true)
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [user, setUser] = useState('')
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState('')
	const history = useHistory();
	const [cover, setCover] = useState(null);

	useEffect(() => {
		axiosInstance.get(`blog/${slug}/`)
		.then((res) => {
			setTitle(res.data.title)
			setBody(res.data.body)
			setUser(res.data.username)
			setCover(res.data.cover)
			setIsLoading(false)
		})
		.catch((error) => {
			if (error.response) {setError(error.response.data)}
			else {setError(error.message)}
			setIsLoading(false)
		});
	}, [])

	const handleSubmit = (e) => {	
		e.preventDefault();
		setIsPending(true);
		axiosInstance.put(`blog/${slug}/`, {
			title: title,
			body: body,
			cover: cover,
		})
		.then((res) => {
			setIsPending(false);
			history.push('/');
		});
	}

	const display = () => {
		if (user !== localStorage.getItem('username')) {
			return (
				<div className="not-found">
					<h2>403 Forbidden</h2>
					<p>Updating and deleting blogs is restricted to authors only.</p>
					<Link to='./'>Back to blog <b>'{title}'</b></Link>
				</div>
			)
		} else {
			return (
				<div className="create" onSubmit={handleSubmit}>
					<h2 className='stat-value centerText'>Update Article</h2>
					<form>

						<label className="label">
							<span class="label-text">Title</span>
						</label>
						<input
							type="text"
							required
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="input input-bordered w-full max-w-xs"
						/>

						<label className="label">
							<span class="label-text">Body:</span>
						</label>
						<textarea
							required
							rows='10'
							value={body}
							onChange={(e) => setBody(e.target.value)}
							className="textarea textarea-bordered h-24"
						></textarea>
						<label className="label">
							<span class="label-text">Image:</span>
						</label>
						<input
							type="text"
							value={cover}
							onChange={(e) => setCover(e.target.value)}
							className="input input-bordered w-full max-w-xs"
						/>

						{ !isPending && <button className="btn btn-primary">Update Article</button> }
						{ isPending && <button className="btn loading">Updating Article...</button> }
					</form>
				</div>
			)
		}
	}

	return isLoading ? (<div>Loading...</div>) : display()
}
 
export default Update;