import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Image } from "@nextui-org/image";
import Master1 from "../../assets/master/rishanth.jpg";
import Master2 from "../../assets/master/Ajay.jpg";
import Master3 from "../../assets/master/Anandhamurugan.jpg";
import Master4 from "../../assets/master/srikanth.jpg";
import Master5 from "../../assets/master/Gomathi_sankari.jpg";


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
            image: Master1,
            title: "Reshanth",
        },
        {
            id: 2,
            image: Master2,
            title: "Ajay",
        },
        {
            id: 3,
            image: Master3,
            title: "Anandhamurugan",
        },
        {
            id: 4,
            image: Master4,
            title: "Srikanth",
        }, {
            id: 5,
            image: Master5,
            title: "Gomathi Sankari",
        }
    ]

    return (
        <div className="home-our-classes shadow-after-bg relative py-20 px-10 z-[9]">
            <div className="max-w-6xl mx-auto px-4">
                <div className='z-10 relative text-white text-center mb-10'>
                    <p className='text-2xl uppercase font-medium'>Our <span className='text-red-500'>Masters</span></p>
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
                                height={300}
                                className='rounded-none object-contain'
                            />
                            <div className='bg-black p-7 text-center'>
                                <p>{item?.title}</p>
                                <p className='text-red-500 text-sm font-bold'>Master </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default OurMasterSlider