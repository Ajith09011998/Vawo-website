/* eslint-disable no-irregular-whitespace */
import { Image } from "@nextui-org/image";
import ThaikalamBannerImage from "../../assets/thaikalam_banner.jpg"
import { Leaf, Gavel, Church, Library, Flower2, ParkingMeter, Sticker, Pocket, School, Dumbbell, Building } from 'lucide-react'
import { Layout } from "../../components/thaikalam/layout";
import { Section } from "../../components/thaikalam/section";
import { Subsection } from "../../components/thaikalam/subsection";
import ButtonComponent from "../../components/ui/button";

function Thaikalam() {
    return (
        <div>
            <div className="mt-20 z-[9] relative">
                <Image
                    className="rounded-none"
                    src={ThaikalamBannerImage} />
            </div>

            <Layout>
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-5xl font-bold mb-4 text-stone-800 font-serif">About Thaikalam Infrastructure</h1>
                    <p className="text-xl text-stone-600">Embracing tradition, nurturing well-being</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Section title="Natural Restaurant Subsystems" className="col-span-full" icon={<Leaf className="w-6 h-6" />}>
                        <p className="mb-4">Our interconnected components support sustainable dining practices:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Fresh, organic, locally-produced ingredients</li>
                            <li>Eco-friendly food preparation methods</li>
                            <li>Natural ambiance with sustainable materials</li>
                            <li>Efficient energy use throughout</li>
                            <li>Comprehensive waste reduction program</li>
                            <li>Customer engagement in eco-conscious habits</li>
                        </ul>
                    </Section>

                    <Section title="Adimurai Court" icon={<Gavel className="w-6 h-6" />}>
                        <p className="mb-4">A traditional platform preserving our cultural heritage:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Council for practitioners and masters</li>
                            <li>Conflict resolution and discipline maintenance</li>
                            <li>Upholding of cultural principles and practices</li>
                        </ul>
                    </Section>

                    <Section title="Temple for Old Siddhas" icon={<Church className="w-6 h-6" />}>
                        <p className="mb-4">A sacred space honoring ancient wisdom:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Serene architecture with divine symbolism</li>
                            <li>Meditation and learning center</li>
                            <li>Tribute to Siddhas contributions in medicine and philosophy</li>
                        </ul>
                    </Section>

                    <Section title="Museum of Antiquities" icon={<Library className="w-6 h-6" />}>
                        <p className="mb-4">Our repository of cultural treasures:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Diverse collection of sculptures, coins, and manuscripts</li>
                            <li>Exhibits spanning various historical eras</li>
                            <li>Educational hub for cultural preservation</li>
                        </ul>
                    </Section>

                    <Section title="Herbal Medicine and Natural Remedies" icon={<Flower2 className="w-6 h-6" />}>
                        <Subsection title="Herbal Medicine Place">
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Extensive gardens with diverse medicinal herbs</li>
                                <li>State-of-the-art facility for remedy preparation</li>
                                <li>Consultation and education areas</li>
                            </ul>
                        </Subsection>
                        <Subsection title="Natural Remedies">
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Treatments derived from plants and minerals</li>
                                <li>Herbal medicines, essential oils, and supplements</li>
                                <li>Focus on enhancing the bodys natural healing abilities</li>
                            </ul>
                        </Subsection>
                    </Section>

                    <Section title="Wellness Facilities" icon={<Pocket className="w-6 h-6" />}>
                        <Subsection title="Mud Bath">
                            <p>Rejuvenating treatments using mineral-rich mud</p>
                        </Subsection>
                        <Subsection title="Steam Bath">
                            <p>Relaxation and detoxification through hot, humid air therapy</p>
                        </Subsection>
                    </Section>

                    <Section title="Nature and Recreation" icon={<ParkingMeter className="w-6 h-6" />}>
                        <Subsection title="Fruit Tree Orchard">
                            <p>A diverse collection of 100 fruit tree species</p>
                        </Subsection>
                        <Subsection title="Children's Park">
                            <p>A safe, educational outdoor space featuring:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Age-appropriate play equipment</li>
                                <li>Spacious green areas for free play</li>
                                <li>Interactive learning stations and nature trails</li>
                            </ul>
                        </Subsection>
                    </Section>

                    <Section title="Sports Facilities" icon={<Sticker className="w-6 h-6" />}>
                        <Subsection title="Open Stadium">
                            <p>Expansive venue for Adimurai practice and events</p>
                        </Subsection>
                        <Subsection title="Natural Pool">
                            <p>Eco-friendly swimming area with natural filtration systems</p>
                        </Subsection>
                        <Subsection title="Mallarkambam Center">
                            <p>Specialized facility for Mallakhamb training</p>
                        </Subsection>
                        <Subsection title="Mallarkayiru Ground">
                            <p>Dedicated space for rope climbing and acrobatics</p>
                        </Subsection>
                    </Section>

                    <Section title="Educational Facilities" icon={<School className="w-6 h-6" />}>
                        <Subsection title="Tamil School">
                            <p>Institution dedicated to Tamil language, literature, and culture</p>
                        </Subsection>
                        <Subsection title="Ancient Art Gallery">
                            <p>Indoor space showcasing and preserving historical artworks</p>
                        </Subsection>
                    </Section>

                    <Section title="Sports Training Areas" icon={<Dumbbell className="w-6 h-6" />}>
                        <Subsection title="Kabaddi Field">
                            <p>Regulation-size area for Kabaddi practice and matches</p>
                        </Subsection>
                        <Subsection title="Wrestling Arena">
                            <p>Dedicated space for wrestling training and competitions</p>
                        </Subsection>
                        <Subsection title="Gymnastics Field">
                            <p>Fully-equipped area for gymnastics training</p>
                        </Subsection>
                        <Subsection title="General Gym">
                            <p>Modern fitness facility with diverse exercise equipment</p>
                        </Subsection>
                        <Subsection title="Archery Range">
                            <p>Specialized area for bow training and practice</p>
                        </Subsection>
                    </Section>

                    <Section title="Administrative and Accommodation" icon={<Building className="w-6 h-6" />}>
                        <Subsection title="Administrative Office">
                            <p>Central hub for managing Thaikalam operations</p>
                        </Subsection>
                        <Subsection title="Trainee and Trainer Lodging">
                            <p>Comfortable accommodations for program participants</p>
                        </Subsection>
                        <Subsection title="Compact Residence (21 cents)">
                            <p>Efficient one-bedroom building on a 21-cent plot</p>
                        </Subsection>
                        <Subsection title="Guest Houses">
                            <p>Two and three-bedroom structures for visitor accommodation</p>
                        </Subsection>
                    </Section>
                </div>
                <div className='text-black px-4 py-20'>
                    <div className='max-w-6xl mx-auto flex flex-col gap-5 items-center  text-center'>
                        <p className='text-2xl uppercase font-medium'>DONATE <span className='text-red-500'> Now</span></p>
                        <div>
                            <hr className='header-line' />
                        </div>

                        <p>Your support can change lives. Every contribution, no matter the size, helps us bring hope and <br />
                            resources to those in need. Together, we can make an impact.
                        </p>
                        <ButtonComponent variant="fill" className='bg-red-700 rounded-full'>
                            Donate Now
                        </ButtonComponent>
                    </div>
                </div>
            </Layout >

        </div >
    )
}

export default Thaikalam