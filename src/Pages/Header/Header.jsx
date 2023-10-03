import logo from "../../assets/logo.png"
import moment from 'moment'

const Header = () => {
    return (
        <div className="text-center">
            <img className="w-[470px] mx-auto" src={logo} alt="" />
            <h1 className="my-3">Journalism Without Fear or Favour</h1>
           <p> {moment().format('dddd, MMMM D ,YYYY')}</p>
            
        </div>
    );
};

export default Header;