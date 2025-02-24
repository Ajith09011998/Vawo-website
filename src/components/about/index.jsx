/* eslint-disable no-irregular-whitespace */
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
function AboutComponent() {
    return (
        <div className='h-auto lg:h-screen home-about flex items-center p-3'>
            <div className='max-w-6xl mx-auto px-4 flex lg:flex-row flex-col'>
                <div className='w-[50%]'>
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }} className='w-full lg:w-[50%] flex flex-col gap-5 text-white'>
                    <p className='text-2xl uppercase font-medium'>About <span className='text-red-500'>Our</span> ORGANIZATION</p>
                    <div>
                        <hr className='header-line' />
                    </div>
                    <p>
                        Lemuria Varmakalari Adimurai World Organization started as a training centre in 2013 intending to teach the martial arts of ancient Tamil people to the present generation.
                        Later registered as a foundation and created various training sites in villages, schools and colleges.Lemuria Varmakalari Adimurai World Organization is travelling through the Internet as a martial arts training centre and as an artistic group today in about 28 countries in the world (Through online live classes).
                    </p>
                    <p>
                        By teaching the students this ancient Tamil arts we also provide them accommodation and free education in schools and colleges.
                        <Link className='text-red-500 font-medium cursor-pointer ml-2' to="/about">Read More</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutComponent