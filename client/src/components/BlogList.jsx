import { Link } from "react-router-dom";

const BlogList = ({blogs}) => {

	return (
		<div className="blog-list">
			<div style={{display:'flex', justifyContent:'space-between'}}>
			</div>
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.slug}>
					<Link to={`/blog/${blog.slug}`}>
						<img className="imgHome" src={blog.cover}alt="" />
						<h2 className="countdown text-3xl mt-5">{ blog.title }</h2>
						<p className="text-xl text-bold">Written by { blog.username }</p>
						<p className="mt-1">{ blog.body.slice(0,250) } ... <b>Read More</b></p>
						<div class="divider"></div> 
					</Link>
				</div>
			))}
		</div>
	);
}
 
export default BlogList;