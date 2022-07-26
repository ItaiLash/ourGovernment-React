export const random = (min, max) => {
    //min & max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const generateInput = () => {
    const rands = [];
    for (let i = 0; i < 3; i++){
        rands.push(random(1, 10));
    }
    return rands;
}

const randomNames = [
  "Nyla Martin",
  "Isaac Hicks",
  "Toby Phelps",
  "Riley Carrillo",
  "Marlon Parker",
  "Arielle Tucker",
  "Desiree Gregory",
  "Jamie Bartlett",
  "Jefferson Santana",
  "Brandon Zamora",
  "Lillianna David",
  "Kamren Cruz",
  "Camryn Bowman",
  "Maxim Wilkins",
  "Lindsey Keller",
  "Cannon Dixon",
  "Maximilian Kaufman",
  "Litzy Kaufman",
  "Cullen Riddle",
  "Lesly Burns",
  "Kenyon Decker",
  "Micah Caldwell",
  "Myles Rich",
  "Darnell Moss",
  "Nola Randall",
  "Lamont Brennan",
  "Cody Mercado",
  "Esmeralda Malone",
  "Roderick Richmond",
  "Atticus Edwards",
  "Leroy Madden",
  "Frankie Nolan",
  "Jesse Church",
  "Carlie Torres",
  "Alec Snow",
  "Bruno Wilkins",
  "Leonidas Mooney",
  "Johanna Watts",
  "Kaylin Odonnell",
  "Lamont Mclean",
  "Margaret Washington",
  "Alondra Santiago",
  "Tatiana Mclean",
  "Brooklyn Walsh",
  "Yael Phelps",
  "Kylie Hurst",
  "Kolton Singh",
  "Sydney Decker",
  "Connor Higgins",
  "Romeo Bowman",
  "Luka Miles",
  "Donovan Mcdowell",
  "Eliza Garcia",
  "Priscilla Mullen",
  "Ingrid Hubbard",
  "Semaj English",
  "Eileen Bradford",
  "Maddox Klein",
  "Talon Randolph",
  "Aimee Byrd",
  "Keyla Acevedo",
  "Zechariah Choi",
  "Caroline Burns",
  "Melanie Stone",
  "Vaughn Holloway",
  "Tristen Odonnell",
  "Bruce Sparks",
  "Kassidy Wells",
  "Alexis Riggs",
  "Noah Ibarra",
  "Amiyah Landry",
  "Gael Briggs",
  "Ace Charles",
  "Kaia Good",
  "Gideon Stevens",
  "Moses Hoover",
  "Ralph Neal",
  "Melany Davies",
  "Melany Henderson",
  "Dalia Ramsey",
  "Marquise Moody",
  "Mathew Holt",
  "Kenny Forbes",
  "Kylie Barton",
  "Leia Mathews",
  "Dane Delgado",
  "Marlene Jarvis",
  "Azul Myers",
  "Malia Floyd",
  "Marina Sharp",
  "Zaire Orozco",
  "Frances Randolph",
  "Jada Klein",
  "Trevon Pope",
  "Audrey Smith",
  "Kelsey Watson",
  "Fabian Bridges",
  "Alani Mcintyre",
  "Francisco Wagner",
  "Essence Acosta",
  "Ansley Bailey",
  "Kaylin Shelton",
  "Madison Joyce",
  "Madison Joyce",

  "Mateo Cline",
  "Cindy Russell",
  "Cole Stout",
  "Cale Ross",
  "Talon Mullins",
  "Dominik Rojas",
  "Catherine Young",
  "Dania Rodriguez",
  "Weston Mata",
  "Terrance Saunders",
  "Asher Gaines",
  "Jacob Best",
  "Sage Wagner",
  "Darrell Barrera",
  "Immanuel Moon",
  "Brittany Murphy",
  "Mikaela Hawkins",
  "Valentin Horton",
  "Josiah Carr",
  "Kristin Singh",
  "Nathalia Chen",
  "Lara Green",
  "Fabian Wu",
  "Nola Whitney",
  "Jonas Wyatt",
  "Aydan Bush",
  "Tristan Lloyd",
  "Isai Moody",
  "Sophia Andersen",
  "Myah Burke",
  "Sophia Parsons",
  "Lilah Kidd",
  "Jermaine Moyer",
  "Josephine Zavala",
  "Sloane Griffin",
  "Ashtyn Simpson",
  "Lana Cortez",
  "Fiona Lawson",
  "Lyric Cantrell",
  "Stacy Schaefer",
  "Lia Walton",
  "Vance Cooper",
  "Harrison Odonnell",
  "Yadiel Dennis",
  "Jamar Brewer",
  "Rex Ho",
  "Jesus Yang",
  "Weston Duke",
  "Dante Roman",
];

const randomOffices = [
    "Prime Minister's Office",
    "Prime Minister's Office",
    'Agriculture and Rural Development',
    'Aliyah and Integration',
    'Communications',
    'Culture and Sports',
    'Defense',
    'Development of the Negev and the Galilee',
    'Economy and Industry',
    'Education',
    'Energy',
    'Environmental Protection',
    'Finance',
    'Foreign Affairs',
    'Health',
    'Interior',
    'Jerusalem And Heritage',
    'Justice',
    'Public Security',
    'Religious Services',
    'Science and Technology',
    'Social Equality',
    'Welfare and Social Affairs',
    'Tourism'
];

export const generateRandomOfficeName = (size) => {
    let arr = [];
    for (let i = 0; i < size; i++) {
        const idx = random(0, 24-i);
        const name = randomOffices[idx];
        randomOffices.splice(idx, 1);
        arr.push(name);
    }
    return arr;
}

export const generateRandomCandidatesName = (size1, size2) => {
    let arr = [];
    for (let i = 0; i < size1; i++) {
        let arr2 = [];
        for (let j = 0; j < size2; j++) {
          const idx = random(0, randomNames.length - (j + i * size2));
          const name = randomNames[idx];
          randomNames.splice(idx, 1);
          arr2.push(name);
        }
        arr.push(arr2);
    }
  return arr;
};

export const generateRandomVotersName = (size) => {
  let arr = [];
  for (let i = 0; i < size; i++) {
    const idx = random(0, randomNames.length - i);
    const name = randomNames[idx];
    randomNames.splice(idx, 1);
    arr.push(name);
  }
  return arr;
};

export const generateRandomIdx = (arrs, voters) => {
  let randomIdxs = []
  for (let j = 0; j < voters; j++) {
    let arr = [];
    for (let i = 0; i < arrs.length; i++) {
      const idx = random(0, arrs[i].length - 1);
      arr.push(idx);
    }
    randomIdxs.push(arr);
  }
  return randomIdxs;
};