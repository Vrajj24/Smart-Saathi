"use client"

import { useState } from "react"
import { CheckCircle, XCircle, Award, Clock, Star } from "lucide-react"
import Layout from "./Layout"

const Quizzes = ({ userData, onLogout, onNavigate, currentPage }) => {
  const [currentQuiz, setCurrentQuiz] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [selectedGrade, setSelectedGrade] = useState(1)

  const quizzes = [
    // Grade 1
    {
      id: 1,
      title: "Basic Mathematics Quiz",
      subject: "Mathematics",
      grade: 1,
      questions: 5,
      timeLimit: 10,
      difficulty: "Easy",
      completed: false,
      bestScore: 0,
    },
    {
      id: 2,
      title: "English Alphabet Quiz",
      subject: "English",
      grade: 1,
      questions: 8,
      timeLimit: 15,
      difficulty: "Easy",
      completed: true,
      bestScore: 85,
    },
    {
      id: 3,
      title: "Plants and Animals",
      subject: "Science",
      grade: 1,
      questions: 6,
      timeLimit: 12,
      difficulty: "Medium",
      completed: false,
      bestScore: 0,
    },
    // Grade 2
    {
      id: 4,
      title: "Addition and Subtraction",
      subject: "Mathematics",
      grade: 2,
      questions: 7,
      timeLimit: 15,
      difficulty: "Easy",
      completed: false,
      bestScore: 0,
    },
    {
      id: 5,
      title: "Phonics and Reading",
      subject: "English",
      grade: 2,
      questions: 8,
      timeLimit: 15,
      difficulty: "Easy",
      completed: false,
      bestScore: 0,
    },
    {
      id: 6,
      title: "Weather and Seasons",
      subject: "Science",
      grade: 2,
      questions: 6,
      timeLimit: 12,
      difficulty: "Easy",
      completed: false,
      bestScore: 0,
    },
    // Grade 3
    {
      id: 7,
      title: "Multiplication Basics",
      subject: "Mathematics",
      grade: 3,
      questions: 8,
      timeLimit: 20,
      difficulty: "Medium",
      completed: false,
      bestScore: 0,
    },
    {
      id: 8,
      title: "Grammar and Sentences",
      subject: "English",
      grade: 3,
      questions: 7,
      timeLimit: 15,
      difficulty: "Medium",
      completed: false,
      bestScore: 0,
    },
    {
      id: 9,
      title: "Human Body Systems",
      subject: "Science",
      grade: 3,
      questions: 8,
      timeLimit: 18,
      difficulty: "Medium",
      completed: false,
      bestScore: 0,
    },
    {
      id: 10,
      title: "Ancient Civilizations",
      subject: "Social Studies",
      grade: 3,
      questions: 7,
      timeLimit: 20,
      difficulty: "Medium",
      completed: false,
      bestScore: 0,
    },
    // Grade 4
    {
      id: 11,
      title: "Fractions and Decimals",
      subject: "Mathematics",
      grade: 4,
      questions: 8,
      timeLimit: 25,
      difficulty: "Hard",
      completed: false,
      bestScore: 0,
    },
    {
      id: 12,
      title: "Comprehension and Writing",
      subject: "English",
      grade: 4,
      questions: 8,
      timeLimit: 20,
      difficulty: "Medium",
      completed: false,
      bestScore: 0,
    },
    {
      id: 13,
      title: "Water Cycle and Ecosystems",
      subject: "Science",
      grade: 4,
      questions: 8,
      timeLimit: 20,
      difficulty: "Medium",
      completed: false,
      bestScore: 0,
    },
    {
      id: 14,
      title: "Geography and Maps",
      subject: "Social Studies",
      grade: 4,
      questions: 7,
      timeLimit: 18,
      difficulty: "Medium",
      completed: false,
      bestScore: 0,
    },
    // Grade 5
    {
      id: 15,
      title: "Algebra Fundamentals",
      subject: "Mathematics",
      grade: 5,
      questions: 8,
      timeLimit: 30,
      difficulty: "Hard",
      completed: false,
      bestScore: 0,
    },
    {
      id: 16,
      title: "Literature and Poetry",
      subject: "English",
      grade: 5,
      questions: 8,
      timeLimit: 25,
      difficulty: "Hard",
      completed: false,
      bestScore: 0,
    },
    {
      id: 17,
      title: "Space and Astronomy",
      subject: "Science",
      grade: 5,
      questions: 8,
      timeLimit: 25,
      difficulty: "Hard",
      completed: false,
      bestScore: 0,
    },
    {
      id: 18,
      title: "World History",
      subject: "Social Studies",
      grade: 5,
      questions: 8,
      timeLimit: 25,
      difficulty: "Hard",
      completed: false,
      bestScore: 0,
    },
    {
      id: 19,
      title: "Pre-Algebra",
      subject: "Mathematics",
      grade: 6,
      questions: 8,
      timeLimit: 30,
      difficulty: "Medium",
      completed: false,
      bestScore: 0,
    },
    {
      id: 20,
      title: "Advanced Grammar",
      subject: "English",
      grade: 6,
      questions: 8,
      timeLimit: 25,
      difficulty: "Medium",
      completed: false,
      bestScore: 0,
    },
    {
      id: 21,
      title: "Earth Science",
      subject: "Science",
      grade: 6,
      questions: 8,
      timeLimit: 25,
      difficulty: "Medium",
      completed: false,
      bestScore: 0,
    },
    {
      id: 22,
      title: "World Geography",
      subject: "Social Studies",
      grade: 6,
      questions: 8,
      timeLimit: 25,
      difficulty: "Medium",
      completed: false,
      bestScore: 0,
    },
    {
      id: 23,
      title: "Geometry Basics",
      subject: "Mathematics",
      grade: 7,
      questions: 8,
      timeLimit: 30,
      difficulty: "Hard",
      completed: false,
      bestScore: 0,
    },
    {
      id: 24,
      title: "Creative Writing",
      subject: "English",
      grade: 7,
      questions: 8,
      timeLimit: 30,
      difficulty: "Medium",
      completed: false,
      bestScore: 0,
    },
    {
      id: 25,
      title: "Biology Fundamentals",
      subject: "Science",
      grade: 7,
      questions: 8,
      timeLimit: 30,
      difficulty: "Hard",
      completed: false,
      bestScore: 0,
    },
    {
      id: 26,
      title: "American History",
      subject: "Social Studies",
      grade: 7,
      questions: 8,
      timeLimit: 30,
      difficulty: "Hard",
      completed: false,
      bestScore: 0,
    },
    {
      id: 27,
      title: "Algebra I",
      subject: "Mathematics",
      grade: 8,
      questions: 8,
      timeLimit: 35,
      difficulty: "Hard",
      completed: false,
      bestScore: 0,
    },
    {
      id: 28,
      title: "Shakespeare Studies",
      subject: "English",
      grade: 8,
      questions: 8,
      timeLimit: 30,
      difficulty: "Hard",
      completed: false,
      bestScore: 0,
    },
    {
      id: 29,
      title: "Chemistry Basics",
      subject: "Science",
      grade: 8,
      questions: 8,
      timeLimit: 30,
      difficulty: "Hard",
      completed: false,
      bestScore: 0,
    },
    {
      id: 30,
      title: "Civics and Government",
      subject: "Social Studies",
      grade: 8,
      questions: 8,
      timeLimit: 30,
      difficulty: "Hard",
      completed: false,
      bestScore: 0,
    },
    {
      id: 31,
      title: "Algebra II",
      subject: "Mathematics",
      grade: 9,
      questions: 8,
      timeLimit: 40,
      difficulty: "Hard",
      completed: false,
      bestScore: 0,
    },
    {
      id: 32,
      title: "World Literature",
      subject: "English",
      grade: 9,
      questions: 8,
      timeLimit: 35,
      difficulty: "Hard",
      completed: false,
      bestScore: 0,
    },
    {
      id: 33,
      title: "Physics Fundamentals",
      subject: "Science",
      grade: 9,
      questions: 8,
      timeLimit: 35,
      difficulty: "Hard",
      completed: false,
      bestScore: 0,
    },
    {
      id: 34,
      title: "World History II",
      subject: "Social Studies",
      grade: 9,
      questions: 8,
      timeLimit: 35,
      difficulty: "Hard",
      completed: false,
      bestScore: 0,
    },
    {
      id: 35,
      title: "Trigonometry",
      subject: "Mathematics",
      grade: 10,
      questions: 8,
      timeLimit: 40,
      difficulty: "Hard",
      completed: false,
      bestScore: 0,
    },
    {
      id: 36,
      title: "Advanced Composition",
      subject: "English",
      grade: 10,
      questions: 8,
      timeLimit: 35,
      difficulty: "Hard",
      completed: false,
      bestScore: 0,
    },
    {
      id: 37,
      title: "Environmental Science",
      subject: "Science",
      grade: 10,
      questions: 8,
      timeLimit: 35,
      difficulty: "Hard",
      completed: false,
      bestScore: 0,
    },
    {
      id: 38,
      title: "Economics",
      subject: "Social Studies",
      grade: 10,
      questions: 8,
      timeLimit: 35,
      difficulty: "Hard",
      completed: false,
      bestScore: 0,
    },
  ]

  const quizQuestions = {
    1: [
      { question: "What is 2 + 3?", options: ["4", "5", "6", "7"], correct: "5" },
      { question: "What is 5 - 2?", options: ["2", "3", "4", "5"], correct: "3" },
      { question: "What is 1 + 1?", options: ["1", "2", "3", "4"], correct: "2" },
      { question: "What is 4 + 1?", options: ["4", "5", "6", "7"], correct: "5" },
      { question: "What is 3 - 1?", options: ["1", "2", "3", "4"], correct: "2" },
    ],
    2: [
      { question: "Which is the first letter of the alphabet?", options: ["B", "A", "C", "D"], correct: "A" },
      { question: "Which letter comes after B?", options: ["A", "C", "D", "E"], correct: "C" },
      { question: "How many vowels are there?", options: ["3", "4", "5", "6"], correct: "5" },
      { question: "Which is a vowel?", options: ["B", "C", "E", "F"], correct: "E" },
      { question: "What is the last letter of the alphabet?", options: ["X", "Y", "Z", "W"], correct: "Z" },
      { question: "Which letter comes before D?", options: ["B", "C", "E", "F"], correct: "C" },
      { question: "How many consonants are there?", options: ["20", "21", "22", "23"], correct: "21" },
      { question: "Which is NOT a vowel?", options: ["A", "E", "I", "B"], correct: "B" },
    ],
    3: [
      {
        question: "What do plants need to grow?",
        options: ["Only water", "Only sunlight", "Water and sunlight", "Nothing"],
        correct: "Water and sunlight",
      },
      { question: "Which animal is a mammal?", options: ["Fish", "Bird", "Dog", "Lizard"], correct: "Dog" },
      { question: "What do animals eat?", options: ["Rocks", "Water", "Food", "Air"], correct: "Food" },
      { question: "Which is a plant?", options: ["Dog", "Cat", "Tree", "Fish"], correct: "Tree" },
      { question: "Where do fish live?", options: ["Land", "Sky", "Water", "Underground"], correct: "Water" },
      { question: "What color are most leaves?", options: ["Red", "Green", "Yellow", "Blue"], correct: "Green" },
    ],
    4: [
      { question: "What is 5 + 5?", options: ["9", "10", "11", "12"], correct: "10" },
      { question: "What is 10 - 3?", options: ["6", "7", "8", "9"], correct: "7" },
      { question: "What is 6 + 4?", options: ["9", "10", "11", "12"], correct: "10" },
      { question: "What is 15 - 5?", options: ["8", "9", "10", "11"], correct: "10" },
      { question: "What is 7 + 3?", options: ["9", "10", "11", "12"], correct: "10" },
      { question: "What is 12 - 2?", options: ["8", "9", "10", "11"], correct: "10" },
      { question: "What is 8 + 2?", options: ["9", "10", "11", "12"], correct: "10" },
    ],
    5: [
      { question: "What sound does 'A' make?", options: ["eh", "ah", "oh", "uh"], correct: "ah" },
      { question: "What sound does 'E' make?", options: ["eh", "ah", "oh", "uh"], correct: "eh" },
      { question: "Which word rhymes with 'cat'?", options: ["dog", "bat", "bird", "fish"], correct: "bat" },
      { question: "Which word rhymes with 'sun'?", options: ["moon", "fun", "star", "sky"], correct: "fun" },
      { question: "What is the opposite of 'big'?", options: ["large", "small", "huge", "tiny"], correct: "small" },
      { question: "What is the opposite of 'hot'?", options: ["warm", "cold", "cool", "freezing"], correct: "cold" },
      { question: "Which word starts with 'B'?", options: ["apple", "ball", "cat", "dog"], correct: "ball" },
      { question: "Which word ends with 'T'?", options: ["dog", "cat", "bird", "fish"], correct: "cat" },
    ],
    6: [
      {
        question: "What is the weather like when it rains?",
        options: ["Sunny", "Cloudy", "Rainy", "Snowy"],
        correct: "Rainy",
      },
      { question: "Which season is the coldest?", options: ["Spring", "Summer", "Fall", "Winter"], correct: "Winter" },
      { question: "Which season is the hottest?", options: ["Spring", "Summer", "Fall", "Winter"], correct: "Summer" },
      { question: "What do we wear in winter?", options: ["Shorts", "Coat", "Sandals", "Hat only"], correct: "Coat" },
      { question: "When do flowers bloom?", options: ["Winter", "Spring", "Fall", "Summer"], correct: "Spring" },
      {
        question: "What falls from clouds?",
        options: ["Snow", "Rain", "Water", "All of the above"],
        correct: "All of the above",
      },
    ],
    7: [
      { question: "What is 2 × 3?", options: ["5", "6", "7", "8"], correct: "6" },
      { question: "What is 4 × 5?", options: ["18", "19", "20", "21"], correct: "20" },
      { question: "What is 3 × 3?", options: ["6", "8", "9", "10"], correct: "9" },
      { question: "What is 5 × 2?", options: ["8", "9", "10", "11"], correct: "10" },
      { question: "What is 6 × 2?", options: ["10", "11", "12", "13"], correct: "12" },
      { question: "What is 7 × 2?", options: ["12", "13", "14", "15"], correct: "14" },
      { question: "What is 8 × 2?", options: ["14", "15", "16", "17"], correct: "16" },
      { question: "What is 9 × 2?", options: ["16", "17", "18", "19"], correct: "18" },
    ],
    8: [
      {
        question: "What is a noun?",
        options: ["Action word", "Person, place, or thing", "Describing word", "Connecting word"],
        correct: "Person, place, or thing",
      },
      {
        question: "What is a verb?",
        options: ["Person, place, or thing", "Action word", "Describing word", "Connecting word"],
        correct: "Action word",
      },
      {
        question: "What is an adjective?",
        options: ["Action word", "Person, place, or thing", "Describing word", "Connecting word"],
        correct: "Describing word",
      },
      {
        question: "Which is a complete sentence?",
        options: ["Running fast", "The dog runs", "Very happy", "In the park"],
        correct: "The dog runs",
      },
      {
        question: "What punctuation ends a sentence?",
        options: ["Comma", "Period", "Question mark", "All of the above"],
        correct: "All of the above",
      },
      {
        question: "What is a pronoun?",
        options: ["Noun", "Verb", "Word that replaces a noun", "Adjective"],
        correct: "Word that replaces a noun",
      },
      {
        question: "Which sentence is correct?",
        options: ["She go to school", "She goes to school", "She going to school", "She gone to school"],
        correct: "She goes to school",
      },
    ],
    9: [
      { question: "How many bones are in the human body?", options: ["150", "206", "250", "300"], correct: "206" },
      {
        question: "What pumps blood through the body?",
        options: ["Brain", "Lungs", "Heart", "Stomach"],
        correct: "Heart",
      },
      {
        question: "What do we breathe in?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Helium"],
        correct: "Oxygen",
      },
      {
        question: "What is the largest organ in the body?",
        options: ["Heart", "Brain", "Skin", "Liver"],
        correct: "Skin",
      },
      {
        question: "What do muscles do?",
        options: ["Think", "Digest food", "Move the body", "Filter blood"],
        correct: "Move the body",
      },
      { question: "Where is the brain located?", options: ["Chest", "Stomach", "Head", "Back"], correct: "Head" },
      { question: "What do teeth do?", options: ["Breathe", "Chew food", "Pump blood", "Think"], correct: "Chew food" },
      { question: "How many chambers does the heart have?", options: ["2", "3", "4", "5"], correct: "4" },
    ],
    10: [
      {
        question: "Which is an ancient civilization?",
        options: ["Modern Rome", "Ancient Egypt", "Modern China", "Modern Greece"],
        correct: "Ancient Egypt",
      },
      {
        question: "What did ancient Egyptians build?",
        options: ["Castles", "Pyramids", "Skyscrapers", "Bridges"],
        correct: "Pyramids",
      },
      {
        question: "Where did the ancient Romans live?",
        options: ["Greece", "Egypt", "Italy", "France"],
        correct: "Italy",
      },
      {
        question: "What is a pharaoh?",
        options: ["Soldier", "Egyptian ruler", "Priest", "Slave"],
        correct: "Egyptian ruler",
      },
      {
        question: "What did ancient people use for writing?",
        options: ["Paper", "Papyrus", "Plastic", "Metal"],
        correct: "Papyrus",
      },
      {
        question: "Which ancient civilization built the Great Wall?",
        options: ["Egypt", "Rome", "China", "Greece"],
        correct: "China",
      },
      {
        question: "What was the Colosseum?",
        options: ["Palace", "Temple", "Roman arena", "Bridge"],
        correct: "Roman arena",
      },
    ],
    11: [
      { question: "What is 1/2 + 1/2?", options: ["1/4", "1/2", "1", "2"], correct: "1" },
      { question: "What is 1/4 as a decimal?", options: ["0.25", "0.5", "0.75", "1.0"], correct: "0.25" },
      { question: "What is 0.5 as a fraction?", options: ["1/4", "1/2", "3/4", "1/1"], correct: "1/2" },
      { question: "What is 3/4 + 1/4?", options: ["1/2", "3/4", "1", "5/4"], correct: "1" },
      { question: "What is 0.75 as a fraction?", options: ["1/4", "1/2", "3/4", "1/1"], correct: "3/4" },
      { question: "What is 1/3 + 1/3?", options: ["1/3", "2/3", "1", "3/3"], correct: "2/3" },
      { question: "What is 2/5 as a decimal?", options: ["0.2", "0.4", "0.5", "0.6"], correct: "0.4" },
      { question: "What is 0.1 as a fraction?", options: ["1/10", "1/5", "1/2", "1/100"], correct: "1/10" },
    ],
    12: [
      {
        question: "What is the main idea of a story?",
        options: ["The setting", "The characters", "The central message", "The ending"],
        correct: "The central message",
      },
      {
        question: "What is a metaphor?",
        options: ["A comparison using 'like'", "A direct comparison", "A repeated sound", "A type of poem"],
        correct: "A direct comparison",
      },
      {
        question: "What is a simile?",
        options: ["A comparison using 'like'", "A direct comparison", "A repeated sound", "A type of poem"],
        correct: "A comparison using 'like'",
      },
      {
        question: "What is the setting of a story?",
        options: ["The characters", "The time and place", "The plot", "The theme"],
        correct: "The time and place",
      },
      {
        question: "What is a plot?",
        options: ["The characters", "The setting", "The sequence of events", "The theme"],
        correct: "The sequence of events",
      },
      {
        question: "What is a theme?",
        options: ["The setting", "The main message", "The characters", "The ending"],
        correct: "The main message",
      },
      {
        question: "What is an author's purpose?",
        options: ["To confuse", "To entertain, inform, or persuade", "To bore", "To complain"],
        correct: "To entertain, inform, or persuade",
      },
      {
        question: "What is a character?",
        options: ["The setting", "A person in the story", "The plot", "The theme"],
        correct: "A person in the story",
      },
    ],
    13: [
      {
        question: "What is the water cycle?",
        options: ["Rain only", "Evaporation, condensation, precipitation", "Snow only", "Clouds only"],
        correct: "Evaporation, condensation, precipitation",
      },
      {
        question: "What is an ecosystem?",
        options: ["A forest", "Living and non-living things in an area", "A desert", "An ocean"],
        correct: "Living and non-living things in an area",
      },
      {
        question: "What is a food chain?",
        options: ["A restaurant", "How energy moves through organisms", "A type of necklace", "A group of animals"],
        correct: "How energy moves through organisms",
      },
      {
        question: "What is a producer?",
        options: ["An animal", "A plant that makes food", "A consumer", "A decomposer"],
        correct: "A plant that makes food",
      },
      {
        question: "What is a consumer?",
        options: ["A plant", "An organism that eats other organisms", "A producer", "A decomposer"],
        correct: "An organism that eats other organisms",
      },
      {
        question: "What is a decomposer?",
        options: ["A plant", "An animal", "An organism that breaks down dead matter", "A producer"],
        correct: "An organism that breaks down dead matter",
      },
      {
        question: "What is photosynthesis?",
        options: ["Eating food", "Plants making food from sunlight", "Breathing", "Moving around"],
        correct: "Plants making food from sunlight",
      },
      {
        question: "What is a habitat?",
        options: ["A house", "The place where an organism lives", "A type of animal", "A food source"],
        correct: "The place where an organism lives",
      },
    ],
    14: [
      {
        question: "What is a map?",
        options: ["A book", "A representation of an area", "A picture", "A story"],
        correct: "A representation of an area",
      },
      {
        question: "What is a compass rose?",
        options: ["A flower", "Shows directions on a map", "A type of map", "A location"],
        correct: "Shows directions on a map",
      },
      {
        question: "What does a scale on a map show?",
        options: ["Colors", "Distances", "Names", "Symbols"],
        correct: "Distances",
      },
      {
        question: "What is a continent?",
        options: ["A country", "A large landmass", "An ocean", "A city"],
        correct: "A large landmass",
      },
      { question: "How many continents are there?", options: ["5", "6", "7", "8"], correct: "7" },
      {
        question: "What is an ocean?",
        options: ["A lake", "A large body of salt water", "A river", "A sea"],
        correct: "A large body of salt water",
      },
      {
        question: "What is the equator?",
        options: ["A line dividing north and south", "A country", "A mountain", "A river"],
        correct: "A line dividing north and south",
      },
    ],
    15: [
      {
        question: "What is a variable?",
        options: ["A number", "A letter representing an unknown number", "An equation", "A solution"],
        correct: "A letter representing an unknown number",
      },
      {
        question: "What is an equation?",
        options: ["A variable", "A mathematical statement with an equals sign", "An expression", "A number"],
        correct: "A mathematical statement with an equals sign",
      },
      { question: "Solve: x + 5 = 12. What is x?", options: ["5", "7", "12", "17"], correct: "7" },
      { question: "Solve: 2x = 10. What is x?", options: ["5", "8", "12", "20"], correct: "5" },
      {
        question: "What is an expression?",
        options: ["An equation", "A mathematical phrase without an equals sign", "A variable", "A solution"],
        correct: "A mathematical phrase without an equals sign",
      },
      { question: "Solve: x - 3 = 7. What is x?", options: ["4", "10", "7", "3"], correct: "10" },
      {
        question: "What is the order of operations?",
        options: ["Add, subtract, multiply, divide", "PEMDAS", "Left to right", "Random"],
        correct: "PEMDAS",
      },
      { question: "Solve: 3x + 2 = 11. What is x?", options: ["2", "3", "4", "5"], correct: "3" },
    ],
    16: [
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Jane Austen", "William Shakespeare", "Mark Twain", "Charles Dickens"],
        correct: "William Shakespeare",
      },
      {
        question: "What is a haiku?",
        options: ["A story", "A 5-7-5 syllable poem", "A novel", "A play"],
        correct: "A 5-7-5 syllable poem",
      },
      {
        question: "What is a stanza?",
        options: ["A line", "A verse or section of a poem", "A word", "A rhyme"],
        correct: "A verse or section of a poem",
      },
      {
        question: "What is rhyme?",
        options: ["Similar sounds at the end of words", "A type of poem", "A story", "A character"],
        correct: "Similar sounds at the end of words",
      },
      {
        question: "What is alliteration?",
        options: ["Repetition of beginning sounds", "A type of poem", "A story", "A character"],
        correct: "Repetition of beginning sounds",
      },
      {
        question: "What is personification?",
        options: ["Giving human qualities to non-human things", "A type of poem", "A story", "A character"],
        correct: "Giving human qualities to non-human things",
      },
      {
        question: "What is a novel?",
        options: ["A short story", "A long fictional narrative", "A poem", "A play"],
        correct: "A long fictional narrative",
      },
      {
        question: "What is a protagonist?",
        options: ["The villain", "The main character", "A supporting character", "The setting"],
        correct: "The main character",
      },
    ],
    17: [
      {
        question: "What is the closest star to Earth?",
        options: ["Sirius", "The Sun", "Polaris", "Betelgeuse"],
        correct: "The Sun",
      },
      { question: "How many planets are in our solar system?", options: ["7", "8", "9", "10"], correct: "8" },
      {
        question: "What is the largest planet?",
        options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
        correct: "Jupiter",
      },
      { question: "What is the Red Planet?", options: ["Venus", "Mars", "Mercury", "Jupiter"], correct: "Mars" },
      {
        question: "What is a meteor?",
        options: ["A star", "A rock from space", "A planet", "A comet"],
        correct: "A rock from space",
      },
      {
        question: "What is a galaxy?",
        options: ["A star", "A system of stars", "A planet", "A comet"],
        correct: "A system of stars",
      },
      {
        question: "What is the Milky Way?",
        options: ["A candy bar", "Our galaxy", "A planet", "A star"],
        correct: "Our galaxy",
      },
      { question: "How many moons does Earth have?", options: ["0", "1", "2", "3"], correct: "1" },
    ],
    18: [
      {
        question: "In what year did Columbus reach the Americas?",
        options: ["1491", "1492", "1493", "1500"],
        correct: "1492",
      },
      {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
        correct: "George Washington",
      },
      {
        question: "What year did the American Revolution start?",
        options: ["1775", "1776", "1777", "1778"],
        correct: "1775",
      },
      {
        question: "What was the main cause of World War I?",
        options: [
          "Economic depression",
          "Assassination of Archduke Franz Ferdinand",
          "Invasion of Poland",
          "Pearl Harbor",
        ],
        correct: "Assassination of Archduke Franz Ferdinand",
      },
      { question: "In what year did World War II end?", options: ["1943", "1944", "1945", "1946"], correct: "1945" },
      {
        question: "Who was the first President of China?",
        options: ["Mao Zedong", "Deng Xiaoping", "Xi Jinping", "Jiang Zemin"],
        correct: "Mao Zedong",
      },
      { question: "What year did the Berlin Wall fall?", options: ["1987", "1988", "1989", "1990"], correct: "1989" },
      {
        question: "Who was the first President of India?",
        options: ["Jawaharlal Nehru", "Rajendra Prasad", "Sardar Vallabhbhai Patel", "Mahatma Gandhi"],
        correct: "Rajendra Prasad",
      },
    ],
    19: [
      { question: "Solve: -5 + 8 = ?", options: ["3", "-3", "13", "-13"], correct: "3" },
      { question: "What is the absolute value of -7?", options: ["-7", "7", "0", "14"], correct: "7" },
      { question: "Solve: 3(x + 2) = 15. What is x?", options: ["3", "4", "5", "6"], correct: "3" },
      { question: "What is 2³?", options: ["6", "8", "9", "16"], correct: "8" },
      { question: "Solve: x/4 = 3. What is x?", options: ["7", "12", "16", "20"], correct: "12" },
      { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], correct: "8" },
      { question: "Solve: 2x - 5 = 9. What is x?", options: ["5", "6", "7", "8"], correct: "7" },
      { question: "What is 5²?", options: ["10", "15", "20", "25"], correct: "25" },
    ],
    20: [
      {
        question: "What is a compound sentence?",
        options: ["One independent clause", "Two independent clauses joined", "A dependent clause", "A fragment"],
        correct: "Two independent clauses joined",
      },
      {
        question: "What is a conjunction?",
        options: ["A noun", "A verb", "A connecting word", "An adjective"],
        correct: "A connecting word",
      },
      {
        question: "Which is a coordinating conjunction?",
        options: ["because", "although", "and", "when"],
        correct: "and",
      },
      {
        question: "What is a clause?",
        options: ["A word", "A group of words with subject and verb", "A sentence", "A paragraph"],
        correct: "A group of words with subject and verb",
      },
      {
        question: "What is subject-verb agreement?",
        options: [
          "Subjects and verbs disagree",
          "Subjects and verbs must match in number",
          "Only singular subjects",
          "Only plural verbs",
        ],
        correct: "Subjects and verbs must match in number",
      },
      {
        question: "Which sentence has correct punctuation?",
        options: [
          "I like pizza and pasta.",
          "I like pizza, and pasta",
          "I like, pizza and pasta",
          "I like pizza and, pasta",
        ],
        correct: "I like pizza and pasta.",
      },
      {
        question: "What is an independent clause?",
        options: ["Cannot stand alone", "Can stand alone as a sentence", "Has no verb", "Has no subject"],
        correct: "Can stand alone as a sentence",
      },
      {
        question: "What is a dependent clause?",
        options: ["Can stand alone", "Cannot stand alone as a sentence", "Has no verb", "Has no subject"],
        correct: "Cannot stand alone as a sentence",
      },
    ],
    21: [
      {
        question: "What are the three types of rocks?",
        options: ["Hard, soft, medium", "Igneous, sedimentary, metamorphic", "Big, small, tiny", "Old, new, ancient"],
        correct: "Igneous, sedimentary, metamorphic",
      },
      {
        question: "What causes earthquakes?",
        options: ["Rain", "Tectonic plate movement", "Wind", "Snow"],
        correct: "Tectonic plate movement",
      },
      {
        question: "What is the Earth's crust?",
        options: ["The center", "The outer layer", "The atmosphere", "The core"],
        correct: "The outer layer",
      },
      {
        question: "What is erosion?",
        options: ["Building up land", "Wearing away of land", "Creating mountains", "Making earthquakes"],
        correct: "Wearing away of land",
      },
      {
        question: "What is the mantle?",
        options: ["Outer layer", "Layer between crust and core", "The center", "The atmosphere"],
        correct: "Layer between crust and core",
      },
      {
        question: "What causes volcanoes?",
        options: ["Rain", "Magma rising to surface", "Wind", "Snow"],
        correct: "Magma rising to surface",
      },
      {
        question: "What is weathering?",
        options: ["Predicting weather", "Breaking down of rocks", "Building mountains", "Creating rivers"],
        correct: "Breaking down of rocks",
      },
      {
        question: "What is the core of the Earth?",
        options: ["Outer layer", "Middle layer", "The center", "The atmosphere"],
        correct: "The center",
      },
    ],
    22: [
      {
        question: "What is the largest continent?",
        options: ["Africa", "Asia", "North America", "Europe"],
        correct: "Asia",
      },
      {
        question: "What is the smallest continent?",
        options: ["Europe", "Australia", "Antarctica", "South America"],
        correct: "Australia",
      },
      {
        question: "Which ocean is the largest?",
        options: ["Atlantic", "Pacific", "Indian", "Arctic"],
        correct: "Pacific",
      },
      {
        question: "What is latitude?",
        options: ["Lines running east-west", "Lines running north-south", "Mountain ranges", "Ocean currents"],
        correct: "Lines running east-west",
      },
      {
        question: "What is longitude?",
        options: ["Lines running east-west", "Lines running north-south", "Mountain ranges", "Ocean currents"],
        correct: "Lines running north-south",
      },
      {
        question: "What is the Prime Meridian?",
        options: ["0° latitude", "0° longitude", "The equator", "A continent"],
        correct: "0° longitude",
      },
      {
        question: "Which continent has the most countries?",
        options: ["Asia", "Africa", "Europe", "South America"],
        correct: "Africa",
      },
      {
        question: "What is a peninsula?",
        options: ["An island", "Land surrounded by water on three sides", "A mountain", "A desert"],
        correct: "Land surrounded by water on three sides",
      },
    ],
    23: [
      {
        question: "What is the sum of angles in a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        correct: "180°",
      },
      {
        question: "What is a right angle?",
        options: ["45°", "90°", "180°", "360°"],
        correct: "90°",
      },
      {
        question: "What is the area of a rectangle with length 5 and width 3?",
        options: ["8", "15", "20", "25"],
        correct: "15",
      },
      {
        question: "What is the perimeter of a square with side 4?",
        options: ["8", "12", "16", "20"],
        correct: "16",
      },
      {
        question: "What is a polygon?",
        options: ["A circle", "A closed figure with straight sides", "A curve", "A line"],
        correct: "A closed figure with straight sides",
      },
      {
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        correct: "6",
      },
      {
        question: "What is the circumference formula?",
        options: ["πr", "2πr", "πr²", "2πr²"],
        correct: "2πr",
      },
      {
        question: "What is a diameter?",
        options: ["Half the radius", "Twice the radius", "The area", "The perimeter"],
        correct: "Twice the radius",
      },
    ],
    24: [
      {
        question: "What is a narrative?",
        options: ["A story", "A poem", "An essay", "A report"],
        correct: "A story",
      },
      {
        question: "What is dialogue?",
        options: ["Description", "Conversation between characters", "Setting", "Plot"],
        correct: "Conversation between characters",
      },
      {
        question: "What is foreshadowing?",
        options: ["Looking back", "Hints about future events", "Character description", "Setting description"],
        correct: "Hints about future events",
      },
      {
        question: "What is a climax?",
        options: ["The beginning", "The turning point", "The ending", "The setting"],
        correct: "The turning point",
      },
      {
        question: "What is point of view?",
        options: ["The setting", "The perspective from which story is told", "The plot", "The theme"],
        correct: "The perspective from which story is told",
      },
      {
        question: "What is first-person point of view?",
        options: ["Using 'he/she'", "Using 'I/we'", "Using 'you'", "Using 'they'"],
        correct: "Using 'I/we'",
      },
      {
        question: "What is conflict?",
        options: ["Agreement", "The problem in the story", "The solution", "The setting"],
        correct: "The problem in the story",
      },
      {
        question: "What is resolution?",
        options: ["The problem", "The solution to the conflict", "The beginning", "The middle"],
        correct: "The solution to the conflict",
      },
    ],
    25: [
      {
        question: "What is a cell?",
        options: ["A tissue", "The basic unit of life", "An organ", "A system"],
        correct: "The basic unit of life",
      },
      {
        question: "What is photosynthesis?",
        options: ["Animals eating", "Plants making food from sunlight", "Cell division", "Breathing"],
        correct: "Plants making food from sunlight",
      },
      {
        question: "What is mitosis?",
        options: ["Cell eating", "Cell division", "Cell breathing", "Cell movement"],
        correct: "Cell division",
      },
      {
        question: "What is DNA?",
        options: ["A protein", "Genetic material", "A cell", "An organ"],
        correct: "Genetic material",
      },
      {
        question: "What is an organism?",
        options: ["A cell", "A living thing", "A tissue", "An organ"],
        correct: "A living thing",
      },
      {
        question: "What is the function of chloroplasts?",
        options: ["Store water", "Photosynthesis", "Cell division", "Protein synthesis"],
        correct: "Photosynthesis",
      },
      {
        question: "What is the cell membrane?",
        options: ["Controls cell", "Outer boundary of cell", "Makes energy", "Stores DNA"],
        correct: "Outer boundary of cell",
      },
      {
        question: "What is the nucleus?",
        options: ["Makes energy", "Controls cell activities", "Outer boundary", "Makes proteins"],
        correct: "Controls cell activities",
      },
    ],
    26: [
      {
        question: "When was the Declaration of Independence signed?",
        options: ["1775", "1776", "1777", "1778"],
        correct: "1776",
      },
      {
        question: "Who wrote the Declaration of Independence?",
        options: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"],
        correct: "Thomas Jefferson",
      },
      {
        question: "What was the Boston Tea Party?",
        options: ["A celebration", "A protest against British taxes", "A battle", "A treaty signing"],
        correct: "A protest against British taxes",
      },
      {
        question: "What was the Civil War fought over?",
        options: ["Taxes", "Slavery and states' rights", "Land", "Religion"],
        correct: "Slavery and states' rights",
      },
      {
        question: "Who was Abraham Lincoln?",
        options: [
          "First President",
          "President during Civil War",
          "Revolutionary War general",
          "Supreme Court Justice",
        ],
        correct: "President during Civil War",
      },
      {
        question: "What is the Bill of Rights?",
        options: ["A law", "First 10 amendments to Constitution", "A treaty", "A declaration"],
        correct: "First 10 amendments to Constitution",
      },
      {
        question: "What was Manifest Destiny?",
        options: ["A war", "Belief in westward expansion", "A treaty", "A political party"],
        correct: "Belief in westward expansion",
      },
      {
        question: "When did the Civil War end?",
        options: ["1863", "1864", "1865", "1866"],
        correct: "1865",
      },
    ],
    27: [
      {
        question: "Solve: 2x + 5 = 3x - 2. What is x?",
        options: ["5", "6", "7", "8"],
        correct: "7",
      },
      {
        question: "What is the slope of y = 3x + 2?",
        options: ["2", "3", "5", "x"],
        correct: "3",
      },
      {
        question: "Solve: x² = 16. What is x?",
        options: ["±2", "±4", "±8", "±16"],
        correct: "±4",
      },
      {
        question: "What is the y-intercept of y = 2x - 5?",
        options: ["2", "-5", "5", "-2"],
        correct: "-5",
      },
      {
        question: "Simplify: 3x + 2x",
        options: ["5x", "6x", "5x²", "6x²"],
        correct: "5x",
      },
      {
        question: "Solve: 3(x - 4) = 15. What is x?",
        options: ["7", "8", "9", "10"],
        correct: "9",
      },
      {
        question: "What is the quadratic formula used for?",
        options: ["Linear equations", "Solving ax² + bx + c = 0", "Finding slope", "Finding area"],
        correct: "Solving ax² + bx + c = 0",
      },
      {
        question: "Factor: x² - 9",
        options: ["(x-3)(x-3)", "(x+3)(x+3)", "(x-3)(x+3)", "Cannot factor"],
        correct: "(x-3)(x+3)",
      },
    ],
    28: [
      {
        question: "In which play does 'To be or not to be' appear?",
        options: ["Macbeth", "Hamlet", "Romeo and Juliet", "Othello"],
        correct: "Hamlet",
      },
      {
        question: "What is iambic pentameter?",
        options: ["A type of rhyme", "A rhythmic pattern with 10 syllables", "A character", "A plot device"],
        correct: "A rhythmic pattern with 10 syllables",
      },
      {
        question: "What is a soliloquy?",
        options: ["A conversation", "A speech alone on stage", "A type of poem", "A stage direction"],
        correct: "A speech alone on stage",
      },
      {
        question: "Who are the star-crossed lovers?",
        options: ["Hamlet and Ophelia", "Romeo and Juliet", "Macbeth and Lady Macbeth", "Othello and Desdemona"],
        correct: "Romeo and Juliet",
      },
      {
        question: "What is a tragedy?",
        options: ["A happy play", "A play with a sad ending", "A comedy", "A historical play"],
        correct: "A play with a sad ending",
      },
      {
        question: "What is dramatic irony?",
        options: [
          "Audience knows something characters don't",
          "Characters know everything",
          "No one knows anything",
          "Everyone is surprised",
        ],
        correct: "Audience knows something characters don't",
      },
      {
        question: "What is a foil character?",
        options: ["The main character", "A character who contrasts with another", "The villain", "A minor character"],
        correct: "A character who contrasts with another",
      },
      {
        question: "What is blank verse?",
        options: ["Rhyming poetry", "Unrhymed iambic pentameter", "Free verse", "A type of sonnet"],
        correct: "Unrhymed iambic pentameter",
      },
    ],
    29: [
      {
        question: "What is an atom?",
        options: ["A molecule", "The smallest unit of an element", "A compound", "A mixture"],
        correct: "The smallest unit of an element",
      },
      {
        question: "What is the periodic table?",
        options: ["A calendar", "Organization of elements", "A type of table", "A chemical reaction"],
        correct: "Organization of elements",
      },
      {
        question: "What is a chemical reaction?",
        options: [
          "Mixing substances",
          "Substances changing into new substances",
          "Heating something",
          "Cooling something",
        ],
        correct: "Substances changing into new substances",
      },
      {
        question: "What is the atomic number?",
        options: ["Number of neutrons", "Number of protons", "Number of electrons", "Total particles"],
        correct: "Number of protons",
      },
      {
        question: "What is a compound?",
        options: ["One element", "Two or more elements chemically bonded", "A mixture", "An atom"],
        correct: "Two or more elements chemically bonded",
      },
      {
        question: "What is pH?",
        options: ["Temperature", "Measure of acidity or basicity", "Pressure", "Volume"],
        correct: "Measure of acidity or basicity",
      },
      {
        question: "What is an acid?",
        options: ["pH above 7", "pH below 7", "pH of 7", "No pH"],
        correct: "pH below 7",
      },
      {
        question: "What is a base?",
        options: ["pH below 7", "pH above 7", "pH of 7", "No pH"],
        correct: "pH above 7",
      },
    ],
    30: [
      {
        question: "What are the three branches of government?",
        options: [
          "Federal, state, local",
          "Legislative, executive, judicial",
          "President, Congress, Court",
          "House, Senate, Court",
        ],
        correct: "Legislative, executive, judicial",
      },
      {
        question: "What does the legislative branch do?",
        options: ["Enforces laws", "Makes laws", "Interprets laws", "Vetoes laws"],
        correct: "Makes laws",
      },
      {
        question: "What does the executive branch do?",
        options: ["Makes laws", "Enforces laws", "Interprets laws", "Repeals laws"],
        correct: "Enforces laws",
      },
      {
        question: "What does the judicial branch do?",
        options: ["Makes laws", "Enforces laws", "Interprets laws", "Vetoes laws"],
        correct: "Interprets laws",
      },
      {
        question: "How many senators does each state have?",
        options: ["1", "2", "3", "Depends on population"],
        correct: "2",
      },
      {
        question: "How long is a presidential term?",
        options: ["2 years", "4 years", "6 years", "8 years"],
        correct: "4 years",
      },
      {
        question: "What is checks and balances?",
        options: ["Banking system", "Each branch limits the others", "Budget process", "Election system"],
        correct: "Each branch limits the others",
      },
      {
        question: "How many justices are on the Supreme Court?",
        options: ["7", "9", "11", "13"],
        correct: "9",
      },
    ],
    31: [
      {
        question: "Solve: x² - 5x + 6 = 0",
        options: ["x = 2, 3", "x = -2, -3", "x = 1, 6", "x = -1, -6"],
        correct: "x = 2, 3",
      },
      {
        question: "What is the vertex form of a parabola?",
        options: ["y = ax² + bx + c", "y = a(x-h)² + k", "y = mx + b", "y = ax + b"],
        correct: "y = a(x-h)² + k",
      },
      {
        question: "Simplify: (x³)²",
        options: ["x⁵", "x⁶", "x⁹", "x"],
        correct: "x⁶",
      },
      {
        question: "What is the discriminant in ax² + bx + c = 0?",
        options: ["b² - 4ac", "b² + 4ac", "-b ± √(b² - 4ac)", "4ac - b²"],
        correct: "b² - 4ac",
      },
      {
        question: "Solve: |x - 3| = 5",
        options: ["x = 8", "x = -2", "x = 8 or -2", "x = 2 or 8"],
        correct: "x = 8 or -2",
      },
      {
        question: "What is an exponential function?",
        options: ["y = x²", "y = aˣ", "y = mx + b", "y = √x"],
        correct: "y = aˣ",
      },
      {
        question: "Simplify: √(x⁴)",
        options: ["x", "x²", "x³", "x⁴"],
        correct: "x²",
      },
      {
        question: "What is a rational expression?",
        options: ["A fraction", "A ratio of polynomials", "An integer", "A decimal"],
        correct: "A ratio of polynomials",
      },
    ],
    32: [
      {
        question: "Who wrote '1984'?",
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Ernest Hemingway"],
        correct: "George Orwell",
      },
      {
        question: "What is an allegory?",
        options: ["A type of poem", "A story with symbolic meaning", "A character type", "A plot structure"],
        correct: "A story with symbolic meaning",
      },
      {
        question: "Who wrote 'The Odyssey'?",
        options: ["Virgil", "Homer", "Sophocles", "Euripides"],
        correct: "Homer",
      },
      {
        question: "What is an epic?",
        options: ["A short story", "A long narrative poem about heroic deeds", "A play", "A novel"],
        correct: "A long narrative poem about heroic deeds",
      },
      {
        question: "What is satire?",
        options: ["Serious writing", "Use of humor to criticize", "A type of poem", "A character type"],
        correct: "Use of humor to criticize",
      },
      {
        question: "Who wrote 'The Great Gatsby'?",
        options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner"],
        correct: "F. Scott Fitzgerald",
      },
      {
        question: "What is symbolism?",
        options: ["Using symbols to represent ideas", "A type of rhyme", "A plot device", "A character trait"],
        correct: "Using symbols to represent ideas",
      },
      {
        question: "What is a dystopia?",
        options: ["A perfect society", "An oppressive, controlled society", "A historical setting", "A fantasy world"],
        correct: "An oppressive, controlled society",
      },
    ],
    33: [
      {
        question: "What is Newton's First Law?",
        options: ["F = ma", "An object at rest stays at rest", "Action-reaction", "E = mc²"],
        correct: "An object at rest stays at rest",
      },
      {
        question: "What is Newton's Second Law?",
        options: ["An object at rest stays at rest", "F = ma", "Action-reaction", "E = mc²"],
        correct: "F = ma",
      },
      {
        question: "What is velocity?",
        options: ["Speed", "Speed with direction", "Acceleration", "Force"],
        correct: "Speed with direction",
      },
      {
        question: "What is acceleration?",
        options: ["Speed", "Change in velocity", "Force", "Mass"],
        correct: "Change in velocity",
      },
      {
        question: "What is kinetic energy?",
        options: ["Stored energy", "Energy of motion", "Heat energy", "Light energy"],
        correct: "Energy of motion",
      },
      {
        question: "What is potential energy?",
        options: ["Energy of motion", "Stored energy", "Heat energy", "Sound energy"],
        correct: "Stored energy",
      },
      {
        question: "What is gravity?",
        options: ["A push", "A force that attracts objects", "Energy", "Speed"],
        correct: "A force that attracts objects",
      },
      {
        question: "What is friction?",
        options: ["A force that opposes motion", "A force that helps motion", "Energy", "Speed"],
        correct: "A force that opposes motion",
      },
    ],
    34: [
      {
        question: "When did World War I start?",
        options: ["1912", "1914", "1916", "1918"],
        correct: "1914",
      },
      {
        question: "What was the Treaty of Versailles?",
        options: ["Started WWI", "Ended WWI", "Started WWII", "Ended WWII"],
        correct: "Ended WWI",
      },
      {
        question: "What was the Cold War?",
        options: ["A war in winter", "Tension between US and USSR", "A civil war", "A world war"],
        correct: "Tension between US and USSR",
      },
      {
        question: "When did the Soviet Union collapse?",
        options: ["1989", "1990", "1991", "1992"],
        correct: "1991",
      },
      {
        question: "What was the Holocaust?",
        options: ["A battle", "Genocide of Jews and others by Nazis", "A treaty", "A revolution"],
        correct: "Genocide of Jews and others by Nazis",
      },
      {
        question: "Who was Winston Churchill?",
        options: ["US President", "British Prime Minister during WWII", "Soviet leader", "German leader"],
        correct: "British Prime Minister during WWII",
      },
      {
        question: "What was the Iron Curtain?",
        options: ["A physical wall", "Division between East and West Europe", "A weapon", "A treaty"],
        correct: "Division between East and West Europe",
      },
      {
        question: "When did the United Nations form?",
        options: ["1943", "1944", "1945", "1946"],
        correct: "1945",
      },
    ],
    35: [
      {
        question: "What is sin²θ + cos²θ equal to?",
        options: ["0", "1", "2", "θ"],
        correct: "1",
      },
      {
        question: "What is the period of sin(x)?",
        options: ["π", "2π", "π/2", "4π"],
        correct: "2π",
      },
      {
        question: "What is tan(θ) equal to?",
        options: ["sin/cos", "cos/sin", "sin×cos", "1/sin"],
        correct: "sin/cos",
      },
      {
        question: "What is the range of sin(x)?",
        options: ["[-1, 1]", "[0, 1]", "[-∞, ∞]", "[0, ∞]"],
        correct: "[-1, 1]",
      },
      {
        question: "What is cos(0)?",
        options: ["0", "1", "-1", "undefined"],
        correct: "1",
      },
      {
        question: "What is sin(90°)?",
        options: ["0", "1", "-1", "undefined"],
        correct: "1",
      },
      {
        question: "What is the amplitude of 3sin(x)?",
        options: ["1", "2", "3", "π"],
        correct: "3",
      },
      {
        question: "What is sec(θ)?",
        options: ["1/sin", "1/cos", "1/tan", "sin/cos"],
        correct: "1/cos",
      },
    ],
    36: [
      {
        question: "What is a thesis statement?",
        options: ["The conclusion", "The main argument of an essay", "A supporting detail", "An introduction"],
        correct: "The main argument of an essay",
      },
      {
        question: "What is MLA format?",
        options: ["A writing style", "A citation format", "A type of essay", "A grammar rule"],
        correct: "A citation format",
      },
      {
        question: "What is a counterargument?",
        options: ["Supporting your thesis", "Opposing viewpoint", "A conclusion", "An introduction"],
        correct: "Opposing viewpoint",
      },
      {
        question: "What is ethos?",
        options: ["Emotional appeal", "Credibility appeal", "Logical appeal", "Time appeal"],
        correct: "Credibility appeal",
      },
      {
        question: "What is pathos?",
        options: ["Emotional appeal", "Credibility appeal", "Logical appeal", "Time appeal"],
        correct: "Emotional appeal",
      },
      {
        question: "What is logos?",
        options: ["Emotional appeal", "Credibility appeal", "Logical appeal", "Time appeal"],
        correct: "Logical appeal",
      },
      {
        question: "What is a synthesis essay?",
        options: ["Analyzing one source", "Combining multiple sources", "Personal narrative", "Descriptive writing"],
        correct: "Combining multiple sources",
      },
      {
        question: "What is plagiarism?",
        options: ["Citing sources", "Using others' work without credit", "Paraphrasing", "Summarizing"],
        correct: "Using others' work without credit",
      },
    ],
    37: [
      {
        question: "What is climate change?",
        options: ["Daily weather", "Long-term change in Earth's climate", "Seasonal changes", "Local weather patterns"],
        correct: "Long-term change in Earth's climate",
      },
      {
        question: "What is the greenhouse effect?",
        options: ["Growing plants", "Gases trapping heat in atmosphere", "Building greenhouses", "Photosynthesis"],
        correct: "Gases trapping heat in atmosphere",
      },
      {
        question: "What is biodiversity?",
        options: ["One species", "Variety of life in an area", "Population size", "Ecosystem size"],
        correct: "Variety of life in an area",
      },
      {
        question: "What is renewable energy?",
        options: ["Fossil fuels", "Energy that can be replenished", "Nuclear energy", "Coal"],
        correct: "Energy that can be replenished",
      },
      {
        question: "What is deforestation?",
        options: ["Planting trees", "Clearing forests", "Forest fires", "Tree growth"],
        correct: "Clearing forests",
      },
      {
        question: "What is carbon footprint?",
        options: ["Shoe size", "Amount of CO₂ emissions produced", "Walking distance", "Tree planting"],
        correct: "Amount of CO₂ emissions produced",
      },
      {
        question: "What is sustainability?",
        options: [
          "Using all resources",
          "Meeting needs without depleting resources",
          "Economic growth only",
          "Population growth",
        ],
        correct: "Meeting needs without depleting resources",
      },
      {
        question: "What is pollution?",
        options: ["Clean air", "Harmful substances in environment", "Natural processes", "Recycling"],
        correct: "Harmful substances in environment",
      },
    ],
    38: [
      {
        question: "What is supply and demand?",
        options: ["Government control", "Relationship between availability and desire", "Taxation", "Banking"],
        correct: "Relationship between availability and desire",
      },
      {
        question: "What is inflation?",
        options: ["Prices decreasing", "Prices increasing over time", "Stable prices", "No prices"],
        correct: "Prices increasing over time",
      },
      {
        question: "What is GDP?",
        options: ["Government debt", "Total value of goods and services produced", "Population size", "Tax rate"],
        correct: "Total value of goods and services produced",
      },
      {
        question: "What is opportunity cost?",
        options: ["The price of something", "What you give up to get something", "A discount", "A sale"],
        correct: "What you give up to get something",
      },
      {
        question: "What is a monopoly?",
        options: ["Many sellers", "One seller controls market", "Government ownership", "Free market"],
        correct: "One seller controls market",
      },
      {
        question: "What is unemployment?",
        options: ["Everyone working", "People without jobs seeking work", "Retirement", "Part-time work"],
        correct: "People without jobs seeking work",
      },
      {
        question: "What is a recession?",
        options: ["Economic growth", "Economic decline", "Stable economy", "Inflation"],
        correct: "Economic decline",
      },
      {
        question: "What is fiscal policy?",
        options: ["Monetary policy", "Government spending and taxation", "Interest rates", "Trade policy"],
        correct: "Government spending and taxation",
      },
    ],
  }

  const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const filteredQuizzes = quizzes.filter((quiz) => quiz.grade === selectedGrade)

  const handleStartQuiz = (quizId) => {
    setCurrentQuiz(quizId)
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setQuizCompleted(false)
    setSelectedAnswer(null)
  }

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer)
  }

  const handleNextQuestion = () => {
    const questions = quizQuestions[currentQuiz]
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1)
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizCompleted(true)
    }

    setShowResult(true)
    setTimeout(() => {
      setShowResult(false)
    }, 1500)
  }

  const handleReturnToQuizzes = () => {
    setCurrentQuiz(null)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResult(false)
    setQuizCompleted(false)
  }

  if (currentQuiz !== null && !quizCompleted) {
    const questions = quizQuestions[currentQuiz]
    const question = questions[currentQuestion]

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-blue-600">
                <Clock className="h-5 w-5 mr-1" />
                <span className="font-medium">5:30</span>
              </div>
              <div className="text-sm text-gray-600">Score: {score}</div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">{question.question}</h3>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    selectedAnswer === option
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                        selectedAnswer === option ? "border-blue-600 bg-blue-600" : "border-gray-300"
                      }`}
                    >
                      {selectedAnswer === option && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </div>
                    <span className="text-lg">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={handleReturnToQuizzes}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Back to Quizzes
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
            </button>
          </div>
        </div>

        {showResult && selectedAnswer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
              className={`bg-white rounded-xl p-8 max-w-md w-full mx-4 text-center ${
                selectedAnswer === question.correct ? "border-4 border-green-500" : "border-4 border-red-500"
              }`}
            >
              {selectedAnswer === question.correct ? (
                <>
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Correct!</h3>
                  <p className="text-gray-600">Great job! You got it right.</p>
                </>
              ) : (
                <>
                  <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-red-700 mb-2">Incorrect!</h3>
                  <p className="text-gray-600">
                    The correct answer is: <strong>{question.correct}</strong>
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }

  if (quizCompleted) {
    const questions = quizQuestions[currentQuiz]
    const percentage = Math.round((score / questions.length) * 100)

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl p-8 shadow-sm border text-center">
          <Award className="h-20 w-20 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quiz Completed!</h2>
          <div className="mb-6">
            <div className="text-6xl font-bold text-blue-600 mb-2">{percentage}%</div>
            <p className="text-xl text-gray-600">
              You scored {score} out of {questions.length}
            </p>
          </div>

          <div className="flex justify-center space-x-1 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-8 w-8 ${
                  star <= Math.ceil(percentage / 20) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <div className="space-y-4">
            <button
              onClick={handleReturnToQuizzes}
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              Back to Quizzes
            </button>
            <button
              onClick={() => handleStartQuiz(currentQuiz)}
              className="w-full py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-lg font-medium"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout currentPage="quizzes" onNavigate={onNavigate} onLogout={onLogout}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">Interactive Quizzes</h2>
          <div className="text-sm text-gray-600">Test your knowledge and earn badges</div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {grades.map((grade) => (
            <button
              key={grade}
              onClick={() => setSelectedGrade(grade)}
              className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedGrade === grade ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Grade {grade}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                    {quiz.subject}
                  </span>
                  {quiz.completed && (
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="h-5 w-5 mr-1" />
                      <span className="text-sm font-medium">{quiz.bestScore}%</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">{quiz.title}</h3>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Questions: {quiz.questions}</span>
                    <span>Grade {quiz.grade}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Time: {quiz.timeLimit} min</span>
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        quiz.difficulty === "Easy"
                          ? "bg-green-100 text-green-800"
                          : quiz.difficulty === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {quiz.difficulty}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleStartQuiz(quiz.id)}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  {quiz.completed ? "Retake Quiz" : "Start Quiz"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredQuizzes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No quizzes available for Grade {selectedGrade}</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Quizzes
