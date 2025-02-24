import { motion } from 'framer-motion';
import { Accordion, AccordionItem } from "@heroui/accordion";

function OurClasses() {

    const our_classes = [
        {
            id: 1,
            title: "ADIMURAI",
            content: <div>
                <p>Adimurai – Ancient Tamil Martial Art of Self-Defense and Varma Kalai</p>
                <p>Adimurai, one of the oldest martial arts of Tamil Nadu, is renowned for its focus on self-defense, striking techniques, and vital point attacks (Varma Kalai). Rooted in Tamil culture, this traditional art emphasizes agility, precision, and combat skills, making it a cornerstone of Tamil martial arts heritage.</p>
                <p>Often considered a precursor to Silambam and Kalaripayattu, Adimurai reflects the valor and discipline of Tamil warriors. It is widely practiced today for self-defense, fitness, and cultural preservation, showcasing the richness of Tamil Nadu’s history.</p>
            </div>
        },
        {
            id: 2,
            title: "SILAMBAM",
            content: <div>
                <p>Silambam – Traditional Tamil Martial Art of Weapon Combat</p>
                <p>Silambam, an ancient Tamil martial art, is celebrated for its mastery of stick fighting, self-defense techniques, and agility training. Originating in Tamil Nadu, this traditional art uses a variety of weapons like the silambam stick, spears, and swords, emphasizing precision, speed, and discipline.</p>
                <p>Practiced for centuries, Silambam is a cornerstone of Tamil martial arts heritage and is recognized for its cultural significance and effectiveness in modern self-defense. Today, it continues to thrive as a martial art, fitness regimen, and cultural performance.</p>
            </div>
        }, {
            id: 3,
            title: "MALLAR KAMBAM",
            content: <div>
                <p>Mallar Kambam – Ancient Tamil Martial Art of Pole Gymnastics</p>
                <p>Mallar Kambam, a traditional Tamil martial art, focuses on pole gymnastics and acrobatics, combining strength, flexibility, and agility. Practiced on a vertical wooden pole, this art form enhances core strength, coordination, and balance. Originating in Tamil Nadu, Mallar Kambam is deeply rooted in the region’s cultural and martial heritage.</p>
                <p>Today, it is admired for its fitness benefits and as a mesmerizing display of athletic skill in cultural performances. Mallar Kambam continues to inspire modern fitness and martial arts enthusiasts.</p>
            </div>
        },
        {
            id: 4,
            title: "MALLAR KAYIRU",
            content: <div>
                <p>Mallar Kayiru – Traditional Rope-Based Martial Art of Tamil Nadu</p>
                <p>Mallar Kayiru, an ancient Tamil martial art, focuses on the use of ropes for combat, self-defense, and acrobatic techniques. This unique art form showcases agility, precision, and strength, emphasizing intricate rope maneuvers to immobilize or disarm opponents. Rooted in Tamil Nadu’s rich martial tradition, Mallar Kayiru is both a physical and cultural practice.</p>
                <p>Today, it is valued for its self-defense applications, fitness benefits, and as a spectacular art in cultural performances, preserving Tamil Nadu’s martial heritage.</p>
            </div>
        },
        {
            id: 5,
            title: "PARAI ISAI",
            content: <div>
                <p>Parai Isai – Traditional Tamil Percussion Art</p>
                <p>Parai Isai, one of the oldest percussion arts of Tamil Nadu, is a vibrant and powerful form of drumming that holds deep cultural and historical significance. Played using the parai drum, this art form is known for its rhythmic beats that resonate during festivals, rituals, and social gatherings, symbolizing Tamil identity and unity.
                    Parai Isai is celebrated for its role in preserving Tamil culture, serving as both a traditional performance art and a medium for social expression. It continues to thrive as an essential part of Tamil Nadu’s musical heritage.</p>
            </div>
        },
        {
            id: 6,
            title: "OYIL DANCE",
            content: <div>
                <p>Oyil Dance – Traditional Folk Dance of Tamil Nadu</p>
                <p>Oyil Dance, a vibrant folk dance of Tamil Nadu, is celebrated for its energetic movements, colorful costumes, and rhythmic music. This traditional art form is performed during festivals, temple celebrations, and cultural gatherings, showcasing the rich heritage and lively spirit of Tamil culture.</p>
                <p>Known for its synchronized group performances and dynamic steps, Oyil Dance reflects Tamil Nadu’s rural traditions and is a symbol of unity and joy. It continues to captivate audiences as an integral part of Tamil Nadu’s cultural identity.</p>
            </div>
        }, {
            id: 7,
            title: "GYMNASTICS",
            content: <div>
                <p>Tamil Gymnastics – Ancient Fitness and Performance Art of Tamil Nadu</p>
                <p>Tamil Gymnastics is a traditional art form that combines strength, agility, and acrobatics, rooted in the martial and cultural heritage of Tamil Nadu. Known for its emphasis on flexibility, balance, and core strength, it includes techniques performed on the ground, poles, or ropes, reflecting the ingenuity of Tamil fitness practices.</p>
                <p>This ancient art continues to thrive as a part of martial arts training, cultural performances, and modern fitness routines, preserving the dynamic legacy of Tamil Nadu.</p>
            </div>
        },
        {
            id: 8,
            title: "VARMAKALAI",
            content: <div>
                <p>Varmakalari – Ancient Tamil Martial Art of Vital Point Combat</p>
                <p>Varmakalari, a traditional Tamil martial art, focuses on the mastery of vital point techniques (Varma Kalai) for self-defense and healing. Combining combat skills, pressure point knowledge, and spiritual discipline, Varmakalari is a profound practice rooted in Tamil Nadu’s ancient martial traditions.</p>
                <p>This unique art form is both a defensive system and a therapeutic science, preserving the wisdom of Tamil warriors and healers. Practiced widely, it remains a cornerstone of Tamil Nadu’s cultural and martial heritage.</p>
            </div>
        },
        {
            id: 9,
            title: "LESIM",
            content: <div>
                <p>Lesim – Traditional Tamil Art of Rhythmic Fitness and Dance</p>
                <p>Lesim, a traditional Tamil art form, blends rhythmic movements, vibrant music, and fitness techniques. It is performed with a handheld instrument called the lesim, producing jingling sounds that synchronize with dynamic steps and arm movements.</p>
                <p>Popular in festivals, cultural events, and group performances, Lesim is celebrated for its ability to improve coordination, endurance, and teamwork, showcasing the lively spirit and heritage of Tamil Nadu.</p>
            </div>
        },
        {
            id: 10,
            title: "TRADITIONAL DANCE",
            content: <div>
                <p>Traditional Dances of Tamil Nadu – A Celebration of Culture and Heritage</p>
                <p>The traditional dances of Tamil Nadu are a vibrant expression of the state’s rich cultural heritage. From the graceful Bharatanatyam to the energetic Oyil Kummi, these dance forms reflect Tamil Nadu’s spiritual, social, and historical essence. Performed during festivals, temple rituals, and cultural events, they combine intricate movements, rhythmic music, and colorful costumes.</p>
                <p>These dances not only preserve Tamil Nadu’s traditions but also captivate audiences worldwide, celebrating the state’s artistic and cultural diversity.</p>
            </div>
        }, {
            id: 11,
            title: 'PUPPET SHOW',
            content: <div>
                <p>Puppet Show – Traditional Tamil Art of Storytelling</p>
                <p>The Puppet Show (Bommalattam) is a cherished traditional art form of Tamil Nadu, combining storytelling, music, and intricate puppetry to narrate mythological tales and folklore. Using beautifully crafted puppets made of wood or cloth, this art captivates audiences with its vibrant visuals and engaging performances.
                    Performed during festivals, temple events, and cultural gatherings, Tamil puppet shows are a testament to the regions rich artistic heritage and enduring storytelling traditions.</p>
            </div>
        }, {
            id: 12,
            title: 'ADIMURAI YOGA ',
            content: <div>
                <p>Adimurai Yoga – The Fusion of Tamil Martial Art and Ancient Yoga</p>
                <p>Adimurai Yoga is a unique practice rooted in Tamil Nadu’s ancient martial art traditions, combining Adimurai’s self-defense techniques with the meditative and physical aspects of yoga. This discipline focuses on flexibility, strength, breath control, and mental focus, offering a holistic approach to fitness and well-being.</p>
                <p>Perfect for martial artists, yoga practitioners, and fitness enthusiasts, Adimurai Yoga reflects Tamil Nadu’s rich cultural heritage while promoting physical and spiritual harmony.</p>
            </div>
        },
        {
            id: 13,
            title: 'VARMA',
            content: <div>
                <p>Varma – Ancient Tamil Art of Vital Point Science</p>
                <p>Varma, an ancient Tamil art form, is a unique blend of martial techniques, healing practices, and vital point science (Varma Kalai). Rooted in Tamil Nadu’s rich heritage, Varma focuses on understanding and utilizing the body’s energy points for self-defense and therapeutic purposes.</p>
                <p>This traditional knowledge, passed down through generations, is a cornerstone of Tamil martial arts and natural medicine, preserving the wisdom of Tamil warriors and healers.</p>
            </div>
        },
        {
            id: 14,
            title: 'MALLU SANDAI',
            content: <div>
                <p>Mallu Sandai – Traditional Tamil Grappling Martial Art</p>
                <p>Mallu Sandai, a traditional martial art of Tamil Nadu, focuses on grappling, close combat techniques, and physical strength. Known for its tactical moves and skillful locks, Mallu Sandai emphasizes agility, endurance, and strategy. This ancient art is deeply rooted in Tamil culture and has been practiced for centuries as a means of self-defense and fitness.</p>
                <p>Today, Mallu Sandai is celebrated as a martial tradition and cultural performance, preserving Tamil Nadu’s rich martial heritage.</p>
            </div>
        },
        {
            id: 15,
            title: 'SIDDDHA MEDICINE',
            content: <div>
                <p>Siddha Medicine – The Ancient Healing System of Tamil Martial Arts</p>
                <p>Siddha Medicine is a traditional Tamil healing system deeply connected to the regions martial arts and holistic practices. Rooted in ancient texts, Siddha focuses on balancing the body, mind, and spirit through herbal remedies, dietary guidance, and physical therapies. It also incorporates the knowledge of Varma Kalai (vital points) for therapeutic and martial applications.</p>
                <p>This ancient system continues to thrive as a natural and holistic approach to wellness and healing, preserving Tamil Nadu’s rich heritage in traditional medicine.</p>
            </div>
        }, {
            id: 16,
            title: 'STREET PLAYS ',
            content: <div>
                <p>Street Plays – Vibrant Tamil Art of Storytelling and Social Awareness</p>
                <p>Street plays (Theru Koothu) are a dynamic traditional art form of Tamil Nadu, combining acting, music, and dance to narrate stories and address social issues. Performed in open spaces like streets and village squares, these plays captivate audiences with their engaging dialogues, colorful costumes, and powerful messages.</p>
                <p>Street plays are a cornerstone of Tamil Nadu’s cultural and theatrical heritage, serving as a medium for both entertainment and education, while keeping age-old storytelling traditions alive.</p>
            </div>
        }, {
            id: 17,
            title: 'KARAKATTAM',
            content: <div>
                <p>Karakattam – Traditional Tamil Folk Dance of Grace and Balance</p>
                <p>Karakattam, a vibrant folk dance of Tamil Nadu, is a celebration of grace, rhythm, and balance, performed while balancing a pot (karakam) on the dancers head. Traditionally offered as a tribute to rain deities like Mariamman, this art form is characterized by energetic movements, colorful costumes, and live folk music.</p>
                <p>Karakattam is a captivating spectacle at festivals, temple celebrations, and cultural events, reflecting Tamil Nadu’s rich heritage and devotion.</p>
            </div>
        }, {
            id: 18,
            title: 'MAAN KOMBU DANCE',
            content: <div>
                <p>Maan Kondu Dance – Traditional Tamil Folk Dance Inspired by Deer Movements</p>
                <p>Maan Kondu Dance, a unique folk dance from Tamil Nadu, mimics the graceful movements of deer (Maan). This traditional art form is characterized by elegant steps, rhythmic patterns, and vibrant costumes, reflecting the close connection between Tamil culture and nature.</p>
                <p>Performed during festivals, cultural gatherings, and temple celebrations, Maan Kondu Dance is a lively representation of Tamil Nadu’s rural traditions and artistic heritage.</p>
            </div>
        }, {
            id: 19,
            title: 'KUMMI DANCE',
            content: <div>
                <p>Kummi Dance – Traditional Tamil Folk Dance of Rhythm and Unity</p>
                <p>Kummi Dance is one of Tamil Nadu’s oldest folk dances, performed by women in circular formations, clapping hands rhythmically to vibrant songs. This traditional dance is a symbol of unity, celebration, and community spirit, often showcased during festivals, harvest celebrations, and cultural gatherings.</p>
                <p>Known for its simplicity and grace, Kummi Dance reflects the rich cultural heritage and rural traditions of Tamil Nadu, preserving its timeless charm through generations.</p>
            </div>
        }
    ]

    return (
        <div>
            <div className="aboutus-banner h-96 bg-overlay-black flex items-center justify-center">
                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='text-white text-center flex flex-col gap-5'>
                    <h1 className='text-4xl md:text-6xl font-bold italic'>
                        Our Classes
                    </h1>
                </motion.div>
            </div>
            <div className='max-w-6xl mx-auto px-4 py-5 gap-5 items-center z-[9] relative'>
                <Accordion variant="splitted" className='rounded-none' defaultExpandedKeys={["1"]}>
                    {our_classes?.map(data => (
                        <AccordionItem key={data.id} aria-label={data.title} title={data.title}
                            classNames={{
                                base: "rounded-none",
                                content: 'pt-0',
                                title: 'font-bold',
                            }}>
                            {data.content}
                        </AccordionItem>
                    ))

                    }
                    {/* <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                        {defaultContent}
                    </AccordionItem> */}
                </Accordion>
            </div>
        </div>
    )
}

export default OurClasses