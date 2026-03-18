import { Link } from "react-router-dom";

function Home(){
return(

<div>

<section className="agency-hero">

<div className="agency-hero-overlay"></div>

<div className="container text-center agency-hero-content">

<h1 className="display-1 fw-bold text-white">
KRAFT
</h1>

<p className="lead text-light">
We Craft Bold Digital Experiences & Creative Brand Identities
</p>

<Link 
to="/menu" 
className="btn btn-outline-light rounded-pill px-5 py-2 mt-3"
>
Explore Services
</Link>

</div>

</section>

</div>

)
}

export default Home