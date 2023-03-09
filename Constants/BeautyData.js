const features = [
  {
    key: "1",
    text: "Ergonomic\n Design",
    image: require("../Assets/icons/ri_hand-heart-line.png"),
  },
  {
    key: "2",
    text: "Texture",
    image: require("../Assets/icons/icon-park-outline_foundation-makeup.png"),
  },
  {
    key: "3",
    text: "No Tools",
    image: require("../Assets/icons/mdi_lock-open-outline.png"),
  },
  {
    key: "4",
    text: "Tactile\n Markers",
    image: require("../Assets/icons/tabler_brush-off.png"),
  },
  {
    key: "5",
    text: "Easy Open",
    image: require("../Assets/icons/tabler_texture.png"),
  },
  { key: "6", text: "Easy Apply", image: require("../Assets/icons/brail.png") },
];

const recentlyAdded = [
  {
    key: "1",
    text: "Brush blissful",
    brand: "YSL",
    image: require("../Assets/images/m11.jpeg"),
    heart: require("../Assets/icons/mdi_cards-heart-outline-white.png"),
    pending: require("../Assets/icons/rating-circle-pending.png"),
    review: "Pending Review",
  },
  {
    key: "2",
    text: "Rejuvenate bubbly",
    brand: "Forbiden Beauty",
    image: require("../Assets/images/m14.jpeg"),
    heart: require("../Assets/icons/mdi_cards-heart-outline-white.png"),
    pending: require("../Assets/icons/rating-circle-pending.png"),
    review: "Pending Review",
  },
  {
    key: "3",
    text: "Fabulous glowy",
    brand: "Gucci",
    image: require("../Assets/images/m17.jpeg"),
    heart: require("../Assets/icons/mdi_cards-heart-outline-white.png"),
    pending: require("../Assets/icons/rating-circle-pending.png"),
    review: "Pending Review",
  },
  {
    key: "4",
    text: "Fluffly cream dream",
    brand: "Bobbi Brown",
    image: require("../Assets/images/m16.jpeg"),
    heart: require("../Assets/icons/mdi_cards-heart-outline-white.png"),
    pending: require("../Assets/icons/rating-circle-pending.png"),
    review: "Pending Review",
  },
  {
    key: "5",
    text: "Lipstick Berlin marvelous",
    brand: "Chanel",
    image: require("../Assets/images/m13.jpeg"),
    heart: require("../Assets/images/m13.jpeg"),
    pending: require("../Assets/images/m13.jpeg"),
    review: "Pending Review",
  },
  {
    key: "6",
    text: "Hydrating lotion serene",
    brand: "Miss Swiss",
    image: require("../Assets/images/m15.jpeg"),
    heart: require("../Assets/icons/mdi_cards-heart-outline-white.png"),
    pending: require("../Assets/icons/rating-circle-pending.png"),
    review: "Pending Review",
  },
];
const highlyRated = [
  {
    key: "1",
    brand: "Rare Beauty",
    name: "Pink Lipstick",
    image: require("../Assets/images/demo.png"),
    accessibility: "Ergonomic Design",
    buyItAgain: 92,
    numberOfReviews: 1598,
    heart: require("../Assets/icons/mdi_cards-heart-outline-white.png"),
    pending: require("../Assets/icons/rating-circle-small.png"),
  },
  {
    key: "2",
    brand: "Kohls Kreative",
    name: "Soft Pinch Liquid....",
    image: require("../Assets/images/m7.jpeg"),
    accessibility: "Texture",
    buyItAgain: 90,
    numberOfReviews: 2014,
    heart: require("../Assets/icons/mdi_cards-heart-outline-white.png"),
    pending: require("../Assets/icons/rating-circle-small.png"),
  },
  {
    key: "3",
    brand: "Nora",
    name: "Zen Zone",
    image: require("../Assets/images/m15.jpeg"),
    accessibility: "Easy Apply",
    buyItAgain: 88,
    numberOfReviews: 666,
    heart: require("../Assets/icons/mdi_cards-heart-outline-white.png"),
    pending: require("../Assets/icons/rating-circle-small.png"),
  },
  {
    key: "4",
    brand: "Neauthy",
    name: "Mineral Plus Nigh...",
    image: require("../Assets/images/m11.jpeg"),
    accessibility: "No Tools",
    buyItAgain: 92,
    numberOfReviews: 1294,
    heart: require("../Assets/icons/mdi_cards-heart-outline-white.png"),
    pending: require("../Assets/icons/rating-circle-small.png"),
  },
  {
    key: "5",
    brand: "Cosmetic",
    name: "Daily Dose",
    image: require("../Assets/images/m5.jpeg"),
    accessibility: "Tactile Markers",
    buyItAgain: 97,
    numberOfReviews: 894,
    heart: require("../Assets/icons/mdi_cards-heart-outline-white.png"),
    pending: require("../Assets/icons/rating-circle-small.png"),
  },
  {
    key: "6",
    brand: "CORS",
    name: "Releaf Balm",
    image: require("../Assets/images/m6.jpeg"),
    accessibility: "No Tools",
    buyItAgain: 86,
    numberOfReviews: 789,
    heart: require("../Assets/icons/mdi_cards-heart-outline-white.png"),
    pending: require("../Assets/icons/rating-circle-small.png"),
  },
];
const accessibleBrands = [
  {
    key: "1",
    brand: "Rare Beauty",
    text: "Ergonomic Design",
    image: require("../Assets/images/m7.jpeg"),
    brandLogo: require("../Assets/icons/icon1.png"),
  },
  {
    key: "2",
    brand: "Kohls Kreative",
    text: "Texture",
    image: require("../Assets/images/m8.jpeg"),
    brandLogo: require("../Assets/icons/icon2.png"),
  },
  {
    key: "3",
    brand: "Nora",
    text: "No Tools",
    image: require("../Assets/images/m9.jpeg"),
    brandLogo: require("../Assets/icons/icon3.png"),
  },
  {
    key: "4",
    brand: "CORS",
    text: "Tactile Markers",
    image: require("../Assets/images/m10.jpeg"),
    brandLogo: require("../Assets/icons/icon4.png"),
  },
  {
    key: "5",
    brand: "YSL",
    text: "Easy To Open",
    image: require("../Assets/images/m11.jpeg"),
    brandLogo: require("../Assets/icons/icon5.png"),
  },
  {
    key: "6",
    brand: "Poko",
    text: "Easy To Apply",
    image: require("../Assets/images/m12.jpeg"),
    brandLogo: require("../Assets/icons/icon6.png"),
  },
];
export { features, highlyRated, accessibleBrands, recentlyAdded };
