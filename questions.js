const beginnerEasyQuestions = [
  {
    id: 1,
    question: "What is a note?",
    answers: [
      "An instrument",
      "A combination of tones made by an instrument",
      "A single tone made by an instrument",
    ],
    correct: "A single tone made by an instrument",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 2,
    question: "Which is not a note?",
    answers: ["C", "H", "G"],
    correct: "H",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 3,
    question: "How many strings are on the average guitar?",
    answers: ["6", "5", "7"],
    correct: "6",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 4,
    question: "Which genre came first?",
    answers: ["Rock", "Blues", "Classical"],
    correct: "Classical",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 5,
    question: "Guitar is classified as which type of instrument?",
    answers: ["Wind", "String", "Mood"],
    correct: "String",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 6,
    question: "What is not considered a type of guitar?",
    answers: ["Electric", "Brass", "Acoustic"],
    correct: "Brass",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 7,
    question: "What are the knobs at the top of a guitar neck for?",
    answers: ["Exercising fingers", "Playing notes", "Tuning"],
    correct: "Tuning",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 8,
    question: "What is an amp?",
    answers: ["Energy drink", "Amplifier", "A type of note"],
    correct: "Amplifier",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 9,
    question: "Which type of guitar typically needs an amp?",
    answers: ["Steel", "Electric", "Acoustic"],
    correct: "Electric",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 10,
    question: "Where do you put your fingers on a guitar to play notes?",
    answers: ["The body", "The sound hole", "The frets"],
    correct: "The frets",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 11,
    question: "Where does the body of a guitar rest?",
    answers: ["The floor", "Your hand", "Your leg"],
    correct: "Your leg",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 12,
    question: "Is mayonnaise an instrument?",
    answers: ["Yes", "No", "Maybe"],
    correct: "No",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
];

const beginnerMediumQuestions = [
  {
    id: 13,
    question: "Which of these is not a musical term?",
    answers: ["Sharp", "Flat", "Point"],
    correct: "Point",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 14,
    question: "Which string has the highest tone?",
    answers: ["A", "G", "B"],
    correct: "B",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 15,
    question: "Where is the bridge on a guitar?",
    answers: [
      "At the top of the neck",
      "On the body",
      "On the underside of the guitar",
    ],
    correct: "On the body",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 16,
    question: "What note sounds the most “bright”?",
    answers: ["Major", "Minor", "Grande"],
    correct: "Major",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 17,
    question: "Which “clef” is used for guitar?",
    answers: ["Treble", "Bass", "Hue"],
    correct: "Treble",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 18,
    question: "What is the third string from the top of a guitar?",
    answers: ["G", "D", "A"],
    correct: "D",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 19,
    question: "How many frets are held down for a “D” chord?",
    answers: ["3", "4", "5"],
    correct: "3",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 20,
    question: "What is a rest?",
    answers: ["A nap", "A pause in music theory", "A drawn out note"],
    correct: "A pause in music theory",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 21,
    question: "What is a chord?",
    answers: [
      "A music symbol",
      "A type of note",
      "A series of notes played in unison",
    ],
    correct: "A series of notes played in unison",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 22,
    question: "Which note is held for longer?",
    answers: ["A whole note", "A quarter note", "A half note"],
    correct: "A whole note",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 23,
    question: "What is a riff?",
    answers: [
      "A repeated chord progression or refrain",
      "A type of chord",
      "A part of the guitar by the neck",
    ],
    correct: "A repeated chord progression or refrain",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
];

const beginnerHardQuestions = [
  {
    id: 24,
    question: "The numbers at the beginning of a piece of music represent the:",
    answers: ["Beat", "Time signature", "Notes"],
    correct: "Time signature",
    answeredBefore: false,
    difficulty: "hard",
    reward: 3,
  },
  {
    id: 25,
    question: "How many notes are in a major scale?",
    answers: ["6", "8", "7"],
    correct: "7",
    answeredBefore: false,
    difficulty: "hard",
    reward: 3,
  },
  {
    id: 26,
    question: "Which of these means “very quiet”?",
    answers: ["pp", "Lente", "Quieto"],
    correct: "pp",
    answeredBefore: false,
    difficulty: "hard",
    reward: 3,
  },
  {
    id: 27,
    question: "What term is used to “play loudly”?",
    answers: ["Piano", "Forte", "Staccato"],
    correct: "Forte",
    answeredBefore: false,
    difficulty: "hard",
    reward: 3,
  },
  {
    id: 28,
    question: "What is the term for a gradual increase in volume?",
    answers: ["Descendo", "Forte", "Crescendo"],
    correct: "Crescendo",
    answeredBefore: false,
    difficulty: "hard",
    reward: 3,
  },
];

const buskerEasyQuestions = [
  {
    id: 29,
    question: "What are the names of the strings on a guitar?",
    answers: ["E, A, D, G, B, E", "A, B, C, D, E, F", "F, E, G, B, A, B"],
    correct: "E, A, D, G, B, E",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 30,
    question: "What is the ideal way to place your fingers on strings?",
    answers: ["Completely flat", "On your fingertips", "On your knuckles"],
    correct: "On your fingertips",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 31,
    question: "Where does the sound resonate from on an acoustic guitar?",
    answers: ["The body", "The neck", "The tuning pegs"],
    correct: "The body",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 32,
    question: "What symbol tells you to play something over again?",
    answers: ["Andante", "A treble clef", "The repeat sign"],
    correct: "The repeat sign",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 33,
    question: "Two instruments playing together is called a...",
    answers: ["Combo", "Duo", "Duet"],
    correct: "Duet",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 34,
    question: "Which of these is not a note?",
    answers: ["E", "H", "C"],
    correct: "H",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 35,
    question: "Which of these is not a chord?",
    answers: ["E", "C", "E-"],
    correct: "E-",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 36,
    question: "Which is the highest toned string?",
    answers: ["High E", "B", "Low E"],
    correct: "High E",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 37,
    question: "What is the thickest string?",
    answers: ["B", "Low E", "High E"],
    correct: "Low E",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 38,
    question: "Which chord sounds more “sad”?",
    answers: ["Major", "Maja", "Minor"],
    correct: "Minor",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
];

const buskerMediumQuestion = [
  {
    id: 39,
    question: "Which is the sign for a sharp?",
    answers: ["m", "^", "#"],
    correct: "#",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 40,
    question: "A beat is...",
    answers: ["A unit of time", "A dance move", "How loud or soft to play"],
    correct: "A unit of time",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 41,
    question: "Which is a faster tempo?",
    answers: ["90bpm", "50bpm", "120bpm"],
    correct: "120bpm",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 42,
    question: "How many frets are held down for an Em chord?",
    answers: ["2", "4", "1"],
    correct: "2",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 43,
    question: "Which note comes after E?",
    answers: ["E#", "F", "Em"],
    correct: "F",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 44,
    question: "How many beats are in a bar with a 4/4 time signature?",
    answers: ["5", "8", "4"],
    correct: "4",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 45,
    question: "What is an octave?",
    answers: [
      "A type of instrument",
      "Two notes of different pitches that share a letter name",
      "A chord that is played slowly",
    ],
    correct: "Two notes of different pitches that share a letter name",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 46,
    question: "Which is a guitar technique?",
    answers: ["Hammer-offs", "Hammer-ons", "Hammersons"],
    correct: "Hammer-ons",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 47,
    question: "Which is a guitar technique?",
    answers: ["Slides", "Sliders", "Slips"],
    correct: "Slides",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 48,
    question: "Which is a guitar technique?",
    answers: ["Bonds", "Benders", "Bends"],
    correct: "Bends",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
];

const buskerHardQuestions = [
  {
    id: 49,
    question: "What is the opposite of Staccato?",
    answers: ["Allegro", "Andante", "Legato"],
    correct: "Legato",
    answeredBefore: false,
    difficulty: "hard",
    reward: 3,
  },
  {
    id: 50,
    question: "How many notes separate an octave?",
    answers: ["10", "6", "8"],
    correct: "8",
    answeredBefore: false,
    difficulty: "hard",
    reward: 3,
  },
  {
    id: 51,
    question: "How many different notes are in a pentatonic scale?",
    answers: ["7", "5", "8"],
    correct: "5",
    answeredBefore: false,
    difficulty: "hard",
    reward: 3,
  },
  {
    id: 52,
    question: "What is the note name of the 4th fret on the B string?",
    answers: ["C", "D#", "E"],
    correct: "D#",
    answeredBefore: false,
    difficulty: "hard",
    reward: 3,
  },
  {
    id: 53,
    question: "What is a semitone?",
    answers: [
      "A half step/The distance from one fret to the next",
      "A full step/The distance from one fret to the next",
      "A quarter step/The distance between two frets",
    ],
    correct: "A half step/The distance from one fret to the next",
    answeredBefore: false,
    difficulty: "hard",
    reward: 3,
  },
];

const localTalentEasyQuestions = [
  {
    id: 54,
    question: "Is a sharp note up or down a fret?",
    answers: ["Up", "Down", "Neither, it's up one string"],
    correct: "Up",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 55,
    question: "Which technique is most commonly used for classical guitar?",
    answers: ["Pick", "Finger-picking", "Plucking"],
    correct: "Finger-picking",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 56,
    question: 'Does a minor scale sound "bright"?',
    answers: ["Yes", "No", "Sometimes"],
    correct: "No",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 57,
    question: "The thicker the string, the lower the note. True or False?",
    answers: ["True", "False", "Depends"],
    correct: "True",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 58,
    question: "Would an Em chord sound happy?",
    answers: ["Yes", "No", "Sometimes"],
    correct: "No",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 59,
    question: "Would an E chord sound happy?",
    answers: ["Yes", "No", "Sometimes"],
    correct: "Yes",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 60,
    question: "Would a D chord sound happy?",
    answers: ["Yes", "No", "Sometimes"],
    correct: "Yes",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 61,
    question: "What is a fret?",
    answers: [
      "A type of string",
      "Metal pieces on the neck",
      "The act of worrying about something",
    ],
    correct: "Metal pieces on the neck",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 62,
    question: "What is a capo?",
    answers: [
      "A slang term for “cool”",
      "A device to change the guitar’s pitch",
      "A term in music used to say “slow”",
    ],
    correct: "A device to change the guitar’s pitch",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 63,
    question: "What is finger picking?",
    answers: [
      "Using a pick to strum the strings",
      "Using your fingers to strum the strings",
      "Using your fingers to pluck the strings",
    ],
    correct: "Using your fingers to pluck the strings",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
  {
    id: 64,
    question: "Which note comes after F?",
    answers: ["F#", "G", "A"],
    correct: "F#",
    answeredBefore: false,
    difficulty: "easy",
    reward: 1,
  },
];

const localTalentMediumQuestions = [
  {
    id: 65,
    question: "What are the names of the lines on a staff?",
    answers: ["E G B D F", "A D E F B", "B A C D E"],
    correct: "E G B D F",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 66,
    question: "What is a pull off?",
    answers: [
      "A strumming technique that uses pulling",
      "Pulling to pluck a string with your fret fingers",
      "Neither",
    ],
    correct: "Pulling to pluck a string with your fret fingers",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 67,
    question: "How many frets are held down for an Am chord?",
    answers: ["3", "4", "6"],
    correct: "3",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 68,
    question: "The five lines that notes are written on is called a...",
    answers: ["Bar", "Line", "Staff"],
    correct: "Staff",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 69,
    question: "What does an m after a note mean?",
    answers: ["Micro", "Minor", "Minismo"],
    correct: "Minor",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 70,
    question: "Which notes do not have sharps?",
    answers: ["B and E", "E and G", "E and F"],
    correct: "B and E",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 71,
    question: "What symbol signifies a “flat”?",
    answers: ["-", "m", "b"],
    correct: "b",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 72,
    question:
      "What note would be played if you held down the first fret of the low E string?",
    answers: ["G", "E#", "F"],
    correct: "F",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 73,
    question: "What symbol indicates the sound or pitch?",
    answers: ["b", "A note", "#"],
    correct: "A note",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 74,
    question: "How many lines are in a musical staff?",
    answers: ["6", "7", "5"],
    correct: "5",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
  {
    id: 75,
    question: "How many notes make a chord?",
    answers: ["No more than 4", "2 or more", "No less than 3"],
    correct: "2 or more",
    answeredBefore: false,
    difficulty: "medium",
    reward: 2,
  },
];

const localTalentHardQuestions = [
  {
    id: 76,
    question: "What is the Relative minor of B?",
    answers: ["G", "Bm", "G# Minor"],
    correct: "G# Minor",
    answeredBefore: false,
    difficulty: "hard",
    reward: 3,
  },
  {
    id: 77,
    question:
      "Where do you see if a note is marked as sharp for an entire composition?",
    answers: [
      "Next to the time signature",
      "In the staff",
      "Before the treble clef",
    ],
    correct: "Next to the time signature",
    answeredBefore: false,
    difficulty: "hard",
    reward: 3,
  },
  {
    id: 78,
    question: "What symbol indicates Slide down in Tablature?",
    answers: ["/", "\\", "<"],
    correct: "/",
    answeredBefore: false,
    difficulty: "hard",
    reward: 3,
  },
  {
    id: 79,
    question: "What is a Capotasto?",
    answers: [
      "A capo",
      "A term to say “get louder”",
      "A term to say “play staccato",
    ],
    correct: "A capo",
    answeredBefore: false,
    difficulty: "hard",
    reward: 3,
  },
  {
    id: 80,
    question: "What is an arpeggio?",
    answers: [
      "A chord strummed all at once",
      "A scale",
      "A broken up chord played consecutively",
    ],
    correct: "A broken up chord played consecutively",
    answeredBefore: false,
    difficulty: "hard",
    reward: 3,
  },
];

export {
  beginnerEasyQuestions,
  beginnerMediumQuestions,
  beginnerHardQuestions,
  buskerEasyQuestions,
  buskerMediumQuestion,
  buskerHardQuestions,
  localTalentEasyQuestions,
  localTalentMediumQuestions,
  localTalentHardQuestions,
};
