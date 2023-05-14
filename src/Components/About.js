import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePic from './Images/prof.png'
import { personalDetails } from './data';

export default function About(){
    return(
        <section id="About" className="text-blue-400 bg-black body-font border-2">
            {
              personalDetails.map((values) =>
                <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
                    <div className='flex flex-col w-full mb-20'>
                        <h1 className='title-font font-semibold sm:text-4xl text-3xl mb-4 text-teal-400'>
                        <FontAwesomeIcon icon="info-circle" /> About Me
                        </h1>
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='flex'>
                                <img src={profilePic} className='object-contain rounded-full'></img>
                            </div>
                            <div>2</div>
                        </div>
                    </div>
                    
                </div>
              )
            }
        </section>
    );
}