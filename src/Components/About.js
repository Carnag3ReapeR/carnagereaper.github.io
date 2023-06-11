import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePic from './Images/prof.png'
import { personalDetails } from './data';
import { Button } from '@material-tailwind/react';

export default function About() {
    const myButton = document.getElementById('btnCV');

    myButton.addEventListener('click', function () {
        window.open('https://www.google.com')
    });

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
                                <span className='text-blue-gray-600'>Name: {values.Fullname}</span>
                                <p><span className='text-blue-gray-600'>Email: </span>
                                    <a className='hover:text-red-700' href='mailto:mikhaelinramsaroop@gmail.com'>{values.Email}</a>
                                </p>
                                <span className='text-blue-gray-600 font-bold pt-4'>Description: </span>
                                <p className='text-blue-gray-600 text-justify text-clip p-2'>{values.Description}</p>
                            </div>
                            <div className='space-x-10'>
                                <Button id='btnCV'>Click Here to open my CV</Button>
                            </div>

                        </div>

                    </div>
                )
            }
        </section>

    );

}