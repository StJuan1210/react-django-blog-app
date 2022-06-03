import { useEffect, useState } from 'react';
import axiosInstance from '../AxiosSetUp';
import { Link } from "react-router-dom";



const BlogShow = ({blogs, uname}) => {
    return (
		<div className="blog-list">
			<div style={{display:'flex', justifyContent:'space-between'}}>
			</div>
			{blogs.map((blog) => {
                if(blog.username===uname){
                return(
				<div className="blog-preview" key={blog.slug}>
					<Link to={`/blog/${blog.slug}`}>
						<h2 className="countdown text-3xl">{ blog.title }</h2>
						<p>Written by, { blog.username }</p>
					</Link>
				</div>
			)}
            else {
                return(
                    <></>
                )
            }
            
            })}
		</div>
	);
}
 

const MyBlogs = () => {
    let temp = ''
    const [username, setUsername] = useState(temp)
	const [isLoading, setIsLoading] = useState(true)
	const [blogs, setBlogs] = useState('')
	const [error, setError] = useState('')

    useEffect(() => {
		localStorage.getItem('username') ? temp = localStorage.getItem('username') : temp = ''
		setUsername(temp)
	}, [])

	useEffect(() => {
		axiosInstance.get(`blog/`)
		.then((res) => {
			setBlogs(res.data)
			setIsLoading(false)
		})
		.catch((error) => {
			if (error.response) {setError(error.response.data)}
			else {setError(error.message)}
			setIsLoading(false)
		});
	}, [])

	return (
		<div className="home">
            <div className="blog-list">
				<h2 className='stat-value centerText'>Your Articles</h2>
			    <div style={{display:'flex', justifyContent:'space-between'}}>
			    </div>
                {isLoading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {blogs && <BlogShow blogs={blogs} uname={username} />}
		</div>
        </div>
	);
}
 
export default MyBlogs;