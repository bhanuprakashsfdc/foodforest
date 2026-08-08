export interface HarvestCategory {
  category: string;
  items: string;
}

export interface MonthHarvest {
  id: string;
  label: string;
  month: string;
  categories: HarvestCategory[];
}

export const harvestMonths: MonthHarvest[] = [
  {
    id: "m-jan",
    label: "Jan",
    month: "January",
    categories: [
      { category: "Fruit", items: "Sapota, Papaya, Guava, Orange" },
      { category: "Vegetables", items: "Tomato, Brinjal, French Beans" },
      { category: "Greens", items: "Spinach, Methi, Coriander" },
      { category: "Pulses", items: "Chickpea, Green Gram" },
      { category: "Roots", items: "Onion, Garlic" },
    ],
  },
  {
    id: "m-feb",
    label: "Feb",
    month: "February",
    categories: [
      { category: "Fruit", items: "Guava, Papaya, Sapota" },
      { category: "Vegetables", items: "Tomato, Cluster Beans" },
      { category: "Greens", items: "Amaranthus, Gongura" },
      { category: "Pulses", items: "Black Gram" },
      { category: "Roots", items: "Turmeric (lift)" },
    ],
  },
  {
    id: "m-mar",
    label: "Mar",
    month: "March",
    categories: [
      { category: "Fruit", items: "Mango (early), Jamun (late)" },
      { category: "Vegetables", items: "Okra, Brinjal, Cucumber" },
      { category: "Greens", items: "Malabar Spinach" },
      { category: "Pulses", items: "Groundnut (harvest)" },
      { category: "Roots", items: "Sweet Potato" },
    ],
  },
  {
    id: "m-apr",
    label: "Apr",
    month: "April",
    categories: [
      { category: "Fruit", items: "Mango (peak), Jackfruit" },
      { category: "Vegetables", items: "Okra, Green Chilli, Bitter Gourd" },
      { category: "Greens", items: "Amaranthus, Mint" },
      { category: "Pulses", items: "Soybean" },
      { category: "Roots", items: "Ginger" },
    ],
  },
  {
    id: "m-may",
    label: "May",
    month: "May",
    categories: [
      { category: "Fruit", items: "Mango (late), Jackfruit, Sapota" },
      { category: "Vegetables", items: "Ridge, Bottle & Snake Gourd" },
      { category: "Greens", items: "Gongura, Mint" },
      { category: "Pulses", items: "Pigeon Pea (flowering)" },
      { category: "Roots", items: "Colocasia" },
    ],
  },
  {
    id: "m-jun",
    label: "Jun",
    month: "June",
    categories: [
      { category: "Fruit", items: "Papaya, Banana, Dragon Fruit" },
      { category: "Vegetables", items: "Cowpea, Cucumber, Muskmelon" },
      { category: "Greens", items: "Amaranthus, Malabar Spinach" },
      { category: "Pulses", items: "Green Gram (kharif sow)" },
      { category: "Roots", items: "Turmeric (planting)" },
    ],
  },
  {
    id: "m-jul",
    label: "Jul",
    month: "July",
    categories: [
      { category: "Fruit", items: "Guava (rain crop), Banana" },
      { category: "Vegetables", items: "Bottle Gourd, Bitter Gourd" },
      { category: "Greens", items: "Gongura, Spinach" },
      { category: "Pulses", items: "Black Gram (kharif sow)" },
      { category: "Roots", items: "Ginger (planting)" },
    ],
  },
  {
    id: "m-aug",
    label: "Aug",
    month: "August",
    categories: [
      { category: "Fruit", items: "Banana, Papaya, Passion Fruit" },
      { category: "Vegetables", items: "Okra, Brinjal, Cowpea" },
      { category: "Greens", items: "Methi, Coriander" },
      { category: "Pulses", items: "Soybean (kharif)" },
      { category: "Roots", items: "—" },
    ],
  },
  {
    id: "m-sep",
    label: "Sep",
    month: "September",
    categories: [
      { category: "Fruit", items: "Guava, Custard Apple" },
      { category: "Vegetables", items: "Tomato, Green Chilli" },
      { category: "Greens", items: "Spinach, Amaranthus" },
      { category: "Pulses", items: "Pigeon Pea (podding)" },
      { category: "Roots", items: "Sweet Potato (planting)" },
    ],
  },
  {
    id: "m-oct",
    label: "Oct",
    month: "October",
    categories: [
      { category: "Fruit", items: "Custard Apple, Ramphal, Pomegranate, Amla" },
      { category: "Vegetables", items: "Ridge Gourd, French Beans (sow)" },
      { category: "Greens", items: "Coriander, Methi" },
      { category: "Pulses", items: "Green Gram (harvest)" },
      { category: "Roots", items: "Onion (planting)" },
    ],
  },
  {
    id: "m-nov",
    label: "Nov",
    month: "November",
    categories: [
      { category: "Fruit", items: "Pomegranate, Amla, Sugarcane" },
      { category: "Vegetables", items: "Tomato, leafy-cole greens" },
      { category: "Greens", items: "Malabar Spinach" },
      { category: "Pulses", items: "Chickpea (sow), Groundnut (sow)" },
      { category: "Roots", items: "Garlic (planting)" },
    ],
  },
  {
    id: "m-dec",
    label: "Dec",
    month: "December",
    categories: [
      { category: "Fruit", items: "Sapota, Guava, Orange, Sugarcane" },
      { category: "Vegetables", items: "French Beans, Brinjal" },
      { category: "Greens", items: "Spinach, Methi" },
      { category: "Pulses", items: "Pigeon Pea (main harvest)" },
      { category: "Roots", items: "Turmeric / Ginger (lift)" },
    ],
  },
];
