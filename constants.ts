import { ServiceCategory, Stylist, GalleryItem, FaqItem } from './types';

export const BOOKING_URL = "https://bubbalicioushairandco.square.site/s/appointments";

// Local image paths (Absolute path from public root)
const BLONDE_HERO_IMG = "/images/hero-blonde.jpeg";

export const CONTACT_INFO = {
  address: "Shop 14, 743-757 Deception Bay Rd",
  city: "Rothwell, QLD 4022",
  phone: "0422 173 177",
  email: "bubbalicioushairandco@gmail.com",
  mapLink: "https://maps.app.goo.gl/QHit7pfX6LS9iNHm9",
  socials: {
    instagram: "https://www.instagram.com/bubbalicioushairandco/",
    facebook: "https://www.facebook.com/bubbalicioushairandco/",
    tiktok: "https://www.tiktok.com/@bubbalicioushairandco"
  },
  hours: [
    { day: "Tuesday", time: "9:00am - 5:00pm" },
    { day: "Wednesday", time: "9:00am - 5:00pm" },
    { day: "Thursday", time: "9:00am - 8:00pm" },
    { day: "Friday", time: "9:00am - 5:00pm" },
    { day: "Saturday", time: "8:00am - 2:00pm" },
    { day: "Sunday - Monday", time: "Closed" }
  ]
};

export const HERO_IMAGES = [
  {
    src: BLONDE_HERO_IMG, 
    alt: "Blonde Specialist Working",
    heading: "Effortless Colour.",
    subheading: "Rothwell's premier destination for lived-in blonde."
  },
  {
    src: "/images/hero-extensions.jpeg",
    alt: "Long Blonde Hair Extensions",
    heading: "Luxury Extensions.",
    subheading: "Seamless invisible wefts for volume and length."
  },
  {
    src: "/images/hero-salon.jpeg",
    alt: "Salon Interior",
    heading: "Relaxed Luxury.",
    subheading: "A welcoming space where you can truly unwind."
  }
];

export const SERVICES_DATA: ServiceCategory[] = [
  {
    title: "Colour Book",
    items: [
      { id: 'cb1', name: "Regrowth – Short", price: "2 hrs 15 mins", description: "SHORT HAIR IS CONSIDERED ANYTHING THAT IS ABOVE/ON THE SHOULDERS." },
      { id: 'cb2', name: "Regrowth – Medium", price: "2 hrs 30 mins", description: "MEDIUM HAIR IS CONSIDERED ANYTHING PAST THE COLLARBONE BUT ABOVE THE ARMPIT." },
      { id: 'cb3', name: "Regrowth – Long", price: "2 hrs", description: "LONG HAIR IS CONSIDERED ANYTHING PAST THE ARMPIT BUT ABOVE THE BRA STRAP." },
      { id: 'cb4', name: "Regrowth – X-Long", price: "2 hrs", description: "X-LONG HAIR IS CONSIDERED ANYTHING PAST BRA STRAP LENGTH." },
      { id: 'cb5', name: "Global Colour – Short", price: "2 hrs 30 mins", description: "SHORT HAIR IS CONSIDERED ANYTHING THAT IS ABOVE/ON THE SHOULDERS." },
      { id: 'cb6', name: "Global Colour – Medium", price: "2 hrs 30 mins", description: "MEDIUM HAIR IS CONSIDERED ANYTHING PAST THE COLLARBONE BUT ABOVE THE ARMPIT." },
      { id: 'cb7', name: "Global Colour – Long", price: "3 hrs", description: "LONG HAIR IS CONSIDERED ANYTHING PAST THE ARMPIT BUT ABOVE THE BRA STRAP." },
      { id: 'cb8', name: "Global Colour – X-Long", price: "3 hrs", description: "X-LONG HAIR IS CONSIDERED ANYTHING PAST BRA STRAP LENGTH." },
      { id: 'cb9', name: "Vivid Colour Package", price: "From $125", description: "3 hrs 30 mins. Includes lightening, vivid colouring, treatment, and styling." },
    ]
  },
  {
    title: "Keratin Smoothing",
    items: [
      { id: 'ks1', name: "Keratin Smoothing – Short", price: "3 hrs", description: "Designed for frizz control and sleek results for short hair." },
      { id: 'ks2', name: "Keratin Smoothing – Medium", price: "3 hrs 30 mins", description: "Smooths medium hair, reduces frizz, and enhances shine." },
      { id: 'ks3', name: "Keratin Smoothing – Long", price: "3 hrs 30 mins", description: "Long-lasting frizz control and polished look for long hair." },
      { id: 'ks4', name: "Keratin Smoothing – XL", price: "3 hrs 45 mins", description: "Extra-long hair treatment for smooth, manageable strands." },
    ]
  },
  {
    title: "Hair Extensions",
    items: [
      { id: 'he1', name: "Tinsel", price: "45 mins", description: "Adds coloured tinsel strands, secured by hand-tie or beads." },
      { id: 'he2', name: "Tape Extensions Removal", price: "1 hr 30 mins", description: "Removal of tape-in extensions only." },
      { id: 'he3', name: "Tape Maintenance – 100g", price: "3 hrs 30 mins", description: "Removal, retaping, washing, reapplication, cut, and style." },
      { id: 'he4', name: "Tape Maintenance – 150g", price: "3 hrs 30 mins", description: "Same as above, for 150g of extensions." },
      { id: 'he5', name: "Tape Maintenance – 200g", price: "3 hrs 30 mins", description: "Same as above, for 200g of extensions." },
      { id: 'he6', name: "Keratin Bond BYO – 150g", price: "3 hrs 30 mins", description: "Consultation, wash, treatment, blowdry, application, cut, and style." },
      { id: 'he7', name: "Keratin Bond BYO – 200g", price: "4 hrs 30 mins", description: "THIS SERVICE DOES NOT INCLUDE THE HAIR, YOU CAN BYO OR BUY FROM OUR SUPPLIER." },
      { id: 'he8', name: "Keratin Bonds BYO – 100g", price: "4 hrs", description: "THIS SERVICE DOES NOT INCLUDE THE HAIR, YOU CAN BYO OR BUY FROM OUR SUPPLIER." },
      { id: 'he9', name: "Keratin Bond Removal", price: "2 hrs 30 mins", description: "Removal of keratin bond extensions only." },
      { id: 'he10', name: "Keratin Bond Maintenance – 100g", price: "3 hrs 30 mins", description: "Removal, rebonding, washing, reapplication, cut, and style." },
      { id: 'he11', name: "Keratin Bond Maintenance – 150g", price: "3 hrs 30 mins", description: "Same as above, for 150g of extensions." },
      { id: 'he12', name: "Keratin Bond Maintenance – 200g", price: "4 hrs 30 mins", description: "Same as above, for 200g of extensions." },
      { id: 'he13', name: "Tape BYO Hair – 100g", price: "2 hrs 30 mins", description: "Professional application of tape-in extensions with BYO hair." },
      { id: 'he14', name: "Tape BYO Hair – 150g", price: "2 hrs 30 mins", description: "Same as above, for 150g of hair." },
      { id: 'he15', name: "Tape BYO Hair – 200g", price: "3 hrs", description: "Same as above, for 200g of hair." },
      { id: 'he16', name: "18\" 100g Tape Extensions", price: "3 hrs 30 mins", description: "Includes premium hair, wash, treatment, blowdry, cut, style, and take-home care pack." },
      { id: 'he17', name: "18\" 150g Tape Extensions", price: "3 hrs 30 mins", description: "Same as above, with 150g of hair." },
      { id: 'he18', name: "18\" 200g Tape Extensions", price: "4 hrs", description: "Same as above, with 200g of hair." },
      { id: 'he19', name: "Custom Clip-In + Install", price: "2 hrs 30 mins", description: "Adds pops of colour/design with Russian hair clip-ins." },
      { id: 'he20', name: "18\" Keratin Bond – 50g", price: "3 hrs 30 mins", description: "Includes premium hair, wash, treatment, blowdry, cut, style, and care pack." },
      { id: 'he21', name: "18\" Keratin Bond – 100g", price: "3 hrs 30 mins", description: "Same as above, with 100g of hair." },
      { id: 'he22', name: "18\" Keratin Bond – 150g", price: "4 hrs 30 mins", description: "Same as above, with 150g of hair." },
      { id: 'he23', name: "18\" Keratin Bond – 200g", price: "5 hrs", description: "Same as above, with 200g of hair." },
      { id: 'he24', name: "21\" Butterfly Weft – 50g", price: "3 hrs", description: "Lightweight, natural look weft installation." },
      { id: 'he25', name: "21\" Butterfly Weft – 100g", price: "3 hrs", description: "Same as above, with 100g of hair." },
      { id: 'he26', name: "21\" Butterfly Weft – 150g", price: "3 hrs", description: "Same as above, with 150g of hair." },
      { id: 'he27', name: "21\" Butterfly Weft – 200g", price: "3 hrs", description: "Same as above, with 200g of hair." },
      { id: 'he28', name: "Butterfly Weft Removal", price: "1 hr", description: "Removal of butterfly weft extensions." },
    ]
  },
  {
    title: "Foils",
    items: [
      { id: 'f1', name: "Half Head of Foils – Short", price: "3 hrs 30 mins", description: "SHORT HAIR IS CONSIDERED ANYTHING THAT IS ABOVE/ON THE SHOULDERS." },
      { id: 'f2', name: "Half Head of Foils – Medium", price: "3 hrs 30 mins", description: "MEDIUM HAIR IS CONSIDERED ANYTHING PAST THE COLLARBONE BUT ABOVE THE ARMPIT." },
      { id: 'f3', name: "Half Head of Foils – Long", price: "4 hrs", description: "LONG HAIR IS CONSIDERED ANYTHING PAST THE ARMPIT BUT ABOVE THE BRA STRAP." },
      { id: 'f4', name: "Half Head of Foils – X-Long", price: "4 hrs 30 mins", description: "X-LONG HAIR IS CONSIDERED ANYTHING PAST BRA STRAP LENGTH." },
      { id: 'f5', name: "Full Head Foils – Short", price: "3 hrs 45 mins", description: "SHORT HAIR IS CONSIDERED ANYTHING THAT IS ABOVE/ON THE SHOULDERS." },
      { id: 'f6', name: "Full Head Foils – Medium", price: "4 hrs 15 mins", description: "MEDIUM HAIR IS CONSIDERED ANYTHING PAST THE COLLARBONE BUT ABOVE THE ARMPIT." },
      { id: 'f7', name: "Full Head Foils – Long", price: "4 hrs 30 mins", description: "LONG HAIR IS CONSIDERED ANYTHING PAST THE ARMPIT BUT ABOVE THE BRA STRAP." },
      { id: 'f8', name: "Full Head Foils – X-Long", price: "5 hrs", description: "X-LONG HAIR IS CONSIDERED ANYTHING PAST BRA STRAP LENGTH." },
      { id: 'f9', name: "T-Section Foils", price: "3 hrs", description: "Foils applied to T-section, includes toner, treatment, massage, and styling." },
    ]
  },
  {
    title: "Balayage",
    items: [
      { id: 'b1', name: "Balayage – Short", price: "3 hrs 30 mins", description: "OUR SHORT HAIR BALAYAGE PACKAGE IS FOR THOSE WHO HAIR SITS ABOVE/ON THE SHOULDERS." },
      { id: 'b2', name: "Balayage – Medium", price: "3 hrs 30 mins", description: "MEDIUM HAIR IS CONSIDERED ANYTHING PAST THE COLLARBONE BUT ABOVE THE ARMPIT." },
      { id: 'b3', name: "Balayage – Long", price: "4 hrs 30 mins", description: "LONG HAIR IS CONSIDERED ANYTHING PAST THE ARMPIT BUT ABOVE THE BRA STRAP." },
      { id: 'b4', name: "Balayage – X-Long", price: "4 hrs 30 mins", description: "X-LONG HAIR IS CONSIDERED ANYTHING PAST BRA STRAP LENGTH." },
    ]
  },
  {
    title: "Blowdry & Styling",
    items: [
      { id: 'bs1', name: "Shampoo Only", price: "15 mins", description: "Refreshing shampoo, scalp massage, and light dry for a clean natural look." },
      { id: 'bs2', name: "Straighten", price: "30 mins", description: "Deluxe hair straightening for sleek, polished style." },
      { id: 'bs3', name: "Blowdry – Short", price: "45 mins", description: "SHORT HAIR IS CONSIDERED ANYTHING THAT IS ABOVE/ON THE SHOULDERS." },
    ]
  }
];

export const POLICIES_DATA = [
    {
        title: "1. Hair Extensions",
        content: "All extension services begin with a private consultation for colour matching, length selection, and a personalised quote. We exclusively use ethically sourced, premium-quality hair to ensure the most natural and long-lasting results. Once your custom hair order has been placed, the hair is non-refundable. We cannot guarantee the wear, longevity, or condition of hair extensions that were not supplied or installed by our salon. Full aftercare guidance is provided at your appointment — correct home care is essential to maintain your results. We are not responsible for any slippage, damage, or any issues if; the aftercare guide is not followed, or products which are not recommended/extension safe are used."
    },
    {
        title: "2. Deposits",
        content: "All bookings require a non-refundable deposit to confirm your appointment. This will be sent to you via email or SMS upon booking. Once the deposit is paid the booking will be confirmed. If you do not pay the deposit the appointment will not be accepted, this will result in rescheduling your appointment. Your deposit will be deducted from the total service cost on the day of your appointment. Deposits are not transferable to other clients or services. Deposit Amount: Services over $100 (not including extensions): $75. New extensions appointment: $75 + cost of hair. Services under $100: $25."
    },
    {
        title: "3. Cancellations & Rescheduling",
        content: "A minimum of 48 hours’ notice is required to cancel or reschedule your appointment. If given, your deposit will be held as a credit for future appointments or product purchases. Less than 48 hours notice will result in the loss of your deposit. For extension bookings, if hair has been ordered prior to cancellation, you can collect the hair within 1 week of the cancellation."
    },
    {
        title: "4. No-Show Policy",
        content: "Failure to attend your appointment without notice will result in your deposit being forfeited. Multiple no-shows may require full prepayment for future bookings."
    },
    {
        title: "5. Late Arrivals",
        content: "We understand life happens — however, arriving late may reduce the time available for your service or require rescheduling. 15+ minutes late — Your appointment may be rescheduled and your deposit forfeited."
    },
    {
        title: "6. Our Promise to You",
        content: "We respect your time and trust — and in return, we ask for the same. Our salon policies allow us to dedicate the time, skill, and artistry required to deliver flawless results with every appointment. By booking with Bubbalicious Hair and Co, you confirm you have read and agree to these policies."
    }
];

export const TEAM_DATA: Stylist[] = [
  {
    id: 'st1',
    name: "Brittany",
    role: "Salon Director",
    specialty: "Blonde & Extension Specialist",
    bio: "The heart of Bubbalicious. Brittany specializes in major transformations and creating that perfect creamy blonde.",
    image: "/images/team-brittany.jpeg"
  },
  {
    id: 'st2',
    name: "Courtney",
    role: "Senior Stylist",
    specialty: "Lived-In Colour",
    bio: "Courtney loves creating low-maintenance, sun-kissed looks that grow out seamlessly.",
    image: "/images/team-courtney.jpeg"
  },
  {
    id: 'st3',
    name: "Ash",
    role: "Emerging Stylist",
    specialty: "Styling & Foiling",
    bio: "Our rising star, Ash creates the bounciest blow dries and precise foil work.",
    image: "/images/team-ash.jpeg"
  }
];

export const REVIEWS_DATA = [
  {
    id: 1,
    name: "Jessica M.",
    text: "The only place I trust with my blonde! Brittany and the team always make me feel so welcome and I walk out feeling like a new person. The weft extensions are invisible!",
    stars: 5
  },
  {
    id: 2,
    name: "Sarah K.",
    text: "Finally found a salon in Rothwell that understands 'lived-in' colour. No harsh lines, just beautiful blending. Highly recommend.",
    stars: 5
  },
  {
    id: 3,
    name: "Emma P.",
    text: "Such a beautiful vibe in the salon. The girls are hilarious and so professional. My extensions have never looked better.",
    stars: 5
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  { id: 'g1', src: "/images/gallery-blonde.jpeg", category: 'Blonde', caption: 'Creamy Blonde' },
  { id: 'g2', src: "/images/gallery-balayage.jpeg", category: 'Balayage', caption: 'Root Melt' },
  { id: 'g3', src: "/images/gallery-extensions.jpeg", category: 'Extensions', caption: '22 Inch Weft' },
  { id: 'g4', src: "/images/gallery-corrective.jpeg", category: 'Corrective', caption: 'Colour Correction' },
  { id: 'g5', src: "/images/gallery-faceframe.jpeg", category: 'Blonde', caption: 'Face Frame' },
  { id: 'g6', src: "/images/gallery-volume.jpeg", category: 'Extensions', caption: 'Volume Booster' },
  { id: 'g7', src: "/images/gallery-caramel.jpeg", category: 'Balayage', caption: 'Caramel Tones' },
  { id: 'g8', src: "/images/gallery-banding.jpeg", category: 'Corrective', caption: 'Banding Fix' },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "Do you offer Afterpay or ZipPay?",
    answer: "Yes! We offer both Afterpay and ZipPay in-salon so you can get your dream hair now and pay later."
  },
  {
    question: "How do I book an extension consultation?",
    answer: "We offer complimentary 15-minute consultations. Please book this via our online booking link or call 0422 173 177."
  },
  {
    question: "What is your deposit policy?",
    answer: "A $50 non-refundable deposit is required for all colour and extension services to secure your appointment time."
  }
];