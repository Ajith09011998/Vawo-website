import { ScrollShadow } from '@heroui/scroll-shadow'
import { Button } from '@nextui-org/button'
import { Input, Textarea } from '@nextui-org/input'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { Icon } from "leaflet"
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'
import axios from 'axios'

function ContactUs() {

    const locations = [
        { name: "", position: [8.2855556, 77.3073679] },
        { name: "", position: [8.1923754, 77.2719081] },
        { name: "", position: [8.1437453, 77.5787674] },
        { name: "", position: [8.0985011, 77.5429295] },
        { name: "", position: [8.1340866, 77.3869134] },
        { name: "", position: [8.3022694, 77.4389448] },
        { name: "", position: [8.3670373, 77.1840309] },
        { name: "", position: [8.2612635, 77.2332631] },
        { name: "", position: [8.1843699, 77.5000122] }

    ]

    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
        iconSize: [28, 28],
    })

    const branches = [
        {
            id: 1,
            name: 'Chembaruthivilai',
            address: 'RC School tamil medium ground,Chembaruthivilai,629166',
            phone: '+91 99447 76601',
            email: 'lemuriamas@gmail.com',
            latLang: "https://www.google.com/maps/search/RC+School+tamil+medium+ground,Chembaruthivilai,629166/@8.2850292,77.3075819,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            id: 2,
            name: 'Konamkadu',
            address: 'Xavier church konamkadu,629803',
            phone: '+91 99447 76601',
            email: 'lemuriamas@gmail.com',
            latLang: "https://www.google.com/maps/place/St.+Francis+Xavier's+Church,+Konamkadu/@8.1923807,77.2693332,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04fc1d83249cbd:0x8a8bc93622df83b8!8m2!3d8.1923754!4d77.2719081!16s%2Fg%2F11b7vdxc9k?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            id: 3,
            name: 'kanimadam',
            address: 'Kanimadam library ,kanimadam ,anjugramam post,624401',
            phone: '+91 99447 76601',
            email: 'lemuriamas@gmail.com',
            latLang: "https://www.google.com/maps/search/Kanimadam+library+,kanimadam+,anjugramam+post,624401/@8.1493283,77.5618785,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            id: 4,
            name: 'Kanyakumari',
            address: 'Aadukalam ground,Swaminatha puram ,Kanyakumari,629702',
            phone: '+91 99447 76601',
            email: 'lemuriamas@gmail.com',
            latLang: "https://www.google.com/maps/search/Aadukalam+ground,Swaminatha+puram+,Kanyakumari,629702/@8.0985011,77.5429295,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            id: 5,
            name: 'Vilathivilai',
            address: 'Mutharamman thiru kovil ,vilathivilai,629501',
            phone: '+91 99447 76601',
            email: 'lemuriamas@gmail.com',
            latLang: "https://www.google.com/maps/search/Mutharamman+thiru+kovil+,vilathivilai,629501/@8.2726507,77.4097183,10z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            id: 6,
            name: 'Peruthalaikadu',
            address: 'Perunthalaikadu,Ahagiyapandiyapuram post ,kanyakumari',
            phone: '+91 99447 76601',
            email: 'lemuriamas@gmail.com',
            latLang: "https://www.google.com/maps/place/Azhagiapandiapuram+post+office/@8.3022694,77.4389448,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04589478788125:0xe598c2a185fe77c1!8m2!3d8.3022641!4d77.4415197!16s%2Fg%2F11g6xrzk1x?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            id: 7,
            name: 'Muchagam',
            address: 'Muchagam sri maga vihnu templ ,Muchagam,629152',
            phone: '+91 99447 76601',
            email: 'lemuriamas@gmail.com',
            latLng: "https://www.google.com/maps/search/Muchagam+sri+maga+vihnu+templ+,Muchagam,629152/@8.4156978,77.1874539,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            id: 8,
            name: 'Mullanginavilai',
            address: 'St.Antonys church, Mullanganvilai, 629157',
            phone: '+91 99447 76601',
            email: 'lemuriamas@gmail.com',
            latLang: "https://www.google.com/maps/place/St.+Antony's+Church/@8.2612688,77.2306882,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04ff996050a897:0x493b823d2866d033!8m2!3d8.2612635!4d77.2332631!16s%2Fg%2F12hkpws5w?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            id: 9,
            name: 'Rajavoor',
            address: 'st.Michael thr archangels church rajavoor, 629402',
            phone: '+91 99447 76601',
            email: 'lemuriamas@gmail.com',
            latLang: "https://www.google.com/maps/place/St.+Michael+The+Archangel's+Church,+Rajavoor/@8.1843699,77.5000122,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04f39115555555:0x7e69d791000aae2f!8m2!3d8.1843646!4d77.5025871!16s%2Fg%2F11g6nkclyh?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
        }
    ]

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()

    const inputClasses = {
        label: "text-white",
        inputWrapper: "bg-[#0a0d1b] p-0",
        innerWrapper: "bg-[#0a0d1b] hover:bg-[#0a0d1b] px-5",
        input: "placeholder:text-gray-500 !text-white",
    }

    const onSubmit = async (formData) => {
        try {
            await axios.post("https://apis.lemuriavawo.org/api.php?action=contacts", formData);
            reset()
            toast.success("Mail send successfully");
        } catch (error) {
            console.error("Error submitting form:", error)
        }
    }

    return (
        <div>
            {/* contact us banner */}
            <div className="contactus-banner h-96 bg-overlay-black flex items-center justify-center">
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
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
                        <Input
                            {...register("full_name", { required: "Name is required" })}
                            placeholder="Name"
                            size="lg"
                            classNames={inputClasses}
                            isInvalid={!!errors.name}
                            errorMessage={errors.name?.message}
                        />
                        <Input
                            {...register("subject", { required: "Subject is required" })}
                            placeholder="subject"
                            size="lg"
                            classNames={inputClasses}
                            isInvalid={!!errors.subject}
                            errorMessage={errors.subject?.message}
                        />
                        <Input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Invalid email address",
                                },
                            })}
                            placeholder="Email"
                            size="lg"
                            classNames={inputClasses}
                            isInvalid={!!errors.email}
                            errorMessage={errors.email?.message}
                        />
                        <Input
                            {...register("phone", {
                                required: "Phone is required",
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Invalid phone number",
                                },
                            })}
                            placeholder="Phone"
                            type="tel"
                            size="lg"
                            classNames={inputClasses}
                            isInvalid={!!errors.phone}
                            errorMessage={errors.phone?.message}
                        />
                        <div className="col-span-2">
                            <Textarea
                                {...register("message", { required: "Message is required" })}
                                placeholder="Message"
                                size="lg"
                                classNames={{
                                    ...inputClasses,
                                    innerWrapper: "bg-[#0a0d1b] hover:bg-[#0a0d1b] p-5",
                                }}
                                isInvalid={!!errors.message}
                                errorMessage={errors.message?.message}
                            />
                        </div>
                        <div className="col-span-2 mt-5">
                            <Button type="submit" size="lg" className="w-full rounded-none bg-red-700 text-white" isLoading={isSubmitting}>
                                Submit
                            </Button>
                        </div>
                    </form>
                    <div>
                        <div>
                            <p className='text-2xl uppercase font-medium text-white'>OUR <span className='text-red-500'> BRANCHES</span></p>
                            <div>
                                <hr className='header-line' />
                            </div>
                        </div>
                        <ScrollShadow className='h-[400px]'>
                            <div className="space-y-6 mt-10">
                                {branches.map((branch) => (
                                    <div key={branch.id} className="bg-[#0a0d1b] p-4 text-white cursor-pointer"
                                        onClick={() => window.open(branch.latLang, "_blank")}>
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
                        </ScrollShadow>
                    </div>
                </div>
            </div>
            {/* map */}
            <div style={{ width: "100%" }}>
                <MapContainer center={[8.0883, 77.5385]} zoom={10} style={{ height: "100vh", width: "100%" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {locations.map((location, index) => (
                        <Marker key={index} position={location.position} icon={customIcon} />
                    ))}
                </MapContainer>
            </div>
        </div>
    )
}

export default ContactUs