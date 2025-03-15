import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Image } from "@nextui-org/image";
import AdimuraiImage from "../../assets/our-class/adimurai.jpg";
import MallarKambamImage from "../../assets/our-class/mallar-kairu.jpg";
import MallarKairuImage from "../../assets/our-class/mallar-kambam.jpg";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();

    const our_classes = [
        {
            id: 1,
            image: AdimuraiImage,
            title: "ADIMURAI",
            slug: "adimurai",
            description: "Ancient Tamil Martial Art of Self-Defense and Varma Kalai Adimurai, one of the oldest martial arts of Tamil Nadu, is renowned for its focus on self- defense, striking techniques, and vital point attacks(Varma Kalai) ",
        },
        {
            id: 2,
            image: MallarKambamImage,
            title: "MALLAR KAYIRU",
            slug: "mallar_kayiru",
            description: "Mallar Kayiru, an ancient Tamil martial art, focuses on the use of ropes for combat, self-defense, and acrobatic techniques. This unique art form showcases agility, precision, and strength.",
        },
        {
            id: 3,
            image: MallarKairuImage,
            title: "MALLAR KAMBAM",
            slug: "mallar_kambam",
            description: "Mallar Kambam, a traditional Tamil martial art, focuses on pole gymnastics and acrobatics, combining strength, flexibility, and agility. Practiced on a vertical wooden pole.",
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
                        <div className='!w-auto lg:!w-[300px] !flex flex-col items-center cursor-pointer' key={item.id} onClick={() => navigate(`/our-classes?${item.slug}`)}>
                            <Image
                                alt="NextUI hero Image"
                                src={item.image}
                                width={300}
                                height={300}
                                classNames={{
                                    img: 'rounded-none w-full',
                                    wrapper: '!max-w-max'
                                }}
                            />
                            <div className="pt-5">
                                <p>{item.title}</p>
                                <p className='pt-3 text-gray-400 font-normal text-left'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default OurClassesSlider