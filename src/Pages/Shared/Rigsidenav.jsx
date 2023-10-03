import { FaGoogle,FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import q1 from '../../assets/qZone1.png'
import q2 from '../../assets/qZone2.png'
import q3 from '../../assets/qZone3.png'

const Rigsidenav = () => {
    return (
        <div>

            {/* login wtih part */}
            <div className='text-black p-5'>
                <h1 className='text-xl font-bold text-black'>Login With</h1>

                <Link className='flex items-center gap-3 border justify-center rounded-t-lg'>
                <FaGoogle></FaGoogle> <span>Login with Google</span>
                </Link>

                <Link className='flex items-center gap-3 border justify-center rounded-b-lg'>
                <FaGithub></FaGithub> <span>Login with Github</span>
                </Link>
               
            </div>


            {/* find us on */}

            <div className='text-black p-5'>
                <h1 className="text-2xl font-bold">Find Us on</h1>

                <Link className='flex items-center gap-3 border  rounded-t-lg p-3'>
                <FaFacebook></FaFacebook> <span>Facebook</span>
                </Link>

                <Link className='flex items-center gap-3 border-x  rounded-b-lg p-3'>
                <FaTwitter></FaTwitter> <span>Twitter</span>
                </Link>
                <Link className='flex items-center gap-3 border  rounded-b-lg p-3'>
                <FaInstagram></FaInstagram> <span>Instragram</span>
                </Link>
               
            </div>

            {/* Q ZOne */}


            <div className='bg-slate-200 p-5'>
                <h1 className="text-2xl font-bold">Q Zone</h1>

                <img src={q1} alt="" />
                <img src={q2} alt="" />
                <img src={q3} alt="" />
            </div>
            
        </div>
    );
};

export default Rigsidenav;