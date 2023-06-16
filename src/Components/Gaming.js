import { gamingDetails } from "./data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography, Avatar } from '@material-tailwind/react';
import profilePic from './Images/prof.png'

export default function Gaming() {
    return (
        <section id="Gaming" className="bg-black border-blue-gray-700 border  body-font border-1">
            {
                gamingDetails.map((values) =>
                    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col text-center">
                        <div className='flex flex-col w-full mb-20 items-center'>
                            <Typography variant="h1" className="title-font font-semibold sm:text-4xl text-3xl mb-4 p-9 text-blue-500"><FontAwesomeIcon icon="gamepad" /> Gaming</Typography>
                            <Avatar
                                variant='circular'
                                alt='prof'
                                className='border-2 border-blue-800 w-60 h-60 object-fill'
                                src={profilePic}
                            />

                            <Typography variant="p" className="pt-5 flex flex-row">
                                <Typography variant="span" className="mb-3 text-blue-700">
                                    <FontAwesomeIcon icon="headset" />
                                </Typography>
                                <Typography variant="span" className="pl-2 mb-3 text-blue-gray-500">
                                    IGN: {values.IGN}
                                </Typography>
                            </Typography>
                        </div>
                    </div>
                )
            }
        </section>
    );
}