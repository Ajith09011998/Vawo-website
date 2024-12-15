import { motion } from 'framer-motion';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import axios from 'axios';
import { useState } from 'react';

const Certificate = () => {
    const [certificateValue, setCertificateValue] = useState('');
    const searchApiCall = () => {
        axios.post(`https://apis.lemuriavawo.org/api.php?action=certificates&search=${certificateValue}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => {
                console.log('Response:', response.data); // Handle successful response
            })
            .catch(error => {
                console.error('Error:', error.response ? error.response.data : error.message); // Handle error
            });
    }
    return (
        <div>
            {/* about banner */}
            <div className="banner h-96 bg-overlay-black flex items-center justify-center">
                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='text-white text-center flex flex-col gap-5'>
                    <h1 className='text-4xl md:text-6xl font-bold italic'>
                        Certificate
                    </h1>
                </motion.div>
            </div>
            {/* Certificate */}
            <div className='max-w-max lg:max-w-6xl mx-auto px-4 py-10'>
                <div className='flex'>
                    <Input placeholder='Search LI Number' name='certificate_no' size='lg'
                        value={certificateValue}
                        onChange={(e) => setCertificateValue(e.target.value)}
                        classNames={{
                            label: "text-white",
                            inputWrapper: "bg-[#d0d0d0] p-0",
                            innerWrapper: "bg-[#d0d0d0] hover:[#d0d0d0] px-5",
                            input: "placeholder:text-gray-500",
                        }}
                    />
                    <Button className='bg-gray-400 text-gray-600 rounded-none' size='lg' onClick={() => {
                        searchApiCall()
                    }}>Search</Button>
                </div>
            </div>
        </div>
    )
}

export default Certificate