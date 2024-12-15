import { Button } from '@nextui-org/button'
import { Input, Textarea } from '@nextui-org/input'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
function ContactUs() {
    const branches = [
        {
            id: 1,
            name: 'New York Office',
            address: '123 Broadway, New York, NY 10001',
            phone: '+1 (212) 555-1234',
            email: 'newyork@example.com'
        },
        {
            id: 2,
            name: 'Los Angeles Office',
            address: '456 Hollywood Blvd, Los Angeles, CA 90028',
            phone: '+1 (323) 555-5678',
            email: 'losangeles@example.com'
        },
        {
            id: 3,
            name: 'Chicago Office',
            address: '789 Michigan Ave, Chicago, IL 60611',
            phone: '+1 (312) 555-9012',
            email: 'chicago@example.com'
        }
    ]
    return (
        <div>
            {/* contact us banner */}
            <div className="banner h-96 bg-overlay-black flex items-center justify-center">
                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='text-white text-center flex flex-col gap-5'>
                    <h1 className='text-4xl md:text-6xl font-bold italic'>
                        Contact Us
                    </h1>
                </motion.div>
            </div>
            {/* contact us form */}
            <div className='bg-[#13182a]'>
                <div className='max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='col-span-2 mb-5'>
                            <p className='text-2xl uppercase font-medium text-white'>Contact <span className='text-red-500'> Form</span></p>
                            <div>
                                <hr className='header-line' />
                            </div>
                        </div>
                        <Input placeholder='Name' name='name' size='lg'
                            classNames={{
                                label: "text-white",
                                inputWrapper: "bg-[#0a0d1b] p-0",
                                innerWrapper: "bg-[#0a0d1b] hover:[#0a0d1b] px-5",
                                input: "placeholder:text-gray-500 !text-white",
                            }}
                        />
                        <Input placeholder='Subject' name='subject' size='lg'
                            classNames={{
                                label: "text-white",
                                inputWrapper: "bg-[#0a0d1b] p-0",
                                innerWrapper: "bg-[#0a0d1b] hover:[#0a0d1b] px-5",
                                input: "placeholder:text-gray-500 !text-white",
                            }}
                        />
                        <Input placeholder='Email' name='email' size='lg'
                            classNames={{
                                label: "text-white",
                                inputWrapper: "bg-[#0a0d1b] p-0",
                                innerWrapper: "bg-[#0a0d1b] hover:[#0a0d1b] px-5",
                                input: "placeholder:text-gray-500 !text-white",
                            }}
                        />
                        <Input placeholder='Phone' name='phone' type='number' size='lg'
                            classNames={{
                                label: "text-white",
                                inputWrapper: "bg-[#0a0d1b] p-0",
                                innerWrapper: "bg-[#0a0d1b] hover:[#0a0d1b] px-5",
                                input: "placeholder:text-gray-500 !text-white",
                            }}
                        />
                        <div className='col-span-2'>
                            <Textarea placeholder='Subject' name='subject' size='lg'
                                classNames={{
                                    label: "text-white",

                                    inputWrapper: "bg-[#0a0d1b] p-0",
                                    innerWrapper: "bg-[#0a0d1b] hover:[#0a0d1b] p-5",
                                    input: "placeholder:text-gray-500 !text-white",
                                }}
                            />
                        </div>
                        <div className='col-span-2 mt-5'>
                            <Button size='lg' className='w-full rounded-none bg-red-700 text-white'>Submit</Button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='text-2xl uppercase font-medium text-white'>OUR <span className='text-red-500'> BRANCHES</span></p>
                            <div>
                                <hr className='header-line' />
                            </div>
                        </div>
                        <div className="space-y-6 mt-10">
                            {branches.map((branch) => (
                                <div key={branch.id} className="bg-[#0a0d1b] p-4 text-white">
                                    <h3 className="text-xl font-semibold mb-2">{branch.name}</h3>
                                    <div className="space-y-2">
                                        <p className="flex items-center">
                                            <MapPin className="mr-2 h-5 w-5 text-gray-600" />
                                            {branch.address}
                                        </p>
                                        <p className="flex items-center">
                                            <Phone className="mr-2 h-5 w-5 text-gray-600" />
                                            {branch.phone}
                                        </p>
                                        <p className="flex items-center">
                                            <Mail className="mr-2 h-5 w-5 text-gray-600" />
                                            {branch.email}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* map */}
            <div style={{ width: "100%" }}>
                <iframe
                    title="Lemuria Varmakalari Adimurai World Organization Map"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lemuria%20Varmakalari%20Adimurai%20World%20Organization+(Lemuria%20Varmakalari%20Adimurai%20World%20Organization)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                    <a href="https://www.gps.ie/">gps vehicle tracker</a>
                </iframe>
            </div>
        </div>
    )
}

export default ContactUs