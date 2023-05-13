import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePic from './Images/prof.png'
import { personalDetails } from './data';

export default function About(){
    return(
        <section id="About" className="text-gray-400 bg-gray-900 body-font">
            {
              personalDetails.map((values) =>
                <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
                    <div className='flex flex-col w-full mb-20'>
                        <FontAwesomeIcon icon={["fas", "github"]}></FontAwesomeIcon>
                        <h1 className='title-font font-semibold sm:text-4xl text-3xl mb-4 text-teal-400'>
                            About Me
                        </h1>

                    </div>
                    
                </div>
              )
            }
        </section>
    );
}