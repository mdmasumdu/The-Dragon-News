import { useParams } from "react-router-dom";
import Header from "../../Header/Header";
import Rigsidenav from "../../Shared/Rigsidenav";
import Navabar from "../../Navbar/Navabar";


const Dnews = () => {

    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navabar></Navabar>
            <div className="grid grid-cols-3">
                <div className="col-span-2">
                    <h1>{id}</h1>

                </div>
                <div>
                    <Rigsidenav></Rigsidenav>

                </div>
            </div>
        </div>
    );
};

export default Dnews;