/* eslint-disable no-irregular-whitespace */
import { Image } from '@nextui-org/image';
import { motion } from 'framer-motion';
import ButtonComponent from '../../components/ui/button';
import AboutImage from '../../assets/image/5.png';
import AdimuraiImage from '../../assets/image/1.png';

import Founder1 from '../../assets/master/Selvan.jpg';
import Founder2 from '../../assets/master/raja.jpg';
import Founder3 from '../../assets/master/Shanmugamurthy.jpg';

import { Link } from 'react-router-dom';
import GoogleMapWithAreas from '../../components/map/GoogleMapWithAreas';
import OurMasterSlider from '../../components/slider/our-master-slider';
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";

const About = () => {

    const ourclassData = [
        { "id": 1, "name": "Adimurai", desc: "Ancient Tamil Martial Art of Self-Defense and Varma Kalai", slug: "adimurai" },
        { "id": 2, "name": "Silambam", desc: "Traditional Tamil Martial Art of Weapon Combat", slug: "silambam" },
        { "id": 3, "name": "Mallar kambam", slug: "mallar_kambam", desc: "Ancient Tamil Martial Art of Pole Gymnastics" },
        { "id": 4, "name": "Mallar kaiyru", slug: "mallar_kayiru", desc: "Traditional Rope-Based Martial Art of Tamil Nadu" },
        { "id": 5, "name": "Parai isai", slug: "parai_isai", desc: "Traditional Tamil Percussion Art" },
        { "id": 6, "name": "Oyil dance", slug: "oyil_dance", desc: "Traditional Folk Dance of Tamil Nadu" },
        { "id": 7, "name": "Gymnastics", slug: "gymnastics", desc: "Ancient Fitness and Performance Art of Tamil Nadu" },
        { "id": 8, "name": "Varmakalari", slug: "varmakalai", desc: "Ancient Tamil Martial Art of Vital Point Combat" },
        { "id": 9, "name": "Lesim", slug: "lesim", desc: "Traditional Tamil Art of Rhythmic Fitness and Dance" },
        { "id": 10, "name": "Traditional dances", slug: "traditional_dance", desc: "A Celebration of Culture and Heritage" },
        { "id": 11, "name": "Puppet Show", slug: "puppet_show", desc: "Traditional Tamil Art of Storytelling" },
        { "id": 12, "name": "Adimurai yoga", slug: "adimurai_yoga", desc: "The Fusion of Tamil Martial Art and Ancient Yoga" },
        { "id": 13, "name": "Varma", slug: "varma", desc: "Ancient Tamil Art of Vital Point Science" },
        { "id": 14, "name": "Mallusandai", slug: "mallu_sandai", desc: "Traditional Tamil Grappling Martial Art" },
        { "id": 15, "name": "Siddha Medicine", slug: "siddha_medicine", desc: "The Ancient Healing System of Tamil Martial Arts" },
        { "id": 16, "name": "Street plays", slug: "street_plays", desc: "Vibrant Tamil Art of Storytelling and Social Awareness" },
        { "id": 17, "name": "Karakaatam", slug: "karakaatam", desc: "Traditional Tamil Folk Dance of Grace and Balance" },
        { "id": 19, "name": "Maankombu dance", slug: "maankombu_dance", desc: "Traditional Tamil Folk Dance Inspired by Deer Movements" },
        { "id": 20, "name": "Kummi dance", slug: "kummi_dance", desc: "Traditional Tamil Folk Dance of Rhythm and Unity" },
    ]

    return (
        <div>
            {/* about banner */}
            <div className="aboutus-banner h-96 bg-overlay-black flex items-center justify-center">
                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='text-white text-center flex flex-col gap-5'>
                    <h1 className='text-4xl md:text-6xl font-bold italic'>
                        About Us
                    </h1>
                </motion.div>
            </div>
            {/* about */}
            <div className='max-w-6xl mx-auto px-4 pt-5 grid grid-cols-1 md:grid-cols-2 gap-5 items-center z-[9] relative'>
                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }} className='flex flex-col gap-5 text-black'>
                    <div>
                        <p className='text-3xl uppercase font-medium'>About <span className='text-red-500'>Our</span> ORGANIZATION</p>
                        <div>
                            <hr className='header-line' />
                        </div>
                    </div>

                    <p>
                        Lemuria Varmakalari Adimurai World Organization started as a training centre in 2013 intending to teach the martial arts of ancient Tamil people to the present generation.
                        Later registered as a foundation and created various training sites in villages, schools and colleges.Lemuria Varmakalari Adimurai World Organization is travelling through the Internet as a martial arts training centre and as an artistic group today in about 28 countries in the world (Through online live classes).
                    </p>
                    <p>
                        By teaching the students this ancient Tamil arts we also provide them accommodation and free education in schools and colleges.                    </p>
                    <p>
                        The directors of Lemuria Varmakalari Adimurai World Organization are Ramaswamy Selvan, Mathurananthan Ramasamy, Vaigundaraja Rethnamani, Nachiappan Manivannan, Navaneethakrishnan Gurunathan, and Ragupathy Rajendran.                    </p>
                </motion.div>
                <div>
                    <Image src={AboutImage} alt='AboutImage' />
                </div>
            </div>
            {/*  */}

            <div className='max-w-6xl mx-auto px-4 pb-5 z-[9] relative'>
                <p className='text-3xl uppercase font-medium mb-5 text-center'>Our <span className='text-red-500'>Directors</span></p>
                <div className='flex items-center justify-center'>
                    <hr className='header-line' />
                </div>
                <div className='flex items-center justify-center py-5'>
                    <div>
                        <Image src={Founder1} alt='Founder1' className='size-72 object-contain' />
                        <p className='font-semibold text-lg text-center py-2'>Ramaswamy Selvan</p>
                        <p className='font-semibold text-sm text-center'>Director</p>
                    </div>
                    <div>
                        <Image src={Founder2} alt='Founder2' className='size-72 object-contain' />
                        <p className='font-semibold text-lg text-center py-2'>Vaigunda Raja</p>
                        <p className='font-semibold text-sm text-center'>Director</p>
                    </div>
                    <div>
                        <Image src={Founder3} alt='Founder3' className='size-72 object-contain' />
                        <p className='font-semibold text-lg text-center py-2'>Shanmugamurthy Lakshmanan (Shan)</p>
                        <p className='font-semibold text-sm text-center'>Vice Chancellor of the Siddha-Vetha Multiversity</p>
                    </div>
                </div>
            </div>

            <div className='max-w-6xl mx-auto px-4 pb-5'>
                <p className='text-3xl uppercase font-medium mb-5 text-center'>Our <span className='text-red-500'>Classes</span></p>
                <div className='flex items-center justify-center'>
                    <hr className='header-line' />
                </div>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-5 my-10 relative z-[9]'>
                    {ourclassData?.map((data) =>
                        <Popover placement="bottom" showArrow={true} key={data?.id}>
                            <PopoverTrigger>
                                <div className="relative group bg-gray-200 shadow-2xl p-5 text-center text-lg font-bold flex items-center
                         justify-center overflow-hidden cursor-pointer">
                                    <div className="absolute inset-0 bg-gradient-to-r from-black to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-center z-0"></div>
                                    <div className="relative z-10 text-gray-800 group-hover:text-white">
                                        {data?.name}
                                    </div>
                                </div>
                            </PopoverTrigger>
                            <PopoverContent className='w-60'>
                                <div className="px-1 py-2">
                                    <div className="text-small font-bold">{data?.name}</div>
                                    <div className="text-tiny">{data?.desc}</div>
                                    <Link className='text-xs font-bold' to={`/our-classes?${data?.slug}`}>Read More</Link>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )}
                </div>
            </div>

            <OurMasterSlider />

            {/* varmakali  */}

            <div className='max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-5 items-center z-[9] relative'>
                <div>
                    <Image src={AdimuraiImage} alt='AdimuraiImage' />
                </div>
                <div className='flex flex-col gap-5 text-black'>
                    <div className='animate-fade-in'>
                        <p className='text-3xl uppercase font-medium'>
                            diploma<span className='text-red-500'>course</span>
                        </p>
                        <div>
                            <hr className='header-line' />
                        </div>
                    </div>

                    <p>
                        A one-year degree training program is offered along with formal syllabus.. At the end of the training, a certificate and a job placement will be provided.
                    </p>
                    <p>
                        lemuria varmakalari Adimurai world organization offers a one-year certificate program as Adimurai art.
                    </p>
                    <p>
                        A learning opportunity to continue work education while learning work and arts after graduation.
                    </p>
                    <p>
                        Age Limit : Everyone from 15 years to 60 years can learn this art with food and accommodation facility.
                    </p>
                </div>


            </div>

            <div className='max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-5 z-[9] relative'>
                <div>
                    <p className='text-2xl font-bold mb-3'>Online class</p>
                    <p>
                        This class is conducted online. More than 3500 students have been trained in the last 3 years. After completion of each phase of training courses, the students will be given a certificate for passing the exam
                    </p>
                </div>
                <div>
                    <p className='text-2xl font-bold mb-3'>Ground class</p>
                    <p>
                        Ground class classes are held at a total of 70 locations by Lemuria. At the training grounds and teachers visiting the students at the grounds set ups in rural areas. After the completion of each phase of training courses, the students will be provided by certificates and belts after passing the exam                    </p>
                </div>
                <div>
                    <p className='text-2xl font-bold mb-3'>School and college classes</p>
                    <p>
                        Teachers of Lemuria will go directly to schools and colleges to give training according to the school schedule. After the completion of each phase of training courses, the students will be given a certificate for passing the examination.                    </p>
                </div>
            </div>

            <div className='max-w-6xl mx-auto px-4 py-10 z-[9] relative'>
                <p className='text-2xl font-bold mb-10 text-center'>Our Organization</p>
                <GoogleMapWithAreas />
            </div>


            {/* Donate now */}
            <div className='bg-[#13182a] text-white px-4 py-20'>
                <div className='max-w-6xl mx-auto flex flex-col gap-5 items-center  text-center'>
                    <p className='text-2xl uppercase font-medium'>DONATE <span className='text-red-500'> Now</span></p>
                    <div>
                        <hr className='header-line' />
                    </div>
                    <p>Pig tongue chicken pork loin, porchetta drumstick frankfurter burgdoggen ham <br />
                        jowl pork belly meatball t-bone beef ribs spare ribs.
                    </p>
                    <ButtonComponent variant="fill" className='bg-red-700 rounded-full'>
                        Donate Now
                    </ButtonComponent>
                </div>
            </div>
        </div>
    )
}

export default About