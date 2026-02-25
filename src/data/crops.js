export const CROPS = [
  {
    name: 'Rice',
    icon: '🌾',
    season: 'Kharif',           // which agricultural season
    nitrogen:    { min: 80,  max: 120 },   // mg/kg in soil
    phosphorus:  { min: 40,  max: 60  },   // mg/kg
    potassium:   { min: 40,  max: 60  },   // mg/kg
    ph:          { min: 5.5, max: 7.0 },   // soil pH (0-14 scale)
    temperature: { min: 20,  max: 35  },   // degrees Celsius
    humidity:    { min: 70,  max: 90  },   // percentage
    rainfall:    { min: 150, max: 300 },   // mm per month
    description: 'Ideal for warm, humid areas with heavy monsoon rainfall.'
  },
  {
    name: 'Wheat',
    icon: '🌿',
    season: 'Rabi',
    nitrogen:    { min: 100, max: 150 },
    phosphorus:  { min: 50,  max: 70  },
    potassium:   { min: 40,  max: 60  },
    ph:          { min: 6.0, max: 7.5 },
    temperature: { min: 10,  max: 25  },
    humidity:    { min: 50,  max: 70  },
    rainfall:    { min: 50,  max: 100 },
    description: 'Best in cool winters. Requires well-drained loamy soil.'
  },
  {
    name: 'Maize',
    icon: '🌽',
    season: 'Kharif',
    nitrogen:    { min: 100, max: 140 },
    phosphorus:  { min: 50,  max: 70  },
    potassium:   { min: 50,  max: 80  },
    ph:          { min: 5.8, max: 7.0 },
    temperature: { min: 18,  max: 35  },
    humidity:    { min: 55,  max: 80  },
    rainfall:    { min: 60,  max: 110 },
    description: 'Versatile crop for monsoon. Adapts to many soil types.'
  },
  {
    name: 'Cotton',
    icon: '☁️',
    season: 'Kharif',
    nitrogen:    { min: 100, max: 120 },
    phosphorus:  { min: 40,  max: 60  },
    potassium:   { min: 50,  max: 70  },
    ph:          { min: 6.0, max: 7.5 },
    temperature: { min: 25,  max: 40  },
    humidity:    { min: 50,  max: 75  },
    rainfall:    { min: 50,  max: 100 },
    description: 'Needs hot dry weather. Grows in black cotton soil.'
  },
  {
    name: 'Mustard',
    icon: '🌼',
    season: 'Rabi',
    nitrogen:    { min: 80,  max: 120 },
    phosphorus:  { min: 40,  max: 60  },
    potassium:   { min: 30,  max: 50  },
    ph:          { min: 6.0, max: 7.5 },
    temperature: { min: 10,  max: 25  },
    humidity:    { min: 40,  max: 65  },
    rainfall:    { min: 30,  max: 70  },
    description: 'Winter oilseed crop. Tolerates light frost. Good for dry regions.'
  },
  {
    name: 'Watermelon',
    icon: '🍉',
    season: 'Zaid',
    nitrogen:    { min: 60,  max: 100 },
    phosphorus:  { min: 30,  max: 50  },
    potassium:   { min: 60,  max: 80  },
    ph:          { min: 6.0, max: 7.0 },
    temperature: { min: 25,  max: 40  },
    humidity:    { min: 50,  max: 70  },
    rainfall:    { min: 30,  max: 60  },
    description: 'Summer crop. Thrives in sandy loam soil with warm dry climate.'
  },
  // Add more crops following the same object structure...
];
 
// Market price data (simulates real APMC mandi prices)
export const MARKET_PRICES = [
  { crop: 'Rice',    price: 2183, unit: 'quintal', change: +2.3, market: 'Delhi APMC'   },
  { crop: 'Wheat',   price: 2275, unit: 'quintal', change: -0.8, market: 'Punjab Mandi' },
  { crop: 'Maize',   price: 1870, unit: 'quintal', change: +1.5, market: 'UP Mandi'     },
  { crop: 'Cotton',  price: 6620, unit: 'quintal', change: +3.1, market: 'Gujarat APMC' },
  { crop: 'Mustard', price: 5650, unit: 'quintal', change: -1.2, market: 'Rajasthan Mandi' },
  { crop: 'Soybean', price: 4450, unit: 'quintal', change: +0.9, market: 'MP APMC'      },
];
