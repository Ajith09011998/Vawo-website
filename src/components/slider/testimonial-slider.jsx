import Slider from "react-slick";
import { ChevronLeft, ChevronRight, QuoteIcon } from 'lucide-react';

const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <ChevronRight color='gray' />,
    prevArrow: <ChevronLeft color='gray' />
};

function TestimonialSLider() {

    const testimonials = [
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
        <div className="bg-[#13182a] relative py-20 px-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className='z-10 relative text-white text-center mb-10'>
                    <p className='text-2xl uppercase font-medium'>What <span className='text-red-500'>Clients</span> say
                    </p>
                    <div className='flex justify-center my-2'>
                        <hr className='header-line' />
                    </div>
                </div>
                <Slider {...settings} className='z-10 ourclasses-slick text-white'>
                    {testimonials?.map((item) => (
                        <div className="max-w-sm text-left" key={item.id}>
                            <QuoteIcon color='white' />
                            <h5 className="text-xl font-semibold text-white my-4">Outstanding Support for Scaling</h5>
                            <p className="text-lg text-gray-300 mb-6">“We highly recommend Saturn for their exceptional support in helping our startup scale.”</p>
                            <div className="flex items-center">
                                <img className="block w-12 h-12 rounded-full" src="https://themeim.com/demo/sword/assets/images/trainer/trainer-8.png" alt />
                                <div className="ml-4">
                                    <span className="block font-semibold text-white leading-none mb-1">John Doe</span>
                                    <span className="block text-sm text-gray-400">Founder of Saturn</span>
                                </div>
                            </div>
                        </div>
                    ))}

                </Slider>
            </div>
        </div>
    )
}

export default TestimonialSLider