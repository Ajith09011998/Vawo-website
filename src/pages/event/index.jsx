import { Image } from '@nextui-org/image'
import Flyer1 from '../../assets/Flyer/1.jpg'
import Flyer2 from '../../assets/Flyer/2.jpg'
import Flyer3 from '../../assets/Flyer/3.jpg'
import Flyer4 from '../../assets/Flyer/4.jpg'
import Flyer5 from '../../assets/Flyer/5.jpg'
import Marquee from "react-fast-marquee";

function Event() {

    const FLyers = [Flyer1, Flyer2, Flyer3, Flyer4, Flyer5]

    return (
        <div>
            <div className="banner-event h-96 bg-overlay-black flex items-center justify-center">
                <div
                    className='text-white text-center flex flex-col gap-5'>
                    <h1 className='text-4xl md:text-6xl font-bold italic'>
                        Events
                    </h1>
                </div>
            </div>
            <div className='max-w-max lg:max-w-6xl mx-auto px-4 py-10 z-[9] relative'>
                <Marquee className='overflow-hidden mb-10'>
                    <h1 className='text-xl'>Summer camp at Chennai and kanyakumari (Thaikalam).3 days Varma class at Chennai dated 21,22,23 of march</h1>
                </Marquee>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5">
                    {FLyers?.map((item, index) => (
                        <div key={index}>
                            <Image src={item} alt='flyer' />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Event