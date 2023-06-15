import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePic from './Images/prof.png'
import { personalDetails } from './data';
import { Button, Typography } from '@material-tailwind/react';

function cv() {
    const myButton = document.getElementById('btnCV');

    myButton.addEventListener('click', function () {
        window.open('https://www.google.com')
    });
}

export default function About() {
    return (
        <section id="About" className="bg-black body-font border-1">
            {
                personalDetails.map((values) =>
                    <div className='containero mx-auto flex px-10 py-20 md:flex-row flex-col text-center'>
                        <div className='flex flex-col w-full mb-20 items-center'>
                            <h1 className='title-font font-semibold sm:text-4xl text-3xl mb-4 text-blue-500'>
                                <FontAwesomeIcon icon="info-circle" /> About Me

                            </h1>
                            <div className='flex flex-col w-full p-9 shadow bg-slate-600 rounded-lg items-center'>
                                <div className="rounded-full overflow-hidden w-60 h-60 mb-5 mt-5">
                                    <img
                                        src={profilePic}
                                        alt="Profile"
                                        className="w-full h-full object-fill"
                                    />
                                </div>
                                <div className=' space-x-2 mb-3'>
                                    <FontAwesomeIcon icon="person" />
                                    <span className='text-blue-gray-600'>Name: {values.Fullname}</span>
                                </div>
                                <div className='mb-3'>
                                    <p className='space-x-2'><FontAwesomeIcon icon="mail-bulk" /><span className='text-blue-gray-600'>Email: </span>
                                        <a className='hover:text-purple-400' href='mailto:mikhaelinramsaroop@gmail.com'>{values.Email}</a>
                                    </p>
                                </div>
                                <div className='space-x-2 mb-3'>
                                    <FontAwesomeIcon icon='info' />
                                    <span className='text-blue-gray-600 font-bold pt-4'>Description: </span>
                                    <p className='text-blue-gray-600 mt-5 mb-10 leading-relaxed'>{values.Description}</p>
                                </div>
                            </div>
                            <div className='space-x-10'>
                                <Button id='btnCV' onClick={cv}>Click Here to open my CV</Button>
                            </div>
                        </div>
                    </div>
                )
            }
        </section>
    );

}