'use client'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet"

function MyMap() {

    const locations = [
        {
            name: "Puducherry", position: [11.939304, 79.7719934], members: [
                {
                    name: "MANIKANDAN", phone: "9962252764", role: "PRESIDENT"
                },
                { name: "M. KARTHICK", phone: "8072034980", role: "VICE PRESIDENT" },
                { name: " MOHAMMED EMTHIYASH", phone: "7339353328", role: "SECRETARY" },
                { name: "MOHAMMED EJAAS", phone: "8925115046", role: "JOINT SECRETARY" },
                { name: "MAJITHA  BEEVI", phone: "9367601087", role: "TREASURER" },
                { name: "MURUGAN", phone: "9894591676", role: "AMBASSADOR" },
                { name: "SENIOR COACH", phone: "7538809636", role: "SENIOR COACH" },
                { name: "THARANIYA", phone: "8667073721", role: "MEMBER" },
                {
                    name: "VIJAYAGEETHAN", phone: "9363239732", role: "MEMBER"
                },
            ]
        },
        {
            name: "Ariyalur", position: [11.1389685, 79.0535998], members: [
                { name: "P.ULAGANATHAN", phone: "9715378403", role: "PRESIDENT" },
                { name: "KANNAIYAN.G", phone: "9786653951", role: "HONORABLE PRESIDENT" },
                { name: "SELVAN", phone: "9626764890", role: "VICE PRESIDENT" },
                { name: "V.ANBUSELVAN", phone: "9944820275", role: "SECRETARY" },
            ]
        },
        {
            name: "Chengalpattu", position: [12.6730554, 79.9562777], members: [
                { name: "A.B.K.SARAVANAN", phone: "9094049656", role: "PRESIDENT" },
                { name: "C.KAMALAKANNAN", phone: "8056272130", role: "VICE PRESIDENT" },
                { name: "K.THENMOZHI", phone: "9962207009", role: "JOINT SECRETARY" },
            ]
        },
        {
            name: "Chennai", position: [13.0479859, 79.8789933], members: [
                { name: "RAMACHANDRAN", phone: "9841693986", role: "PRESIDENT" },
                { name: "MUGILAN ", phone: "9941963063", role: "VICE PRESIDENT" },
                { name: "K.KUMAR", phone: "9790995192", role: "LEADER" },
                { name: "N.GANESH ", phone: "9500158988", role: "SECRETARY" },
                { name: "B.SALEEM MOHAMED YOUSF SAHIB", phone: "9003388812", role: "JOINT SECRETARY" },
            ]
        },
        {
            name: "Coimbatore", position: [11.0142615, 76.8024176], members: [
                { name: "M.SELVARAJ", phone: "9363055935", role: "PRESIDENT" },
                { name: "R.GOVINDARAJ", phone: "7604970711", role: "VICE PRESIDENT" },
                { name: "K.GOPALA KRISHNAN", phone: "9715399509", role: "SECRETARY" },
                { name: "D.MATHANKUMAR", phone: "7708509542", role: "JOINT SECRETARY" },
                { name: "C.NIVETHA", phone: "9384425536", role: "TREASURER" },
                { name: "M.SARAVANAKUMAR", phone: "9943221917", role: "MEMBER" }
            ]
        },
        {
            name: "Cuddalore", position: [11.7509062, 79.7458689], members: [
                { name: "A.BARATHAN", phone: "6381898375", role: "PRESIDENT" },
                { name: "V.GANESAN", phone: "8675509794", role: "VICE PRESIDENT" },
                { name: "A.PARTHIBAN", phone: "9500675608", role: "SECRETARY" },
                { name: "S.VALLARASU", phone: "9500675608", role: "JOINT SECRETARY" }
            ]
        },
        {
            name: "Dharmapuri", position: [12.1269942, 78.1308844], members: [
                { name: "V.Ramchandran", phone: "9943850192", role: "JOINT SECRETARY" }
            ]
        },
        {
            name: "Dindigul", position: [10.3624001, 77.9591581], members: [
                { name: "R.MANIKANDAN ", phone: "7639707410", role: "PRESIDENT" },
                { name: "S.ARUMUGAM", phone: "9751197731", role: "VICE PRESIDENT" },
            ]
        },
        {
            name: "Erode", position: [11.346783, 77.6329939], members: [
                { name: "MYLESWARAN", phone: "9688664311", role: "VICE PRESIDENT" },
                { name: "C.VIVEK", phone: "9360359926", role: "SECRETARY" },
                { name: "V.NAVNEETH", phone: "9597332377", role: "JOINT SECRETARY" },
                { name: "A.SEKAR", phone: "9442755430", role: "MEMBER" }
            ]
        },
        {
            name: "Kallakurichi", position: [11.7356005, 78.9499798], members: [
                { name: "K.DAMOTHARAN", phone: "9500325507", role: "SECRETARY" },
                { name: "V.GUNASEKARAN", phone: "8870257259", role: "JOINT SECRETARY" },
            ]
        },
        {
            name: "Kanchipuram", position: [12.8371992, 79.69387], members: [
                { name: "G.ANABALAGAN", phone: "8122280526", role: "SECRETARY" },
                { name: "S.RADHA KRISHNAN", phone: "8144382285", role: "JOINT SECRETARY" },
                { name: "MUNUSAMY MADIYALAGAN", phone: "9787226298", role: "TREASURER" },
            ]
        },
        {
            name: "Kanniyakumari", position: [8.0864231, 77.5355707], members: [
                { name: "JAYASEKAR", phone: "7708737625", role: "VICE PRESIDENT" },
                { name: "JAYAKANNAN", phone: "9500199433", role: "SECRETARY" },
                { name: "ASHAMOL", phone: "7708512501", role: "TREASURER" },
            ]
        },
        {
            name: "Karur", position: [10.9652332, 78.0267575], members: [
                { name: "MUTHUSAMY.K", phone: "8144340057", role: "VICE PRESIDENT" },
                { name: "P.NAVIN", phone: "6380902727", role: "SECRETARY" },
            ]
        },
        {
            name: "Krishnagiri", position: [12.5265866, 78.2046577], members: [
                { name: "S.SATHASIVAM", phone: "9865738391", role: "VICE PRESIDENT" },
                { name: "RA.PANDIYAN", phone: "9780846865", role: "RA.PANDIYAN" },
            ]
        },
        {
            name: "Madurai", position: [9.9179959, 78.0404206], members: [
                { name: "KARTHIKAICHAMY S", phone: "9943639998", role: "PRESIDENT" },
                { name: "C.MANIKANDAN", phone: "8778759001", role: "VICE PRESIDENT" },
                { name: "N.SIVARANJANI", phone: "8778963522", role: "SECRETARY" },
                { name: "M.VIJAYADHARSHINI", phone: "9345205685", role: "JOINT SECRETARY" }
            ]
        },
        {
            name: "Mayiladuthurai", position: [11.1017912, 79.6422688], members: [
                { name: "N.GANESAN", phone: "9976542498", role: "SECRETARY" }
            ]
        },
        {
            name: "Nagapattinam", position: [10.7795772, 79.7814458], members: [
                { name: "P.RAJENDRA COZHAN", phone: "9500550121", role: "PRESIDENT" },
                { name: "B.VETRIVENTHAN", phone: "9965825035", role: "VICE PRESIDENT" },
                { name: "S.A.SARAVANAN", phone: "SECRETARY", role: "9786153012" },
                { name: "R.SIVA CHANDRAN", phone: "9486052107", role: "JOINT SECRETARY" },
                { name: "S.AMIRTHAVALLI", phone: "9786153012", role: "TREASURER" },
                { name: "M.AJAY HARIHARAN", phone: "6382550557", role: "AMBASSADOR" },
                { name: "S.SIVASINTHAN", phone: "9597508928", role: "SENIOR COACH" },
                { name: "S.SIVASINTHAN", phone: "7358924160", role: "MEMBER" },
                { name: "M.MAHAMED HARISH", phone: "9344673086", role: "MEMBER" },
            ]
        },
        {
            name: "Namakkal", position: [11.2285714, 78.1244848], members: [
                { name: "RA.ANAND", phone: "9942586144", role: "PRESIDENT" },
                { name: "K.CHANDRU", phone: "9500662344", role: "VICE PRESIDENT" },
                { name: "9500662344", phone: "9500662344", role: "SECRETARY" },
                { name: "T.MOHAN RAJ", phone: "9791559147", role: "JOINT SECRETARY" },
                { name: "SURYA", phone: "9944365721", role: "TREASURER" },
                { name: "V.MOKSHANTH", phone: "9597525038", role: "MEMBER" },
            ]
        },
        {
            name: "Nilagiri", position: [21.4625317, 86.7410084], members: [
                { name: "S SUBRAMANIAM", phone: "9488767996", role: "PRESIDENT" },
                { name: "MS KRISHNAMOORTHY", phone: "9486265098", role: "VICE PRESIDENT" },
                { name: "C.RAGURAM", phone: "9626599008", role: "SECRETARY" },
                { name: "VEERAN KUTTY", phone: "9092039065", role: "JOINT SECRETARY" },
                { name: "BABU", phone: "9444046635", role: "TREASURER" },
                { name: "STEPHEN RAJ", phone: "9500910457", role: "AMBASSADOR" },
                { name: "SATHISH", phone: "6385644548", role: "MEMBER" },
                { name: "CHAKARAVARTHY", phone: "9159357647", role: "MEMBER" }
            ]
        },
        {
            name: "Perambalur", position: [11.2342311, 78.8703854], members: [
                { name: "AKILAN RAMASAMY", phone: "9585732132", role: "PRESIDENT" },
                { name: "SARAVANABAVA ", phone: "9688705981", role: "TREASURER" }
            ]
        },
        {
            name: "Pudukkottai", position: [10.3833074, 78.7898292], members: [
                { name: "KANNADASAN", phone: "9659389278", role: "PRESIDENT" },
                { name: "C.BALA SUBRAMANIYAN ", phone: "9566877105", role: "VICE PRESIDENT" },
                { name: "SHANMUGAM GANESAN", phone: "9965088824", role: "SECRETARY" },
                { name: "RAVINDRAN DHAVAMANI", phone: "8248538621", role: "JOINT SECRETARY" },
                { name: "M.PANDIYAN", phone: "9715068770", role: "MEMBER" }
            ]
        },
        {
            name: "Ramanathapuram", position: [9.3678695, 78.8226235], members: [
                { name: "N.SENTHOOR PANDIYAN", phone: "9585752010", role: "PRESIDENT" },
                { name: "N.HEMANATHAN", phone: "9751604060", role: "HONORABLE PRESIDENT" },
                { name: "R.VICKNESWARAN", phone: "9080841755", role: "VICE PRESIDENT" },
                { name: "A.SHANMUGA VEL", phone: "8825465776", role: "SECRETARY" },
                { name: "R.SATHEESH KUMAR", phone: "9025885634", role: "DEPUTY SECRETARY" },
                { name: "M.ABDULBEROJ", phone: "8610105247", role: "JOINT SECRETARY" },
                { name: "UMABARATHY", phone: "8098671909", role: "TREASURER" },
                { name: "YOKAVIN.S", phone: "9514057913", role: "MEMBER" },
                { name: "ARAVINTHAKUMAR.M", phone: "9025910905", role: "MEMBER" },
                { name: "A.LEKSMANAN", phone: "9360797364", role: "MEMBER" }
            ]
        },
        {
            name: "Ranipet", position: [12.953474, 79.2754111], members: [
                { name: "N.ANANTHAN", phone: "7667639585", role: "VICE PRESIDENT" }
            ]
        },
        {
            name: "Salem", position: [11.6538915, 78.0558942], members: [
                { name: "C.ANAND", phone: "8825428649", role: "PRESIDENT" },
                { name: "T.MANIKANDAN", phone: "8012054957", role: "SECRETARY" }
            ]
        },
        {
            name: "Sivaganga", position: [9.847313, 78.46448], members: [
                { name: "SANGLI AYYADHURAI", phone: "9486432095", role: "HONORABLE PRESIDENT" },
                { name: "C.SANGU PANDI", phone: "8438363831", role: "SECRETARY" },
                { name: "KALIDHAS", phone: "9566764375", role: "JOINT SECRETARY" },
                { name: "KAVIYA", phone: "9791852810", role: "TREASURER" }
            ]
        },
        {
            name: "Tenkasi", position: [8.9641005, 77.2938787], members: [
                { name: "PANDI", phone: "9751604060", role: "PRESIDENT" },
                { name: "M.UCHIMAHALI", phone: "9025251964", role: "SECRETARY" },
                { name: "PALANIKUMAR", phone: "7358686922", role: "JOINT SECRETARY" }
            ]
        },
        {
            name: "Thanjavur", position: [10.7529777, 79.0490463], members: [
                { name: "ARUN PRAKASH ", phone: "9597164571", role: "VICE PRESIDENT" },
                { name: "MOHAN RAJ", phone: "9095510309", role: "SECRETARY" }
            ]
        },
        {
            name: "Theni", position: [10.0160539, 77.4221714], members: [
                { name: "V.NEELAMEGAM", phone: "9994664512", role: "PRESIDENT" },
                { name: "P.ESWARAN", phone: "7502026340", role: "VICE PRESIDENT" },
                { name: "RANJITH.A", phone: "9750009343", role: "SECRETARY" }
            ]
        },
        {
            name: "Thiruvarur", position: [10.7674781, 79.614824], members: [
                { name: "A.MUTHUKUMARAN", phone: "9842019183", role: "SECRETARY" }
            ]
        },
        {
            name: "Thoothukudi", position: [8.7767745, 78.0491672], members: [
                { name: "E.A MANIKANDAN", phone: "9994671169", role: "PRESIDENT" },
                { name: "PON.MARIYAPPAN", phone: "9487563020", role: "VICE PRESIDENT" },
                { name: "M.BALA MURUGAN", phone: "9003929694", role: "SECRETARY" },
                { name: "DINESH", phone: "6369562141", role: "JOINT SECRETARY" }
            ]
        },
        {
            name: "Tiruchirappalli", position: [10.8160024, 78.6066249], members: [
                { name: "R.JANAKI RAM", phone: "8489853322", role: "SECRETARY" },
                { name: "K.VIVEKANATHAN", phone: "8098067808", role: "JOINT SECRETARY" }
            ]
        },
        {
            name: "Tirunelveli", position: [8.7217223, 77.6597747], members: [
                { name: "JAMALAKRAM", phone: "9994162336", role: "PRESIDENT" },
                { name: "BALASUBRAMANIAN", phone: "9751963635", role: "VICE PRESIDENT" },
                { name: "M.SYED MAGUDUM", phone: "7604850845", role: "SECRETARY" }
            ]
        },
        {
            name: "Tirupattur", position: [10.1102251, 78.586193], members: [
                { name: "KANNAN SOLAIMUTHU", phone: "9894799340", role: "HONORABLE PRESIDENT" }
            ]
        },
        {
            name: "Tiruppur", position: [11.1087395, 77.2814099], members: [
                { name: "V.PERIYASAMY", phone: "7708365527", role: "SECRETARY" },
                { name: "RAMAN ARJUNAN", phone: "9629466229", role: "JOINT SECRETARY" },
                { name: "UMESHWARAN", phone: "7502132843", role: "TREASURER" }
            ]
        },
        {
            name: "Tiruvallur", position: [13.1227105, 79.9014692], members: [
                { name: "K.KALAISELVAN", phone: "9952939758", role: "SECRETARY" },
                { name: "BEEMA RAO RAMJI.R", phone: "9791827709", role: "JOINT SECRETARY" },
                { name: "HARANI K.B", phone: "7339140858", role: "TREASURER" }
            ]
        },
        {
            name: "Tiruvannamalai", position: [12.2409376, 79.0280526], members: [
                { name: "RAMARASU", phone: "9952439500", role: "SECRETARY" },
                { name: "KUMARAVEL", phone: "8608745306", role: "TREASURER" }
            ]
        },
        {
            name: "Vellore", position: [12.8995919, 78.9535251], members: [
                { name: "A.VIVEKANATHAN", phone: "9443429528", role: "PRESIDENT" },
                { name: "P.PONNARASU", phone: "9790676243", role: "SECRETARY" },
                { name: "GUNASEKARAN MURUGESAN", phone: "9787060801", role: "JOINT SECRETARY" },
                { name: "M.NITHIYANTHAM", phone: "8124318146", role: "TREASURER" },
                { name: "LITHESH DELI", phone: "9486723702", role: "AMBASSADOR" }
            ]
        },
        {
            name: "Viluppuram", position: [11.9337576, 79.4583085], members: [
                { name: "M.JANARTHANAN ", phone: "9345636104", role: "PRESIDENT" }
            ]
        },
        {
            name: "Virudhunagar", position: [9.573601, 77.8757874], members: [
                { name: "S.SIVARAMA SUPIRAMANIYAN", phone: "9600753486", role: "VICE PRESIDENT" },
                { name: "S.VAIRAMUTHU", phone: "9123578283", role: "JOINT SECRETARY" }
            ]
        }
    ]

    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38],
    })

    return (
        <MapContainer center={[10.8153315, 75.6464799]} zoom={4} style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location, index) => (
                <Marker key={index} position={location.position} icon={customIcon}>
                    <Popup>
                        {location.members?.map((members) => (
                            <p key={members.name}><b>{members?.role}</b>-{members?.name}-{members?.phone}</p>
                        ))}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default MyMap;
