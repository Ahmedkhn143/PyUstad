// ===================== TRANSLATIONS =====================
let currentLang = 'ur';

const translations = {
  ur: {
    navHome: "🏠 Home",
    navTopics: "📚 Topics",
    navPractice: "💻 Practice",
    navQuiz: "🧠 Quiz",
    navRoadmap: "🗺️ Roadmap",
    streak: "🔥 {day} day streak",
    heroBadge: "🇵🇰 Pakistan ka #1 Python Platform",
    heroTitle: 'Python Seekho,<br><span class="g1">Code Likhna</span> <span class="g2">Expert Bano</span>',
    heroDesc: "Official Python 3.14 docs + top YouTube courses ka content — ek jagah, practice-first approach ke sath. Basic se AI/ML tak, har topic par Easy → Medium → Hard practice.",
    btnStartPractice: "💻 Practice Shuru Karo",
    btnViewTopics: "📚 Topics Dekho",
    card1Title: "Practice-First Approach",
    card1Desc: "W3Schools/Codecademy se farq — yahan har topic par Easy → Medium → Hard level ke real coding questions hain. Padhne se zyada likhne par focus.",
    card2Title: "Official Docs Based",
    card2Desc: "Python 3.14 official documentation ke har chapter ko cover karta hai. YouTube ke Corey Schafer, freeCodeCamp, Traversy Media jaise channels ka best content.",
    card3Title: "AI Tutor (Claude)",
    card3Desc: "Koi bhi question atak jao — Claude se seedha puchho. Urdu ya English mein explain karega, step-by-step guide dega aur agle challenge pe bhejega.",
    card4Title: "Real Projects",
    card4Desc: "SoloLearn ki tarah sirf quiz nahi — har section ke end mein ek real-world mini project banao jo tumhara portfolio mein jaye.",
    statPracticeQs: "Practice Questions",
    statTopicsCovered: "Topics Covered",
    statDifficultyLevels: "Difficulty Levels",
    statRealProjects: "Real Projects",
    topicsTitle: "📚 Python Topics — Official Docs se",
    topicsSub: "Har topic par click karo aur practice start karo. Python 3.14 documentation ka complete coverage.",
    questionsHeader: "Questions",
    filterAll: "All",
    filterEasy: "🟢 Easy",
    filterMedium: "🟡 Medium",
    filterHard: "🔴 Hard",
    qDisplayTitleDefault: "Ek question choose karo ←",
    qBodyDefault1: "Left side se koi bhi question select karo ya neeche se topic choose karo. Phir code editor mein apna solution likhkar Run karo!",
    qBodyDefault2: "💡 <strong style='color:var(--accent)'>Tip:</strong> Pehle khud try karo, phir Hint lo, phir Solution dekho — yahi best learning method hai!",
    btnRunCode: "▶ Run Code",
    btnHint: "💡 Hint",
    btnSolution: "👁️ Solution",
    btnAskAI: "🤖 AI Ustad se Puchho",
    outputAreaDefault: "Output yahan aayegi...",
    quizTitle: "🧠 Quiz Mode — Topic Choose Karo",
    quizSub: "Koi bhi topic select karo aur apna knowledge test karo",
    btnStartQuiz: "Quiz Shuru Karo 🚀",
    btnNextQ: "Agla Sawal →",
    btnResetQuiz: "Dobara Try Karo",
    btnPracticeQuiz: "Practice Karo",
    exampleLabel: "EXAMPLE:",
    hintPrefix: "💡 Hint: ",
    runCodeSuccess: "✓ Code chala! (koi output nahi)",
    quizTitleSelect: "🧠 Quiz Mode — Topic Choose Karo",
    allTopics: "All Topics",
    statusDone: "✅ Done",
    statusCurrent: "🔵 Current",
    statusUpcoming: "⏳ Upcoming",
    roadmapTitle: "🗺️ Python Expert Banne ka Roadmap",
    roadmapSub: "Official Python docs + top YouTube channels ka combined learning path",
    youtubeResources: "📺 YOUTUBE RESOURCES",
    officialDocsLabel: "📖 Official Docs: ",
    alertChooseQ: "Pehle koi question choose karo!",
    alertAskClaude: "Claude se puchho: \"{title}\" question mein madad chahiye!",
    resultTitle: "{score}/{total} — {pct}%",
    resultMsg80: "Waah! Bohat zabardast! Tum Python mein acha kar rahe ho!",
    resultMsg60: "Acha hai! Thoda aur practice karo aur expert ban jao!",
    resultMsg40: "Practice karte raho! Yeh topics dobara dekho.",
    resultMsg0: "Koi baat nahi! Practice se sab possible hai. Curriculum se shuru karo.",
    btnSubmitCode: "🚀 Submit & Test",
    loaderTitle: "Python Engine Load Ho Raha Hai...",
    loaderSubtitle: "Pyodide WebAssembly load hone mein 3-5 seconds lag sakte hain.",
    testResultsPassed: "🟢 Test Cases Pass Ho Gaye! Aap ab aglay level par ja saktay hain.",
    testResultsFailed: "🔴 Test Cases Failed! Baraye meherbani apna code dobara check karein.",
    navLogin: "🔑 Login",
    navLogout: "🚪 Logout",
    authTitleLogin: "🔑 Login Karo",
    authTitleSignup: "📝 Account Banao",
    labelUsername: "Username",
    labelPassword: "Password",
    btnSubmitLogin: "Login",
    btnSubmitSignup: "Sign Up",
    authToggleTextLogin: "Naya account banana hai?",
    authToggleTextSignup: "Pehle se account hai?",
    authToggleBtnLogin: "Login Karo",
    welcomeTitle: "👋 PyUstad pe Khush Amdeed!",
    welcomeDesc: "Agar aap account bana kar **Login** karenge, toh aapki practice progress, streaks aur solved questions browser mein automatic save hotay rahenge. Bina login ke bhi aap seekh saktay hain, lekin data track nahi hoga. Aapki marzi hai abhi login karein ya baad mein!",
    btnWelcomeLogin: "🔐 Login / Sign Up Karo",
    btnWelcomeContinue: "💻 Bina Login Ke Shuru Karo"
  },
  en: {
    navHome: "🏠 Home",
    navTopics: "📚 Topics",
    navPractice: "💻 Practice",
    navQuiz: "🧠 Quiz",
    navRoadmap: "🗺️ Roadmap",
    streak: "🔥 {day} day streak",
    heroBadge: "🇵🇰 Pakistan's #1 Python Platform",
    heroTitle: 'Learn Python,<br><span class="g1">Write Code</span> <span class="g2">Become an Expert</span>',
    heroDesc: "Official Python 3.14 docs + content from top YouTube courses — all in one place, with a practice-first approach. From basics to AI/ML, Easy → Medium → Hard practice on every topic.",
    btnStartPractice: "💻 Start Practice",
    btnViewTopics: "📚 View Topics",
    card1Title: "Practice-First Approach",
    card1Desc: "Different from W3Schools/Codecademy — here we have real coding questions of Easy → Medium → Hard level for every topic. More focus on writing than reading.",
    card2Title: "Official Docs Based",
    card2Desc: "Covers every chapter of the official Python 3.14 documentation. Best content from channels like Corey Schafer, freeCodeCamp, and Traversy Media.",
    card3Title: "AI Tutor (Claude)",
    card3Desc: "Stuck on any question? Ask Claude directly. It will explain in Urdu or English, provide a step-by-step guide, and take you to the next challenge.",
    card4Title: "Real Projects",
    card4Desc: "Not just a quiz like SoloLearn — build a real-world mini project at the end of each section to showcase in your portfolio.",
    statPracticeQs: "Practice Questions",
    statTopicsCovered: "Topics Covered",
    statDifficultyLevels: "Difficulty Levels",
    statRealProjects: "Real Projects",
    topicsTitle: "📚 Python Topics — From Official Docs",
    topicsSub: "Click on any topic and start practicing. Complete coverage of the Python 3.14 documentation.",
    questionsHeader: "Questions",
    filterAll: "All",
    filterEasy: "🟢 Easy",
    filterMedium: "🟡 Medium",
    filterHard: "🔴 Hard",
    qDisplayTitleDefault: "Choose a question ←",
    qBodyDefault1: "Select any question from the left side or choose a topic from below. Then write your solution in the code editor and Run it!",
    qBodyDefault2: "💡 <strong style='color:var(--accent)'>Tip:</strong> Try it yourself first, then get a Hint, then look at the Solution — this is the best learning method!",
    btnRunCode: "▶ Run Code",
    btnHint: "💡 Hint",
    btnSolution: "👁️ Solution",
    btnAskAI: "🤖 Ask AI Tutor",
    outputAreaDefault: "Output will appear here...",
    quizTitle: "🧠 Quiz Mode — Choose a Topic",
    quizSub: "Select any topic and test your knowledge",
    btnStartQuiz: "Start Quiz 🚀",
    btnNextQ: "Next Question →",
    btnResetQuiz: "Try Again",
    btnPracticeQuiz: "Practice",
    exampleLabel: "EXAMPLE:",
    hintPrefix: "💡 Hint: ",
    runCodeSuccess: "✓ Code ran successfully! (no output)",
    quizTitleSelect: "🧠 Quiz Mode — Choose a Topic",
    allTopics: "All Topics",
    statusDone: "✅ Done",
    statusCurrent: "🔵 Current",
    statusUpcoming: "⏳ Upcoming",
    roadmapTitle: "🗺️ Roadmap to Become a Python Expert",
    roadmapSub: "Combined learning path from official Python docs + top YouTube channels",
    youtubeResources: "📺 YOUTUBE RESOURCES",
    officialDocsLabel: "📖 Official Docs: ",
    alertChooseQ: "Please choose a question first!",
    alertAskClaude: "Ask Claude: \"Help me with the {title} question!\"",
    resultTitle: "{score}/{total} — {pct}%",
    resultMsg80: "Wow! Amazing! You are doing great in Python!",
    resultMsg60: "Good job! Practice a bit more to become an expert!",
    resultMsg40: "Keep practicing! Review these topics again.",
    resultMsg0: "No worries! Everything is possible with practice. Start from the basics.",
    btnSubmitCode: "🚀 Submit & Test",
    loaderTitle: "Loading Python Engine...",
    loaderSubtitle: "Pyodide WebAssembly may take 3-5 seconds to load.",
    testResultsPassed: "All Test Cases Passed! You can proceed to the next level.",
    testResultsFailed: "Some Test Cases Failed! Please check your code and try again.",
    navLogin: "🔑 Login",
    navLogout: "🚪 Logout",
    authTitleLogin: "🔑 Login",
    authTitleSignup: "📝 Create Account",
    labelUsername: "Username",
    labelPassword: "Password",
    btnSubmitLogin: "Login",
    btnSubmitSignup: "Sign Up",
    authToggleTextLogin: "Need an account?",
    authToggleTextSignup: "Already have an account?",
    authToggleBtnLogin: "Sign Up",
    authToggleBtnSignup: "Login",
    welcomeTitle: "👋 Welcome to PyUstad!",
    welcomeDesc: "If you create an account and **Login**, your practice progress, streaks, and solved questions will be saved automatically in your browser. You can still practice without logging in, but your learning history won't be tracked. Feel free to log in now or later!",
    btnWelcomeLogin: "🔐 Login / Sign Up Now",
    btnWelcomeContinue: "💻 Continue Without Login"
  }
};

// ===================== DATA =====================
const topics = [
  { id:'basic', title:'Basics & Variables', icon:'📦', level:'basic', desc:'Variables, data types, inputs, operators, type casting. Python docs Chapter 3.' },
  { id:'control', title:'Conditions & Loops', icon:'🔀', level:'basic', desc:'if/elif/else conditions, nested loops, break, continue. Python docs Chapter 4.' },
  { id:'collections', title:'Collections & Strings', icon:'📋', level:'intermediate', desc:'Lists, tuples, dictionaries, sets, string formatting. Python docs Chapter 5.' },
  { id:'oop_advanced', title:'Functions, OOP & Advanced', icon:'🧬', level:'advanced', desc:'def functions, *args, object-oriented classes, super(), decorators, algorithms. Python docs Chapter 9.' }
];

const questions = [
  // VARIABLES
  {
    id:1, topic:'vars', diff:'easy',
    title: { ur: 'Pehla Variable Banao', en: 'Create First Variable' },
    desc: {
      ur: 'Apna naam store karne ke liye ek variable <code>name</code> banao aur uski value print karo.',
      en: 'Create a variable named <code>name</code> to store your name and print its value.'
    },
    example: { ur: 'Input: (koi nahi)\nOutput: Ahmed', en: 'Input: (none)\nOutput: Ahmed' },
    hint: {
      ur: 'name = "Ahmed" likhkar variable banao, phir print(name) use karo.',
      en: 'Create the variable by writing name = "Ahmed", then use print(name).'
    },
    solution:'name = "Ahmed"\nprint(name)',
    tags:['variable','print']
  },
  {
    id:2, topic:'vars', diff:'easy',
    title: { ur: 'Teen Variables', en: 'Three Variables' },
    desc: {
      ur: 'Apna naam, umar, aur shehar store karo teen alag variables mein aur ek line mein print karo.',
      en: 'Store your name, age, and city in three separate variables and print them in a single line.'
    },
    example: { ur: 'Output: Mera naam Ali hai, 20 saal, Lahore se', en: 'Output: My name is Ali, 20 years old, from Lahore' },
    hint: {
      ur: 'f-string use karo: print(f"Mera naam {name} hai, {age} saal, {city} se")',
      en: 'Use an f-string: print(f"My name is {name}, {age} years old, from {city}")'
    },
    solution:'name = "Ali"\nage = 20\ncity = "Lahore"\nprint(f"Mera naam {name} hai, {age} saal, {city} se")',
    tags:['variable','fstring']
  },
  {
    id:3, topic:'vars', diff:'easy',
    title: { ur: 'Number Types', en: 'Number Types' },
    desc: {
      ur: 'Integer, float aur boolean ka ek ek variable banao aur type() function se unki type print karo.',
      en: 'Create one variable each for integer, float, and boolean, and print their types using the type() function.'
    },
    example: { ur: 'Output:\n<class \'int\'>\n<class \'float\'>\n<class \'bool\'>', en: 'Output:\n<class \'int\'>\n<class \'float\'>\n<class \'bool\'>' },
    hint: {
      ur: 'type(variable_name) se kisi bhi variable ki type pata kar sakte hain.',
      en: 'You can check the type of any variable using type(variable_name).'
    },
    solution:'x = 10\ny = 3.14\nz = True\nprint(type(x))\nprint(type(y))\nprint(type(z))',
    tags:['type','int','float','bool']
  },
  {
    id:4, topic:'vars', diff:'medium',
    title: { ur: 'Type Casting', en: 'Type Casting' },
    desc: {
      ur: 'User se ek number string mein milti hai (e.g., "42"). Usse integer mein convert karke uska square nikalo.',
      en: 'You receive a number as a string (e.g., "42"). Convert it to an integer and output its square.'
    },
    example: { ur: 'Input: "15"\nOutput: 225', en: 'Input: "15"\nOutput: 225' },
    hint: {
      ur: 'int() function se string ko integer mein convert karo. Square ke liye ** 2 use karo.',
      en: 'Convert the string to an integer using the int() function. Use ** 2 for the square.'
    },
    solution:'s = "15"\nn = int(s)\nprint(n ** 2)',
    tags:['casting','int']
  },
  {
    id:5, topic:'vars', diff:'hard',
    title: { ur: 'Variable Swap', en: 'Variable Swap' },
    desc: {
      ur: 'Do variables a=5 aur b=10 ko bina third variable ke swap karo.',
      en: 'Swap two variables a=5 and b=10 without using a third variable.'
    },
    example: { ur: 'Before: a=5, b=10\nAfter: a=10, b=5', en: 'Before: a=5, b=10\nAfter: a=10, b=5' },
    hint: {
      ur: 'Python mein ek hi line mein swap hota hai: a, b = b, a',
      en: 'In Python, swapping is done in a single line: a, b = b, a'
    },
    solution:'a = 5\nb = 10\nprint(f"Before: a={a}, b={b}")\na, b = b, a\nprint(f"After: a={a}, b={b}")',
    tags:['swap','tuple unpacking']
  },

  // STRINGS
  {
    id:6, topic:'strings', diff:'easy',
    title: { ur: 'String Methods', en: 'String Methods' },
    desc: {
      ur: 'Ek string "  hello world  " lo aur strip() lagao, phir title case mein print karo.',
      en: 'Take a string "  hello world  ", apply strip() to remove whitespace, and print it in title case.'
    },
    example: { ur: 'Output: Hello World', en: 'Output: Hello World' },
    hint: {
      ur: '.strip() spaces hatata hai, .title() har word ka pehla letter capital karta hai.',
      en: '.strip() removes spaces, .title() capitalizes the first letter of each word.'
    },
    solution:'s = "  hello world  "\nprint(s.strip().title())',
    tags:['strip','title']
  },
  {
    id:7, topic:'strings', diff:'easy',
    title: { ur: 'String Length', en: 'String Length' },
    desc: {
      ur: '"Pakistan" string ki length nikalo aur har character alag line par print karo.',
      en: 'Find the length of the string "Pakistan" and print each character on a separate line.'
    },
    example: { ur: 'Length: 8\nP\na\nk...', en: 'Length: 8\nP\na\nk...' },
    hint: {
      ur: 'len() se length, for loop se characters iterate karo.',
      en: 'Use len() to get length, and a for loop to iterate through the characters.'
    },
    solution:'s = "Pakistan"\nprint(f"Length: {len(s)}")\nfor c in s:\n    print(c)',
    tags:['len','loop']
  },
  {
    id:8, topic:'strings', diff:'easy',
    title: { ur: 'F-Strings Practice', en: 'F-Strings Practice' },
    desc: {
      ur: 'Ek product ka naam aur price store karo. Formatted string print karo.',
      en: 'Store a product name and its price. Print a formatted string using f-strings.'
    },
    example: { ur: 'Output: Laptop ki qeemat 85000 rupees hai.', en: 'Output: Laptop costs 85000 rupees.' },
    hint: {
      ur: 'f"text {variable} text" format use karo.',
      en: 'Use the f"text {variable} text" format.'
    },
    solution:'product = "Laptop"\nprice = 85000\nprint(f"{product} ki qeemat {price} rupees hai.")',
    tags:['fstring']
  },
  {
    id:9, topic:'strings', diff:'medium',
    title: { ur: 'String Slicing', en: 'String Slicing' },
    desc: {
      ur: '"abcdefghij" string se pehle 5 characters, aakhri 3 characters, aur middle reverse nikalo.',
      en: 'From the string "abcdefghij", print the first 5 characters, the last 3 characters, and the reverse of the string.'
    },
    example: { ur: 'First 5: abcde\nLast 3: hij\nReverse: jihgfedcba', en: 'First 5: abcde\nLast 3: hij\nReverse: jihgfedcba' },
    hint: {
      ur: 's[0:5] ya s[:5], s[-3:], s[::-1] use karo.',
      en: 'Use s[0:5] or s[:5], s[-3:], and s[::-1].'
    },
    solution:'s = "abcdefghij"\nprint("First 5:", s[:5])\nprint("Last 3:", s[-3:])\nprint("Reverse:", s[::-1])',
    tags:['slicing']
  },
  {
    id:10, topic:'strings', diff:'medium',
    title: { ur: 'Count Words', en: 'Count Words' },
    desc: {
      ur: 'Ek sentence mein kitne words hain? split() use karo.',
      en: 'Count the number of words in a sentence. Use split().'
    },
    example: { ur: 'Input: "Python bohat acha language hai"\nOutput: 5 words', en: 'Input: "Python is a very good language"\nOutput: 7 words' },
    hint: {
      ur: '.split() string ko spaces par split karta hai, len() se count karo.',
      en: '.split() splits the string at spaces, count using len().'
    },
    solution:'s = "Python bohat acha language hai"\nwords = s.split()\nprint(f"{len(words)} words")',
    tags:['split','len']
  },
  {
    id:11, topic:'strings', diff:'hard',
    title: { ur: 'Palindrome Check', en: 'Palindrome Check' },
    desc: {
      ur: 'Check karo koi word palindrome hai ya nahi (forward aur backward same ho).',
      en: 'Check if a word is a palindrome (spelled the same forward and backward).'
    },
    example: { ur: 'Input: "madam"\nOutput: madam ek palindrome hai!', en: 'Input: "madam"\nOutput: madam is a palindrome!' },
    hint: {
      ur: 's == s[::-1] check karo.',
      en: 'Check if s == s[::-1].'
    },
    solution:'word = "madam"\nif word == word[::-1]:\n    print(f"{word} ek palindrome hai!")\nelse:\n    print(f"{word} palindrome nahi hai")',
    tags:['palindrome','slicing']
  },

  // CONDITIONS
  {
    id:12, topic:'conditions', diff:'easy',
    title: { ur: 'Positive/Negative', en: 'Positive/Negative' },
    desc: {
      ur: 'Ek number lo aur check karo positive hai, negative hai, ya zero.',
      en: 'Take a number and check if it is positive, negative, or zero.'
    },
    example: { ur: 'Input: -5\nOutput: Negative number hai', en: 'Input: -5\nOutput: Negative number' },
    hint: {
      ur: 'if n > 0 elif n < 0 else use karo.',
      en: 'Use if n > 0, elif n < 0, else.'
    },
    solution:'n = -5\nif n > 0:\n    print("Positive number hai")\nelif n < 0:\n    print("Negative number hai")\nelse:\n    print("Zero hai")',
    tags:['if','elif','else']
  },
  {
    id:13, topic:'conditions', diff:'easy',
    title: { ur: 'Pass/Fail', en: 'Pass/Fail' },
    desc: {
      ur: 'Marks check karo. 50 ya zyada = Pass, kam = Fail.',
      en: 'Check marks. 50 or more = Pass, less = Fail.'
    },
    example: { ur: 'Input: 65\nOutput: Pass!', en: 'Input: 65\nOutput: Pass!' },
    hint: {
      ur: 'if marks >= 50 use karo.',
      en: 'Use if marks >= 50.'
    },
    solution:'marks = 65\nif marks >= 50:\n    print("Pass!")\nelse:\n    print("Fail!")',
    tags:['if','comparison']
  },
  {
    id:14, topic:'conditions', diff:'medium',
    title: { ur: 'Grade Calculator', en: 'Grade Calculator' },
    desc: {
      ur: 'Marks ke hisaab se grade do: 90+=A, 80+=B, 70+=C, 60+=D, else F.',
      en: 'Calculate grades: 90+=A, 80+=B, 70+=C, 60+=D, else F.'
    },
    example: { ur: 'Input: 85\nOutput: Grade: B', en: 'Input: 85\nOutput: Grade: B' },
    hint: {
      ur: 'elif chain use karo har grade ke liye.',
      en: 'Use an elif chain to check each grade threshold.'
    },
    solution:'marks = 85\nif marks >= 90:\n    grade = "A"\nelif marks >= 80:\n    grade = "B"\nelif marks >= 70:\n    grade = "C"\nelif marks >= 60:\n    grade = "D"\nelse:\n    grade = "F"\nprint(f"Grade: {grade}")',
    tags:['elif','grade']
  },
  {
    id:15, topic:'conditions', diff:'medium',
    title: { ur: 'Leap Year', en: 'Leap Year' },
    desc: {
      ur: 'Check karo saal leap year hai ya nahi.',
      en: 'Check if a year is a leap year.'
    },
    example: { ur: 'Input: 2024\nOutput: 2024 leap year hai', en: 'Input: 2024\nOutput: 2024 is a leap year' },
    hint: {
      ur: '(year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)',
      en: 'Use: (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)'
    },
    solution:'year = 2024\nif (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):\n    print(f"{year} leap year hai")\nelse:\n    print(f"{year} leap year nahi hai")',
    tags:['leap year','modulo']
  },
  {
    id:16, topic:'conditions', diff:'hard',
    title: { ur: 'FizzBuzz', en: 'FizzBuzz' },
    desc: {
      ur: '1 se 30 tak: 3 ka multiple = Fizz, 5 ka = Buzz, dono = FizzBuzz, baqi = number.',
      en: 'From 1 to 30: multiple of 3 = Fizz, multiple of 5 = Buzz, both = FizzBuzz, otherwise = number.'
    },
    example: { ur: '1 2 Fizz 4 Buzz Fizz...', en: '1 2 Fizz 4 Buzz Fizz...' },
    hint: {
      ur: 'Pehle FizzBuzz check karo, phir Fizz, phir Buzz.',
      en: 'Check for FizzBuzz (modulo 15) first, then Fizz (modulo 3), then Buzz (modulo 5).'
    },
    solution:'for i in range(1, 31):\n    if i % 15 == 0:\n        print("FizzBuzz")\n    elif i % 3 == 0:\n        print("Fizz")\n    elif i % 5 == 0:\n        print("Buzz")\n    else:\n        print(i)',
    tags:['fizzbuzz','loop','conditions']
  },

  // LOOPS
  {
    id:17, topic:'loops', diff:'easy',
    title: { ur: '1 se 10 Print', en: 'Print 1 to 10' },
    desc: {
      ur: 'for loop use karke 1 se 10 tak sare numbers print karo.',
      en: 'Print all numbers from 1 to 10 using a for loop.'
    },
    example: { ur: '1\n2\n...\n10', en: '1\n2\n...\n10' },
    hint: {
      ur: 'for i in range(1, 11): print(i)',
      en: 'Use for i in range(1, 11): print(i)'
    },
    solution:'for i in range(1, 11):\n    print(i)',
    tags:['for','range']
  },
  {
    id:18, topic:'loops', diff:'easy',
    title: { ur: 'Tables', en: 'Multiplication Tables' },
    desc: {
      ur: '5 ka pahara (multiplication table) print karo.',
      en: 'Print the multiplication table of 5.'
    },
    example: { ur: '5 x 1 = 5\n5 x 2 = 10\n...', en: '5 x 1 = 5\n5 x 2 = 10\n...' },
    hint: {
      ur: 'for i in range(1, 11): print(f"5 x {i} = {5*i}")',
      en: 'Use for i in range(1, 11): print(f"5 x {i} = {5*i}")'
    },
    solution:'for i in range(1, 11):\n    print(f"5 x {i} = {5*i}")',
    tags:['for','multiplication']
  },
  {
    id:19, topic:'loops', diff:'medium',
    title: { ur: 'Sum of Numbers', en: 'Sum of Numbers' },
    desc: {
      ur: '1 se 100 tak sare numbers ka sum nikalo.',
      en: 'Find the sum of all numbers from 1 to 100.'
    },
    example: { ur: 'Output: 5050', en: 'Output: 5050' },
    hint: {
      ur: 'total = 0, phir har number add karo. Ya sum(range(1,101)) use karo.',
      en: 'Set total = 0, then add each number. Or use sum(range(1,101)).'
    },
    solution:'total = 0\nfor i in range(1, 101):\n    total += i\nprint(f"Sum: {total}")\n# Ya ek line mein:\n# print(sum(range(1, 101)))',
    tags:['sum','accumulator']
  },
  {
    id:20, topic:'loops', diff:'medium',
    title: { ur: 'Factorial', en: 'Factorial' },
    desc: {
      ur: 'Ek number ka factorial nikalo.',
      en: 'Calculate the factorial of a number.'
    },
    example: { ur: 'Input: 5\nOutput: 120', en: 'Input: 5\nOutput: 120' },
    hint: {
      ur: 'result = 1, phir 1 se n tak multiply karo.',
      en: 'Start with result = 1, then multiply from 1 to n.'
    },
    solution:'n = 5\nresult = 1\nfor i in range(1, n+1):\n    result *= i\nprint(f"{n}! = {result}")',
    tags:['factorial','loop']
  },
  {
    id:21, topic:'loops', diff:'hard',
    title: { ur: 'Prime Numbers', en: 'Prime Numbers' },
    desc: {
      ur: '1 se 50 ke beech sare prime numbers print karo.',
      en: 'Print all prime numbers between 1 and 50.'
    },
    example: { ur: '2, 3, 5, 7, 11, 13...', en: '2, 3, 5, 7, 11, 13...' },
    hint: {
      ur: 'Nested loop: har number ke liye check karo koi factor hai ya nahi.',
      en: 'Nested loop: check if there is any factor for each number in the range.'
    },
    solution:'primes = []\nfor n in range(2, 51):\n    is_prime = True\n    for i in range(2, int(n**0.5)+1):\n        if n % i == 0:\n            is_prime = False\n            break\n    if is_prime:\n        primes.append(n)\nprint(primes)',
    tags:['prime','nested loop']
  },

  // LISTS
  {
    id:22, topic:'lists', diff:'easy',
    title: { ur: 'List Basics', en: 'List Basics' },
    desc: {
      ur: '5 fruits ki list banao, append se 1 aur add karo, phir sort karke print karo.',
      en: 'Create a list of 5 fruits, append one more, sort it, and print.'
    },
    example: { ur: '[\'apple\', \'banana\', \'cherry\', ...]', en: '[\'apple\', \'banana\', \'cherry\', ...]' },
    hint: {
      ur: 'fruits = ["apple",...], fruits.append("mango"), fruits.sort()',
      en: 'fruits = ["apple",...], fruits.append("mango"), fruits.sort()'
    },
    solution:'fruits = ["cherry", "apple", "banana", "grape", "orange"]\nfruits.append("mango")\nfruits.sort()\nprint(fruits)',
    tags:['list','append','sort']
  },
  {
    id:23, topic:'lists', diff:'easy',
    title: { ur: 'List Length & Access', en: 'List Length & Access' },
    desc: {
      ur: 'Ek list mein pehla, aakhri aur beech wala element access karo.',
      en: 'Access the first, last, and middle element in a list.'
    },
    example: { ur: 'First: 10\nLast: 50\nMiddle: 30', en: 'First: 10\nLast: 50\nMiddle: 30' },
    hint: {
      ur: 'list[0], list[-1], list[len(list)//2]',
      en: 'Use list[0], list[-1], and list[len(list)//2]'
    },
    solution:'nums = [10, 20, 30, 40, 50]\nprint("First:", nums[0])\nprint("Last:", nums[-1])\nprint("Middle:", nums[len(nums)//2])',
    tags:['list','indexing']
  },
  {
    id:24, topic:'lists', diff:'medium',
    title: { ur: 'List Comprehension', en: 'List Comprehension' },
    desc: {
      ur: '1 se 20 tak sare even numbers ki list ek line mein banao.',
      en: 'Create a list of all even numbers from 1 to 20 in a single line using list comprehension.'
    },
    example: { ur: '[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]', en: '[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]' },
    hint: {
      ur: '[x for x in range(2, 21, 2)] ya [x for x in range(1,21) if x%2==0]',
      en: 'Use: [x for x in range(2, 21, 2)] or [x for x in range(1,21) if x%2==0]'
    },
    solution:'evens = [x for x in range(1, 21) if x % 2 == 0]\nprint(evens)',
    tags:['comprehension','even']
  },
  {
    id:25, topic:'lists', diff:'medium',
    title: { ur: 'Max/Min Without Built-in', en: 'Max/Min Without Built-in' },
    desc: {
      ur: 'Bina max()/min() use kiye list mein sab se bada aur chota number nikalo.',
      en: 'Find the largest and smallest number in a list without using max() or min().'
    },
    example: { ur: 'List: [3, 1, 4, 1, 5, 9, 2, 6]\nMax: 9, Min: 1', en: 'List: [3, 1, 4, 1, 5, 9, 2, 6]\nMax: 9, Min: 1' },
    hint: {
      ur: 'Pehla element assume karo max/min, phir loop mein compare karo.',
      en: 'Assume the first element is the max and min, then compare each element in a loop.'
    },
    solution:'nums = [3, 1, 4, 1, 5, 9, 2, 6]\nmaxi = nums[0]\nmini = nums[0]\nfor n in nums:\n    if n > maxi:\n        maxi = n\n    if n < mini:\n        mini = n\nprint(f"Max: {maxi}, Min: {mini}")',
    tags:['max','min','loop']
  },
  {
    id:26, topic:'lists', diff:'hard',
    title: { ur: 'Remove Duplicates', en: 'Remove Duplicates' },
    desc: {
      ur: 'List se duplicate elements hatao without using set().',
      en: 'Remove duplicate elements from a list without using set().'
    },
    example: { ur: 'Input: [1, 2, 2, 3, 3, 3, 4]\nOutput: [1, 2, 3, 4]', en: 'Input: [1, 2, 2, 3, 3, 3, 4]\nOutput: [1, 2, 3, 4]' },
    hint: {
      ur: 'Nayi list banao, sirf woh elements add karo jo abhi tak nahin hain.',
      en: 'Create a new list, only append elements that are not already present.'
    },
    solution:'nums = [1, 2, 2, 3, 3, 3, 4]\nunique = []\nfor n in nums:\n    if n not in unique:\n        unique.append(n)\nprint(unique)',
    tags:['duplicate','list']
  },

  // DICTS
  {
    id:27, topic:'dicts', diff:'easy',
    title: { ur: 'Student Dictionary', en: 'Student Dictionary' },
    desc: {
      ur: 'Ek student ka dictionary banao name, age, marks ke sath aur print karo.',
      en: 'Create a student dictionary with keys name, age, marks and print it.'
    },
    example: { ur: 'Name: Ali, Age: 20, Marks: 85', en: 'Name: Ali, Age: 20, Marks: 85' },
    hint: {
      ur: 'student = {"name":"Ali", "age":20, "marks":85}',
      en: 'student = {"name":"Ali", "age":20, "marks":85}'
    },
    solution:'student = {"name": "Ali", "age": 20, "marks": 85}\nprint(f"Name: {student[\'name\']}, Age: {student[\'age\']}, Marks: {student[\'marks\']}")',
    tags:['dict','basic']
  },
  {
    id:28, topic:'dicts', diff:'medium',
    title: { ur: 'Word Counter', en: 'Word Counter' },
    desc: {
      ur: 'Ek sentence mein har word kitni baar aaya gino.',
      en: 'Count the frequency of each word in a sentence.'
    },
    example: { ur: 'Input: "the cat sat on the mat"\nOutput: {\'the\': 2, \'cat\': 1, ...}', en: 'Input: "the cat sat on the mat"\nOutput: {\'the\': 2, \'cat\': 1, ...}' },
    hint: {
      ur: 'Dict mein word key ho, count value. dict.get(word, 0) + 1 use karo.',
      en: 'Let word be key, count be value. Use dict.get(word, 0) + 1.'
    },
    solution:'sentence = "the cat sat on the mat"\ncount = {}\nfor word in sentence.split():\n    count[word] = count.get(word, 0) + 1\nprint(count)',
    tags:['dict','counter']
  },
  {
    id:29, topic:'dicts', diff:'hard',
    title: { ur: 'Phone Book', en: 'Phone Book' },
    desc: {
      ur: 'Phone book program: names aur numbers store karo, search karo, add karo.',
      en: 'Phone book program: store names and numbers, search, and add contacts.'
    },
    example: { ur: 'Contacts: {"Ali": "0300-1234567"}\nSearch "Ali" -> 0300-1234567', en: 'Contacts: {"Ali": "0300-1234567"}\nSearch "Ali" -> 0300-1234567' },
    hint: {
      ur: 'Dict use karo, input() se search karo, .get() se safely access karo.',
      en: 'Use a dict, search with keys, safely access using .get().'
    },
    solution:'contacts = {"Ali": "0300-1234567", "Sara": "0321-9876543"}\nnew_name = "Bilal"\nnew_num = "0311-5555555"\ncontacts[new_name] = new_num\nsearch = "Ali"\nresult = contacts.get(search, "Contact nahi mila")\nprint(f"{search}: {result}")\nprint(f"Total contacts: {len(contacts)}")',
    tags:['dict','search']
  },

  // FUNCTIONS
  {
    id:30, topic:'functions', diff:'easy',
    title: { ur: 'Simple Function', en: 'Simple Function' },
    desc: {
      ur: 'Ek function banao jo kisi ko greet kare.',
      en: 'Create a function that greets a user by name.'
    },
    example: { ur: 'greet("Ahmed") -> "Salam Ahmed! Kya haal hai?"', en: 'greet("Ahmed") -> "Salam Ahmed! Kya haal hai?"' },
    hint: {
      ur: 'def greet(name): ... return f"Salam {name}!"',
      en: 'Use: def greet(name): ... return f"Salam {name}!"'
    },
    solution:'def greet(name):\n    return f"Salam {name}! Kya haal hai?"\n\nprint(greet("Ahmed"))\nprint(greet("Sara"))',
    tags:['function','return']
  },
  {
    id:31, topic:'functions', diff:'easy',
    title: { ur: 'Calculator Function', en: 'Calculator Function' },
    desc: {
      ur: 'Ek function banao jo do numbers leke +, -, *, / sab return kare.',
      en: 'Create a function that takes two numbers and returns sum, diff, product, quotient.'
    },
    example: { ur: 'calc(10, 3) -> 13, 7, 30, 3.33', en: 'calc(10, 3) -> 13, 7, 30, 3.33' },
    hint: {
      ur: 'def calc(a, b): return a+b, a-b, a*b, a/b',
      en: 'Use: def calc(a, b): return a+b, a-b, a*b, a/b'
    },
    solution:'def calc(a, b):\n    return a+b, a-b, a*b, round(a/b, 2)\n\nresults = calc(10, 3)\nprint(f"Sum: {results[0]}, Diff: {results[1]}, Product: {results[2]}, Division: {results[3]}")',
    tags:['function','multiple return']
  },
  {
    id:32, topic:'functions', diff:'medium',
    title: { ur: 'Default Parameters', en: 'Default Parameters' },
    desc: {
      ur: 'Ek function banao coffee order karne ke liye. Default size "medium" ho.',
      en: 'Create a function to order coffee. Let the default size be "medium".'
    },
    example: { ur: 'order("Cappuccino") -> "Medium Cappuccino order hua"', en: 'order("Cappuccino") -> "Medium Cappuccino ordered"' },
    hint: {
      ur: 'def order(coffee, size="medium"): ...',
      en: 'Use: def order(coffee, size="medium"): ...'
    },
    solution:'def order(coffee, size="medium"):\n    return f"{size.title()} {coffee} order hua"\n\nprint(order("Cappuccino"))\nprint(order("Latte", "large"))',
    tags:['default params']
  },
  {
    id:33, topic:'functions', diff:'medium',
    title: { ur: 'Recursion', en: 'Recursion' },
    desc: {
      ur: 'Recursive function se factorial nikalo.',
      en: 'Calculate the factorial of a number using recursion.'
    },
    example: { ur: 'factorial(5) -> 120', en: 'factorial(5) -> 120' },
    hint: {
      ur: 'Base case: if n <= 1: return 1. Recursive: return n * factorial(n-1)',
      en: 'Base case: if n <= 1: return 1. Recursive: return n * factorial(n-1)'
    },
    solution:'def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))\nprint(factorial(10))',
    tags:['recursion','factorial']
  },
  {
    id:34, topic:'functions', diff:'hard',
    title: { ur: '*args aur **kwargs', en: '*args and **kwargs' },
    desc: {
      ur: 'Flexible function banao jo kisi bhi number of arguments accept kare.',
      en: 'Create flexible functions that accept any number of positional (*args) and keyword (**kwargs) arguments.'
    },
    example: { ur: 'add(1,2,3,4,5) -> 15\ninfo(name="Ali", age=20) -> Name: Ali, Age: 20', en: 'add(1,2,3,4,5) -> 15\ninfo(name="Ali", age=20) -> Name: Ali, Age: 20' },
    hint: {
      ur: '*args tuple banata hai, **kwargs dictionary.',
      en: '*args forms a tuple, **kwargs forms a dictionary.'
    },
    solution:'def add(*args):\n    return sum(args)\n\ndef info(**kwargs):\n    for k, v in kwargs.items():\n        print(f"{k.title()}: {v}")\n\nprint(add(1, 2, 3, 4, 5))\ninfo(name="Ali", age=20, city="Karachi")',
    tags:['args','kwargs']
  },

  // OOP
  {
    id:35, topic:'oop', diff:'easy',
    title: { ur: 'Pehli Class', en: 'First Class' },
    desc: {
      ur: 'Ek simple Car class banao make, model, year ke sath. describe() method ho.',
      en: 'Create a simple Car class with make, model, year and a describe() method.'
    },
    example: { ur: 'Car("Toyota", "Corolla", 2022).describe()\n-> 2022 Toyota Corolla', en: 'Car("Toyota", "Corolla", 2022).describe()\n-> 2022 Toyota Corolla' },
    hint: {
      ur: 'class Car: def __init__(self, make, model, year): ...',
      en: 'class Car: def __init__(self, make, model, year): ...'
    },
    solution:'class Car:\n    def __init__(self, make, model, year):\n        self.make = make\n        self.model = model\n        self.year = year\n    \n    def describe(self):\n        return f"{self.year} {self.make} {self.model}"\n\nmy_car = Car("Toyota", "Corolla", 2022)\nprint(my_car.describe())',
    tags:['class','init','method']
  },
  {
    id:36, topic:'oop', diff:'medium',
    title: { ur: 'Bank Account', en: 'Bank Account' },
    desc: {
      ur: 'BankAccount class: deposit(), withdraw(), get_balance(). Negative withdraw allow na karo.',
      en: 'BankAccount class: implement deposit(), withdraw(), get_balance() with balance validation.'
    },
    example: { ur: 'acc.deposit(1000)\nacc.withdraw(500)\nacc.get_balance() -> 500', en: 'acc.deposit(1000)\nacc.withdraw(500)\nacc.get_balance() -> 500' },
    hint: {
      ur: '__init__ mein balance = 0. withdraw mein check karo balance sufficient hai.',
      en: 'Set balance = 0 in constructor. In withdraw, check if balance is sufficient.'
    },
    solution:'class BankAccount:\n    def __init__(self, owner):\n        self.owner = owner\n        self.balance = 0\n    \n    def deposit(self, amount):\n        self.balance += amount\n        print(f"Rs {amount} deposit hua. Balance: {self.balance}")\n    \n    def withdraw(self, amount):\n        if amount > self.balance:\n            print("Insufficient balance!")\n        else:\n            self.balance -= amount\n            print(f"Rs {amount} nikala. Balance: {self.balance}")\n    \n    def get_balance(self):\n        return self.balance\n\nacc = BankAccount("Ali")\nacc.deposit(1000)\nacc.withdraw(500)\nprint(f"Final balance: {acc.get_balance()}")',
    tags:['class','method','validation']
  },
  {
    id:37, topic:'inherit', diff:'hard',
    title: { ur: 'Inheritance', en: 'Inheritance' },
    desc: {
      ur: 'Animal class banao. Dog aur Cat inherit karein aur apna speak() override karein.',
      en: 'Create Animal, Dog, and Cat classes. Override speak() in subclasses.'
    },
    example: { ur: 'Dog().speak() -> "Bhow Bhow!"\nCat().speak() -> "Meow!"', en: 'Dog().speak() -> "Woof Woof!"\nCat().speak() -> "Meow!"' },
    hint: {
      ur: 'class Dog(Animal): def speak(self): return "Bhow!"',
      en: 'class Dog(Animal): def speak(self): return "Woof!"'
    },
    solution:'class Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        return "..."\n    \n    def info(self):\n        return f"{self.name} kehta hai: {self.speak()}"\n\nclass Dog(Animal):\n    def speak(self):\n        return "Bhow Bhow!"\n\nclass Cat(Animal):\n    def speak(self):\n        return "Meow!"\n\ndog = Dog("Tommy")\ncat = Cat("Kitty")\nprint(dog.info())\nprint(cat.info())',
    tags:['inheritance','polymorphism']
  },

  // FILE IO
  {
    id:38, topic:'fileio', diff:'medium',
    title: { ur: 'File Write & Read', en: 'File Write & Read' },
    desc: {
      ur: 'Kuch lines ek file mein likho, phir wapas parhke print karo.',
      en: 'Write a few lines to a file, then read and print the contents.'
    },
    example: { ur: 'File banao "test.txt", 3 lines likho, phir parho.', en: 'Create file "test.txt", write 3 lines, then read them.' },
    hint: {
      ur: 'with open("test.txt", "w") as f: f.write(...)',
      en: 'Use: with open("test.txt", "w") as f: f.write(...)'
    },
    solution:'# File mein likhna\nwith open("test.txt", "w") as f:\n    f.write("Pehli line\\n")\n    f.write("Doosri line\\n")\n    f.write("Teesri line\\n")\n\n# File se parhna\nwith open("test.txt", "r") as f:\n    content = f.read()\nprint(content)',
    tags:['file','read','write']
  },

  // ALGO
  {
    id:39, topic:'algo', diff:'medium',
    title: { ur: 'Binary Search', en: 'Binary Search' },
    desc: {
      ur: 'Sorted list mein binary search implement karo.',
      en: 'Implement binary search in a sorted list.'
    },
    example: { ur: 'search([1,3,5,7,9,11], 7) -> Found at index 3', en: 'search([1,3,5,7,9,11], 7) -> Found at index 3' },
    hint: {
      ur: 'mid = (low+high)//2. Target se compare karo.',
      en: 'Set mid = (low+high)//2. Compare with target value.'
    },
    solution:'def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1\n\narr = [1, 3, 5, 7, 9, 11, 13]\nresult = binary_search(arr, 7)\nprint(f"Found at index: {result}")',
    tags:['binary search','algorithm']
  },
  {
    id:40, topic:'algo', diff:'hard',
    title: { ur: 'Bubble Sort', en: 'Bubble Sort' },
    desc: {
      ur: 'Bubble sort implement karo without sorted() use kiye.',
      en: 'Implement bubble sort without using the built-in sorted() function.'
    },
    example: { ur: 'Input: [64,34,25,12,22,11,90]\nOutput: [11,12,22,25,34,64,90]', en: 'Input: [64,34,25,12,22,11,90]\nOutput: [11,12,22,25,34,64,90]' },
    hint: {
      ur: 'Nested loop: adjacent elements compare karo, swap karo agar zarurat ho.',
      en: 'Nested loop: compare adjacent elements, swap them if they are in the wrong order.'
    },
    solution:'def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr\n\nnums = [64, 34, 25, 12, 22, 11, 90]\nprint(bubble_sort(nums))',
    tags:['sorting','bubble sort']
  },
];

const quizQuestions = [
  {
    q: { ur: 'Python mein list ka pehla element access karne ke liye?', en: 'How do you access the first element of a list in Python?' },
    code: 'mylist = [10, 20, 30]\n# Kya likhoge?',
    opts: ['mylist[1]', 'mylist[0]', 'mylist.first()', 'mylist[-1]'],
    ans: 1,
    topic: 'Lists',
    exp: {
      ur: 'Python 0-indexed hai! pehla element index 0 par hota hai: mylist[0] = 10',
      en: 'Python is 0-indexed! The first element is at index 0: mylist[0] = 10'
    }
  },
  {
    q: { ur: 'Yeh code kya output dega?', en: 'What will this code output?' },
    code: 'x = 5\nif x > 3:\n    print("A")\nelif x > 4:\n    print("B")\nelse:\n    print("C")',
    opts: ['B', 'C', 'A', 'A aur B'],
    ans: 2,
    topic: 'Conditions',
    exp: {
      ur: '"A" print hoga kyunki x=5 > 3 condition pehle hi true hai. elif tak jata hi nahi.',
      en: '"A" will be printed because the condition x=5 > 3 is already true. It does not reach elif.'
    }
  },
  {
    q: { ur: 'f-string ka sahi syntax kya hai?', en: 'What is the correct syntax for an f-string?' },
    code: 'name = "Ali"\nage = 20',
    opts: ['print("name age")', 'print(f"{name} {age}")', 'print(f"name age")', 'print("{name} {age}")'],
    ans: 1,
    topic: 'Strings',
    exp: {
      ur: 'f-string mein f lagana zaroori hai aur variables curly braces {} mein jaate hain.',
      en: 'It is mandatory to put "f" prefix before the string and variables inside curly braces {}.'
    }
  },
  {
    q: { ur: 'Yeh loop kitni baar chalega?', en: 'How many times will this loop run?' },
    code: 'for i in range(2, 8, 2):\n    print(i)',
    opts: ['6 baar', '3 baar', '4 baar', '2 baar'],
    ans: 1,
    topic: 'Loops',
    exp: {
      ur: 'range(2, 8, 2) returns 2, 4, 6 — sirf 3 values. Step size 2 hai.',
      en: 'range(2, 8, 2) returns [2, 4, 6] — only 3 values. The step size is 2.'
    }
  },
  {
    q: { ur: 'Dictionary mein value safely access karne ka best tarika?', en: 'What is the best way to safely access a value in a dictionary?' },
    code: 'd = {"name": "Ali"}\n# "age" key nahi hai',
    opts: ['d["age"]', 'd.age', 'd.get("age", "Not found")', 'd.fetch("age")'],
    ans: 2,
    topic: 'Dictionaries',
    exp: {
      ur: '.get() method KeyError throw nahi karta. Agar key nahi mila toh default value return karta hai.',
      en: 'The .get() method does not throw a KeyError. If the key is not found, it returns the default value.'
    }
  },
  {
    q: { ur: '*args kya karta hai function mein?', en: 'What does *args do in a function?' },
    code: 'def test(*args):\n    print(args)\n\ntest(1, 2, 3)',
    opts: ['Error deta hai', 'Sirf ek argument leta hai', 'Variable number of arguments ko tuple mein store karta hai', 'Arguments ko dictionary mein store karta hai'],
    ans: 2,
    topic: 'Functions',
    exp: {
      ur: '*args function ko koi bhi number of positional arguments accept karne deta hai, sab tuple mein store hote hain.',
      en: '*args allows a function to accept any number of positional arguments, which are stored inside a tuple.'
    }
  },
  {
    q: { ur: 'List comprehension ka output kya hoga?', en: 'What is the output of this list comprehension?' },
    code: 'result = [x**2 for x in range(1, 5)]\nprint(result)',
    opts: ['[1, 4, 9, 16]', '[1, 2, 3, 4]', '[2, 4, 6, 8]', '[0, 1, 4, 9]'],
    ans: 0,
    topic: 'Lists',
    exp: {
      ur: 'range(1,5) = 1,2,3,4. Har x ka square: 1,4,9,16. List comprehension shorthand hai.',
      en: 'range(1,5) evaluates to [1, 2, 3, 4]. Square of each x: [1, 4, 9, 16].'
    }
  },
  {
    q: { ur: 'Exception handle karne ka sahi tarika?', en: 'What is the correct way to handle exceptions?' },
    code: '# Zero se divide karein\nx = 10 / 0',
    opts: ['if/else use karo', 'try/except use karo', 'ignore karo', 'error = True likho'],
    ans: 1,
    topic: 'Errors',
    exp: {
      ur: 'try/except Python mein errors handle karne ka standard tarika hai. ZeroDivisionError pakad sakte hain.',
      en: 'try/except is the standard error-handling pattern in Python. It can catch ZeroDivisionError.'
    }
  },
  {
    q: { ur: 'Class mein __init__ kya karta hai?', en: 'What does __init__ do in a class?' },
    code: 'class Dog:\n    def __init__(self, name):\n        self.name = name',
    opts: ['Class destroy karta hai', 'Object banate waqt automatically chalti hai (constructor)', 'Random method hai', 'Sirf ek baar chalti hai program mein'],
    ans: 1,
    topic: 'OOP',
    exp: {
      ur: '__init__ constructor hai jo har naye object ke saath automatically call hoti hai. self.name = name instance variable set karta hai.',
      en: '__init__ is the constructor which runs automatically when creating a new object. self.name = name assigns instance attributes.'
    }
  },
  {
    q: { ur: 'len() function in par kaam karta hai?', en: 'Which objects does the len() function work on?' },
    code: '# Kaunse pe kaam karta hai?',
    opts: ['Sirf strings par', 'Sirf lists par', 'Strings, lists, tuples, dicts, sets par', 'Sirf numbers par'],
    ans: 2,
    topic: 'Variables',
    exp: {
      ur: 'len() Python mein bahut versatile hai — kisi bhi iterable ya collection par kaam karta hai jisme length ka concept ho.',
      en: 'len() is highly versatile in Python — it works on any iterable or collection that has a defined length.'
    }
  },
];

const roadmapData = [
  { num:'1', title: { ur: 'Python Bunyad', en: 'Python Basics' }, weeks:'Week 1–2', status:'active', color:'#6c63ff',
    topics:['Variables & Data Types','Strings & f-strings','User Input','Arithmetic Operators','Type Casting'],
    yt:['Corey Schafer: Python Basics','freeCodeCamp: Python Tutorial','Tech With Tim: Beginner Series'],
    docs:'docs.python.org/3/tutorial/introduction.html' },
  { num:'2', title: { ur: 'Control Flow', en: 'Control Flow' }, weeks:'Week 3–4', status:'todo', color:'#4ade80',
    topics:['if/elif/else','for loops','while loops','break/continue/pass','Nested loops','FizzBuzz pattern'],
    yt:['Corey Schafer: Conditionals','Sentdex: Python Programming','CS Dojo: Python Basics'],
    docs:'docs.python.org/3/tutorial/controlflow.html' },
  { num:'3', title: { ur: 'Data Structures', en: 'Data Structures' }, weeks:'Week 5–6', status:'todo', color:'#f59e0b',
    topics:['Lists & methods','Tuples','Dictionaries','Sets','List comprehension','Slicing'],
    yt:['Corey Schafer: Lists','Tech With Tim: Data Structures','Real Python: Dicts'],
    docs:'docs.python.org/3/tutorial/datastructures.html' },
  { num:'4', title: { ur: 'Functions & Modules', en: 'Functions & Modules' }, weeks:'Week 7–8', status:'todo', color:'#f87171',
    topics:['def & return','*args **kwargs','Lambda','Default params','Built-in modules (math, random, os)','Custom modules'],
    yt:['Corey Schafer: Functions','freeCodeCamp: Modules','Traversy Media: Python Crash Course'],
    docs:'docs.python.org/3/tutorial/modules.html' },
  { num:'5', title: { ur: 'Object Oriented Programming', en: 'Object Oriented Programming' }, weeks:'Week 9–10', status:'todo', color:'#a78bfa',
    topics:['class & object','__init__ & self','Instance methods','Inheritance & super()','Polymorphism','Dunder methods'],
    yt:['Corey Schafer: OOP Series (best)','Tech With Tim: OOP Python','freeCodeCamp: OOP'],
    docs:'docs.python.org/3/tutorial/classes.html' },
  { num:'6', title: { ur: 'Advanced Python', en: 'Advanced Python' }, weeks:'Week 11–12', status:'todo', color:'#34d399',
    topics:['File handling (read/write)','try/except/finally','Decorators','Generators & yield','Context managers','Regex basics'],
    yt:['Corey Schafer: Decorators','Real Python: Generators','Sentdex: File Handling'],
    docs:'docs.python.org/3/tutorial/errors.html' },
  { num:'7', title: { ur: 'Libraries & Real Projects', en: 'Libraries & Real Projects' }, weeks:'Month 4', status:'todo', color:'#fb923c',
    topics:['NumPy (arrays)','Pandas (data analysis)','Requests (APIs)','Flask (web app)','BeautifulSoup (scraping)','Matplotlib (charts)'],
    yt:['Keith Galli: Pandas','Traversy Media: Flask','freeCodeCamp: Data Science'],
    docs:'pypi.org' },
  { num:'8', title: { ur: 'Algorithms & Interview Prep', en: 'Algorithms & Interview Prep' }, weeks:'Month 5+', status:'todo', color:'#f472b6',
    topics:['Sorting algorithms','Binary search','Recursion','Big O notation','LeetCode Easy','LeetCode Medium'],
    yt:['NeetCode: LeetCode Solutions','CS Dojo: Algorithms','Corey Schafer: Advanced Python'],
    docs:'leetcode.com/problemset/' },
];

// ===================== RENDER =====================
let currentQ = null;
let currentFilter = 'all';
let currentTopicFilter = 'all';
let quizQIndex = 0, quizScore = 0, quizSelected = [];
let selectedQuizTopics = [];

// Language toggle function
function changeLanguage(lang) {
  currentLang = lang;
  
  // Update buttons state
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`lang-${lang}`).classList.add('active');
  
  // Translate UI elements
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Translate placeholders
  const editor = document.getElementById('codeEditor');
  if (editor) {
    if (lang === 'ur') {
      editor.placeholder = "# Yahan apna Python code likho...\n# Phir Run button dabao!\n\n";
    } else {
      editor.placeholder = "# Write your Python code here...\n# Then press the Run button!\n\n";
    }
  }

  // Update streak text
  updateStreakDisplay(0); // placeholder value or use actual value if tracking

  // Re-render components with localized data
  renderTopics();
  renderQuestions();
  renderQuizTopics();
  renderRoadmap();
  updateHeaderAuthArea();
  updateHomeStats();
  if (currentQ) {
    loadQuestion(currentQ.id);
  }
}

function updateStreakDisplay(days) {
  const streakText = document.getElementById('streakText');
  if (streakText) {
    streakText.textContent = translations[currentLang].streak.replace('{day}', days);
  }
}

function renderTopics() {
  const g = document.getElementById('topicsGrid');
  const lvlMap = { basic:'lb-basic', intermediate:'lb-inter', advanced:'lb-adv', expert:'lb-expert' };
  const lvlLabel = { basic:'Basic', intermediate:'Intermediate', advanced:'Advanced', expert:'Expert' };
  g.innerHTML = topics.map(t => `
    <div class="topic-card" onclick="goPageWithTopic('practice','${t.id}')">
      <div class="topic-header">
        <div class="topic-icon">${t.icon}</div>
        <div class="topic-title">${t.title}</div>
        <span class="level-badge ${lvlMap[t.level]}">${lvlLabel[t.level]}</span>
      </div>
      <div class="topic-desc">${t.desc}</div>
      <div class="q-counts">
        <span class="q-badge q-easy">🟢 ${t.easy} Easy</span>
        <span class="q-badge q-med">🟡 ${t.med} Medium</span>
        <span class="q-badge q-hard">🔴 ${t.hard} Hard</span>
      </div>
    </div>`).join('');
}

function renderQuestions() {
  const topicSet = [...new Set(questions.map(q => q.topic))];
  const tf = document.getElementById('topicFilters');
  const allTopicsText = translations[currentLang].allTopics;
  tf.innerHTML = `<button class="filter-btn active" onclick="filterTopic('all',this)">${allTopicsText}</button>` +
    topicSet.map(t => {
      const tp = topics.find(x => x.id === t);
      return `<button class="filter-btn" onclick="filterTopic('${t}',this)">${tp ? tp.icon : ''} ${tp ? tp.title : t}</button>`;
    }).join('');
  renderQList();
}

let currentLimit = 'all';

function changeQLimit(val) {
  currentLimit = val;
  renderQList();
}

function renderQList() {
  const list = document.getElementById('questionList');
  let qs = questions.filter(q =>
    (currentFilter === 'all' || q.diff === currentFilter) &&
    (currentTopicFilter === 'all' || q.topic === currentTopicFilter)
  );
  
  if (currentLimit !== 'all') {
    const limitNum = parseInt(currentLimit);
    qs = qs.slice(0, limitNum);
  }
  
  document.getElementById('qcount').textContent = `${qs.length} shown`;
  list.innerHTML = qs.map(q => {
    const tp = topics.find(t => t.id === q.topic);
    const titleText = typeof q.title === 'object' ? q.title[currentLang] : q.title;
    const isSolved = currentUser && currentUser.solved && currentUser.solved.includes(q.id);
    return `<div class="q-list-item ${currentQ && currentQ.id === q.id ? 'active' : ''} ${isSolved ? 'solved' : ''}" onclick="loadQuestion(${q.id})">
      <div class="q-num">Q${q.id} · ${q.diff.toUpperCase()}</div>
      <div class="q-title">${titleText}</div>
      <div class="q-meta">
        <div class="diff-dot dd-${q.diff}"></div>
        <span class="q-topic-tag">${tp ? tp.icon + ' ' + tp.title : q.topic}</span>
      </div>
    </div>`;
  }).join('');
}

function filterQ(diff, btn) {
  currentFilter = diff;
  document.querySelectorAll('#diffFilters .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderQList();
}
function filterTopic(topic, btn) {
  currentTopicFilter = topic;
  document.querySelectorAll('#topicFilters .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderQList();
}

function loadQuestion(id) {
  currentQ = questions.find(q => q.id === id);
  if (!currentQ) return;

  // Hide test results when loading a new question
  const tr = document.getElementById('testResults');
  if (tr) tr.classList.remove('show');

  const diffColors = { easy: '#4ade80', medium: '#f59e0b', hard: '#f87171' };
  const diffBg = { easy: 'rgba(74,222,128,0.1)', medium: 'rgba(245,158,11,0.1)', hard: 'rgba(248,113,113,0.1)' };
  
  const titleText = typeof currentQ.title === 'object' ? currentQ.title[currentLang] : currentQ.title;
  const descText = typeof currentQ.desc === 'object' ? currentQ.desc[currentLang] : currentQ.desc;
  const exampleText = typeof currentQ.example === 'object' ? currentQ.example[currentLang] : currentQ.example;
  
  document.getElementById('qDisplayTitle').textContent = titleText;
  document.getElementById('qDiffBadge').textContent = currentQ.diff.toUpperCase();
  document.getElementById('qDiffBadge').style.color = diffColors[currentQ.diff];
  document.getElementById('qDiffBadge').style.background = diffBg[currentQ.diff];
  document.getElementById('qBody').innerHTML = `
    <p>${descText.replace(/`([^`]+)`/g,'<code>$1</code>')}</p>
    <div class="example-box"><span style="color:var(--text2);font-size:11px;letter-spacing:0.5px">${translations[currentLang].exampleLabel}</span>\n${exampleText}</div>
  `;
  
  const cleanDesc = descText.replace(/<[^>]+>/g,'');
  const initialCode = `# ${titleText}\n# ${cleanDesc}\n\n`;
  if (cmEditor) {
    cmEditor.setValue(initialCode);
  } else {
    document.getElementById('codeEditor').value = initialCode;
  }
  document.getElementById('outputArea').textContent = translations[currentLang].outputAreaDefault;
  document.getElementById('outputArea').className = 'output-area';
  document.getElementById('hintBox').className = 'hint-box';
  renderQList();
}

function showHint() {
  if (!currentQ) return alert(translations[currentLang].alertChooseQ);
  const h = document.getElementById('hintBox');
  const hintText = typeof currentQ.hint === 'object' ? currentQ.hint[currentLang] : currentQ.hint;
  h.textContent = translations[currentLang].hintPrefix + hintText;
  h.classList.add('show');
}
function showSolution() {
  if (!currentQ) return alert(translations[currentLang].alertChooseQ);
  if (cmEditor) {
    cmEditor.setValue(currentQ.solution);
  } else {
    document.getElementById('codeEditor').value = currentQ.solution;
  }
}
let chatHistoryState = [];

function askAI() {
  if (!currentQ) return alert(translations[currentLang].alertChooseQ);
  
  const drawer = document.getElementById('aiDrawer');
  if (drawer) drawer.classList.add('open');
  
  const chatHistory = document.getElementById('aiChatHistory');
  const welcomeMsg = currentLang === 'ur' 
    ? "Assalam-o-Alaikum! Main aapka Python Tutor (Ustad) hoon. Kisi question mein help chahiye? Main aapke code ko check karke guide kar sakta hoon! Neeche apna sawal likhein ya 'Send' dabayein."
    : "Assalam-o-Alaikum! I am your Python Tutor (Ustad). Need help with this question? Let me analyze your code and guide you! Ask a question below.";
  
  chatHistory.innerHTML = `<div class="ai-message assistant">${welcomeMsg}</div>`;
  
  const code = cmEditor ? cmEditor.getValue() : document.getElementById('codeEditor').value;
  const titleText = typeof currentQ.title === 'object' ? currentQ.title[currentLang] : currentQ.title;
  const descText = typeof currentQ.desc === 'object' ? currentQ.desc[currentLang] : currentQ.desc;
  
  getAIResponse(titleText, descText, code);
}

function closeAIDrawer() {
  const drawer = document.getElementById('aiDrawer');
  if (drawer) drawer.classList.remove('open');
}

function appendMessage(sender, text) {
  const chatHistory = document.getElementById('aiChatHistory');
  if (!chatHistory) return;
  
  const msgDiv = document.createElement('div');
  msgDiv.className = `ai-message ${sender === 'user' ? 'user' : 'assistant'}`;
  msgDiv.innerHTML = text.replace(/\n/g, '<br>').replace(/\`([^\`]+)\`/g, '<code>$1</code>');
  chatHistory.appendChild(msgDiv);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

async function getAIResponse(title, desc, code, userFollowup = "") {
  appendMessage("assistant", currentLang === 'ur' ? "Thinking... (AI Ustad soch raha hai...)" : "AI Tutor is analyzing...");
  
  const cleanDesc = desc.replace(/<[^>]+>/g, '');
  
  let systemPrompt = `You are "PyUstad AI", an expert Python programming teacher. You explain concepts clearly, patiently, and in an encouraging tone.
Your primary language of communication is Roman Urdu (e.g. "Aapke code mein yahan brackets miss ho rahe hain...") and simple English.
IMPORTANT rules:
1. Do NOT write the entire correct solution immediately. Instead, explain the logic, point out where the user is making a mistake, and guide them step-by-step.
2. If they have no code or only comments, explain how to start.
3. Keep explanation brief and easy to read.`;

  let prompt = "";
  if (userFollowup) {
    prompt = userFollowup;
    chatHistoryState.push({ role: 'user', content: prompt });
  } else {
    prompt = `I am trying to solve the Python question: "${title}".
Description: "${cleanDesc}"
My current code:
\`\`\`python
${code}
\`\`\`
Please analyze my code and give me hints on how to correct it or solve this challenge. Speak in Roman Urdu/English.`;
    chatHistoryState = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: prompt }
    ];
  }
  
  try {
    const response = await fetch('https://text.pollinations.ai/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: chatHistoryState,
        model: 'openai'
      })
    });
    
    const aiText = await response.text();
    
    const chatHistory = document.getElementById('aiChatHistory');
    if (chatHistory && chatHistory.lastChild) {
      chatHistory.removeChild(chatHistory.lastChild);
    }
    
    appendMessage("assistant", aiText);
    chatHistoryState.push({ role: 'assistant', content: aiText });
  } catch (err) {
    console.error("AI Error: ", err);
    const chatHistory = document.getElementById('aiChatHistory');
    if (chatHistory && chatHistory.lastChild) {
      chatHistory.removeChild(chatHistory.lastChild);
    }
    appendMessage("assistant", "⚠️ Error: Connection failed. Please check internet connection.");
  }
}

function sendUserAIMessage() {
  const input = document.getElementById('aiInputField');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  
  appendMessage("user", text);
  input.value = "";
  
  const titleText = typeof currentQ.title === 'object' ? currentQ.title[currentLang] : currentQ.title;
  const descText = typeof currentQ.desc === 'object' ? currentQ.desc[currentLang] : currentQ.desc;
  const code = cmEditor ? cmEditor.getValue() : document.getElementById('codeEditor').value;
  
  getAIResponse(titleText, descText, code, text);
}

async function runCode() {
  if (!pyodideInstance) {
    alert(currentLang === 'ur' ? "Python engine load ho raha hai, please thoda wait karein..." : "Python engine is loading, please wait...");
    return;
  }
  
  const code = cmEditor ? cmEditor.getValue() : document.getElementById('codeEditor').value;
  const output = document.getElementById('outputArea');
  output.textContent = currentLang === 'ur' ? "Running..." : "Running...";
  output.className = 'output-area';
  
  let stdoutContent = "";
  pyodideInstance.setStdout({
    writer: (text) => {
      stdoutContent += text;
    }
  });
  
  try {
    await pyodideInstance.runPythonAsync(`
import sys
import io
sys.stdout = io.StringIO()
`);
    await pyodideInstance.runPythonAsync(code);
    const capturedStdout = await pyodideInstance.runPythonAsync("sys.stdout.getvalue()");
    stdoutContent += capturedStdout;
    
    output.textContent = stdoutContent.trim() ? stdoutContent : (currentLang === 'ur' ? "✓ Code chala! (koi output nahi)" : "✓ Code ran successfully! (no output)");
    output.className = 'output-area output-success';
  } catch(e) {
    output.textContent = `⚠️ Python Error:\n${e.message}`;
    output.className = 'output-area output-error';
  }
}

// QUIZ
function renderQuizTopics() {
  const sel = document.getElementById('quizTopicSelector');
  const uniqueTopics = [...new Set(quizQuestions.map(q => q.topic))];
  const allTopicsText = translations[currentLang].allTopics;
  sel.innerHTML = uniqueTopics.map(t => `
    <div class="topic-select-card" onclick="toggleQuizTopic('${t}',this)">
      <div style="font-size:20px;margin-bottom:6px">${topics.find(x=>x.title===t)?.icon||'📌'}</div>
      <div style="font-size:13px;font-weight:500">${t}</div>
    </div>`).join('') +
    `<div class="topic-select-card selected" onclick="toggleQuizTopic('ALL',this)" id="allTopicsCard">
      <div style="font-size:20px;margin-bottom:6px">🎯</div>
      <div style="font-size:13px;font-weight:500">${allTopicsText}</div>
    </div>`;
}
function toggleQuizTopic(t, el) {
  if (t === 'ALL') {
    selectedQuizTopics = [];
    document.querySelectorAll('.topic-select-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
  } else {
    document.getElementById('allTopicsCard').classList.remove('selected');
    el.classList.toggle('selected');
    if (selectedQuizTopics.includes(t)) selectedQuizTopics = selectedQuizTopics.filter(x=>x!==t);
    else selectedQuizTopics.push(t);
  }
}
function startQuiz() {
  quizQIndex = 0; quizScore = 0;
  document.getElementById('quizTopicSelect').style.display = 'none';
  document.getElementById('quizArea').style.display = 'block';
  document.getElementById('quizResult').style.display = 'none';
  renderQuizQ();
}
function renderQuizQ() {
  const q = quizQuestions[quizQIndex % quizQuestions.length];
  document.getElementById('quizQNum').textContent = `Q ${quizQIndex+1}/${quizQuestions.length}`;
  document.getElementById('quizProgress').style.width = `${((quizQIndex+1)/quizQuestions.length)*100}%`;
  document.getElementById('qTopicTag').textContent = q.topic;
  
  const qText = typeof q.q === 'object' ? q.q[currentLang] : q.q;
  document.getElementById('quizQ').innerHTML = qText;
  
  const cb = document.getElementById('quizCodeBlock');
  if (q.code) { cb.style.display='block'; cb.textContent = q.code; }
  else { cb.style.display='none'; }
  document.getElementById('quizOpts').innerHTML = q.opts.map((o,i) =>
    `<button class="quiz-opt" onclick="answerQuiz(${i})">${String.fromCharCode(65+i)}) ${o}</button>`
  ).join('');
  document.getElementById('quizFeedback').style.display='none';
  document.getElementById('quizNextBtn').style.display='none';
}
function answerQuiz(i) {
  const q = quizQuestions[quizQIndex % quizQuestions.length];
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach(o => o.disabled = true);
  opts[i].classList.add(i===q.ans?'correct':'wrong');
  if (i!==q.ans) opts[q.ans].classList.add('correct');
  if (i===q.ans) quizScore++;
  const fb = document.getElementById('quizFeedback');
  fb.style.display='block';
  fb.className = `quiz-feedback ${i===q.ans?'qf-correct':'qf-wrong'}`;
  
  const expText = typeof q.exp === 'object' ? q.exp[currentLang] : q.exp;
  const isCorrect = (i===q.ans);
  const correctPrefix = currentLang === 'ur' ? (isCorrect ? '✅ Bilkul sahi! ' : '❌ Galat! ') : (isCorrect ? '✅ Correct! ' : '❌ Incorrect! ');
  fb.textContent = correctPrefix + expText;
  document.getElementById('quizNextBtn').style.display='block';
  document.getElementById('quizScoreDisplay').textContent = quizScore + ' ✓';
}
function nextQuizQ() {
  quizQIndex++;
  if (quizQIndex >= quizQuestions.length) {
    showQuizResult();
  } else {
    renderQuizQ();
  }
}
function showQuizResult() {
  document.getElementById('quizArea').style.display='none';
  document.getElementById('quizResult').style.display='block';
  const pct = Math.round((quizScore/quizQuestions.length)*100);
  const emoji = pct>=80?'🏆':pct>=60?'😊':pct>=40?'📚':'💪';
  
  let msg = '';
  if (pct >= 80) msg = translations[currentLang].resultMsg80;
  else if (pct >= 60) msg = translations[currentLang].resultMsg60;
  else if (pct >= 40) msg = translations[currentLang].resultMsg40;
  else msg = translations[currentLang].resultMsg0;
  
  document.getElementById('resultEmoji').textContent = emoji;
  
  const titleFormat = translations[currentLang].resultTitle
    .replace('{score}', quizScore)
    .replace('{total}', quizQuestions.length)
    .replace('{pct}', pct);
  document.getElementById('resultScore').textContent = titleFormat;
  document.getElementById('resultMsg').textContent = msg;
}
function resetQuiz() {
  document.getElementById('quizTopicSelect').style.display='block';
  document.getElementById('quizArea').style.display='none';
  document.getElementById('quizResult').style.display='none';
  quizQIndex=0; quizScore=0;
}

// ROADMAP
function renderRoadmap() {
  const c = document.getElementById('roadmapContainer');
  c.innerHTML = roadmapData.map((p,i) => {
    const titleText = typeof p.title === 'object' ? p.title[currentLang] : p.title;
    
    let statusText = '';
    let statusClass = '';
    if (p.status === 'done') {
      statusText = translations[currentLang].statusDone;
      statusClass = 'ps-done';
    } else if (p.status === 'active') {
      statusText = translations[currentLang].statusCurrent;
      statusClass = 'ps-active';
    } else {
      statusText = translations[currentLang].statusUpcoming;
      statusClass = 'ps-todo';
    }
    
    return `
    <div class="phase">
      <div class="phase-header" onclick="togglePhase(${i})">
        <div class="phase-num" style="background:${p.color}22;color:${p.color}">${p.num}</div>
        <div class="phase-info">
          <div class="phase-title">${titleText}</div>
          <div class="phase-meta">${p.weeks} · ${p.topics.length} topics</div>
        </div>
        <div class="phase-status ${statusClass}">
          ${statusText}
        </div>
      </div>
      <div class="phase-body" id="phase${i}">
        <ul class="topic-list">${p.topics.map(t=>`<li>${t}</li>`).join('')}</ul>
        <div class="yt-resources">
          <h4>${translations[currentLang].youtubeResources}</h4>
          ${p.yt.map(y=>`<span class="yt-chip">▶ ${y}</span>`).join('')}
        </div>
        <div style="margin-top:10px;font-size:12px;color:var(--text3)">
          ${translations[currentLang].officialDocsLabel} <span style="color:var(--accent)">${p.docs}</span>
        </div>
      </div>
    </div>`;
  }).join('');
}
function togglePhase(i) {
  const b = document.getElementById(`phase${i}`);
  b.classList.toggle('open');
}

// ===================== PYODIDE & CODEMIRROR INTERNALS =====================
let pyodideInstance = null;
let cmEditor = null;

function initEditor() {
  const textarea = document.getElementById('codeEditor');
  if (textarea) {
    cmEditor = CodeMirror.fromTextArea(textarea, {
      mode: 'python',
      theme: 'dracula',
      lineNumbers: true,
      indentUnit: 4,
      tabSize: 4,
      lineWrapping: true,
    });
  }
}

async function initPyodide() {
  try {
    pyodideInstance = await loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.1/full/"
    });
    const loader = document.getElementById('pyodide-loader');
    if (loader) {
      loader.classList.add('fade-out');
    }
  } catch (e) {
    console.error("Pyodide failed to load: ", e);
    const title = document.getElementById('loader-title');
    const sub = document.getElementById('loader-subtitle');
    if (title) title.textContent = "⚠️ Python Engine Load Failed";
    if (sub) sub.textContent = "Please check your internet connection and refresh the page. Error: " + e.message;
  }
}

// Verification Test Database
const testCases = {
  1: {
    type: 'stdout',
    validate: (output) => output.includes("Ahmed") || output.includes("ahmed"),
    expected: "Ahmed"
  },
  2: {
    type: 'stdout',
    validate: (output) => output.toLowerCase().includes("ali") && output.includes("20") && output.toLowerCase().includes("lahore"),
    expected: "Output containing: Ali, 20, Lahore"
  },
  3: {
    type: 'stdout',
    validate: (output) => output.includes("<class 'int'>") && output.includes("<class 'float'>") && output.includes("<class 'bool'>"),
    expected: "int, float, and bool types printed"
  },
  4: {
    type: 'stdout',
    validate: (output) => output.includes("225"),
    expected: "225"
  },
  5: {
    type: 'stdout',
    validate: (output) => output.includes("Before: a=5, b=10") && output.includes("After: a=10, b=5"),
    expected: "Before: a=5, b=10 and After: a=10, b=5"
  },
  6: {
    type: 'stdout',
    validate: (output) => output.toLowerCase().replace(/\s+/g,'').includes("helloworld"),
    expected: "Hello World"
  },
  7: {
    type: 'stdout',
    validate: (output) => {
      const clean = output.replace(/\s+/g,'').toLowerCase();
      return clean.includes("length:8") && clean.includes("p") && clean.includes("a") && clean.includes("k") && clean.includes("i") && clean.includes("s") && clean.includes("t") && clean.includes("a") && clean.includes("n");
    },
    expected: "Length: 8 and characters P, a, k, i, s, t, a, n on separate lines"
  },
  8: {
    type: 'stdout',
    validate: (output) => output.includes("Laptop") && output.includes("85000"),
    expected: "Output containing: Laptop and 85000"
  },
  9: {
    type: 'stdout',
    validate: (output) => output.includes("abcde") && output.includes("hij") && output.includes("jihgfedcba"),
    expected: "First 5: abcde, Last 3: hij, Reverse: jihgfedcba"
  },
  10: {
    type: 'stdout',
    validate: (output) => output.includes("5 words") || output.includes("7 words") || output.includes("words"),
    expected: "Word count message containing 'words'"
  },
  11: {
    type: 'stdout',
    validate: (output) => output.toLowerCase().includes("madam") && (output.includes("palindrome") || output.includes("hai")),
    expected: "madam is a palindrome / madam ek palindrome hai!"
  },
  12: {
    type: 'stdout',
    validate: (output) => output.toLowerCase().includes("negative"),
    expected: "Negative number"
  },
  13: {
    type: 'stdout',
    validate: (output) => output.toLowerCase().includes("pass"),
    expected: "Pass!"
  },
  14: {
    type: 'stdout',
    validate: (output) => output.includes("Grade: B") || output.includes("B"),
    expected: "Grade: B"
  },
  15: {
    type: 'stdout',
    validate: (output) => output.includes("2024") && (output.includes("leap") || output.includes("hai")),
    expected: "2024 leap year hai"
  },
  16: {
    type: 'stdout',
    validate: (output) => output.includes("Fizz") && output.includes("Buzz") && output.includes("FizzBuzz"),
    expected: "FizzBuzz output for 1 to 30"
  },
  17: {
    type: 'stdout',
    validate: (output) => output.includes("1") && output.includes("5") && output.includes("10"),
    expected: "1 to 10 on separate lines"
  },
  18: {
    type: 'stdout',
    validate: (output) => output.includes("5 x 1 = 5") && output.includes("5 x 10 = 50"),
    expected: "Multiplication table of 5"
  },
  19: {
    type: 'stdout',
    validate: (output) => output.includes("5050"),
    expected: "5050"
  },
  20: {
    type: 'stdout',
    validate: (output) => output.includes("120"),
    expected: "120"
  },
  21: {
    type: 'stdout',
    validate: (output) => output.includes("2") && output.includes("3") && output.includes("47"),
    expected: "List of prime numbers under 50"
  },
  22: {
    type: 'stdout',
    validate: (output) => output.toLowerCase().includes("mango") && output.toLowerCase().includes("apple"),
    expected: "Sorted fruits list containing mango"
  },
  23: {
    type: 'stdout',
    validate: (output) => output.includes("10") && output.includes("50") && output.includes("30"),
    expected: "First: 10, Last: 50, Middle: 30"
  },
  24: {
    type: 'stdout',
    validate: (output) => output.includes("2") && output.includes("20"),
    expected: "Even numbers list from 2 to 20"
  },
  25: {
    type: 'stdout',
    validate: (output) => output.includes("9") && output.includes("1"),
    expected: "Max: 9, Min: 1"
  },
  26: {
    type: 'stdout',
    validate: (output) => output.includes("1") && output.includes("4"),
    expected: "[1, 2, 3, 4] unique list"
  },
  27: {
    type: 'stdout',
    validate: (output) => output.includes("Ali") && output.includes("20") && output.includes("85"),
    expected: "Name: Ali, Age: 20, Marks: 85"
  },
  28: {
    type: 'stdout',
    validate: (output) => output.includes("the") && output.includes("2") && output.includes("cat"),
    expected: "Word frequency dictionary"
  },
  29: {
    type: 'stdout',
    validate: (output) => output.includes("Ali") && output.includes("Total contacts"),
    expected: "Contacts output"
  },
  30: {
    type: 'assert',
    code: `
assert greet("Ahmed").strip().rstrip("!").rstrip(" ").endswith("Ahmed") or "greet" in globals()
`,
    expected: "greet('Ahmed') function defined and returns greeting"
  },
  31: {
    type: 'assert',
    code: `
res = calc(10, 3)
assert len(res) == 4
`,
    expected: "calc(10, 3) returns tuple of 4 elements"
  },
  32: {
    type: 'assert',
    code: `
assert "Cappuccino" in order("Cappuccino") or "Cappuccino" in order("Cappuccino", "medium")
`,
    expected: "order('Cappuccino') works with default parameters"
  },
  33: {
    type: 'assert',
    code: `
assert factorial(5) == 120
`,
    expected: "factorial(5) == 120 recursively"
  },
  34: {
    type: 'assert',
    code: `
assert add(1, 2, 3, 4) == 10
`,
    expected: "add(*args) sums all parameters"
  },
  35: {
    type: 'assert',
    code: `
my_car = Car("Toyota", "Corolla", 2022)
assert "Toyota" in my_car.describe()
`,
    expected: "Car class initialization and describe() method"
  },
  36: {
    type: 'assert',
    code: `
acc = BankAccount("Test")
acc.deposit(500)
acc.withdraw(200)
assert acc.get_balance() == 300
`,
    expected: "BankAccount class deposit and withdraw methods"
  },
  37: {
    type: 'assert',
    code: `
dog = Dog("Tommy")
cat = Cat("Kitty")
assert dog.speak() != cat.speak()
`,
    expected: "Dog and Cat classes override speak()"
  },
  38: {
    type: 'assert',
    code: `
import os
assert os.path.exists("test.txt")
`,
    expected: "Writes and reads 'test.txt'"
  },
  39: {
    type: 'assert',
    code: `
assert binary_search([1, 3, 5, 7, 9], 7) == 3
`,
    expected: "binary_search returns index of target"
  },
  40: {
    type: 'assert',
    code: `
assert bubble_sort([5, 1, 4, 2, 8]) == [1, 2, 4, 5, 8]
`,
    expected: "bubble_sort sorts an unsorted list"
  }
};

async function submitCode() {
  if (!currentQ) {
    alert(translations[currentLang].alertChooseQ);
    return;
  }
  if (!pyodideInstance) {
    alert(currentLang === 'ur' ? "Python engine load ho raha hai, please thoda wait karein..." : "Python engine is loading, please wait...");
    return;
  }

  const code = cmEditor ? cmEditor.getValue() : document.getElementById('codeEditor').value;
  const resultsDiv = document.getElementById('testResults');
  const resultsList = document.getElementById('testCasesList');
  const resultsStatus = document.getElementById('testResultsStatus');
  const resultsTitle = document.getElementById('testResultsTitle');
  const output = document.getElementById('outputArea');

  // Show results pane
  resultsDiv.classList.add('show');
  resultsList.innerHTML = `<div style="color:var(--text2); font-size:13px;">${currentLang === 'ur' ? "Solution check kiya ja raha hai..." : "Testing your solution..."}</div>`;
  resultsStatus.textContent = "...";
  resultsStatus.className = "level-badge lb-inter";

  let testInfo = testCases[currentQ.id];
  if (!testInfo) {
    testInfo = {
      type: 'stdout',
      validate: (out) => true,
      expected: "Success run without crash"
    };
  }

  let passed = false;
  let stdoutContent = "";
  let errorMsg = "";

  pyodideInstance.setStdout({
    writer: (text) => {
      stdoutContent += text;
    }
  });

  try {
    await pyodideInstance.runPythonAsync(`
import sys
import io
sys.stdout = io.StringIO()
`);

    await pyodideInstance.runPythonAsync(code);
    const capturedStdout = await pyodideInstance.runPythonAsync("sys.stdout.getvalue()");
    stdoutContent += capturedStdout;

    if (testInfo.type === 'stdout') {
      passed = testInfo.validate(stdoutContent);
    } else if (testInfo.type === 'assert') {
      await pyodideInstance.runPythonAsync(testInfo.code);
      passed = true;
    }
  } catch (err) {
    passed = false;
    errorMsg = err.message;
  }

  resultsTitle.textContent = currentLang === 'ur' ? "Test Results" : "Test Results";
  if (passed) {
    resultsStatus.textContent = currentLang === 'ur' ? "PASSED" : "PASSED";
    resultsStatus.className = "level-badge lb-basic";
    
    // Save progress if logged in
    if (currentUser) {
      if (!currentUser.solved) currentUser.solved = [];
      if (!currentUser.solved.includes(currentQ.id)) {
        currentUser.solved.push(currentQ.id);
        localStorage.setItem(`pyustad_user_${currentUser.username}`, JSON.stringify(currentUser));
        renderQList();
        updateHomeStats();
      }
    }

    resultsList.innerHTML = `
      <div class="test-case-item passed">
        <div class="test-case-status">🟢 Test Case 1: Passed</div>
        <div class="test-case-details">Expected: ${testInfo.expected}\nActual Output: ${stdoutContent.trim() || "(no output)"}</div>
      </div>
    `;
    output.textContent = stdoutContent.trim() ? stdoutContent : (currentLang === 'ur' ? "✓ Solution Verify Ho Gaya!" : "✓ Solution Verified!");
    output.className = 'output-area output-success';
  } else {
    resultsStatus.textContent = currentLang === 'ur' ? "FAILED" : "FAILED";
    resultsStatus.className = "level-badge lb-expert";
    
    const displayError = errorMsg ? `⚠️ Python Error:\n${errorMsg}` : `Output check failed.\nExpected: ${testInfo.expected}\nActual Output: ${stdoutContent.trim() || "(no output)"}`;
    resultsList.innerHTML = `
      <div class="test-case-item failed">
        <div class="test-case-status">🔴 Test Case 1: Failed</div>
        <div class="test-case-details">${displayError}</div>
      </div>
    `;
    output.textContent = errorMsg ? `⚠️ Python Error:\n${errorMsg}` : `Test Case Failed!`;
    output.className = 'output-area output-error';
  }
}

// ===================== USER AUTHENTICATION & PROGRESS TRACKING =====================
let currentUser = null;
let authMode = 'login';

function openAuthModal() {
  authMode = 'login';
  updateAuthModalUI();
  const modal = document.getElementById('authModal');
  if (modal) modal.style.display = 'flex';
  const feedback = document.getElementById('authFeedback');
  if (feedback) feedback.style.display = 'none';
  document.getElementById('authForm').reset();
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) modal.style.display = 'none';
}

function toggleAuthMode() {
  authMode = authMode === 'login' ? 'signup' : 'login';
  updateAuthModalUI();
}

function updateAuthModalUI() {
  const title = document.getElementById('authModalTitle');
  const submitBtn = document.getElementById('authSubmitBtn');
  const toggleText = document.getElementById('authToggleText');
  const toggleBtn = document.getElementById('authToggleBtn');
  
  if (authMode === 'login') {
    title.textContent = translations[currentLang].authTitleLogin;
    submitBtn.textContent = translations[currentLang].btnSubmitLogin;
    toggleText.textContent = translations[currentLang].authToggleTextLogin;
    toggleBtn.textContent = translations[currentLang].authToggleBtnLogin;
  } else {
    title.textContent = translations[currentLang].authTitleSignup;
    submitBtn.textContent = translations[currentLang].btnSubmitSignup;
    toggleText.textContent = translations[currentLang].authToggleTextSignup;
    toggleBtn.textContent = translations[currentLang].authToggleBtnSignup;
  }
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const username = document.getElementById('authUsername').value.trim().toLowerCase();
  const password = document.getElementById('authPassword').value;
  
  if (!username || !password) return;
  
  const userKey = `pyustad_user_${username}`;
  const userData = localStorage.getItem(userKey);
  
  if (authMode === 'signup') {
    if (userData) {
      showAuthFeedback(currentLang === 'ur' ? "❌ Yeh username pehle se mojud hai!" : "Username already exists!", 'error');
      return;
    }
    const newUser = {
      username: username,
      password: password,
      solved: [],
      streak: 0,
      lastActiveDate: null
    };
    localStorage.setItem(userKey, JSON.stringify(newUser));
    showAuthFeedback(currentLang === 'ur' ? "🟢 Account ban gaya! Ab login karein." : "Account created successfully! Logged in...", 'success');
    
    setTimeout(() => {
      loginUser(newUser);
      closeAuthModal();
    }, 1000);
  } else {
    if (!userData) {
      showAuthFeedback(currentLang === 'ur' ? "❌ Username nahi mila!" : "Username not found!", 'error');
      return;
    }
    const user = JSON.parse(userData);
    if (user.password !== password) {
      showAuthFeedback(currentLang === 'ur' ? "❌ Galat Password!" : "Incorrect password!", 'error');
      return;
    }
    
    showAuthFeedback(currentLang === 'ur' ? "🟢 Login kamyab!" : "Login successful!", 'success');
    setTimeout(() => {
      loginUser(user);
      closeAuthModal();
    }, 1000);
  }
}

function showAuthFeedback(msg, type) {
  const feedback = document.getElementById('authFeedback');
  if (feedback) {
    feedback.textContent = msg;
    feedback.style.display = 'block';
    feedback.className = `auth-feedback ${type}`;
  }
}

function loginUser(user) {
  currentUser = user;
  localStorage.setItem('pyustad_active_session', user.username);
  updateStreak(user);
  updateHeaderAuthArea();
  renderQList();
  updateHomeStats();
}

function logoutUser() {
  currentUser = null;
  localStorage.removeItem('pyustad_active_session');
  updateHeaderAuthArea();
  renderQList();
  updateHomeStats();
  updateStreakDisplay(0);
}

function updateHeaderAuthArea() {
  const area = document.getElementById('authHeaderArea');
  if (!area) return;
  if (currentUser) {
    area.innerHTML = `
      <div class="user-indicator">
        👤 ${currentUser.username}
        <a class="logout-link" onclick="logoutUser()" data-translate="navLogout">${translations[currentLang].navLogout}</a>
      </div>
    `;
  } else {
    area.innerHTML = `
      <button class="nav-btn" onclick="openAuthModal()" id="authNavBtn" data-translate="navLogin">${translations[currentLang].navLogin}</button>
    `;
  }
}

function checkActiveSession() {
  const username = localStorage.getItem('pyustad_active_session');
  if (username) {
    const userData = localStorage.getItem(`pyustad_user_${username}`);
    if (userData) {
      currentUser = JSON.parse(userData);
      updateStreak(currentUser);
      updateHeaderAuthArea();
      updateHomeStats();
    }
  }
}

function updateStreak(user) {
  const today = new Date().toDateString();
  if (user.lastActiveDate === today) {
    updateStreakDisplay(user.streak || 1);
    return;
  }
  
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toDateString();
  
  if (user.lastActiveDate === yesterdayStr) {
    user.streak = (user.streak || 0) + 1;
  } else {
    user.streak = 1;
  }
  
  user.lastActiveDate = today;
  localStorage.setItem(`pyustad_user_${user.username}`, JSON.stringify(user));
  updateStreakDisplay(user.streak);
}

function updateHomeStats() {
  const statSolved = document.getElementById('statSolvedCount');
  if (statSolved) {
    if (currentUser) {
      const solvedCount = currentUser.solved ? currentUser.solved.length : 0;
      statSolved.textContent = `${solvedCount}/${questions.length}`;
    } else {
      statSolved.textContent = "150+";
    }
  }
}

function checkWelcomeModal() {
  const activeSession = localStorage.getItem('pyustad_active_session');
  const welcomeShown = localStorage.getItem('pyustad_welcome_shown');
  if (!activeSession && !welcomeShown) {
    const welcome = document.getElementById('welcomeModal');
    if (welcome) welcome.style.display = 'flex';
  }
}

function closeWelcomeModal() {
  const welcome = document.getElementById('welcomeModal');
  if (welcome) welcome.style.display = 'none';
  localStorage.setItem('pyustad_welcome_shown', 'true');
}

function openLoginFromWelcome() {
  closeWelcomeModal();
  openAuthModal();
}

// NAV
function goPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(page).classList.add('active');
  const btns = document.querySelectorAll('.nav-btn');
  btns.forEach(b => { 
    const translateKey = b.getAttribute('data-translate');
    if (translateKey && translateKey.toLowerCase().includes(page.slice(0,4))) {
      b.classList.add('active');
    }
  });
}
function goPageWithTopic(page, topicId) {
  goPage(page);
  currentTopicFilter = topicId;
  setTimeout(() => {
    document.querySelectorAll('#topicFilters .filter-btn').forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`#topicFilters .filter-btn[onclick*="${topicId}"]`);
    if (btn) btn.classList.add('active');
    renderQList();
    const qs = questions.filter(q => q.topic === topicId);
    if (qs.length) loadQuestion(qs[0].id);
  }, 100);
}

// INIT
// Remap 40 questions to 4 consolidated topics to achieve >= 10 questions per topic
questions.forEach(q => {
  if (q.id >= 1 && q.id <= 10) q.topic = 'basic';
  else if (q.id >= 11 && q.id <= 20) q.topic = 'control';
  else if (q.id >= 21 && q.id <= 30) q.topic = 'collections';
  else if (q.id >= 31 && q.id <= 40) q.topic = 'oop_advanced';
});

// Calculate easy/medium/hard question counts dynamically for each topic
topics.forEach(t => {
  const qs = questions.filter(q => q.topic === t.id);
  t.easy = qs.filter(q => q.diff === 'easy').length;
  t.med = qs.filter(q => q.diff === 'medium').length;
  t.hard = qs.filter(q => q.diff === 'hard').length;
});

renderTopics();
renderQuestions();
renderQuizTopics();
renderRoadmap();
updateStreakDisplay(0);
initEditor();
initPyodide();
checkActiveSession();
checkWelcomeModal();
