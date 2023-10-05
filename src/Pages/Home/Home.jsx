
import Header from "../Header/Header";
import Navabar from "../Navbar/Navabar";
import Lefside from "../Shared/Lefside";
import Rigsidenav from "../Shared/Rigsidenav";
import Breaking from "../Breaking/Breaking";
import { useLoaderData } from "react-router-dom";
import Newscard from "./News/Newscard";

const Home = () => {

    const news = useLoaderData()
    console.log(news)
    return (
        <div>
            <Header></Header>

            <Breaking></Breaking>
            <div className="mt-20">
            <Navabar></Navabar>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-4 mt-20 gap-6">
                <div className="border">
                    <Lefside></Lefside>
                </div>

                <div className="col-span-2 border">

                    {
                        news.map(anews=> <Newscard key={anews._id} news={anews}></Newscard>)
                    }
                </div>

                <div className="border">
                    <Rigsidenav></Rigsidenav>
                </div>
            </div>
        </div>
    );
};

export default Home;