import React from 'react';
import teamMember1 from '../../assets/images/team/1.jpg';
import teamMember2 from '../../assets/images/team/2.jpg';
import teamMember3 from '../../assets/images/team/3.jpg';
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import linkedin from '../../assets/icons/linkedin.png';
import twitter from '../../assets/icons/twitter.png';

const Team = () => {
    return (
        <div id='team' className='mb-10 lg:mb-32'>
            <div className='text-center'>
                <p className='text-primary text-xl font-semibold'>Major Team Members</p>
                <h1 className='text-4xl font-bold my-4'>Meet Our Team</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised<br />words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-28 py-12'>
                <div className="card mx-auto border">
                    <figure className="px-5 pt-5">
                        <img src={teamMember1} alt="Mr. Alan Fader" className="rounded-xl h-52 w-80" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-bold">Mr. Alan Fader</h2>
                        <p className='text-xl font-semibold'>Tire Expert</p>
                        <div className='flex items-center justify-around mt-3'>
                            <a target='blank' href='https://web.facebook.com/profile.php?id=100083966059702'><img src={facebook} alt='social link'></img></a>

                            <a target='blank' href='https://twitter.com/'><img src={twitter} alt='social link'></img></a>
                            <a target='blank' href='https://www.instagram.com/'><img src={instagram} alt='social link'></img></a>
                            <a target='blank' href='https://www.linkedin.com/in/adib-chowdhury-73b301225/'><img src={linkedin} alt='social link'></img></a>
                        </div>
                    </div>
                </div>
                <div className="card mx-auto border">
                    <figure className="px-5 pt-5">
                        <img src={teamMember3} alt="Chowdhury shaheb" className="rounded-xl h-52 w-80" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-bold">Chowdhury shaheb</h2>
                        <p className='text-xl font-semibold'>Electrical Engineer</p>
                        <div className='flex items-center justify-around mt-3'>
                            <a target='blank' href='https://web.facebook.com/profile.php?id=100083966059702'><img src={facebook} alt='social link'></img></a>

                            <a target='blank' href='https://twitter.com/'><img src={twitter} alt='social link'></img></a>
                            <a target='blank' href='https://www.instagram.com/'><img src={instagram} alt='social link'></img></a>
                            <a target='blank' href='https://www.linkedin.com/in/adib-chowdhury-73b301225/'><img src={linkedin} alt='social link'></img></a>
                        </div>
                    </div>
                </div>
                <div className="card mx-auto border">
                    <figure className="px-5 pt-5">
                        <img src={teamMember2} alt="Adib Khan" className="rounded-xl h-52 w-80" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-bold">Adib Khan</h2>
                        <p className='text-xl font-semibold'>Engine Expert</p>
                        <div className='flex items-center justify-around mt-3'>
                            <a target='blank' href='https://web.facebook.com/profile.php?id=100083966059702'><img src={facebook} alt='social link'></img></a>

                            <a target='blank' href='https://twitter.com/'><img src={twitter} alt='social link'></img></a>
                            <a target='blank' href='https://www.instagram.com/'><img src={instagram} alt='social link'></img></a>
                            <a target='blank' href='https://www.linkedin.com/in/adib-chowdhury-73b301225/'><img src={linkedin} alt='social link'></img></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;