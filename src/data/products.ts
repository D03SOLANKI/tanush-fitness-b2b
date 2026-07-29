import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // STRENGTH EQUIPMENT (8 Products)
  {
    id: 'titanforge-power-rack-pro',
    name: 'TitanForge Pro Series Modular Commercial Power Rack',
    brand: 'TitanForge',
    category: 'Commercial Strength Equipment',
    categoryId: 'strength-equipment',
    price: 4850,
    bulkPrice: 4250,
    bulkThreshold: 3,
    rating: 4.9,
    reviewCount: 42,
    inStock: true,
    leadTime: '3-5 Business Days',
    badge: 'Top Commercial Seller',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Ultra-heavy 7-gauge steel 3x3 uprights built for 24/7 commercial strength zones. Features laser-cut hole numbering, stainless steel J-cups, integrated band pegs, multi-grip chin bar, and optional plate storage pins.',
    specs: {
      'Steel Gauge': '7-Gauge (3.75mm heavy structural tubing)',
      'Dimensions (L x W x H)': '64" x 49" x 93" (162cm x 124cm x 236cm)',
      'Weight Capacity': '2,500 lbs (1,133 kg) Static Load',
      'Upright Pattern': '2" Hole Center Spacing with Laser Engraved Numbers',
      'Warranty': 'Lifetime Structural Frame / 3-Year Hardware & Cables',
      'Certification': 'ISO 9001 / EN 957 Commercial Grade'
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
      'Heavy 3x3" 7-gauge structural steel frame with matte electrostatic powder coat',
      'Laser-cut numerical markers on all four sides of uprights',
      'UHMW plastic lined J-cups and flip-down safety bars protect barbell knurling',
      'Includes multi-grip pull-up station with knurled rubber handles',
      'Expandable modular design for cables, band pegs, and landmines'
    ]
  },
  {
    id: 'powercore-dual-cable-trainer',
    name: 'PowerCore Industrial Dual Cable Functional Trainer 300lb Stacks',
    brand: 'PowerCore',
    category: 'Commercial Strength Equipment',
    categoryId: 'strength-equipment',
    price: 6490,
    bulkPrice: 5890,
    bulkThreshold: 2,
    rating: 4.95,
    reviewCount: 38,
    inStock: true,
    leadTime: '2-4 Business Days',
    badge: 'B2B Recommended',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Precision engineered dual-stack pulley system with 30-position swivel pulleys. Commercial-grade aviation cables rated to 4,200 lbs tensile strength for smooth, silent movement during heavy athletic training.',
    specs: {
      'Weight Stacks': 'Dual 300 lb (136 kg) Solid Steel Machined Stacks',
      'Cable Ratio': '2:1 Mechanical Advantage for High Speed Movement',
      'Cable Rating': '4,200 lbs Tensile Strength Aircraft Cable',
      'Dimensions': '44" x 68" x 90" (112cm x 172cm x 228cm)',
      'Pulley Adjustment': '30 Laser-Etched Vertical Height Stations',
      'Warranty': '10-Year Frame / 5-Year Weight Stack & Pulleys'
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
      '180-degree rotating swivelling pulley heads for natural lines of resistance',
      'Integrated rock-climbing grips and multi-angle chin bar',
      'Full steel protective shroud enclosures with magnetic selector pins',
      'Includes 10 commercial accessory attachments with storage hooks'
    ]
  },
  {
    id: 'titanforge-iso-leg-press',
    name: 'TitanForge 45-Degree Plate Loaded Commercial Leg Press',
    brand: 'TitanForge',
    category: 'Commercial Strength Equipment',
    categoryId: 'strength-equipment',
    price: 3890,
    bulkPrice: 3450,
    bulkThreshold: 2,
    rating: 4.8,
    reviewCount: 26,
    inStock: true,
    leadTime: '3-5 Business Days',
    badge: 'Heavy Duty',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Designed for massive leg development with zero frame flex. Features dual linear guide rods with linear bearings, extra large diamond plate footplate, and multi-position adjustable back pad.',
    specs: {
      'Max Load Rating': '2,000 lbs (907 kg) Plate Weight',
      'Footplate Size': '30" x 24" Heavy Gauge Diamond Steel Plate',
      'Seat Adjustment': '4 Backrest Angle Options with Lumbar Contour',
      'Dimensions': '88" x 60" x 58" (223cm x 152cm x 147cm)',
      'Warranty': '10-Year Frame / 2-Year Upholstery'
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
      'Precision linear bearing system ensures frictionless slide movement',
      'Quad plate loading horns fit Olympic bumper and cast iron plates',
      'Dual safety lock handles with instant safety stop catches',
      'Double-stitched high density foam padding with tear-resistant commercial vinyl'
    ]
  },
  {
    id: 'powercore-lat-pulldown-row',
    name: 'PowerCore Selectorized Dual Lat Pulldown & Seated Row 260lb',
    brand: 'PowerCore',
    category: 'Commercial Strength Equipment',
    categoryId: 'strength-equipment',
    price: 3250,
    bulkPrice: 2890,
    bulkThreshold: 3,
    rating: 4.88,
    reviewCount: 19,
    inStock: true,
    leadTime: '2-4 Business Days',
    badge: 'Space Saver',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Dual-function space-saving selectorized machine for back training. Quick-adjust thigh hold-down rollers and long seat platform facilitate seamless transition between lat pulldown and low row exercises.',
    specs: {
      'Weight Stack': '260 lb (118 kg) Premium Alloy Steel Stack',
      'Dimensions': '76" x 48" x 88" (193cm x 122cm x 223cm)',
      'Frame Coating': 'Electrostatic Metallic Gunmetal Powder Coat',
      'Warranty': '10-Year Frame / 3-Year Pulleys'
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
      'Quick spring-loaded pin adjustment for thigh locking pads',
      'Includes wide stainless lat bar and straight row attachment',
      'Heavy duty non-slip footrest plate for seated cable rows'
    ]
  },
  {
    id: 'titanforge-smith-machine-deluxe',
    name: 'TitanForge Counter-Balanced Commercial Smith Machine',
    brand: 'TitanForge',
    category: 'Commercial Strength Equipment',
    categoryId: 'strength-equipment',
    price: 4200,
    bulkPrice: 3750,
    bulkThreshold: 2,
    rating: 4.9,
    reviewCount: 31,
    inStock: true,
    leadTime: '3-5 Business Days',
    badge: 'Commercial Safety',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Features a 7-degree biomechanical incline that follows the body’s natural trajectory. Counter-balanced Olympic bar starts with only 15 lbs starting weight for all user fitness levels.',
    specs: {
      'Starting Resistance': '15 lbs (Counter-Balanced Bar)',
      'Guide Rods': 'Case-hardened solid steel with linear ball bearings',
      'Dimensions': '54" x 86" x 90" (137cm x 218cm x 228cm)',
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
      '7-degree angle mimics natural free weight squats and bench presses',
      '6 integrated weight plate storage pegs keep lifting areas tidy',
      'Rotational lockout hooks lock bar safely at any height'
    ]
  },
  {
    id: 'primefit-dumbbells-5-100',
    name: 'PrimeFit Urethane Dumbbell Set (5 - 100 lbs) + 3-Tier Rack',
    brand: 'PrimeFit',
    category: 'Commercial Strength Equipment',
    categoryId: 'strength-equipment',
    price: 7850,
    bulkPrice: 7100,
    bulkThreshold: 2,
    rating: 4.97,
    reviewCount: 54,
    inStock: true,
    leadTime: '3-6 Business Days',
    badge: 'Bestseller Complete Pack',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Complete 20-pair CPU high-density urethane dumbbell set from 5 to 100 lbs in 5 lb increments. Includes heavy 7-gauge 3-tier commercial rack with protective plastic saddle channels.',
    specs: {
      'Head Material': 'Solid Steel Core Encased in Premium CPU Urethane',
      'Handle Coating': 'Hard Chrome Plated Medium Knurl Steel Shaft',
      'Set Weight': '2,100 lbs Total Dumbbell Mass',
      'Warranty': '5-Year Full Commercial Zero-Loosening Guarantee'
    },
    vendor: {
      id: 'v-primefit',
      name: 'PrimeFit Commercial Gear',
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
    id: 'titanforge-adjustable-bench-heavy',
    name: 'TitanForge Pro Adjustable Commercial Flat/Incline/Decline Bench',
    brand: 'TitanForge',
    category: 'Commercial Strength Equipment',
    categoryId: 'strength-equipment',
    price: 890,
    bulkPrice: 750,
    bulkThreshold: 5,
    rating: 4.89,
    reviewCount: 47,
    inStock: true,
    leadTime: '1-3 Business Days',
    badge: 'Essential Facility Gear',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Heavy 11-gauge steel bench with 7 backrest incline positions (-15 to 85 degrees) and 3 seat positions. Features urethane caster wheels and ergonomic transport handle for rapid mobility.',
    specs: {
      'Weight Capacity': '1,500 lbs (680 kg) Tested Capacity',
      'Adjustment Angle': '7 Back Positions (-15, 0, 15, 30, 45, 60, 85 deg)',
      'Dimensions': '53" x 24" x 18" Flat Height',
      'Warranty': '10-Year Frame / 2-Year Commercial Vinyl Pad'
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
      'Laser-cut ladder adjustment catches guarantee zero slip under heavy benching',
      'Ultra high-density antimicrobial molded foam core',
      'Includes rubber feet pads to prevent bench skid'
    ]
  },
  {
    id: 'powercore-iso-chest-press',
    name: 'PowerCore Independent Converging Chest Press (Plate-Loaded)',
    brand: 'PowerCore',
    category: 'Commercial Strength Equipment',
    categoryId: 'strength-equipment',
    price: 2950,
    bulkPrice: 2600,
    bulkThreshold: 2,
    rating: 4.82,
    reviewCount: 15,
    inStock: true,
    leadTime: '3-5 Business Days',
    badge: 'Biomechanical Iso',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Iso-lateral arm movement allows equal muscle development and independent strength training. Converging arc axis matches human shoulder pectoral compression motion.',
    specs: {
      'Frame Structure': '4" x 2" 11-Gauge Structural Steel Tubing',
      'Weight Horns': '4 Stainless Steel Plate Posts',
      'Warranty': '10-Year Frame'
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
      'Independent press arms eliminate dominant side compensation',
      'Dual grip handles allow flat or neutral chest pressing options'
    ]
  },

  // CARDIO EQUIPMENT (8 Products)
  {
    id: 'elitemotion-ultrarun-curved-treadmill',
    name: 'EliteMotion UltraRun Commercial Curved Motorless Treadmill',
    brand: 'EliteMotion',
    category: 'Cardio Consoles & Machines',
    categoryId: 'cardio-equipment',
    price: 5450,
    bulkPrice: 4890,
    bulkThreshold: 3,
    rating: 4.96,
    reviewCount: 67,
    inStock: true,
    leadTime: '2-4 Business Days',
    badge: 'Zero Maintenance Energy Free',
    image: 'https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Commercial motorless curved runner powered entirely by user stride. Heavy vulcanized rubber slat belt delivers up to 30% higher calorie burn compared to traditional electric treadmills. Zero electric cost and zero belt maintenance.',
    specs: {
      'Slat Belt Deck': '60 Vulcanized Rubber Slats with 120 Sealed Ball Bearings',
      'Running Surface': '18" x 67" (46cm x 170cm) Curved Radius',
      'Max User Weight': '450 lbs (204 kg)',
      'Console Display': 'LCD High Contrast Screen (Watts, Speed, Pace, HR, Intervals)',
      'Resistance Levels': '6-Level Magnetic Resistance Lever for Sled Pushing',
      'Warranty': '10-Year Belt & Frame / 3-Year Console'
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
      'User-controlled speed — sprint instantaneously from jog to 25mph without motor lag',
      'Integrated magnetic resistance lever converts runner into heavy sled press',
      'Bluetooth & ANT+ pulse rate integration for heart rate tracking',
      'Zero electrical outlets required — eco friendly zero utility operation'
    ]
  },
  {
    id: 'elitemotion-apex-touch-treadmill',
    name: 'EliteMotion Apex Pro 21.5" Touchscreen Commercial Treadmill',
    brand: 'EliteMotion',
    category: 'Cardio Consoles & Machines',
    categoryId: 'cardio-equipment',
    price: 7290,
    bulkPrice: 6590,
    bulkThreshold: 2,
    rating: 4.91,
    reviewCount: 41,
    inStock: true,
    leadTime: '3-5 Business Days',
    badge: '21.5" Smart Screen',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Luxury commercial treadmill driven by a 5.0 HP AC continuous duty motor. Vibrant 21.5" HD capacitive touchscreen with global running trails, streaming media apps, and member cloud profile login.',
    specs: {
      'Motor Drive': '5.0 HP Commercial AC Continuous Duty Motor',
      'Speed Range': '0.5 – 15.5 mph (0.8 – 25 km/h)',
      'Incline Range': '0% to 18% Power Incline',
      'Screen Console': '21.5" 1080p Touchscreen with Apple GymKit & NFC',
      'Warranty': '10-Year Motor & Frame / 3-Year Touch Screen'
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
      '5.0 HP AC motor withstands continuous 18-hour daily commercial operation',
      'Acoustic impact absorption deck reduces joint impact by 40%',
      'Wireless phone charging dock and dual high-velocity cooling fans'
    ]
  },
  {
    id: 'velocitypro-air-bike-titanium',
    name: 'Velocity Pro Heavy Fan Commercial Air Bike',
    brand: 'Velocity Pro',
    category: 'Cardio Consoles & Machines',
    categoryId: 'cardio-equipment',
    price: 1390,
    bulkPrice: 1190,
    bulkThreshold: 4,
    rating: 4.88,
    reviewCount: 82,
    inStock: true,
    leadTime: '1-3 Business Days',
    badge: 'HIIT Zone Standard',
    image: 'https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Built with 27" steel resistance fan blade and sealed cartridge bearings. Designed to take brutal punishment in CrossFit boxes, HIIT group studios, and commercial weight rooms.',
    specs: {
      'Fan Blade': '27-Inch Steel Wind Resistance Turbine',
      'Drive System': 'Heavy Duty Stage-2 Belt Drive (Quiet & Maintenance-Free)',
      'Frame Weight': '145 lbs All-Steel Chassis',
      'Warranty': '5-Year Frame / 2-Year Electronics'
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
      'Reinforced steel pegs allow upper-body isolated calorie burn intervals',
      'Multi-axis seat post adjustment for exact ergonomic fit'
    ]
  },
  {
    id: 'elitemotion-commercial-rower-ergo',
    name: 'EliteMotion Ergometer Air & Magnetic Commercial Rower',
    brand: 'EliteMotion',
    category: 'Cardio Consoles & Machines',
    categoryId: 'cardio-equipment',
    price: 1680,
    bulkPrice: 1450,
    bulkThreshold: 3,
    rating: 4.93,
    reviewCount: 39,
    inStock: true,
    leadTime: '2-4 Business Days',
    badge: 'Studio Preferred',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Combination air turbine damper and 10-stage magnetic resistance system. Delivers ultra smooth stroke resistance from lightweight rowing warmups to heavy strength endurance intervals.',
    specs: {
      'Resistance': 'Dual Air Flywheel + 10-Stage Magnetic Brake',
      'Rail Track': 'Extruded Aluminum Rail with Stainless Steel Track',
      'Storage': 'Quick Release Quick-Lock Split Frame for Vertical Storage',
      'Warranty': '7-Year Frame / 3-Year Drive Parts'
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
      'Backlit PM5-tier Bluetooth performance monitor with interval workouts',
      'Ergonomic 10-degree bend handle bar reduces forearm strain'
    ]
  },
  {
    id: 'velocitypro-stair-stepper-master',
    name: 'Velocity Pro Revolving Stair Climber with 16" Console',
    brand: 'Velocity Pro',
    category: 'Cardio Consoles & Machines',
    categoryId: 'cardio-equipment',
    price: 6850,
    bulkPrice: 6150,
    bulkThreshold: 2,
    rating: 4.87,
    reviewCount: 29,
    inStock: true,
    leadTime: '4-7 Business Days',
    badge: 'High Calorie Burn',
    image: 'https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Heavy commercial revolving staircase stepper with 8" deep non-slip step surface. Features emergency optical sensor stop system and dual heart rate handlebar sensors.',
    specs: {
      'Step Dimensions': '8" High x 22" Wide x 10" Deep Steps',
      'Speed Range': '24 to 162 Steps Per Minute (20 Resistance Levels)',
      'Safety System': 'Infrared Laser Auto-Stop Safety Beam at Step Base',
      'Warranty': '10-Year Frame / 3-Year Motor Brake'
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
      'Rust-proof powder coated zinc base frame handles sweat exposure',
      'Low step-up height for comfortable member entry and exit'
    ]
  },
  {
    id: 'elitemotion-commercial-elliptical-pro',
    name: 'EliteMotion Suspension Commercial Elliptical Trainer',
    brand: 'EliteMotion',
    category: 'Cardio Consoles & Machines',
    categoryId: 'cardio-equipment',
    price: 4950,
    bulkPrice: 4390,
    bulkThreshold: 3,
    rating: 4.85,
    reviewCount: 22,
    inStock: true,
    leadTime: '3-5 Business Days',
    badge: 'Zero Impact',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Self-powered hybrid drive elliptical system with 24" stride length. Wheel-free suspension architecture eliminates track friction, roller noise, and wheel replacement costs.',
    specs: {
      'Stride Length': '20" to 24" Adjustable Ergonomic Stride',
      'Power Source': 'Self-Generating Cordless Generator System',
      'Warranty': '10-Year Frame / 3-Year Mechanical'
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
      'Self-powered internal generator requires no power cords or outlets',
      'Dual active handlebar controls for instant resistance changes'
    ]
  },
  {
    id: 'velocitypro-spin-bike-magnetic',
    name: 'Velocity Pro Magnetic Commercial Indoor Cycle (Belt Drive)',
    brand: 'Velocity Pro',
    category: 'Cardio Consoles & Machines',
    categoryId: 'cardio-equipment',
    price: 1250,
    bulkPrice: 990,
    bulkThreshold: 6,
    rating: 4.91,
    reviewCount: 73,
    inStock: true,
    leadTime: '1-3 Business Days',
    badge: 'Spin Studio Ready',
    image: 'https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Smooth magnetic resistance indoor cycle with carbon fiber poly-V belt drive. Stainless steel frame posts prevent sweat corrosion during intense spin studio classes.',
    specs: {
      'Flywheel Mass': '42 lb Perimeter Weighted Precision Balanced Aluminum/Steel',
      'Resistance Type': 'Neodymium 6-Magnet Smooth Resistance System',
      'Pedals': 'Dual Sided SPD Clips & Toe Cages',
      'Warranty': '10-Year Frame / 3-Year Magnet Brake'
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
      'Carbon poly-V belt drive never stretches, slips, or requires grease',
      'Micro-adjustable handlebars and saddle with engraved numeric scales'
    ]
  },
  {
    id: 'elitemotion-recumbent-bike-eco',
    name: 'EliteMotion Comfort Commercial Recumbent Bike',
    brand: 'EliteMotion',
    category: 'Cardio Consoles & Machines',
    categoryId: 'cardio-equipment',
    price: 2450,
    bulkPrice: 2150,
    bulkThreshold: 3,
    rating: 4.8,
    reviewCount: 17,
    inStock: true,
    leadTime: '2-4 Business Days',
    badge: 'Senior & Rehab Friendly',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Features a step-through frame design for easy access by seniors and physical therapy users. High-density contoured mesh lumbar back seat keeps riders cool.',
    specs: {
      'Frame Design': 'Open Step-Through Easy Entry Architecture',
      'Max User Weight': '400 lbs (181 kg)',
      'Warranty': '7-Year Frame / 2-Year Console'
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
      'Contoured breathable mesh back support with seat-side pulse sensors',
      'Integrated tablet holder and USB device charging port'
    ]
  },

  // BULK NUTRITION & SUPPLEMENTS (6 Products)
  {
    id: 'primefit-whey-isolate-50lb',
    name: 'PrimeFit Pro Isolate 100% Grass-Fed Whey Protein (50 lb Wholesale Bag)',
    brand: 'PrimeFit',
    category: 'Bulk Nutrition & Supplements',
    categoryId: 'supplements',
    price: 495,
    bulkPrice: 420,
    bulkThreshold: 4,
    rating: 4.95,
    reviewCount: 94,
    inStock: true,
    leadTime: '1-2 Business Days',
    badge: 'Pallet Wholesale Tier',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Ultra-pure cold-filtered 90% whey protein isolate in commercial 50 lb bulk foil sacks. Ideal for gym smoothie bars, custom protein blending, and retail repacking. Zero sugar, zero lactose, 27g protein per 30g scoop.',
    specs: {
      'Package Size': '50 lb (22.68 kg) Triple-Layer Foil Bulk Bag',
      'Servings Per Bag': '756 Servings (30g Scoop Size)',
      'Protein Content': '90.5% Cold Micro-Filtered Whey Isolate',
      'Certifications': 'cGMP, NSF Certified for Sport, Lab Tested 3rd Party',
      'Flavors Available': 'Unflavored Raw, Dutch Cocoa, French Vanilla, Creamy Banana'
    },
    vendor: {
      id: 'v-primefit-supps',
      name: 'PrimeFit BioLabs Wholesale',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80',
      verified: true,
      rating: 4.97,
      responseRate: '100% (Avg 5 mins)',
      fulfillmentRate: '99.9% Same-Day Dispatch',
      location: 'Salt Lake City, UT · Bio Nutrition Labs'
    },
    features: [
      'Instantized lecithin formula dissolves instantly in cold water without clumping',
      'Includes batch COA (Certificate of Analysis) for heavy metals and purity with every shipment',
      'Pallet pricing available (20+ bags @ $380 / bag)'
    ]
  },
  {
    id: 'primefit-preworkout-case-12',
    name: 'PrimeFit Igniter Pre-Workout Formula (Case of 12 x 30-Serv Tubs)',
    brand: 'PrimeFit',
    category: 'Bulk Nutrition & Supplements',
    categoryId: 'supplements',
    price: 320,
    bulkPrice: 270,
    bulkThreshold: 3,
    rating: 4.91,
    reviewCount: 63,
    inStock: true,
    leadTime: '1-2 Business Days',
    badge: 'High Margin Retail',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'High-margin retail supplement case for front-desk gym display. Formulated with 6g L-Citrulline Malate, 3.2g Beta-Alanine, and 300mg Natural Caffeine for intense laser focus and skin-splitting pumps.',
    specs: {
      'Case Contents': '12 Tubs (30 Servings Per Tub = 360 Servings Total)',
      'Retail MSRP': '$49.99 Per Tub ($599.88 Total Retail Value)',
      'Profit Margin': '46.6% Margin at Standard Wholesale Rate',
      'Certifications': 'Informed Choice Certified, Zero Prohibited Substances'
    },
    vendor: {
      id: 'v-primefit-supps',
      name: 'PrimeFit BioLabs Wholesale',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80',
      verified: true,
      rating: 4.97,
      responseRate: '100% (Avg 5 mins)',
      fulfillmentRate: '99.9% Same-Day Dispatch',
      location: 'Salt Lake City, UT · Bio Nutrition Labs'
    },
    features: [
      'Includes countertop cardboard pop-up display unit for high retail impulse sales',
      'Clinically dosed ingredients with zero proprietary blends'
    ]
  },
  {
    id: 'primefit-creatine-monohydrate-25kg',
    name: 'PrimeFit Pure Creapure Micronized Creatine 25kg Drum',
    brand: 'PrimeFit',
    category: 'Bulk Nutrition & Supplements',
    categoryId: 'supplements',
    price: 580,
    bulkPrice: 490,
    bulkThreshold: 2,
    rating: 4.98,
    reviewCount: 110,
    inStock: true,
    leadTime: '1-2 Business Days',
    badge: 'Pure German Creapure',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1000&q=80'
    ],
    description: '25kg (55 lb) bulk drum of 200 mesh German Creapure® micronized creatine monohydrate. Ultra-fine powder dissolves completely with no gritty residue.',
    specs: {
      'Net Mass': '25 kg (55.1 lbs) Fiber Drum with Double Sealed Poly Liner',
      'Servings': '5,000 Servings (5g Standard Dose)',
      'Purity': '99.99% HPLC Tested Pure Creatine Monohydrate',
      'Country of Origin': 'AlzChem Trostberg GmbH, Germany'
    },
    vendor: {
      id: 'v-primefit-supps',
      name: 'PrimeFit BioLabs Wholesale',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80',
      verified: true,
      rating: 4.97,
      responseRate: '100% (Avg 5 mins)',
      fulfillmentRate: '99.9% Same-Day Dispatch',
      location: 'Salt Lake City, UT · Bio Nutrition Labs'
    },
    features: [
      '200 mesh micronization offers instant solubility in water or juice',
      'Zero fillers, zero artificial colors, zero preservatives'
    ]
  },
  {
    id: 'primefit-rtd-protein-case-24',
    name: 'PrimeFit HydroPro RTD Protein Drinks (Case of 24 Cans x 30g)',
    brand: 'PrimeFit',
    category: 'Bulk Nutrition & Supplements',
    categoryId: 'supplements',
    price: 68,
    bulkPrice: 56,
    bulkThreshold: 10,
    rating: 4.88,
    reviewCount: 48,
    inStock: true,
    leadTime: '1-2 Business Days',
    badge: 'Fridge Ready Beverage',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Ready-to-drink 11.5oz aluminum cans with 30g ultra-filtered whey protein, 1g sugar, and zero artificial dyes. High turnaround front-desk cooler item for member post-workout convenience.',
    specs: {
      'Case Specs': '24 Sleek 11.5 oz (340ml) Recyclable Aluminum Cans',
      'MSRP Per Can': '$4.50 ($108.00 Case Retail Value)',
      'Flavors': 'Cold Brew Coffee, Vanilla Bean, Dark Chocolate Fudge'
    },
    vendor: {
      id: 'v-primefit-supps',
      name: 'PrimeFit BioLabs Wholesale',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80',
      verified: true,
      rating: 4.97,
      responseRate: '100% (Avg 5 mins)',
      fulfillmentRate: '99.9% Same-Day Dispatch',
      location: 'Salt Lake City, UT · Bio Nutrition Labs'
    },
    features: [
      'Shelf-stable aseptic packaging with 14-month shelf life',
      'Cold Brew flavor contains 100mg natural espresso caffeine'
    ]
  },
  {
    id: 'primefit-bcaa-electrolytes-bulk',
    name: 'PrimeFit Electrolyte + BCAA Recovery Matrix (20kg Bulk Sack)',
    brand: 'PrimeFit',
    category: 'Bulk Nutrition & Supplements',
    categoryId: 'supplements',
    price: 440,
    bulkPrice: 380,
    bulkThreshold: 3,
    rating: 4.82,
    reviewCount: 31,
    inStock: true,
    leadTime: '1-3 Business Days',
    badge: 'Hydration Station',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Instantized 2:1:1 vegan fermented BCAAs combined with Himalayan pink salt, magnesium, and potassium. Designed for gym tap dispensers and hydration stations.',
    specs: {
      'Weight': '20 kg (44.1 lbs) Bulk Bag',
      'Ratio': '2:1:1 Leucine, Isoleucine, Valine + 5 Key Electrolytes'
    },
    vendor: {
      id: 'v-primefit-supps',
      name: 'PrimeFit BioLabs Wholesale',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80',
      verified: true,
      rating: 4.97,
      responseRate: '100% (Avg 5 mins)',
      fulfillmentRate: '99.9% Same-Day Dispatch',
      location: 'Salt Lake City, UT · Bio Nutrition Labs'
    },
    features: [
      '100% plant-based sunflower lecithin instantized BCAAs',
      'Prevents member intra-workout cramping during heavy endurance classes'
    ]
  },
  {
    id: 'primefit-energy-shots-display-48',
    name: 'PrimeFit Turbo Focus 2oz Energy Shots (Box of 48 Units)',
    brand: 'PrimeFit',
    category: 'Bulk Nutrition & Supplements',
    categoryId: 'supplements',
    price: 92,
    bulkPrice: 78,
    bulkThreshold: 5,
    rating: 4.79,
    reviewCount: 28,
    inStock: true,
    leadTime: '1-2 Business Days',
    badge: 'Impulse Retail',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1000&q=80'
    ],
    description: '2 oz concentrated zero-calorie energy liquid shot containing Alpha-GPC, L-Theanine, B-Complex vitamins, and 200mg organic green tea caffeine.',
    specs: {
      'Box Size': '48 Individual 2 oz Bottles',
      'MSRP': '$3.49 / bottle ($167.52 Total Retail Revenue)'
    },
    vendor: {
      id: 'v-primefit-supps',
      name: 'PrimeFit BioLabs Wholesale',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80',
      verified: true,
      rating: 4.97,
      responseRate: '100% (Avg 5 mins)',
      fulfillmentRate: '99.9% Same-Day Dispatch',
      location: 'Salt Lake City, UT · Bio Nutrition Labs'
    },
    features: [
      'Zero sugar, zero crash formulation with smooth cognitive focus',
      'Compact display box fits directly next to POS cash register'
    ]
  }
];
