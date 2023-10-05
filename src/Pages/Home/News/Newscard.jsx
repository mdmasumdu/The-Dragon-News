/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Newscard = ({news}) => {
    return (
        <div className="card  mb-5 shadow-xl text-black p-6">
        <h2 className="card-title">{news.title}</h2>

  <figure><img src={news.image_url} alt="Shoes" /></figure>
  <div className="card-body">
   {
    news.details.length > 200 ?  <p>{news.details.slice(0,200)} <Link className="text-blue-700" to={`/news/${news._id}`}>Read more...</Link></p> : <p>{news.details}</p>
   }
     
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Newscard;