// Shri Metro - Product Catalogue Data strictly extracted from Official Catalogue PDF
export const productCategories = [
  { id: "all", label: "All Products" },
  { id: "monobloc-chairs", label: "Monobloc Chairs" },
  { id: "armless-chairs", label: "Armless Chairs" },
  { id: "cafeteria-chairs", label: "Cafeteria Chairs" },
  { id: "banquet-chairs", label: "Banquet Chairs" },
  { id: "relax-chairs", label: "Relax Chairs" },
  { id: "baby-chairs", label: "Baby Chairs" },
  { id: "dining-tables", label: "Dining Tables" },
  { id: "center-tables", label: "Center Tables" },
  { id: "stools", label: "Stools" },
  { id: "patla", label: "Patla (Utility)" },
];

export const colorPalette = {
  red: { name: "Red", hex: "#DC2626", border: "#B91C1C" },
  blue: { name: "Blue", hex: "#1D4ED8", border: "#1E40AF" },
  green: { name: "Green", hex: "#15803D", border: "#166534" },
  brown: { name: "Brown / Dark Brown", hex: "#451A03", border: "#3B1402" },
  white: { name: "White", hex: "#FFFFFF", border: "#CBD5E1" },
  black: { name: "Black", hex: "#18181B", border: "#09090B" },
  ivory: { name: "Ivory / Cream", hex: "#FEF9C3", border: "#E2E8F0" },
  yellow: { name: "Yellow / Gold", hex: "#FACC15", border: "#EAB308" },
  orange: { name: "Orange", hex: "#EA580C", border: "#C2410C" },
  sand: { name: "Sand / Beige", hex: "#D97706", border: "#B45309" },
  woodgrain: { name: "Woodgrain Finish", hex: "#854D0E", border: "#713F12" },
  redMarble: { name: "Red Marble / Wine", hex: "#881337", border: "#700D2B" },
  print: { name: "Gloss Print Pattern", hex: "#9F1239", border: "#881337" },
};

export const products = [
  // --- MONOBLOC CHAIRS ---
  {
    id: "alexa",
    name: "Alexa",
    category: "monobloc-chairs",
    categoryLabel: "Monobloc Chairs",
    dimensions: { h: 890, w: 580, d: 450, unit: "mm", formatted: "H 890 × W 580 × D 450 mm" },
    colors: [colorPalette.brown, colorPalette.redMarble],
    stackable: true,
    features: ["Woven backrest pattern", "Integrated armrests", "Reinforced load bearing legs"],
    bestFor: "Events, banquets, outdoor catering, dining halls",
    badge: "Bestseller"
  },
  {
    id: "spine",
    name: "Spine",
    category: "monobloc-chairs",
    categoryLabel: "Monobloc Chairs",
    dimensions: { h: 910, w: 590, d: 470, unit: "mm", formatted: "H 910 × W 590 × D 470 mm" },
    colors: [colorPalette.brown, colorPalette.white, colorPalette.woodgrain, colorPalette.redMarble],
    stackable: true,
    features: ["High-back ergonomic lumbar support", "Full-width arm rests", "Ventilated horizontal slats"],
    bestFor: "Conferences, weddings, VIP catering setups"
  },
  {
    id: "tip-top",
    name: "Tip Top",
    category: "monobloc-chairs",
    categoryLabel: "Monobloc Chairs",
    dimensions: { h: 910, w: 590, d: 470, unit: "mm", formatted: "H 910 × W 590 × D 470 mm" },
    colors: [colorPalette.brown, colorPalette.woodgrain, colorPalette.redMarble],
    stackable: true,
    features: ["Classic slatted backrest", "High durability polymer", "Weatherproof outdoor finish"],
    bestFor: "Event tents, community halls, banquet lawns"
  },
  {
    id: "powerstar",
    name: "Powerstar",
    category: "monobloc-chairs",
    categoryLabel: "Monobloc Chairs",
    dimensions: { h: 910, w: 590, d: 470, unit: "mm", formatted: "H 910 × W 590 × D 470 mm" },
    colors: [colorPalette.brown, colorPalette.woodgrain, colorPalette.redMarble],
    stackable: true,
    features: ["Heavy duty construction", "Extra wide seat pan", "Rigid cross-braced support"],
    bestFor: "Heavy commercial & rental fleet use"
  },
  {
    id: "metallica",
    name: "Metallica",
    category: "monobloc-chairs",
    categoryLabel: "Monobloc Chairs",
    dimensions: { h: 800, w: 550, d: 440, unit: "mm", formatted: "H 800 × W 550 × D 440 mm" },
    colors: [colorPalette.red, colorPalette.blue, colorPalette.green, colorPalette.brown, colorPalette.white, colorPalette.ivory],
    stackable: true,
    features: ["Curved shell mesh profile", "Ergonomic tub armchair", "Vibrant modern colorways"],
    bestFor: "Cafeterias, clubs, terrace restaurants"
  },
  {
    id: "infinity",
    name: "Infinity",
    category: "monobloc-chairs",
    categoryLabel: "Monobloc Chairs",
    dimensions: { h: 830, w: 580, d: 390, unit: "mm", formatted: "H 830 × W 580 × D 390 mm" },
    colors: [colorPalette.red, colorPalette.blue, colorPalette.green, colorPalette.brown, colorPalette.white, colorPalette.ivory],
    stackable: true,
    features: ["Modern slotted backrest", "Streamlined arm arches", "Rapid stacking capability"],
    bestFor: "Party rentals, food courts, schools & colleges"
  },
  {
    id: "smarty",
    name: "Smarty",
    category: "monobloc-chairs",
    categoryLabel: "Monobloc Chairs",
    dimensions: { h: 830, w: 580, d: 390, unit: "mm", formatted: "H 830 × W 580 × D 390 mm" },
    colors: [colorPalette.sand, colorPalette.redMarble],
    stackable: true,
    features: ["Oval diamond lattice motif", "Smooth rounded contours", "High stack density"],
    bestFor: "Catering rentals, home gatherings, banquet halls"
  },
  {
    id: "virat",
    name: "Virat",
    category: "monobloc-chairs",
    categoryLabel: "Monobloc Chairs",
    dimensions: { h: 880, w: 560, d: 390, unit: "mm", formatted: "H 880 × W 560 × D 390 mm" },
    colors: [colorPalette.brown, colorPalette.woodgrain, colorPalette.redMarble],
    stackable: true,
    features: ["Ribbed vertical spine", "Reinforced back joints", "Premium matte wood-grain look"],
    bestFor: "Banquet dining, shamiyana event setups"
  },
  {
    id: "tesla",
    name: "Tesla",
    category: "monobloc-chairs",
    categoryLabel: "Monobloc Chairs",
    dimensions: { h: 790, w: 560, d: 400, unit: "mm", formatted: "H 790 × W 560 × D 400 mm" },
    colors: [colorPalette.brown, colorPalette.woodgrain, colorPalette.redMarble],
    stackable: true,
    features: ["Geometric crosshatch pattern", "Compact footprint", "Low maintenance wipe-clean surface"],
    bestFor: "Event catering, corporate pantries, budget rentals"
  },
  {
    id: "heritage",
    name: "Heritage",
    category: "monobloc-chairs",
    categoryLabel: "Monobloc Chairs",
    dimensions: { h: 895, w: 570, d: 430, unit: "mm", formatted: "H 895 × W 570 × D 430 mm" },
    colors: [colorPalette.brown, colorPalette.woodgrain, colorPalette.redMarble],
    stackable: true,
    features: ["Traditional cane-weave texture back", "Royal heritage aesthetic", "Stout non-slip legs"],
    bestFor: "Weddings, festive events, upscale heritage banquets"
  },
  {
    id: "jaguar",
    name: "Jaguar",
    category: "monobloc-chairs",
    categoryLabel: "Monobloc Chairs",
    dimensions: { h: 845, w: 570, d: 440, unit: "mm", formatted: "H 845 × W 570 × D 440 mm" },
    colors: [colorPalette.brown, colorPalette.woodgrain, colorPalette.redMarble],
    stackable: true,
    features: ["Triple-ring circular accent back", "Sturdy box armrests", "Deep seat basin"],
    bestFor: "Outdoor lawns, community halls, party catering"
  },
  {
    id: "luxury",
    name: "Luxury",
    category: "monobloc-chairs",
    categoryLabel: "Monobloc Chairs",
    dimensions: { h: 795, w: 580, d: 430, unit: "mm", formatted: "H 795 × W 580 × D 430 mm" },
    colors: [
      colorPalette.red, colorPalette.blue, colorPalette.yellow, colorPalette.brown,
      colorPalette.white, colorPalette.woodgrain, colorPalette.redMarble, colorPalette.ivory, colorPalette.orange
    ],
    stackable: true,
    features: ["Embossed floral back medallion", "9 striking color variants", "Smooth rounded edge finish"],
    bestFor: "Multi-purpose hospitality, resorts, party hire",
    badge: "Most Color Options"
  },
  {
    id: "cosmo",
    name: "Cosmo",
    category: "monobloc-chairs",
    categoryLabel: "Monobloc Chairs",
    dimensions: { h: 875, w: 570, d: 420, unit: "mm", formatted: "H 875 × W 570 × D 420 mm" },
    colors: [
      colorPalette.red, colorPalette.blue, colorPalette.green, colorPalette.brown,
      colorPalette.yellow, colorPalette.woodgrain, colorPalette.redMarble, colorPalette.ivory, colorPalette.orange, colorPalette.white
    ],
    stackable: true,
    features: ["Multi-slit ventilation back", "Broad comfortable seat", "10 color variations"],
    bestFor: "Mega exhibitions, stadium/event auditoriums"
  },

  // --- ARMLESS CHAIRS ---
  {
    id: "samrat",
    name: "Samrat",
    category: "armless-chairs",
    categoryLabel: "Armless Chairs",
    dimensions: { h: 820, w: 450, d: 450, unit: "mm", formatted: "H 820 × W 450 × D 450 mm" },
    colors: [colorPalette.red, colorPalette.blue, colorPalette.green, colorPalette.brown, colorPalette.white, colorPalette.ivory, colorPalette.orange],
    stackable: true,
    features: ["High-density stackable armless design", "Dual vertical slot back", "Space saving profile"],
    bestFor: "Mass banquet seating, shamiyana events, dining halls",
    badge: "High Stacking"
  },
  {
    id: "dicor",
    name: "Dicor",
    category: "armless-chairs",
    categoryLabel: "Armless Chairs",
    dimensions: { h: 860, w: 375, d: 430, unit: "mm", formatted: "H 860 × W 375 × D 430 mm" },
    colors: [colorPalette.woodgrain, colorPalette.redMarble, colorPalette.ivory],
    stackable: true,
    features: ["Horizontal ladder back slats", "Slim space-efficient profile", "Glossy scratch-resistant finish"],
    bestFor: "Dining tables, conference rows, event dining"
  },
  {
    id: "platina",
    name: "Platina",
    category: "armless-chairs",
    categoryLabel: "Armless Chairs",
    dimensions: { h: 880, w: 410, d: 400, unit: "mm", formatted: "H 880 × W 410 × D 400 mm" },
    colors: [colorPalette.red, colorPalette.blue, colorPalette.green, colorPalette.white, colorPalette.woodgrain, colorPalette.redMarble, colorPalette.ivory],
    stackable: true,
    features: ["Graceful arched back spine", "Ergonomic contouring", "Heavy-gauge reinforced legs"],
    bestFor: "Catering companies, marriage halls, institutional dining"
  },
  {
    id: "popular",
    name: "Popular",
    category: "armless-chairs",
    categoryLabel: "Armless Chairs",
    dimensions: { h: 880, w: 410, d: 400, unit: "mm", formatted: "H 880 × W 410 × D 400 mm" },
    colors: [colorPalette.red, colorPalette.blue, colorPalette.green, colorPalette.white, colorPalette.woodgrain, colorPalette.redMarble, colorPalette.ivory],
    stackable: true,
    features: ["Cane-weave ventilated back", "Lightweight yet high strength", "Easy bulk transport"],
    bestFor: "Rental operators, community centers, festive tents"
  },

  // --- CAFETERIA CHAIRS ---
  {
    id: "crystal",
    name: "Crystal",
    category: "cafeteria-chairs",
    categoryLabel: "Cafeteria Chairs",
    dimensions: { h: 880, w: 608, d: 620, unit: "mm", formatted: "H 880 × W 608 × D 620 mm" },
    colors: [colorPalette.red, colorPalette.blue, colorPalette.green, colorPalette.brown, colorPalette.white, colorPalette.black],
    stackable: true,
    features: ["Signature organic tree-branch lattice design", "Designer tub seat shell", "UV-stabilized weatherproofing"],
    bestFor: "Modern cafes, poolside bistros, upscale food courts",
    badge: "Catalogue Flagship"
  },
  {
    id: "spykar",
    name: "Spykar",
    category: "cafeteria-chairs",
    categoryLabel: "Cafeteria Chairs",
    dimensions: { h: 840, w: 370, d: 410, unit: "mm", formatted: "H 840 × W 370 × D 410 mm" },
    colors: [colorPalette.red, colorPalette.blue, colorPalette.green, colorPalette.brown, colorPalette.white, colorPalette.black],
    stackable: true,
    features: ["Vertical ribbed backrest", "Contemporary minimalist profile", "Compact table clearance"],
    bestFor: "Corporate cafeterias, college canteens, quick-service eateries"
  },
  {
    id: "web",
    name: "Web",
    category: "cafeteria-chairs",
    categoryLabel: "Cafeteria Chairs",
    dimensions: { h: 800, w: 400, d: 465, unit: "mm", formatted: "H 800 × W 400 × D 465 mm" },
    colors: [colorPalette.red, colorPalette.blue, colorPalette.green, colorPalette.brown, colorPalette.white, colorPalette.black],
    stackable: true,
    features: ["Geometric spiderweb breathable lattice", "Sleek armless cafe profile", "High dynamic weight tolerance"],
    bestFor: "Bistros, coffee shops, open-air food parks"
  },

  // --- RELAX CHAIRS ---
  {
    id: "easy",
    name: "Easy",
    category: "relax-chairs",
    categoryLabel: "Relax Chairs",
    dimensions: { h: 800, w: 600, d: 530, unit: "mm", formatted: "H 800 × W 600 × D 530 mm" },
    colors: [colorPalette.brown, colorPalette.woodgrain, colorPalette.redMarble, colorPalette.orange],
    stackable: true,
    features: ["Deep reclined bucket seating", "Checkerboard ventilation pattern", "Broad contoured arm rests"],
    bestFor: "Garden lounges, resort verandas, poolside seating"
  },
  {
    id: "holiday",
    name: "Holiday",
    category: "relax-chairs",
    categoryLabel: "Relax Chairs",
    dimensions: { h: 900, w: 620, d: 560, unit: "mm", formatted: "H 900 × W 620 × D 560 mm" },
    colors: [colorPalette.brown, colorPalette.woodgrain, colorPalette.redMarble, colorPalette.orange],
    stackable: true,
    features: ["Extra tall high-back relaxation contour", "Slatted back support", "Supreme lounge comfort"],
    bestFor: "Resorts, farmhouses, holiday clubs, verandas"
  },

  // --- BANQUET CHAIRS ---
  {
    id: "bahubali",
    name: "Bahubali",
    category: "banquet-chairs",
    categoryLabel: "Banquet Chairs",
    dimensions: { h: 910, w: 390, d: 480, unit: "mm", formatted: "H 910 × W 390 × D 480 mm" },
    colors: [colorPalette.yellow, colorPalette.sand, colorPalette.white],
    stackable: true,
    features: ["Royal mesh oval back", "Ring-detailed lower stretcher frame", "Premium gold & metallic finish"],
    bestFor: "Grand wedding banquets, royal receptions, luxury catering",
    badge: "Wedding Special"
  },
  {
    id: "hanuman",
    name: "Hanuman",
    category: "banquet-chairs",
    categoryLabel: "Banquet Chairs",
    dimensions: { h: 910, w: 390, d: 480, unit: "mm", formatted: "H 910 × W 390 × D 480 mm" },
    colors: [colorPalette.yellow, colorPalette.sand, colorPalette.white],
    stackable: true,
    features: ["Geometric square-cut royal lattice", "Ornate round ring stretcher", "Heavy load stability"],
    bestFor: "Convention centers, wedding halls, luxury events"
  },
  {
    id: "prabhu",
    name: "Prabhu",
    category: "banquet-chairs",
    categoryLabel: "Banquet Chairs",
    dimensions: { h: 910, w: 390, d: 480, unit: "mm", formatted: "H 910 × W 390 × D 480 mm" },
    colors: [colorPalette.yellow, colorPalette.sand, colorPalette.white],
    stackable: true,
    features: ["Oval cane-mesh royal crown back", "Chiavari-inspired structural rings", "Posh event styling"],
    bestFor: "High-end destination weddings, ballrooms"
  },
  {
    id: "shivji",
    name: "Shivji",
    category: "banquet-chairs",
    categoryLabel: "Banquet Chairs",
    dimensions: { h: 910, w: 390, d: 480, unit: "mm", formatted: "H 910 × W 390 × D 480 mm" },
    colors: [colorPalette.yellow, colorPalette.sand, colorPalette.white],
    stackable: true,
    features: ["Classic upright slatted banquet back", "Traditional temple-inspired stability", "Rigid non-wobble build"],
    bestFor: "Religious events, wedding catering, community auditoriums"
  },

  // --- BABY CHAIRS ---
  {
    id: "baby-futura",
    name: "Baby Futura",
    category: "baby-chairs",
    categoryLabel: "Baby Chairs",
    dimensions: { h: 575, w: 410, d: 400, unit: "mm", formatted: "H 575 × W 410 × D 400 mm" },
    colors: [colorPalette.red, colorPalette.blue, colorPalette.green, colorPalette.yellow, colorPalette.orange],
    stackable: true,
    features: ["Kids ergonomic tub armchair", "Rounded safety edges", "Bright vibrant primary colors"],
    bestFor: "Play schools, daycare centers, kids birthday parties"
  },
  {
    id: "kidzee",
    name: "Kidzee",
    category: "baby-chairs",
    categoryLabel: "Baby Chairs",
    dimensions: { h: 580, w: 380, d: 320, unit: "mm", formatted: "H 580 × W 380 × D 320 mm" },
    colors: [colorPalette.red, colorPalette.blue, colorPalette.green, colorPalette.yellow, colorPalette.orange],
    stackable: true,
    features: ["Embossed cartoon crest on backrest", "High-back kid comfort", "Anti-tip leg angle"],
    bestFor: "Kindergartens, amusement centers, pediatric clinics"
  },
  {
    id: "panda",
    name: "Panda",
    category: "baby-chairs",
    categoryLabel: "Baby Chairs",
    dimensions: { h: 575, w: 410, d: 400, unit: "mm", formatted: "H 575 × W 410 × D 400 mm" },
    colors: [colorPalette.red, colorPalette.blue, colorPalette.green, colorPalette.yellow, colorPalette.orange],
    stackable: true,
    features: ["Playful panda-face ear silhouette", "Child-safe non-toxic polymer", "Lightweight for kids"],
    bestFor: "Nursery schools, children's play zones"
  },

  // --- DINING TABLES ---
  {
    id: "party-table-print",
    name: "Party Table (Print)",
    category: "dining-tables",
    categoryLabel: "Dining Tables",
    dimensions: { h: 660, w: 1240, d: 770, unit: "mm", formatted: "H 660 × W 1240 × D 770 mm" },
    colors: [colorPalette.brown, colorPalette.print],
    stackable: false,
    features: ["High-gloss decorative floral/food print top", "Solid 6-seater dining format", "Cross-braced curved heavy legs"],
    bestFor: "Banquet dining, garden dining, wedding buffets",
    badge: "Designer Top"
  },
  {
    id: "party-table",
    name: "Party Table (Solid)",
    category: "dining-tables",
    categoryLabel: "Dining Tables",
    dimensions: { h: 660, w: 1240, d: 770, unit: "mm", formatted: "H 660 × W 1240 × D 770 mm" },
    colors: [colorPalette.brown, colorPalette.woodgrain, colorPalette.redMarble],
    stackable: false,
    features: ["Solid polymer woodgrain texture surface", "1240 mm wide dining capacity", "Heavy weight tolerance"],
    bestFor: "Restaurants, catering dining areas, event tents"
  },
  {
    id: "round-dt",
    name: "Round DT (Dining Table)",
    category: "dining-tables",
    categoryLabel: "Dining Tables",
    dimensions: { h: 700, w: 940, d: 940, unit: "mm", formatted: "H 700 × W 940 × D 940 mm" },
    colors: [colorPalette.brown, colorPalette.woodgrain, colorPalette.redMarble, colorPalette.ivory],
    stackable: false,
    features: ["Circular 940 mm diameter top", "4-person intimate dining setup", "Flared stability legs"],
    bestFor: "Cafeterias, food courts, balcony dining, bistros"
  },

  // --- CENTER TABLES & TEAPOYS ---
  {
    id: "sapphire",
    name: "Sapphire",
    category: "center-tables",
    categoryLabel: "Center Tables",
    dimensions: { h: 430, w: 810, d: 515, unit: "mm", formatted: "H 430 × W 810 × D 515 mm" },
    colors: [colorPalette.brown, colorPalette.woodgrain, colorPalette.redMarble],
    stackable: false,
    features: ["Moulded rib textured tabletop", "Sturdy box legs", "Compact coffee table height"],
    bestFor: "Living rooms, waiting lounges, executive cabins"
  },
  {
    id: "teapoy-print",
    name: "Teapoy Print",
    category: "center-tables",
    categoryLabel: "Center Tables",
    dimensions: { h: 430, w: 810, d: 515, unit: "mm", formatted: "H 430 × W 810 × D 515 mm" },
    colors: [colorPalette.brown, colorPalette.woodgrain, colorPalette.redMarble, colorPalette.print],
    stackable: false,
    features: ["Decorative floral laminated top", "Lower perforated utility storage shelf", "Rigid quad-pillar support"],
    bestFor: "Reception lounges, clinic waiting rooms, hospitality"
  },
  {
    id: "teapoy-plain",
    name: "Teapoy Plain",
    category: "center-tables",
    categoryLabel: "Center Tables",
    dimensions: { h: 430, w: 810, d: 515, unit: "mm", formatted: "H 430 × W 810 × D 515 mm" },
    colors: [colorPalette.brown, colorPalette.woodgrain, colorPalette.redMarble],
    stackable: false,
    features: ["Wooden grain texture finish", "Integrated lower utility rack", "Waterproof and scratch resistant"],
    bestFor: "Office pantries, club rooms, event lobbies"
  },
  {
    id: "teapoy-wheel",
    name: "Teapoy Wheel (Trolley)",
    category: "center-tables",
    categoryLabel: "Center Tables",
    dimensions: { h: 400, w: 810, d: 830, unit: "mm", formatted: "H 400 × W 810 × D 830 mm" },
    colors: [colorPalette.brown, colorPalette.woodgrain, colorPalette.redMarble],
    stackable: false,
    features: ["4-corner smooth rolling castor wheels", "Double tier utility trolley", "Easy 360-degree mobility"],
    bestFor: "Hospitality serving, buffet tea service, living rooms",
    badge: "Wheeled Mobility"
  },

  // --- STOOLS ---
  {
    id: "dabangg",
    name: "Dabangg",
    category: "stools",
    categoryLabel: "Stools",
    dimensions: { h: 490, w: 360, d: 300, unit: "mm", formatted: "H 490 × W 360 × D 300 mm" },
    colors: [
      colorPalette.red, colorPalette.blue, colorPalette.green, colorPalette.brown,
      colorPalette.woodgrain, colorPalette.redMarble, colorPalette.ivory, colorPalette.orange
    ],
    stackable: true,
    features: ["Perforated grip seat", "High 4-leg stackable utility profile", "Heavy load carrying capacity"],
    bestFor: "Commercial kitchens, shops, street food stalls, households"
  },
  {
    id: "magic",
    name: "Magic",
    category: "stools",
    categoryLabel: "Stools",
    dimensions: { h: 540, w: 360, d: 310, unit: "mm", formatted: "H 540 × W 360 × D 310 mm" },
    colors: [
      colorPalette.red, colorPalette.blue, colorPalette.green, colorPalette.brown,
      colorPalette.woodgrain, colorPalette.redMarble, colorPalette.ivory, colorPalette.orange
    ],
    stackable: true,
    features: ["Tall 540 mm elevation", "Square seat top with cross-braces", "Extreme stability"],
    bestFor: "Workstations, counter seating, industrial shops"
  },
  {
    id: "nawab",
    name: "Nawab",
    category: "stools",
    categoryLabel: "Stools",
    dimensions: { h: 480, w: 325, d: 320, unit: "mm", formatted: "H 480 × W 325 × D 320 mm" },
    colors: [
      colorPalette.red, colorPalette.blue, colorPalette.green, colorPalette.brown,
      colorPalette.woodgrain, colorPalette.redMarble, colorPalette.ivory, colorPalette.orange
    ],
    stackable: true,
    features: ["Woven rattan textured body", "Side cutout lifting handles", "Elegant modern stool finish"],
    bestFor: "Bathrooms, dressing rooms, modern homes, salons"
  },
  {
    id: "step-stool",
    name: "Step Stool",
    category: "stools",
    categoryLabel: "Stools",
    dimensions: { h: 630, w: 420, d: 430, unit: "mm", formatted: "H 630 × W 420 × D 430 mm" },
    colors: [
      colorPalette.red, colorPalette.blue, colorPalette.green, colorPalette.brown,
      colorPalette.woodgrain, colorPalette.redMarble, colorPalette.ivory, colorPalette.orange
    ],
    stackable: true,
    features: ["Dual-step ladder climbing structure", "Anti-skid ribbed steps", "630 mm reach booster"],
    bestFor: "Retail stores, warehouses, domestic libraries, kitchens",
    badge: "Dual Step"
  },
  {
    id: "tango",
    name: "Tango",
    category: "stools",
    categoryLabel: "Stools",
    dimensions: { h: 590, w: 370, d: 360, unit: "mm", formatted: "H 590 × W 370 × D 360 mm" },
    colors: [
      colorPalette.red, colorPalette.blue, colorPalette.green, colorPalette.brown,
      colorPalette.woodgrain, colorPalette.redMarble, colorPalette.ivory, colorPalette.orange
    ],
    stackable: true,
    features: ["Raised counter stool with mini backrest", "Perforated non-slip top", "590 mm height"],
    bestFor: "High counters, cash counters, lab benches, pantries"
  },

  // --- PATLA (BATH & UTILITY STOOLS) ---
  {
    id: "anchor",
    name: "Anchor",
    category: "patla",
    categoryLabel: "Patla (Utility Stools)",
    dimensions: { h: "Standard", w: "Low", d: "Utility", unit: "", formatted: "Standard Low Patla" },
    colors: [colorPalette.red, colorPalette.blue, colorPalette.green, colorPalette.brown, colorPalette.white],
    stackable: true,
    features: ["Circular anti-skid concentric textured top", "Wide heavy-duty footprint", "Durable water-resistant PP"],
    bestFor: "Bathrooms, domestic washing, traditional seated tasks"
  },
  {
    id: "captain",
    name: "Captain",
    category: "patla",
    categoryLabel: "Patla (Utility Stools)",
    dimensions: { h: "Standard", w: "Low", d: "Utility", unit: "", formatted: "Standard Low Patla" },
    colors: [colorPalette.red, colorPalette.blue, colorPalette.green, colorPalette.brown, colorPalette.white],
    stackable: true,
    features: ["Rectangular textured anti-slip top", "Reinforced side arch supports", "Extra stability"],
    bestFor: "Kitchen utility, bathroom stools, household floor tasks"
  }
];
