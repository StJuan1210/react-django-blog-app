import { useEffect, useState } from "react";
import { useHistory } from  'react-router-dom';
import axiosInstance from "../AxiosSetUp";

const Create = () => {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();
	const [selectedImage, setSelectedImage] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsPending(true);
		axiosInstance.post(`blog/`, {
			title: title,
			body: body,
			cover: selectedImage,
		})
		.then(() => {
			setIsPending(false);
			history.push('/');
		});
	}

	useEffect(() => {
		if (!localStorage.getItem('username')) {history.push('/login')}
	}, [])

	return (
		<div className="create" onSubmit={handleSubmit}>
			<h2 className='stat-value centerText'>Create Article</h2>
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
					name="myImage"
					onChange={(e) => setSelectedImage(e.target.value)}
      				/>

				{ !isPending && <button className="btn btn-primary">Create Article</button> }
				{ isPending && <button className="btn loading">Adding Article...</button> }
			</form>
		</div>
	);
}
 
export default Create;