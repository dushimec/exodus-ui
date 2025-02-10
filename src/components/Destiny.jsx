// import { useState , useEffect} from "react"
// import { useSpring, animated, useTrail } from "react-spring"
// import { useDispatch } from "react-redux"
// import { useTranslation } from "react-i18next"
// import { FaBook, FaLandmark } from "react-icons/fa"
// import kibeho from "../IMAGE/kibeho.jpg"
// import chruch from "../IMAGE/chruch.webp"
// import regina from "../IMAGE/regina.webp"
// import mosque from "../IMAGE/mosque.webp"
// import seminary from "../IMAGE/seminary.jpg"
// import wall from "../IMAGE/wall.webp"
// import bahi from "../IMAGE/bahi.jpeg"
// import sea from "../IMAGE/sea.jpeg"
// import gaza from "../IMAGE/gaza.jpeg"
// import temple from "../IMAGE/temple.jpeg"
// import saint from "../IMAGE/saint.jpeg"
// import hagia from "../IMAGE/hagia.jpeg"
// import ephesus from "../IMAGE/ephesus.jpeg"
// import capa from "../IMAGE/capa.jpeg"
// import AOS from 'aos';
// import 'aos/dist/aos.css';




// const religiousDestinations = {
//   Rwanda: [
//     {
//       name: "Kibeho Holy Land",
//       type: "Catholic Shrine",
//       description:
//         "Known for the Marian apparitions of Our Lady of Kibeho, this is the only Vatican-approved apparition site in Africa.",
//       significance: "Major Catholic pilgrimage site where the Virgin Mary appeared to three young women in the 1980s",
//       activities: ["Daily Mass", "Rosary Processions", "Spiritual Retreats", "Healing Prayers"],
//       imageSrc: kibeho,
//     },
//     {
//       name: "Regina Pacis Cathedral",
//       type: "Catholic Cathedral",
//       description: "The main Catholic cathedral in Kigali, showcasing modern African Christian architecture.",
//       significance: "Center of Catholic worship in Rwanda's capital",
//       activities: ["Sunday Mass", "Cultural Programs", "Religious Education", "Community Services"],
//       imageSrc: regina,
//     },
//     {
//       name: "Nyakibanda Seminary",
//       type: "Religious Institution",
//       description: "One of the oldest and largest seminaries in Rwanda, training priests since 1936.",
//       significance: "Historical center for religious education and formation",
//       activities: ["Guided Tours", "Religious Studies", "Historical Exhibits", "Prayer Sessions"],
//       imageSrc: seminary,
//     },
 
//   ],
//   Israel: [
//     {
//       name: "Western Wall",
//       type: "Jewish Holy Site",
//       description: "The most sacred site in Judaism, part of the ancient Temple Mount complex.",
//       significance: "Last remaining wall of the Second Temple of Jerusalem",
//       activities: ["Prayer Services", "Bar Mitzvah Ceremonies", "Tunnel Tours", "Shabbat Experience"],
//       imageSrc: wall
//     },
//     {
//       name: "Church of the Holy Sepulchre",
//       type: "Christian Holy Site",
//       description: "Traditional site of Jesus's crucifixion, burial, and resurrection.",
//       significance: "Most important pilgrimage site for many Christian denominations",
//       activities: ["Daily Mass", "Guided Tours", "Prayer Vigils", "Religious Ceremonies"],
//       imageSrc: chruch,
//     },
//     {
//       name: "Al-Aqsa Mosque",
//       type: "Islamic Holy Site",
//       description: "The third-holiest site in Islam, located on the Temple Mount.",
//       significance: "Major Islamic pilgrimage destination",
//       activities: ["Daily Prayers", "Islamic Studies", "Historical Tours", "Cultural Programs"],
//       imageSrc: mosque,
//     },
//     {
//       name: "Bahá'í Gardens",
//       type: "Bahá'í Holy Site",
//       description: "Terraced gardens surrounding the Shrine of the Báb in Haifa.",
//       significance: "World Center of the Bahá'í Faith",
//       activities: ["Guided Tours", "Meditation", "Photography", "Cultural Learning"],
//       imageSrc: bahi,
//     },
//     {
//       name: "Sea of Galilee",
//       type: "Multi-Faith Site",
//       description: "Freshwater lake associated with many events in Jesus's life.",
//       significance: "Important site for Christian pilgrims and nature lovers",
//       activities: ["Boat Tours", "Biblical Site Visits", "Baptism Ceremonies", "Nature Walks"],
//       imageSrc: sea,
//     },
//   ],
//   Egypt: [
//     {
//       name: "Great Pyramid of Giza",
//       type: "Ancient Wonder",
//       description: "One of the Seven Wonders of the Ancient World, built as a tomb for the Pharaoh Khufu.",
//       significance: "Symbol of ancient Egyptian civilization and engineering marvel",
//       activities: ["Guided Tours", "Camel Rides", "Sunset Viewing", "Archaeological Lectures"],
//       imageSrc: gaza,
//     },
//     {
//       name: "Luxor Temple",
//       type: "Ancient Temple",
//       description: "A large Ancient Egyptian temple complex located on the east bank of the Nile River.",
//       significance: "Important site for ancient Egyptian religion and history",
//       activities: ["Night Tours", "Hieroglyphic Workshops", "Sound and Light Shows", "Nile Cruises"],
//       imageSrc: temple,
//     },
//     {
//       name: "Saint Catherine's Monastery",
//       type: "Christian Monastery",
//       description: "One of the oldest working Christian monasteries in the world.",
//       significance: "Important site for Orthodox Christianity and home to valuable manuscripts",
//       activities: ["Guided Tours", "Icon Viewing", "Sunrise Hikes", "Meditation Sessions"],
//       imageSrc: saint,
//     },
//   ],
//   Turkey: [
//     {
//       name: "Hagia Sophia",
//       type: "Museum/Mosque",
//       description:
//         "Former Greek Orthodox Christian patriarchal cathedral, later an Ottoman imperial mosque, now a museum.",
//       significance: "Architectural marvel and symbol of Istanbul's diverse history",
//       activities: ["Guided Tours", "Art Appreciation", "Historical Lectures", "Photography Sessions"],
//       imageSrc: hagia,
//     },
//     {
//       name: "Ephesus",
//       type: "Ancient City",
//       description: "An ancient Greek city on the coast of Ionia, famous for the Temple of Artemis.",
//       significance: "One of the best-preserved ancient cities in the Mediterranean",
//       activities: ["Archaeological Tours", "Historical Reenactments", "Night Walks", "Photography Workshops"],
//       imageSrc:ephesus,
//     },
//     {
//       name: "Cappadocia",
//       type: "Natural Wonder",
//       description: "A region known for its distinctive 'fairy chimneys,' formed by volcanic rock formations.",
//       significance: "Unique landscape and early Christian history",
//       activities: ["Hot Air Balloon Rides", "Underground City Tours", "Rock Church Visits", "Hiking"],
//       imageSrc: capa,
//     },
//   ],
// }

// function CountryTabs({ countries, activeCountry, setActiveCountry }) {
//   const trail = useTrail(countries.length, {
//     from: { opacity: 0, transform: "scale(0.8)" },
//     to: { opacity: 1, transform: "scale(1)" },
//     config: { tension: 300, friction: 10 },
//   })
//   useEffect(() => {
//     AOS.init({ duration: 2000, easing: 'ease-out' });
//   }, []);
 

//   return (
//     <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-8 px-2 sm:px-4 w-full">
//       {trail.map((props, index) => (
//         <animated.button
//           key={countries[index]}
//           style={props}
//           onClick={() => setActiveCountry(countries[index])}
//           className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 ${
//             activeCountry === countries[index]
//               ? "bg-sky-600 text-white shadow-lg transform -translate-y-1"
//               : "bg-white text-gray-600 hover:bg-sky-100"
//           }`}
//         >
//           {countries[index]}
//         </animated.button>
//       ))}
//     </div>
//   )
// }

// function TypeFilters({ filterTypes, selectedType, setSelectedType }) {
//   const trail = useTrail(filterTypes.length, {
//     from: { opacity: 0, transform: "translateY(20px)" },
//     to: { opacity: 1, transform: "translateY(0)" },
//     config: { tension: 300, friction: 10 },
//   })

//   return (
//     <div className="flex flex-wrap justify-center gap-2 mt-4 sm:mt-6 px-2 sm:px-4">
//       {trail.map((props, index) => (
//         <animated.button
//           key={filterTypes[index]}
//           style={props}
//           onClick={() => setSelectedType(filterTypes[index])}
//           className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-300 ${
//             selectedType === filterTypes[index]
//               ? "bg-sky-600 text-white font-medium"
//               : "bg-gray-100 text-gray-600 hover:bg-sky-100"
//           }`}
//         >
//           {filterTypes[index]}
//         </animated.button>
//       ))}
//     </div>
//   )
// }

// function ReligiousDestinationCard({ name, type, description, significance, activities, imageSrc, index }) {
//   const getIcon = (type) => {
//     return FaLandmark
//   }

//   const Icon = getIcon(type)

//   const cardAnimation = useSpring({
//     from: { opacity: 0, transform: "translateY(50px)" },
//     to: { opacity: 1, transform: "translateY(0)" },
//     delay: index * 100,
//     config: { tension: 300, friction: 10 },
//   })

//   return (
//     <animated.div
//       style={cardAnimation}
//       className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
//     >
//       <div className="h-48 sm:h-56 bg-cover bg-center relative" style={{ backgroundImage: `url(${imageSrc})` }}>
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
//           <div className="absolute bottom-4 left-4 text-white">
//             <Icon className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
//             <span className="px-2 sm:px-3 py-1 text-xs font-medium bg-white/20 rounded-full backdrop-blur-sm">
//               {type}
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="p-4 sm:p-6">
//         <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{name}</h3>
//         <p className="text-gray-600 text-sm mb-4">{description}</p>
//         <div className="bg-sky-100 p-3 sm:p-4 rounded-lg mb-4">
//           <h4 className="font-medium text-sky-500 mb-1 sm:mb-2">Religious Significance:</h4>
//           <p className="text-xs sm:text-sm text-sky-750">{significance}</p>
//         </div>
//         <div className="space-y-2">
//           <h4 className="font-medium text-gray-900">Sacred Activities:</h4>
//           <div className="grid grid-cols-2 gap-2">
//             {activities.map((activity, i) => (
//               <div key={i} className="flex items-center text-xs sm:text-sm text-gray-600">
//                 <FaBook className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-sky-600" />
//                 {activity}
//               </div>
//             ))}
//           </div>
//         </div>
//         <button className="mt-4 sm:mt-6 w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-500 transition-colors duration-300 text-sm sm:text-base">
//           Plan Pilgrimage
//         </button>
//       </div>
//     </animated.div>
//   )
// }

// export default function Destiny() {
//   const dispatch = useDispatch()
//   const { t } = useTranslation()
//   const [activeCountry, setActiveCountry] = useState("Rwanda")
//   const [selectedType, setSelectedType] = useState("All")

//   const headerAnimation = useSpring({
//     from: { opacity: 0, transform: "translateY(-50px)" },
//     to: { opacity: 1, transform: "translateY(0)" },
//     config: { tension: 300, friction: 10 },
//   })

//   const filterTypes = ["All", "Multi-Faith"]

//   const filteredDestinations =
//     selectedType === "All"
//       ? religiousDestinations[activeCountry]
//       : religiousDestinations[activeCountry].filter((dest) => dest.type.includes(selectedType))

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-50">
//       <animated.div
//         style={headerAnimation}
//         className="flex relative flex-col items-center self-stretch px-5 sm:px-10 lg:px-20 pt-24 sm:pt-32 lg:pt-10 pb-12 w-full text-white min-h-[400px]" data-aos="zoom-out"
//       >
//         <img
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/088997ce7ceb1872cdd23f020fa61a21e9d406941f1c5e79d3e1cb275d67fd00"
//           className="absolute inset-0 object-cover w-full h-full blur-sm"
//           alt="Background"
//         />
//         <div className="absolute inset-0 bg-black opacity-60"></div>
//          <div className="flex relative flex-col justify-start items-center px-2 w-full sm:px-2 sm:pt-10 md:px-20 md:pt-24">
//           <div className="px-2 py-4  text-2xl  mt-10 sm:px-8 sm:py-6 md:px-12 md:py-9 mb-0 text-center bg-transparent border-white border-solid bg-opacity-0 border-4 sm:border-8 md:border-[10px] w-[80%] max-w-[496px]">
//           {t("destini.title")}
//           </div>
//           <div className="mt-12  sm:mt-15 flex flex-row justify-center">
//           {t("destini.subtitle")}
//           </div>

//         </div>
//       </animated.div>

//       <CountryTabs
//         countries={Object.keys(religiousDestinations)}
//         activeCountry={activeCountry} 
//         setActiveCountry={setActiveCountry}
//       />

      

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
//         {filteredDestinations.map((destination, index) => (
//           <ReligiousDestinationCard key={destination.name} {...destination} index={index} />
//         ))}
//       </div>
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { useSpring, animated, useTrail } from "react-spring"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { FaBook, FaLandmark } from "react-icons/fa"
import AOS from "aos"
import "aos/dist/aos.css"

// Import images
import kibeho from "../IMAGE/kibeho.jpg"
import chruch from "../IMAGE/chruch.webp"
import regina from "../IMAGE/regina.webp"
import mosque from "../IMAGE/mosque.webp"
import seminary from "../IMAGE/seminary.jpg"
import wall from "../IMAGE/wall.webp"
import bahi from "../IMAGE/bahi.jpeg"
import sea from "../IMAGE/sea.jpeg"
import gaza from "../IMAGE/gaza.jpeg"
import temple from "../IMAGE/temple.jpeg"
import saint from "../IMAGE/saint.jpeg"
import hagia from "../IMAGE/hagia.jpeg"
import ephesus from "../IMAGE/ephesus.jpeg"
import capa from "../IMAGE/capa.jpeg"

// Define religious destinations
const religiousDestinations = {
  Rwanda: [
    {
      name: "KibehoHolyLand",
      type: "CatholicShrine",
      description: "kibehoDescription",
      significance: "kibehoSignificance",
      activities: ["kibehoActivity1", "kibehoActivity2", "kibehoActivity3", "kibehoActivity4"],
      imageSrc: kibeho,
    },
    {
      name: "ReginaPacisCathedral",
      type: "CatholicCathedral",
      description: "reginaDescription",
      significance: "reginaSignificance",
      activities: ["reginaActivity1", "reginaActivity2", "reginaActivity3", "reginaActivity4"],
      imageSrc: regina,
    },
    {
      name: "NyakibandaSeminary",
      type: "ReligiousInstitution",
      description: "nyakibandaDescription",
      significance: "nyakibandaSignificance",
      activities: ["nyakibandaActivity1", "nyakibandaActivity2", "nyakibandaActivity3", "nyakibandaActivity4"],
      imageSrc: seminary,
    },
  ],
  Israel: [
    {
      name: "WesternWall",
      type: "JewishHolySite",
      description: "westernWallDescription",
      significance: "westernWallSignificance",
      activities: ["westernWallActivity1", "westernWallActivity2", "westernWallActivity3", "westernWallActivity4"],
      imageSrc: wall,
    },
    {
      name: "ChurchOfTheHolySepulchre",
      type: "ChristianHolySite",
      description: "holySepulchreDescription",
      significance: "holySepulchreSignificance",
      activities: [
        "holySepulchreActivity1",
        "holySepulchreActivity2",
        "holySepulchreActivity3",
        "holySepulchreActivity4",
      ],
      imageSrc: chruch,
    },
    {
      name: "AlAqsaMosque",
      type: "IslamicHolySite",
      description: "alAqsaDescription",
      significance: "alAqsaSignificance",
      activities: ["alAqsaActivity1", "alAqsaActivity2", "alAqsaActivity3", "alAqsaActivity4"],
      imageSrc: mosque,
    },
    {
      name: "BahaiGardens",
      type: "BahaiHolySite",
      description: "bahaiGardensDescription",
      significance: "bahaiGardensSignificance",
      activities: ["bahaiGardensActivity1", "bahaiGardensActivity2", "bahaiGardensActivity3", "bahaiGardensActivity4"],
      imageSrc: bahi,
    },
    {
      name: "SeaOfGalilee",
      type: "MultiFaithSite",
      description: "seaOfGalileeDescription",
      significance: "seaOfGalileeSignificance",
      activities: ["seaOfGalileeActivity1", "seaOfGalileeActivity2", "seaOfGalileeActivity3", "seaOfGalileeActivity4"],
      imageSrc: sea,
    },
  ],
  Egypt: [
    {
      name: "GreatPyramidOfGiza",
      type: "AncientWonder",
      description: "pyramidDescription",
      significance: "pyramidSignificance",
      activities: ["pyramidActivity1", "pyramidActivity2", "pyramidActivity3", "pyramidActivity4"],
      imageSrc: gaza,
    },
    {
      name: "LuxorTemple",
      type: "AncientTemple",
      description: "luxorDescription",
      significance: "luxorSignificance",
      activities: ["luxorActivity1", "luxorActivity2", "luxorActivity3", "luxorActivity4"],
      imageSrc: temple,
    },
    {
      name: "SaintCatherinesMonastery",
      type: "ChristianMonastery",
      description: "saintCatherinesDescription",
      significance: "saintCatherinesSignificance",
      activities: [
        "saintCatherinesActivity1",
        "saintCatherinesActivity2",
        "saintCatherinesActivity3",
        "saintCatherinesActivity4",
      ],
      imageSrc: saint,
    },
  ],
  Turkey: [
    {
      name: "HagiaSophia",
      type: "MuseumMosque",
      description: "hagiaSophiaDescription",
      significance: "hagiaSophiaSignificance",
      activities: ["hagiaSophiaActivity1", "hagiaSophiaActivity2", "hagiaSophiaActivity3", "hagiaSophiaActivity4"],
      imageSrc: hagia,
    },
    {
      name: "Ephesus",
      type: "AncientCity",
      description: "ephesusDescription",
      significance: "ephesusSignificance",
      activities: ["ephesusActivity1", "ephesusActivity2", "ephesusActivity3", "ephesusActivity4"],
      imageSrc: ephesus,
    },
    {
      name: "Cappadocia",
      type: "NaturalWonder",
      description: "cappadociaDescription",
      significance: "cappadociaSignificance",
      activities: ["cappadociaActivity1", "cappadociaActivity2", "cappadociaActivity3", "cappadociaActivity4"],
      imageSrc: capa,
    },
  ],
}

function CountryTabs({ countries, activeCountry, setActiveCountry }) {
  const { t } = useTranslation()
  const trail = useTrail(countries.length, {
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 300, friction: 10 },
  })

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-8 px-2 sm:px-4 w-full">
      {trail.map((props, index) => (
        <animated.button
          key={countries[index]}
          style={props}
          onClick={() => setActiveCountry(countries[index])}
          className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 ${
            activeCountry === countries[index]
              ? "bg-sky-600 text-white shadow-lg transform -translate-y-1"
              : "bg-white text-gray-600 hover:bg-sky-100"
          }`}
        >
          {t(`countries.${countries[index]}`)}
        </animated.button>
      ))}
    </div>
  )
}

function TypeFilters({ filterTypes, selectedType, setSelectedType }) {
  const trail = useTrail(filterTypes.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 10 },
  })

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-4 sm:mt-6 px-2 sm:px-4">
      {trail.map((props, index) => (
        <animated.button
          key={filterTypes[index]}
          style={props}
          onClick={() => setSelectedType(filterTypes[index])}
          className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-300 ${
            selectedType === filterTypes[index]
              ? "bg-sky-600 text-white font-medium"
              : "bg-gray-100 text-gray-600 hover:bg-sky-100"
          }`}
        >
          {filterTypes[index]}
        </animated.button>
      ))}
    </div>
  )
}

function ReligiousDestinationCard({ name, type, description, significance, activities, imageSrc, index }) {
  const { t } = useTranslation()
  const getIcon = (type) => {
    return FaLandmark
  }

  const Icon = getIcon(type)

  const cardAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: index * 100,
    config: { tension: 300, friction: 10 },
  })

  return (
    <animated.div
      style={cardAnimation}
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
    >
      <div className="h-48 sm:h-56 bg-cover bg-center relative" style={{ backgroundImage: `url(${imageSrc})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-4 left-4 text-white">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
            <span className="px-2 sm:px-3 py-1 text-xs font-medium bg-white/20 rounded-full backdrop-blur-sm">
              {t(`destinationTypes.${type}`)}
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{t(`destination.${name}.name`)}</h3>
        <p className="text-gray-600 text-sm mb-4">{t(`destination.${name}.description`)}</p>
        <div className="bg-sky-100 p-3 sm:p-4 rounded-lg mb-4">
          <h4 className="font-medium text-sky-500 mb-1 sm:mb-2">{t("destini.religiousSignificance")}:</h4>
          <p className="text-xs sm:text-sm text-sky-750">{t(`destination.${name}.significance`)}</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900">{t("destini.sacredActivities")}:</h4>
          <div className="grid grid-cols-2 gap-2">
            {activities.map((activity, i) => (
              <div key={i} className="flex items-center text-xs sm:text-sm text-gray-600">
                <FaBook className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-sky-600" />
                {t(`destination.${name}.activities.${i}`)}
              </div>
            ))}
          </div>
        </div>
        <button className="mt-4 sm:mt-6 w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-500 transition-colors duration-300 text-sm sm:text-base">
          {t("destini.planPilgrimage")}
        </button>
      </div>
    </animated.div>
  )
}

export default function Destiny() {
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const [activeCountry, setActiveCountry] = useState("Rwanda")
  const [selectedType, setSelectedType] = useState("All")

  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-out" })
  }, [])

  const headerAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 10 },
  })

  const filterTypes = ["All", "Multi-Faith"]

  const filteredDestinations =
    selectedType === "All"
      ? religiousDestinations[activeCountry]
      : religiousDestinations[activeCountry].filter((dest) => dest.type.includes(selectedType))

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <animated.div
        style={headerAnimation}
        className="flex relative flex-col items-center self-stretch px-5 sm:px-10 lg:px-20 pt-24 sm:pt-32 lg:pt-10 pb-12 w-full text-white min-h-[400px]"
        data-aos="zoom-out"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/088997ce7ceb1872cdd23f020fa61a21e9d406941f1c5e79d3e1cb275d67fd00"
          className="absolute inset-0 object-cover w-full h-full blur-sm"
          alt={t("destini.backgroundAlt")}
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute top-4 right-4 z-10"></div>
        <div className="flex relative flex-col justify-start items-center px-2 w-full sm:px-2 sm:pt-10 md:px-20 md:pt-24">
          <div className="px-2 py-4  text-2xl  mt-10 sm:px-8 sm:py-6 md:px-12 md:py-9 mb-0 text-center bg-transparent border-white border-solid bg-opacity-0 border-4 sm:border-8 md:border-[10px] w-[80%] max-w-[496px]">
            {t("destini.title")}
          </div>
          <div className="mt-12 sm:mt-15 flex flex-row justify-center">{t("destini.subtitle")}</div>
        </div>
      </animated.div>

      <CountryTabs
        countries={Object.keys(religiousDestinations)}
        activeCountry={activeCountry}
        setActiveCountry={setActiveCountry}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {filteredDestinations.map((destination, index) => (
          <ReligiousDestinationCard key={destination.name} {...destination} index={index} />
        ))}
      </div>
    </div>
  )
}

