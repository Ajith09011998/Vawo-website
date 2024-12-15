import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Image } from "@nextui-org/image";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <ChevronRight color='gray' />,
    prevArrow: <ChevronLeft color='gray' />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }
    ]
};
function OurClassesSlider() {

    const our_classes = [
        {
            id: 1,
            image: "https://webdesign-finder.com/youko/wp-content/uploads/2018/02/img_25-600x390.jpg",
            title: "Traditional Martial Arts",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        },
        {
            id: 2,
            image: "https://webdesign-finder.com/youko/wp-content/uploads/2018/02/img_25-600x390.jpg",
            title: "Traditional Martial Arts",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        },
        {
            id: 3,
            image: "https://webdesign-finder.com/youko/wp-content/uploads/2018/02/img_25-600x390.jpg",
            title: "Traditional Martial Arts",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        },
    ]

    return (
        <div className="home-our-classes shadow-after-bg relative py-20 px-10 z-[9]">
            <div className="max-w-6xl mx-auto px-4">
                <div className='z-10 relative text-white text-center mb-10'>
                    <p className='text-2xl uppercase font-medium'>OUR <span className='text-red-500'>CLASSES</span></p>
                    <div className='flex justify-center my-2'>
                        <hr className='header-line' />
                    </div>
                </div>
                <Slider {...settings} className='z-10 ourclasses-slick text-white'>
                    {our_classes?.map((item) => (
                        <div className='!w-auto lg:!w-[300px]' key={item.id}>
                            <Image
                                alt="NextUI hero Image"
                                src="https://webdesign-finder.com/youko/wp-content/uploads/2018/02/img_25-600x390.jpg"
                                width={300}
                                classNames={{
                                    img: 'rounded-none w-full',
                                    wrapper: '!max-w-max'
                                }}
                            />
                            <div className='bg-black p-7 text-center'>
                                <p>Traditional Martial Arts</p>
                                <p className='text-red-500 text-xs'>5:00-6:00 am / Alejandro Diaz </p>
                                <p className='pt-3 text-gray-400 font-normal'>Filet mignon bresaola doner, buffalo pork belly meatball meatl swine sirloin.</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default OurClassesSlider