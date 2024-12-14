import { motion } from 'framer-motion';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';

const Certificate = () => {
    return (
        <div>
            {/* about banner */}
            <div className="banner h-96 bg-overlay-black flex items-center justify-center">
                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='text-white text-center flex flex-col gap-5'>
                    <h1 className='text-6xl font-bold italic'>
                        Certificate
                    </h1>
                </motion.div>
            </div>
            {/* Certificate */}
            <div className='max-w-6xl mx-auto px-4 py-10'>
                <div className='flex'>
                    <Input placeholder='Search LI Number' name='name' size='lg'
                        classNames={{
                            label: "text-white",
                            inputWrapper: "bg-[#d0d0d0] p-0",
                            innerWrapper: "bg-[#d0d0d0] hover:[#d0d0d0] px-5",
                            input: "placeholder:text-gray-500",
                        }}
                    />
                    <Button className='bg-gray-400 text-gray-600 rounded-none' size='lg'>Search</Button>
                </div>
            </div>
        </div>
    )
}

export default Certificate