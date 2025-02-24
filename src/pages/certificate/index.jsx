import { motion } from 'framer-motion';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import axios from 'axios';
import { useState } from 'react';
import { Image } from '@nextui-org/image';
import { Download } from 'lucide-react';

const Certificate = () => {
    const [certificateValue, setCertificateValue] = useState('');

    const [certificateList, setCertificateList] = useState([]);

    const searchApiCall = () => {
        axios.post(`https://apis.lemuriavawo.org/api.php?action=certificates&search=${certificateValue}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => {
                setCertificateList(response.data.data)
                console.log('Response:', response.data); // Handle successful response
            })
            .catch(error => {
                console.error('Error:', error.response ? error.response.data : error.message); // Handle error
            });
    }

    const downloadImage = async (cURL, CName) => {

        const imageUrl = `https://apis.lemuriavawo.org/download.php?path=${cURL}`;

        try {
            const response = await axios({
                url: imageUrl,
                method: 'GET',
                responseType: 'blob', // Important: for handling binary data (image)
            });

            // Create a link element to trigger the download
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${CName}.jpg`); // specify the download file name
            document.body.appendChild(link);
            link.click();

            // Clean up the link element
            document.body.removeChild(link);
        } catch (err) {
            console.error(err);
        }
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
                    <Input placeholder='Search LA Number' name='certificate_no' size='lg'
                        isClearable
                        onClear={
                            () => {
                                setCertificateValue('')
                            }
                        }
                        value={certificateValue}
                        onChange={(e) => setCertificateValue(e.target.value)}
                        classNames={{
                            label: "text-white",
                            inputWrapper: "bg-[#d0d0d0] p-0",
                            innerWrapper: "bg-[#d0d0d0] hover:[#d0d0d0] px-5",
                            input: "placeholder:text-gray-500",
                        }}
                        onKeyDown={(e) => {
                            e.key === 'Enter' && searchApiCall()
                        }}
                    />
                    <Button className='bg-black text-white rounded-none' size='lg'
                        isDisabled={certificateValue.length < 4 ? true : false}
                        onPress={() => {
                            searchApiCall()
                        }}>Search</Button>
                </div>
                <p className='text-xs text-gray-400'>Please enter at least 4 characters to search Eg:(1001)</p>

                {certificateList?.length === 0 ?
                    <div className='flex items-center justify-center'>
                        <div className='text-center mt-5'>
                            {/* <img src={EmptyImage} alt="not-found" width={400} /> */}
                            <p className='text-2xl font-bold'>Enter your LI number</p>
                        </div>
                    </div> :
                    <div className='grid grid-cols-2 gap-5 z-[9] py-10 relative'>
                        {certificateList?.map(cerList =>
                            cerList?.certificate_no.substr(cerList?.certificate_no.length - 1) !== ")" &&
                            <div className='relative' key={cerList?.id}>
                                <Image src={cerList.url} alt={cerList?.certificate_no} />
                                <Button isIconOnly className='absolute top-3 right-3 bg-white z-[99]' onPress={() => {
                                    downloadImage(cerList.url, cerList?.certificate_no)
                                }}>
                                    <Download />
                                </Button>
                            </div>
                        )}
                    </div>
                }

            </div>
        </div>
    )
}

export default Certificate