import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Breaking = () => {
    return (
        <div className="flex bg-slate-200 text-black">
            <button className="btn btn-secondary">Breaking</button>
            <Marquee speed={100} pauseOnHover={true}>
  I can be a React component, multiple React components, or just some text.
  <Link className="mr-5"> I can be a React component, multiple React components, or just some text....</Link>
  <Link className="mr-5 "> I can be a React component, multiple React components, or just some text.....</Link>
  <Link className="mr-5"> I can be a React component, multiple React components, or just some text.....</Link>
</Marquee>
            
        </div>
    );
};

export default Breaking;