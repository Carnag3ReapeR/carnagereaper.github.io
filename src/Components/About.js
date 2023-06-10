import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePic from './Images/prof.png'
import { personalDetails } from './data';

export default function About() {
    return (
        <section id="About" className="bg-black body-font border-1">
            {
                personalDetails.map((values) =>
                    <div className='containero mx-auto flex px-10 py-20 md:flex-row flex-col text-center'>
                        <div className='flex flex-col w-full mb-20 items-center'>
                            <h1 className='title-font font-semibold sm:text-4xl text-3xl mb-4 text-teal-400'>
                                <FontAwesomeIcon icon="info-circle" /> About Me

                            </h1>
                            <div className='flex flex-col w-full p-9 shadow bg-slate-600 rounded-lg items-center'>
                                <div className="rounded-full overflow-hidden w-60 h-60 mb-4 mt-8">
                                    <img
                                        src={profilePic}
                                        alt="Profile"
                                        className="w-full h-full object-fill"
                                    />
                                </div>
                                <br />
                                <span className='text-slate-950'>Name:</span>
                                <span className='text-slate-950'>{values.Fullname}</span>
                                <span className='text-slate-950'>Email: </span>
                                <br />
                                <a className='hover:text-red-700' href='mailto:mikhaelinramsaroop@gmail.com'>{values.Email}</a>
                                <br />
                                <br />
                                <span className='text-slate-950 font-bold'>Description: </span>
                                <p className='text-slate-950 text-justify text-clip p-3'>{values.Description}</p>
                            </div>
                        </div>

                    </div>
                )
            }
        </section>
    );
}