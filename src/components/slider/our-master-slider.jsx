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
function OurMasterSlider() {

    const our_classes = [
        {
            id: 1,
            image: "https://webdesign-finder.com/youko/wp-content/uploads/2018/01/team_1.jpg",
            title: "Traditional Martial Arts",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        },
        {
            id: 2,
            image: "https://webdesign-finder.com/youko/wp-content/uploads/2018/01/team_2.jpg",
            title: "Traditional Martial Arts",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        },
        {
            id: 3,
            image: "https://webdesign-finder.com/youko/wp-content/uploads/2018/01/team_3.jpg",
            title: "Traditional Martial Arts",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        },
    ]

    return (
        <div className="home-our-classes shadow-after-bg relative py-20 px-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className='z-10 relative text-white text-center mb-10'>
                    <p className='text-2xl uppercase font-medium'>Our <span className='text-red-500'>Instructors</span></p>
                    <div className='flex justify-center my-2'>
                        <hr className='header-line' />
                    </div>
                </div>
                <Slider {...settings} className='z-10 ourclasses-slick text-white'>
                    {our_classes?.map((item) => (
                        <div className='!w-[300px]' key={item.id}>
                            <Image
                                alt="NextUI hero Image"
                                src={item?.image}
                                width={300}
                                className='rounded-none'
                            />
                            <div className='bg-black p-7 text-center'>
                                <p>Traditional Martial Arts</p>
                                <p className='text-red-500 text-xs'>5:00-6:00 am / Alejandro Diaz </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default OurMasterSlider