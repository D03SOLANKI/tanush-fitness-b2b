import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // STRENGTH EQUIPMENT
  {
    id: 'titanforge-power-rack-pro',
    name: 'TitanForge Pro Series Modular Commercial Power Rack',
    brand: 'TitanForge',
    category: 'Strength Equipment',
    categoryId: 'strength',
    rating: 4.9,
    reviewCount: 42,
    inStock: true,
    leadTime: '3-5 Business Days',
    badge: 'Top Commercial Seller',
    minOrderQty: 1,
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Ultra-heavy 7-gauge steel 3x3 uprights built for 24/7 commercial strength zones. Features laser-cut hole numbering, stainless steel J-cups, integrated band pegs, and multi-grip chin bar.',
    specs: {
      'Steel Gauge': '7-Gauge (3.75mm heavy structural tubing)',
      'Dimensions (L x W x H)': '64" x 49" x 93"',
      'Weight Capacity': '2,500 lbs Static Load',
      'Upright Pattern': '2" Hole Center Spacing with Laser Engraved Numbers',
      'Warranty': 'Lifetime Structural Frame',
      'Certification': 'ISO 9001 / EN 957 COMMERCIAL & RESIDENTIAL GRADE'
    },
    vendor: {
      id: 'v-titanforge',
      name: 'TitanForge Commercial Direct',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80',
      verified: true,
      rating: 4.95,
      responseRate: '100% (Avg 15 mins)',
      fulfillmentRate: '99.8% On-Time Freight',
      location: 'Austin, TX · Commercial Manufacturer'
    },
    features: [
      'Heavy 3x3" 7-gauge structural steel frame with electrostatic powder coat',
      'Laser-cut numerical markers on all four sides of uprights',
      'UHMW plastic lined J-cups protect barbell knurling',
      'Includes multi-grip pull-up station with knurled handles'
    ]
  },
  {
    id: 'powercore-dual-cable-trainer',
    name: 'PowerCore Industrial Dual Cable Functional Trainer 300lb Stacks',
    brand: 'PowerCore',
    category: 'Strength Equipment',
    categoryId: 'strength',
    rating: 4.95,
    reviewCount: 38,
    inStock: true,
    leadTime: '2-4 Business Days',
    badge: 'B2B Recommended',
    minOrderQty: 1,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Precision engineered dual-stack pulley system with 30-position swivel pulleys. Commercial-grade aviation cables rated to 4,200 lbs tensile strength for smooth athletic training.',
    specs: {
      'Weight Stacks': 'Dual 300 lb Solid Steel Machined Stacks',
      'Cable Ratio': '2:1 Mechanical Advantage',
      'Cable Rating': '4,200 lbs Tensile Strength Aircraft Cable',
      'Dimensions': '44" x 68" x 90"',
      'Pulley Adjustment': '30 Laser-Etched Vertical Height Stations',
      'Warranty': '10-Year Frame / 5-Year Weight Stack'
    },
    vendor: {
      id: 'v-powercore',
      name: 'PowerCore Systems USA',
      logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=200&q=80',
      verified: true,
      rating: 4.9,
      responseRate: '99% (Avg 30 mins)',
      fulfillmentRate: '99.5% Freight Accuracy',
      location: 'Chicago, IL · Commercial Supplier'
    },
    features: [
      'Dual independent weight stacks allow simultaneous 2-person workouts',
      '180-degree rotating swivelling pulley heads',
      'Integrated rock-climbing grips and multi-angle chin bar',
      'Full steel protective shroud enclosures'
    ]
  },
  {
    id: 'titanforge-iso-leg-press',
    name: 'TitanForge 45-Degree Plate Loaded Commercial Leg Press',
    brand: 'TitanForge',
    category: 'Strength Equipment',
    categoryId: 'strength',
    rating: 4.8,
    reviewCount: 26,
    inStock: true,
    leadTime: '3-5 Business Days',
    badge: 'Heavy Duty',
    minOrderQty: 1,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Designed for massive leg development with zero frame flex. Features dual linear guide rods with linear bearings, extra large diamond plate footplate, and multi-position adjustable back pad.',
    specs: {
      'Max Load Rating': '2,000 lbs Plate Weight',
      'Footplate Size': '30" x 24" Heavy Gauge Diamond Steel Plate',
      'Seat Adjustment': '4 Backrest Angle Options',
      'Dimensions': '88" x 60" x 58"',
      'Warranty': '10-Year Frame'
    },
    vendor: {
      id: 'v-titanforge',
      name: 'TitanForge Commercial Direct',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80',
      verified: true,
      rating: 4.95,
      responseRate: '100% (Avg 15 mins)',
      fulfillmentRate: '99.8% On-Time Freight',
      location: 'Austin, TX · Commercial Manufacturer'
    },
    features: [
      'Precision linear bearing system ensures frictionless movement',
      'Quad plate loading horns fit Olympic bumper plates',
      'Dual safety lock handles with instant safety catches'
    ]
  },

  // CARDIO EQUIPMENT
  {
    id: 'elitemotion-ultrarun-curved-treadmill',
    name: 'EliteMotion UltraRun Commercial Curved Motorless Treadmill',
    brand: 'EliteMotion',
    category: 'Cardio Equipment',
    categoryId: 'cardio',
    rating: 4.96,
    reviewCount: 67,
    inStock: true,
    leadTime: '2-4 Business Days',
    badge: 'Zero Utility Cost',
    minOrderQty: 1,
    image: 'https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Commercial motorless curved runner powered entirely by user stride. Heavy vulcanized rubber slat belt delivers up to 30% higher calorie burn compared to traditional electric treadmills.',
    specs: {
      'Slat Belt Deck': '60 Vulcanized Rubber Slats with 120 Sealed Ball Bearings',
      'Running Surface': '18" x 67" Curved Radius',
      'Max User Weight': '450 lbs',
      'Resistance Levels': '6-Level Magnetic Resistance Lever for Sled Pushing',
      'Warranty': '10-Year Belt & Frame'
    },
    vendor: {
      id: 'v-elitemotion',
      name: 'EliteMotion Commercial Cardio',
      logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=200&q=80',
      verified: true,
      rating: 4.94,
      responseRate: '100% (Avg 10 mins)',
      fulfillmentRate: '99.9% On-Time Delivery',
      location: 'San Jose, CA · Smart Cardio Labs'
    },
    features: [
      'User-controlled speed — sprint instantaneously without motor lag',
      'Integrated magnetic resistance lever converts runner into sled press',
      'Bluetooth & ANT+ pulse rate integration'
    ]
  },
  {
    id: 'velocitypro-air-bike-titanium',
    name: 'Velocity Pro Heavy Fan Commercial Air Bike',
    brand: 'Velocity Pro',
    category: 'Cardio Equipment',
    categoryId: 'cardio',
    rating: 4.88,
    reviewCount: 82,
    inStock: true,
    leadTime: '1-3 Business Days',
    badge: 'HIIT Studio Standard',
    minOrderQty: 2,
    image: 'https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Built with 27" steel resistance fan blade and sealed cartridge bearings. Designed to take brutal punishment in CrossFit boxes, HIIT group studios, and commercial weight rooms.',
    specs: {
      'Fan Blade': '27-Inch Steel Wind Resistance Turbine',
      'Drive System': 'Heavy Duty Stage-2 Belt Drive (Maintenance Free)',
      'Frame Weight': '145 lbs All-Steel Chassis',
      'Warranty': '5-Year Frame'
    },
    vendor: {
      id: 'v-velocitypro',
      name: 'Velocity Pro Equipment Co',
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200&q=80',
      verified: true,
      rating: 4.89,
      responseRate: '97% (Avg 1 hr)',
      fulfillmentRate: '99.2% Freight Accuracy',
      location: 'Columbus, OH · Athletic Cardio'
    },
    features: [
      'Stage-2 belt drive eliminates noisy chain oiling and links slipping',
      'Reinforced steel pegs allow upper-body isolated calorie burn',
      'Multi-axis seat post adjustment'
    ]
  },

  // FREE WEIGHTS
  {
    id: 'primefit-dumbbells-5-100',
    name: 'PrimeFit Urethane Dumbbell Set (5 - 100 lbs) + 3-Tier Rack',
    brand: 'PrimeFit',
    category: 'Free Weights',
    categoryId: 'free-weights',
    rating: 4.97,
    reviewCount: 54,
    inStock: true,
    leadTime: '3-6 Business Days',
    badge: 'Complete Pack',
    minOrderQty: 1,
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Complete 20-pair CPU high-density urethane dumbbell set from 5 to 100 lbs in 5 lb increments. Includes heavy 7-gauge 3-tier commercial rack with protective plastic saddle channels.',
    specs: {
      'Head Material': 'Solid Steel Core Encased in Premium CPU Urethane',
      'Handle Coating': 'Hard Chrome Plated Medium Knurl Steel Shaft',
      'Set Weight': '2,100 lbs Total Dumbbell Mass',
      'Warranty': '5-Year Zero-Loosening Guarantee'
    },
    vendor: {
      id: 'v-primefit',
      name: 'PrimeFit Commercial & Residential Gear',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80',
      verified: true,
      rating: 4.92,
      responseRate: '98% (Avg 45 mins)',
      fulfillmentRate: '99.0% On-Time Freight',
      location: 'Denver, CO · Weights Supplier'
    },
    features: [
      'CPU urethane will not crack, peel, fade, or mark gym floor surfaces',
      'Press-fit welded shaft heads eliminate head spinning or loosening',
      'Custom laser-engraved weight indicators on end caps'
    ]
  },
  {
    id: 'titanforge-bumper-plates-set',
    name: 'TitanForge Competition Color Rubber Bumper Plates (1,000 kg Bulk Pack)',
    brand: 'TitanForge',
    category: 'Free Weights',
    categoryId: 'free-weights',
    rating: 4.91,
    reviewCount: 33,
    inStock: true,
    leadTime: '2-4 Business Days',
    badge: 'IWF Spec Color Code',
    minOrderQty: 1,
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'High-density virgin rubber bumper plates with nickel-plated steel center hub inserts. Calibrated within +/- 10 grams of weight tolerance.',
    specs: {
      'Collar Opening': '50.4mm Standard Olympic Opening',
      'Durometer Rating': '88 Shore A for Low Dead Bounce',
      'Insert Hub': 'Hardened Chrome Coated Steel Insert',
      'Warranty': '3-Year Commercial Warranty'
    },
    vendor: {
      id: 'v-titanforge',
      name: 'TitanForge Commercial Direct',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80',
      verified: true,
      rating: 4.95,
      responseRate: '100% (Avg 15 mins)',
      fulfillmentRate: '99.8% On-Time Freight',
      location: 'Austin, TX · Commercial Manufacturer'
    },
    features: [
      'Strict IWF color coding (Red 25kg, Blue 20kg, Yellow 15kg, Green 10kg)',
      'Low dead bounce protects platform flooring under heavy Olympic drops'
    ]
  },

  // FUNCTIONAL TRAINING
  {
    id: 'titanforge-wall-rig-custom',
    name: 'TitanForge Matrix Modular 24ft Wall-Mounted Functional Rig',
    brand: 'TitanForge',
    category: 'Functional Training',
    categoryId: 'functional',
    rating: 4.94,
    reviewCount: 29,
    inStock: true,
    leadTime: '5-7 Business Days',
    badge: 'Custom Architecture',
    minOrderQty: 1,
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Modular wall-mounted rig system with 6 lifting bays, monkey bar bridges, landmine stations, and wall ball target panels for group functional classes.',
    specs: {
      'Steel Spec': '3" x 3" 11-Gauge Structural Tubing',
      'Bay Count': '6 Lifting Stations + 4 Pull-Up Zones',
      'Warranty': 'Lifetime Structural Frame'
    },
    vendor: {
      id: 'v-titanforge',
      name: 'TitanForge Commercial Direct',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80',
      verified: true,
      rating: 4.95,
      responseRate: '100% (Avg 15 mins)',
      fulfillmentRate: '99.8% On-Time Freight',
      location: 'Austin, TX · Commercial Manufacturer'
    },
    features: [
      'Expandable modular design allows unlimited length additions',
      'Includes J-cups, dip attachments, and landmines for every station'
    ]
  },

  // FLOORING
  {
    id: 'primefit-rubber-flooring-15mm',
    name: 'PrimeFit Heavy Shock-Absorbing Rubber Flooring Tiles (15mm)',
    brand: 'PrimeFit',
    category: 'Flooring',
    categoryId: 'flooring',
    rating: 4.92,
    reviewCount: 61,
    inStock: true,
    leadTime: '2-3 Business Days',
    badge: 'Pallet Bulk Direct',
    minOrderQty: 50,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Interlocking 1 meter x 1 meter 15mm dense rubber tiles crafted from SBR recycled rubber with EPDM color flecks. Provides sound dampening and floor protection.',
    specs: {
      'Tile Size': '1m x 1m x 15mm (3.28ft x 3.28ft)',
      'Density': '950 kg/m³ Ultra-Dense Vulcanized Core',
      'Warranty': '5-Year Commercial Wear Warranty'
    },
    vendor: {
      id: 'v-primefit',
      name: 'PrimeFit Commercial & Residential Gear',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80',
      verified: true,
      rating: 4.92,
      responseRate: '98% (Avg 45 mins)',
      fulfillmentRate: '99.0% On-Time Freight',
      location: 'Denver, CO · Weights Supplier'
    },
    features: [
      'Seamless interlocking connector pins keep tiles locked without adhesive',
      'Low odor anti-microbial formulation'
    ]
  },

  // LOCKERS
  {
    id: 'powercore-digital-keypad-lockers',
    name: 'PowerCore Heavy Phenolic Keyless Digital Locker System (12 Bay)',
    brand: 'PowerCore',
    category: 'Lockers',
    categoryId: 'lockers',
    rating: 4.89,
    reviewCount: 18,
    inStock: true,
    leadTime: '4-6 Business Days',
    badge: 'Keyless RFID / Pin',
    minOrderQty: 1,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Waterproof, impact-resistant solid phenolic locker modules with touch-keypad digital electronic locks. Ideal for high humidity commercial locker rooms.',
    specs: {
      'Material': 'Waterproof Solid Phenolic Core Board (Compact Laminate)',
      'Locking Mechanism': 'Keypad PIN & RFID Smart Card Master Override',
      'Warranty': '10-Year Board / 2-Year Digital Lock Engine'
    },
    vendor: {
      id: 'v-powercore',
      name: 'PowerCore Systems USA',
      logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=200&q=80',
      verified: true,
      rating: 4.9,
      responseRate: '99% (Avg 30 mins)',
      fulfillmentRate: '99.5% Freight Accuracy',
      location: 'Chicago, IL · Commercial Supplier'
    },
    features: [
      'Rust-proof, scratch-proof, and anti-graffiti surface',
      'Integrated USB mobile phone charging ports inside each locker'
    ]
  },

  // ACCESSORIES
  {
    id: 'primefit-cable-attachment-pack',
    name: 'PrimeFit Stainless Commercial Cable Attachment Master Pack (10 Piece)',
    brand: 'PrimeFit',
    category: 'Accessories',
    categoryId: 'accessories',
    rating: 4.95,
    reviewCount: 45,
    inStock: true,
    leadTime: '1-2 Business Days',
    badge: 'Complete Cable Suite',
    minOrderQty: 1,
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Stainless steel cable attachments with knurled ergonomic rubber grips and revolving swivels. Includes lat bar, row handle, tricep rope, D-handles, and ankle straps.',
    specs: {
      'Finish': 'Hard Chrome Plated High Carbon Steel',
      'Included Accessories': '10 Commercial & Residential Handles + Wall Storage Rack',
      'Warranty': '2-Year Full Replacement Guarantee'
    },
    vendor: {
      id: 'v-primefit',
      name: 'PrimeFit Commercial & Residential Gear',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80',
      verified: true,
      rating: 4.92,
      responseRate: '98% (Avg 45 mins)',
      fulfillmentRate: '99.0% On-Time Freight',
      location: 'Denver, CO · Weights Supplier'
    },
    features: [
      'Smooth 360-degree fluid swivel bearings prevent cable kinking',
      'Includes heavy-duty steel wall mounting rack'
    ]
  }
];
