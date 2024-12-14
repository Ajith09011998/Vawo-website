import { motion } from 'framer-motion'
function AboutComponent() {
    return (
        <div className='h-screen home-about flex items-center'>
            <div className='max-w-6xl mx-auto px-4 flex'>
                <div className='w-[50%]'>
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }} className='w-[50%] flex flex-col gap-5 text-white'>
                    <p className='text-2xl uppercase font-medium'>About <span className='text-red-500'>Fight</span> school</p>
                    <div>
                        <hr className='header-line' />
                    </div>
                    <p>
                        Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.
                    </p>
                    <p>
                        We teach martial arts because we love it — not because we want to make money
                        on you. Unlike other martial arts schools, we do not require you to sign long
                        term contracts. You just pay one low monthly fee for your martial arts and
                        self defense classes at the beginning of each month. Many martial arts...
                        <span className='text-red-500 font-medium'>Read More</span>
                    </p>
                    <div>
                        <p>Aiden Richards</p>
                        <p className='text-red-500 font-medium text-xs'>Director / Instructor</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutComponent