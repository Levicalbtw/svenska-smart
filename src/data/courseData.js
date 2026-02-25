export const courseStructure = {
    A1: {
        title: "Beginner (Nybörjare) - A1",
        description: "Start speaking in full sentences immediately. Learn through dialogues and context.",
        modules: [
            {
                id: 1,
                title: "Your First Conversation",
                description: "Learn how to greet someone, ask how they are, and reply using common words.",
                type: "comprehensible_input",
                items: [
                    {
                        type: "theory",
                        title: "Swedish Conversations are Direct",
                        content: "In Swedish, you don't need a lot of filler words. A typical greeting is just 'Hej!' (Hello) followed by 'Hur mår du?' (How are you?). Notice the key connecting words: 'och' (and), 'men' (but), 'också' (also)."
                    },
                    {
                        type: "dialogue",
                        title: "Meeting a Friend",
                        lines: [
                            { speaker: "Anna", swedish: "Hej Erik! Hur mår du?", english: "Hi Erik! How are you?" },
                            { speaker: "Erik", swedish: "Hej Anna! Jag mår bra, tack. Och du?", english: "Hi Anna! I feel good, thanks. And you?" },
                            { speaker: "Anna", swedish: "Jag mår också bra! Ska vi ta en fika?", english: "I also feel good! Shall we get a coffee (fika)?" },
                            { speaker: "Erik", swedish: "Ja, gärna! Det låter väl bra.", english: "Yes, gladly! That sounds good." }
                        ]
                    },
                    {
                        type: "theory",
                        title: "Important Connectors: 'Och' & 'Men'",
                        content: "'Och' (and) and 'men' (but) are the two most essential conjunctions. Example: 'Jag mår bra, men jag är trött' (I feel good, but I am tired). These let you build longer, natural sentences from day one."
                    },
                    {
                        type: "chunking",
                        chunk: "Jag mår bra, tack.",
                        english: "I am good, thanks."
                    },
                    {
                        type: "chunking",
                        chunk: "Jag mår bra, men jag är trött.",
                        english: "I feel good, but I am tired."
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Jag mår bra, tack.",
                        english: "I feel good, thanks.",
                        parts: ["Jag", "mår", "bra,", "tack."]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Jag mår också bra.",
                        english: "I also feel good.",
                        parts: ["Jag", "mår", "också", "bra."],
                        note: "'Också' (also) sits right after the verb."
                    }
                ]
            },
            {
                id: 2,
                title: "The V2 Word Order",
                description: "The golden rule of Swedish grammar: the verb is always the second idea.",
                type: "grammar_builder",
                items: [
                    {
                        type: "theory",
                        title: "The V2 Rule (Verb Second)",
                        content: "The single most important rule in Swedish is the 'V2' rule. In a declarative sentence, the VERB must always be the SECOND piece of information. If you start a sentence with 'Today' (Idag), the verb must come next, forcing the subject to the third position."
                    },
                    {
                        type: "theory",
                        title: "Common Adverbs That Trigger V2",
                        content: "Words like 'Idag' (Today), 'Nu' (Now), 'Ofta' (Often), and 'Senare' (Later) are often placed at the start for emphasis. Whenever you do this, swap the subject and verb!"
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Jag dricker vatten varje morgon.",
                        english: "I drink water every morning.",
                        parts: ["Jag", "dricker", "vatten", "varje", "morgon."],
                        note: "'dricker' (drink) is the second element after 'Jag' (I)."
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Varje morgon dricker jag vatten.",
                        english: "Every morning I drink water.",
                        parts: ["Varje", "morgon", "dricker", "jag", "vatten."],
                        note: "'Varje morgon' is the first idea. 'dricker' MUST be second, pushing 'jag' to third."
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Nu ska vi äta mat.",
                        english: "Now we are going to eat food.",
                        parts: ["Nu", "ska", "vi", "äta", "mat."],
                        note: "Element 1: Nu. Element 2: ska. Element 3: vi."
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Ofta är det många människor här.",
                        english: "Often there are many people here.",
                        parts: ["Ofta", "är", "det", "många", "människor", "här."],
                        note: "'Ofta' triggers V2, followed by 'är' (are)."
                    }
                ]
            },
            {
                id: 3,
                title: "Ordering at a Café",
                description: "Applying full sentences in a real-world scenario.",
                type: "comprehensible_input",
                items: [
                    {
                        type: "dialogue",
                        title: "At the Bakery",
                        lines: [
                            { speaker: "Barista", swedish: "Hej! Vad får det lov att vara?", english: "Hello! What can I get for you?" },
                            { speaker: "You", swedish: "Hej! Jag vill gärna ha en stor kaffe och en liten kaka, tack.", english: "Hi! I'd like a big coffee and a small cookie, please." },
                            { speaker: "Barista", swedish: "Självklart. Har du kort eller kontanter?", english: "Of course. Do you have a card or cash?" },
                            { speaker: "You", swedish: "Jag betalar med kort.", english: "I'll pay with card." },
                            { speaker: "Barista", swedish: "Det blir 65 kronor, tack.", english: "That will be 65 kronor, thanks." }
                        ]
                    },
                    {
                        type: "theory",
                        title: "Adjectives Must Agree",
                        content: "Adjectives change depending on whether the noun is an 'en' word or an 'ett' word. 'en stor kaffe' (a big coffee) vs 'ett stort kök' (a big kitchen). For 'ett' words, you must add a 't' to the adjective!"
                    },
                    {
                        type: "chunking",
                        chunk: "Jag vill gärna ha en kaffe.",
                        english: "I would like to have a coffee.",
                        note: "More polite than 'Jag vill ha' (I want)."
                    },
                    {
                        type: "chunking",
                        chunk: "Jag betalar med kort.",
                        english: "I'll pay with a card."
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Jag vill gärna ha en stor kaffe.",
                        english: "I would like to have a big coffee.",
                        parts: ["Jag", "vill", "gärna", "ha", "en", "stor", "kaffe."]
                    }
                ]
            },
            {
                id: 4,
                title: "Introducing Yourself",
                description: "Telling people who you are using key verbs.",
                type: "comprehensible_input",
                items: [
                    {
                        type: "theory",
                        title: "Key Verbs for Introductions",
                        content: "To present yourself, use: 'jag heter' (I am called), 'jag bor i' (I live in), 'jag kommer från' (I come from). Swedish verbs don't conjugate by person: 'I live', 'he lives', 'we live' all use 'bor'."
                    },
                    {
                        type: "dialogue",
                        title: "An Introduction",
                        lines: [
                            { speaker: "Markus", swedish: "Hej, jag heter Markus. Vad heter du?", english: "Hi, my name is Markus. What's your name?" },
                            { speaker: "Sarah", swedish: "Jag heter Sarah. Trevligt att träffas!", english: "I'm Sarah. Nice to meet you!" },
                            { speaker: "Markus", swedish: "Var kommer du ifrån?", english: "Where do you come from?" },
                            { speaker: "Sarah", swedish: "Jag kommer från London, men jag bor i Stockholm nu.", english: "I come from London, but I live in Stockholm now." },
                            { speaker: "Markus", swedish: "Vad spännande! Jag arbetar också i Stockholm.", english: "How exciting! I also work in Stockholm." }
                        ]
                    },
                    {
                        type: "chunking",
                        chunk: "Trevligt att träffas!",
                        english: "Nice to meet you!"
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Jag kommer från London men jag bor i Sverige.",
                        english: "I come from London but I live in Sweden.",
                        parts: ["Jag", "kommer", "från", "London", "men", "jag", "bor", "i", "Sverige."]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Jag arbetar också i Stockholm.",
                        english: "I also work in Stockholm.",
                        parts: ["Jag", "arbetar", "också", "i", "Stockholm."]
                    }
                ]
            },
            {
                id: 5,
                title: "Numbers, Time & Days",
                description: "Counting, telling time, and knowing the days of the week.",
                type: "comprehensible_input",
                items: [
                    {
                        type: "theory",
                        title: "Swedish Numbers 1–10",
                        content: "1 = en/ett, 2 = två, 3 = tre, 4 = fyra, 5 = fem, 6 = sex, 7 = sju, 8 = åtta, 9 = nio, 10 = tio. Notice 'en' is used for common gender nouns and 'ett' for neuter nouns, even when counting!"
                    },
                    {
                        type: "theory",
                        title: "Days of the Week",
                        content: "Måndag (Monday), Tisdag (Tuesday), Onsdag (Wednesday), Torsdag (Thursday), Fredag (Friday), Lördag (Saturday), Söndag (Sunday). Swedish days are NOT capitalized unless they start a sentence."
                    },
                    {
                        type: "dialogue",
                        title: "Making Plans",
                        lines: [
                            { speaker: "A", swedish: "Vilken dag är det idag?", english: "What day is it today?" },
                            { speaker: "B", swedish: "Det är onsdag idag.", english: "It is Wednesday today." },
                            { speaker: "A", swedish: "Vad gör du på fredag?", english: "What are you doing on Friday?" },
                            { speaker: "B", swedish: "Jag träffar tre vänner klockan fem.", english: "I'm meeting three friends at five o'clock." },
                            { speaker: "A", swedish: "Klockan fem? Det låter bra!", english: "At five o'clock? That sounds good!" }
                        ]
                    },
                    {
                        type: "chunking",
                        chunk: "Vilken dag är det idag?",
                        english: "What day is it today?"
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Jag träffar tre vänner på fredag.",
                        english: "I'm meeting three friends on Friday.",
                        parts: ["Jag", "träffar", "tre", "vänner", "på", "fredag."]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Det är onsdag idag.",
                        english: "It is Wednesday today.",
                        parts: ["Det", "är", "onsdag", "idag."]
                    }
                ]
            },
            {
                id: 6,
                title: "Daily Routines",
                description: "Describing what you do every day using common verbs.",
                type: "comprehensible_input",
                items: [
                    {
                        type: "theory",
                        title: "Core Daily Verbs",
                        content: "The verbs you need for daily routines: vakna (wake up), äta (eat), dricka (drink), gå (go/walk), arbeta/jobba (work), sova (sleep), börja (start), sluta (stop/finish). All present tense verbs end in '-r' in Swedish!"
                    },
                    {
                        type: "dialogue",
                        title: "A Typical Day",
                        lines: [
                            { speaker: "Interview", swedish: "Vad gör du varje morgon?", english: "What do you do every morning?" },
                            { speaker: "You", swedish: "Jag vaknar tidigt och dricker kaffe.", english: "I wake up early and drink coffee." },
                            { speaker: "Interview", swedish: "Och sedan? Vad gör du efter det?", english: "And then? What do you do after that?" },
                            { speaker: "You", swedish: "Sedan börjar jag jobba klockan åtta.", english: "Then I start working at eight o'clock." },
                            { speaker: "Interview", swedish: "När slutar du jobba?", english: "When do you finish work?" },
                            { speaker: "You", swedish: "Jag slutar klockan fem och äter middag hemma.", english: "I finish at five and eat dinner at home." }
                        ]
                    },
                    {
                        type: "chunking",
                        chunk: "Jag vaknar tidigt varje morgon.",
                        english: "I wake up early every morning."
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Sedan börjar jag jobba.",
                        english: "Then I start working.",
                        parts: ["Sedan", "börjar", "jag", "jobba."],
                        note: "V2 rule: 'Sedan' is first, verb 'börjar' is second, subject 'jag' is third!"
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Jag slutar klockan fem och äter middag hemma.",
                        english: "I finish at five and eat dinner at home.",
                        parts: ["Jag", "slutar", "klockan", "fem", "och", "äter", "middag", "hemma."]
                    }
                ]
            },
            {
                id: 7,
                title: "Weather & Seasons",
                description: "Talking about the weather and seasonal vocabulary.",
                type: "comprehensible_input",
                items: [
                    {
                        type: "theory",
                        title: "Weather Words",
                        content: "The weather is 'Vädret'. Common phrases: 'Det regnar' (It is raining), 'Solen skiner' (The sun is shining), 'Det snöar' (It is snowing), 'Det är kallt' (It is cold), 'Det är varmt' (It is warm)."
                    },
                    {
                        type: "dialogue",
                        title: "How is the weather?",
                        lines: [
                            { speaker: "A", swedish: "Hur är vädret i Sverige nu?", english: "How is the weather in Sweden now?" },
                            { speaker: "B", swedish: "Det är kallt och det snöar mycket.", english: "It is cold and it is snowing a lot." },
                            { speaker: "A", swedish: "Är det mörkt på vintern?", english: "Is it dark in the winter?" },
                            { speaker: "B", swedish: "Ja, men sommaren är ljus och varm.", english: "Yes, but the summer is bright and warm." }
                        ]
                    },
                    {
                        type: "chunking",
                        chunk: "Solen skiner idag.",
                        english: "The sun is shining today."
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Det är kallt och det snöar.",
                        english: "It is cold and it is snowing.",
                        parts: ["Det", "är", "kallt", "och", "det", "snöar."]
                    }
                ]
            },
            {
                id: 8,
                title: "At the Restaurant",
                description: "Ordering food, understanding a menu.",
                type: "comprehensible_input",
                items: [
                    {
                        type: "theory",
                        title: "Dining Out",
                        content: "When ordering, you can use 'Jag tar...' (I'll take...). 'En nota, tack' is how you ask for the bill. 'Meny' is menu, 'Mat' is food, 'Dryck' is drink."
                    },
                    {
                        type: "dialogue",
                        title: "Ordering Dinner",
                        lines: [
                            { speaker: "Servitör", swedish: "Är ni redo att beställa?", english: "Are you ready to order?" },
                            { speaker: "You", swedish: "Ja, jag tar laxen med potatis.", english: "Yes, I'll take the salmon with potatoes." },
                            { speaker: "Servitör", swedish: "Och att dricka?", english: "And to drink?" },
                            { speaker: "You", swedish: "Bara vatten, tack.", english: "Just water, thanks." }
                        ]
                    },
                    {
                        type: "chunking",
                        chunk: "Är ni redo att beställa?",
                        english: "Are you ready to order?"
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Jag tar laxen med potatis tack.",
                        english: "I'll take the salmon with potatoes please.",
                        parts: ["Jag", "tar", "laxen", "med", "potatis", "tack."]
                    }
                ]
            },
            {
                id: 9,
                title: "Hobbies & Free Time",
                description: "Talking about what you enjoy doing.",
                type: "comprehensible_input",
                items: [
                    {
                        type: "theory",
                        title: "Verbs for Hobbies",
                        content: "Use 'Tycker om att...' or 'Gillar att...' to say 'Like to...'. Example: 'Jag gillar att läsa' (I like to read). Notice the infinitive marker 'att' followed by the verb ends in '-a'."
                    },
                    {
                        type: "dialogue",
                        title: "What do you do on weekends?",
                        lines: [
                            { speaker: "A", swedish: "Vad gör du på helgerna?", english: "What do you do on the weekends?" },
                            { speaker: "B", swedish: "Jag gillar att spela fotboll och träffa vänner.", english: "I like to play football and meet friends." },
                            { speaker: "A", swedish: "Vad roligt! Jag tycker om att laga mat.", english: "How fun! I like to cook food." }
                        ]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Jag gillar att spela fotboll.",
                        english: "I like to play football.",
                        parts: ["Jag", "gillar", "att", "spela", "fotboll."]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Jag tycker om att laga mat.",
                        english: "I like to cook food.",
                        parts: ["Jag", "tycker", "om", "att", "laga", "mat."]
                    }
                ]
            },
            {
                id: 10,
                title: "Asking for Directions",
                description: "Navigating a city, left, right, straight.",
                type: "comprehensible_input",
                items: [
                    {
                        type: "theory",
                        title: "Directions",
                        content: "Key terms: 'Höger' (Right), 'Vänster' (Left), 'Rakt fram' (Straight ahead). A common question is 'Hur kommer jag till...?' (How do I get to...?)."
                    },
                    {
                        type: "dialogue",
                        title: "Finding the Station",
                        lines: [
                            { speaker: "You", swedish: "Ursäkta, var ligger stationen?", english: "Excuse me, where is the station located?" },
                            { speaker: "Local", swedish: "Gå rakt fram och sväng höger.", english: "Go straight ahead and turn right." },
                            { speaker: "You", swedish: "Är det långt?", english: "Is it far?" },
                            { speaker: "Local", swedish: "Nej, det tar bara fem minuter.", english: "No, it only takes five minutes." }
                        ]
                    },
                    {
                        type: "chunking",
                        chunk: "Gå rakt fram och sväng höger.",
                        english: "Go straight ahead and turn right."
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Ursäkta var ligger stationen?",
                        english: "Excuse me, where is the station located?",
                        parts: ["Ursäkta", "var", "ligger", "stationen?"]
                    }
                ]
            }
        ]
    },
    A2: {
        title: "Elementary - A2",
        description: "Describe things, express opinions, recount yesterday, and handle everyday situations.",
        modules: [
            {
                id: 1,
                title: "A Story About Yesterday",
                description: "Learning the past tense through a continuous story.",
                type: "comprehensible_input",
                items: [
                    {
                        type: "theory",
                        title: "Telling Stories in the Past",
                        content: "To talk about the past, most regular Swedish verbs take an '-ade', '-te', or '-de' ending. The V2 rule still applies. If you start with 'Igår' (Yesterday), the past tense verb comes right after!"
                    },
                    {
                        type: "dialogue",
                        title: "Igår (Yesterday)",
                        lines: [
                            { speaker: "Story", swedish: "Igår vaknade jag väldigt tidigt.", english: "Yesterday I woke up very early." },
                            { speaker: "Story", swedish: "Först drack jag vatten och läste en ny bok.", english: "First I drank water and read a new book." },
                            { speaker: "Story", swedish: "Sedan gick jag snabbt till jobbet.", english: "Then I went quickly to work." },
                            { speaker: "Story", swedish: "Efter jobbet träffade jag en god vän och vi åt tillsammans.", english: "After work I met a good friend and we ate together." }
                        ]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Igår vaknade jag tidigt.",
                        english: "Yesterday I woke up early.",
                        parts: ["Igår", "vaknade", "jag", "tidigt."]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Först drack jag vatten.",
                        english: "First I drank water.",
                        parts: ["Först", "drack", "jag", "vatten."],
                        note: "V2 rule in the past tense! 'Först' pushes 'drack' to position 2."
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Efter jobbet träffade jag en vän.",
                        english: "After work I met a friend.",
                        parts: ["Efter", "jobbet", "träffade", "jag", "en", "vän."]
                    }
                ]
            },
            {
                id: 2,
                title: "Describing the World & Opposites",
                description: "Using adjectives and opposites to paint a picture.",
                type: "comprehensible_input",
                items: [
                    {
                        type: "theory",
                        title: "Important Opposites",
                        content: "Express almost anything using core opposites: stor/liten (big/small), varm/kall (warm/cold), bra/dålig (good/bad), hög/låg (high/low), lång/kort (long/short), gammal/ny (old/new). They must agree with the noun's gender!"
                    },
                    {
                        type: "dialogue",
                        title: "Looking at Apartments",
                        lines: [
                            { speaker: "Mäklare", swedish: "Här är den lilla lägenheten. Den har ett stort rum.", english: "Here is the small apartment. It has one large room." },
                            { speaker: "You", swedish: "Den är väldigt ljus och fin. Men köket är ganska kallt.", english: "It's very bright and nice. But the kitchen is quite cold." },
                            { speaker: "Mäklare", swedish: "Ja, men på sommaren blir det varmt! Och hyran är låg.", english: "Yes, but in summer it gets warm! And the rent is low." },
                            { speaker: "You", swedish: "Det är bra. Lägenheten är ny och vacker.", english: "That's good. The apartment is new and beautiful." }
                        ]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Den är väldigt ljus och fin.",
                        english: "It is very bright and nice.",
                        parts: ["Den", "är", "väldigt", "ljus", "och", "fin."]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Lägenheten är ny och vacker.",
                        english: "The apartment is new and beautiful.",
                        parts: ["Lägenheten", "är", "ny", "och", "vacker."]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "På sommaren blir det varmt.",
                        english: "In the summer it gets warm.",
                        parts: ["På", "sommaren", "blir", "det", "varmt."]
                    }
                ]
            },
            {
                id: 3,
                title: "Expressing Opinions: Tycker vs Tror",
                description: "Understanding 'I think' (opinion) vs. 'I think/believe' (fact).",
                type: "grammar_builder",
                items: [
                    {
                        type: "theory",
                        title: "Tycker vs. Tror",
                        content: "In English, 'I think' covers everything. Swedish is strict: Use 'tycker' for subjective opinions ('I think the food is good'). Use 'tror' for factual guesses ('I think it will rain'). Mixing them up is a classic learner mistake!"
                    },
                    {
                        type: "dialogue",
                        title: "Debating a Movie",
                        lines: [
                            { speaker: "A", swedish: "Jag tycker att filmen var fantastisk.", english: "I think (opinion) that the movie was fantastic." },
                            { speaker: "B", swedish: "Verkligen? Jag tycker att den var lite långsam.", english: "Really? I think it was a bit slow." },
                            { speaker: "A", swedish: "Tror du att den kommer vinna ett pris?", english: "Do you think (believe) it will win a prize?" },
                            { speaker: "B", swedish: "Ja, det tror jag faktiskt.", english: "Yes, I actually think so." }
                        ]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Jag tycker att maten är bra.",
                        english: "I think (opinion) that the food is good.",
                        parts: ["Jag", "tycker", "att", "maten", "är", "bra."]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Jag tror att det är viktigt.",
                        english: "I think (believe) that it is important.",
                        parts: ["Jag", "tror", "att", "det", "är", "viktigt."]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Det tror jag faktiskt.",
                        english: "I actually think so.",
                        parts: ["Det", "tror", "jag", "faktiskt."],
                        note: "When 'det' is placed first for emphasis, V2 puts 'tror' second and 'jag' third."
                    }
                ]
            },
            {
                id: 4,
                title: "Shopping & Asking for Help",
                description: "Navigating a grocery store and asking questions.",
                type: "comprehensible_input",
                items: [
                    {
                        type: "theory",
                        title: "Question Words",
                        content: "Key question words: Var? (Where?), Vad? (What?), Hur? (How?), Hur mycket? (How much?), Vilken? (Which?). In questions, the verb comes FIRST (before the subject): 'Har du mjölk?' (Have you milk? = Do you have milk?)."
                    },
                    {
                        type: "dialogue",
                        title: "At the Grocery Store",
                        lines: [
                            { speaker: "You", swedish: "Ursäkta, var finns mjölken?", english: "Excuse me, where is the milk?" },
                            { speaker: "Staff", swedish: "Den finns längst bort till höger.", english: "It's furthest away to the right." },
                            { speaker: "You", swedish: "Tack! Och har ni någon svensk ost?", english: "Thanks! And do you have any Swedish cheese?" },
                            { speaker: "Staff", swedish: "Ja, vi har många olika sorter. Vilken vill du ha?", english: "Yes, we have many different kinds. Which one do you want?" },
                            { speaker: "You", swedish: "Hur mycket kostar den här?", english: "How much does this one cost?" },
                            { speaker: "Staff", swedish: "Den kostar fyrtio kronor.", english: "It costs forty kronor." }
                        ]
                    },
                    {
                        type: "chunking",
                        chunk: "Ursäkta, var finns...?",
                        english: "Excuse me, where is...?"
                    },
                    {
                        type: "chunking",
                        chunk: "Hur mycket kostar det?",
                        english: "How much does it cost?"
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Var finns mjölken?",
                        english: "Where is the milk?",
                        parts: ["Var", "finns", "mjölken?"]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Hur mycket kostar den här?",
                        english: "How much does this one cost?",
                        parts: ["Hur", "mycket", "kostar", "den", "här?"]
                    }
                ]
            },
            {
                id: 5,
                title: "Talking About Family",
                description: "Describing your family and relationships.",
                type: "comprehensible_input",
                items: [
                    {
                        type: "theory",
                        title: "Family Vocabulary",
                        content: "Core family words: mamma (mom), pappa (dad), bror (brother), syster (sister), barn (child/children), familj (family), fru (wife), man (husband). 'Barn' is the same in singular and plural!"
                    },
                    {
                        type: "dialogue",
                        title: "Telling About Your Family",
                        lines: [
                            { speaker: "A", swedish: "Har du en stor familj?", english: "Do you have a big family?" },
                            { speaker: "B", swedish: "Ja, jag har två bröder och en syster.", english: "Yes, I have two brothers and one sister." },
                            { speaker: "A", swedish: "Bor de fortfarande hemma?", english: "Do they still live at home?" },
                            { speaker: "B", swedish: "Min syster bor hemma, men mina bröder bor i en annan stad.", english: "My sister lives at home, but my brothers live in another city." },
                            { speaker: "A", swedish: "Har du egna barn?", english: "Do you have your own children?" },
                            { speaker: "B", swedish: "Ja, jag har tre barn. De är ganska små.", english: "Yes, I have three children. They are quite small." }
                        ]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Jag har två bröder och en syster.",
                        english: "I have two brothers and one sister.",
                        parts: ["Jag", "har", "två", "bröder", "och", "en", "syster."]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Min syster bor hemma.",
                        english: "My sister lives at home.",
                        parts: ["Min", "syster", "bor", "hemma."]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Mina bröder bor i en annan stad.",
                        english: "My brothers live in another city.",
                        parts: ["Mina", "bröder", "bor", "i", "en", "annan", "stad."],
                        note: "'Min' (my) becomes 'Mina' for plural nouns!"
                    }
                ]
            }
        ]
    },
    B1: {
        title: "Intermediate - B1",
        description: "Master subclauses, advanced adverbs, conditional thinking, and connecting complex ideas.",
        modules: [
            {
                id: 1,
                title: "The BIFF Rule",
                description: "Words like 'inte' jump in front of the verb in subclauses.",
                type: "comprehensible_input",
                items: [
                    {
                        type: "theory",
                        title: "The Infamous BIFF Rule",
                        content: "When you use subclause starters like 'eftersom' (because), 'att' (that), or 'om' (if), the word 'inte' must jump IN FRONT of the verb: 'Jag vet att han INTE kommer' (I know that he is NOT coming). This is called the BIFF rule: Bisats Inte Före Finita verbet."
                    },
                    {
                        type: "theory",
                        title: "Other BIFF Adverbs",
                        content: "It's not just 'inte'! Adverbs like 'alltid' (always), 'aldrig' (never), 'ofta' (often), and 'redan' (already) follow the exact same rule in subclauses: '...eftersom jag ALLTID vaknar tidigt' (because I ALWAYS wake up early)."
                    },
                    {
                        type: "dialogue",
                        title: "A Debate About Going Out",
                        lines: [
                            { speaker: "A", swedish: "Vi kan tyvärr inte gå ut idag.", english: "We unfortunately cannot go out today." },
                            { speaker: "B", swedish: "Varför inte? Solen skiner ju!", english: "Why not? The sun is shining!" },
                            { speaker: "A", swedish: "Jag stannar hemma, eftersom jag aldrig gillar kylan.", english: "I'm staying home, because I never like the cold." },
                            { speaker: "B", swedish: "Okej, vi stannar om du inte vill gå ut.", english: "Okay, we'll stay if you don't want to go out." }
                        ]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Jag vet att hon inte kommer till skolan.",
                        english: "I know that she is not coming to school.",
                        parts: ["Jag", "vet", "att", "hon", "inte", "kommer", "till", "skolan."]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Vi väntar om du alltid vaknar sent.",
                        english: "We'll wait if you always wake up late.",
                        parts: ["Vi", "väntar", "om", "du", "alltid", "vaknar", "sent."],
                        note: "'alltid' goes before 'vaknar' because it's a subclause (after 'om')."
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Han är glad eftersom han redan har ätit.",
                        english: "He is happy because he has already eaten.",
                        parts: ["Han", "är", "glad", "eftersom", "han", "redan", "har", "ätit."],
                        note: "'redan' jumps before 'har' in the subclause."
                    }
                ]
            },
            {
                id: 2,
                title: "Adding Nuance with Adverbs",
                description: "Using 'faktiskt', 'nämligen', 'dock', and 'dessutom' to sound native.",
                type: "comprehensible_input",
                items: [
                    {
                        type: "theory",
                        title: "Sounding Native",
                        content: "Advanced speakers sprinkle in tiny words for nuance: 'Faktiskt' (actually), 'Nämligen' (namely/you see), 'Dock' (however), 'Dessutom' (besides/furthermore), 'Tyvärr' (unfortunately). These instantly elevate your Swedish."
                    },
                    {
                        type: "dialogue",
                        title: "Discussing Plans",
                        lines: [
                            { speaker: "A", swedish: "Kommer du till festen ikväll?", english: "Are you coming to the party tonight?" },
                            { speaker: "B", swedish: "Nej, jag kan tyvärr inte. Jag måste nämligen jobba tidigt imorgon.", english: "No, unfortunately I can't. You see, I have to work early tomorrow." },
                            { speaker: "A", swedish: "Vad tråkigt! Många människor kommer dock.", english: "How sad! Many people are coming, however." },
                            { speaker: "B", swedish: "Dessutom, jag mår inte särskilt bra idag.", english: "Besides, I'm not feeling especially well today." },
                            { speaker: "A", swedish: "Jag hoppas faktiskt att du mår bättre snart.", english: "I actually hope that you feel better soon." }
                        ]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Jag måste nämligen jobba tidigt imorgon.",
                        english: "You see, I have to work early tomorrow.",
                        parts: ["Jag", "måste", "nämligen", "jobba", "tidigt", "imorgon."]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Jag hoppas faktiskt att du mår bättre.",
                        english: "I actually hope that you feel better.",
                        parts: ["Jag", "hoppas", "faktiskt", "att", "du", "mår", "bättre."]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Dessutom är det redan sent.",
                        english: "Besides, it's already late.",
                        parts: ["Dessutom", "är", "det", "redan", "sent."],
                        note: "V2 rule: 'Dessutom' starts the sentence, verb 'är' is second."
                    }
                ]
            },
            {
                id: 3,
                title: "Expressing Feelings",
                description: "Talking about emotions and inner states.",
                type: "comprehensible_input",
                items: [
                    {
                        type: "theory",
                        title: "'Att Känna' & 'Att Må'",
                        content: "Two key verbs for feelings: 'Känna sig' (to feel, reflexive — describes a temporary state, 'Jag känner mig glad') and 'Må' (to feel in general, 'Jag mår bra'). You also use adjectives: glad (happy), ledsen (sad), trött (tired), orolig (worried), arg (angry)."
                    },
                    {
                        type: "dialogue",
                        title: "Checking In on a Friend",
                        lines: [
                            { speaker: "A", swedish: "Du ser trött ut. Är allt okej?", english: "You look tired. Is everything okay?" },
                            { speaker: "B", swedish: "Ja, jag är bara lite ledsen idag.", english: "Yeah, I'm just a little sad today." },
                            { speaker: "A", swedish: "Varför då? Vad har hänt?", english: "Why? What has happened?" },
                            { speaker: "B", swedish: "Jag känner mig ensam ibland. Min familj bor långt bort.", english: "I feel lonely sometimes. My family lives far away." },
                            { speaker: "A", swedish: "Det förstår jag. Men du har vänner här som bryr sig om dig.", english: "I understand that. But you have friends here who care about you." },
                            { speaker: "B", swedish: "Tack, det gör mig glad att höra.", english: "Thanks, that makes me happy to hear." }
                        ]
                    },
                    {
                        type: "chunking",
                        chunk: "Jag känner mig glad.",
                        english: "I feel happy."
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Jag känner mig ensam ibland.",
                        english: "I feel lonely sometimes.",
                        parts: ["Jag", "känner", "mig", "ensam", "ibland."]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Det gör mig glad att höra.",
                        english: "That makes me happy to hear.",
                        parts: ["Det", "gör", "mig", "glad", "att", "höra."]
                    }
                ]
            },
            {
                id: 4,
                title: "Conditional Sentences (If...Then)",
                description: "Expressing conditions and hypotheticals.",
                type: "grammar_builder",
                items: [
                    {
                        type: "theory",
                        title: "'Om' Clauses (If...)",
                        content: "Use 'om' (if) to express conditions: 'Om det regnar, stannar vi hemma' (If it rains, we stay home). Remember: the 'om' clause is a subclause, so BIFF applies! And in the main clause responding to the 'om' clause, V2 applies because the entire 'om' clause counts as Element 1."
                    },
                    {
                        type: "dialogue",
                        title: "Planning a Trip",
                        lines: [
                            { speaker: "A", swedish: "Om vädret är bra imorgon, vill jag gå till stranden.", english: "If the weather is good tomorrow, I want to go to the beach." },
                            { speaker: "B", swedish: "Bra idé! Och om det regnar, kan vi gå på museum istället.", english: "Good idea! And if it rains, we can go to a museum instead." },
                            { speaker: "A", swedish: "Om vi åker tidigt, hittar vi kanske en bra plats.", english: "If we leave early, we'll maybe find a good spot." }
                        ]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Om det regnar stannar vi hemma.",
                        english: "If it rains, we stay home.",
                        parts: ["Om", "det", "regnar", "stannar", "vi", "hemma."],
                        note: "The 'om' clause ('Om det regnar') is Element 1 of the main sentence, so 'stannar' is Element 2."
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Om jag inte är trött går jag ut.",
                        english: "If I am not tired, I go out.",
                        parts: ["Om", "jag", "inte", "är", "trött", "går", "jag", "ut."],
                        note: "BIFF: 'inte' goes before 'är' inside the 'om' subclause. V2: 'går' is Element 2 of the main clause."
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Vi kan gå på museum om det regnar.",
                        english: "We can go to a museum if it rains.",
                        parts: ["Vi", "kan", "gå", "på", "museum", "om", "det", "regnar."]
                    }
                ]
            }
        ]
    },
    B2: {
        title: "Upper Intermediate - B2",
        description: "Passive voice, formal vs informal register, and reading Swedish news.",
        modules: [
            {
                id: 1,
                title: "The Passive Voice",
                description: "Learning to say 'it was built' instead of 'someone built it'.",
                type: "grammar_builder",
                items: [
                    {
                        type: "theory",
                        title: "The '-s' Passive",
                        content: "Swedish has an elegant passive: just add '-s' to the verb! 'Bygga' (to build) becomes 'byggas' (to be built). 'Boken läses av många' (The book is read by many). This is extremely common in news and formal writing."
                    },
                    {
                        type: "theory",
                        title: "'Bli' Passive vs '-s' Passive",
                        content: "There's also a 'bli' passive: 'Boken blev skriven av Astrid Lindgren' (The book was written by Astrid Lindgren). Use 'bli' when emphasizing the change of state or the action itself, and '-s' for general/habitual passives."
                    },
                    {
                        type: "dialogue",
                        title: "Reading the News",
                        lines: [
                            { speaker: "News", swedish: "En ny bro byggs i centrala Stockholm.", english: "A new bridge is being built in central Stockholm." },
                            { speaker: "News", swedish: "Projektet förväntas vara klart nästa år.", english: "The project is expected to be completed next year." },
                            { speaker: "News", swedish: "Bron designades av en känd arkitekt.", english: "The bridge was designed by a famous architect." },
                            { speaker: "News", swedish: "Beslutet togs av kommunen förra veckan.", english: "The decision was made by the municipality last week." }
                        ]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "En ny bro byggs i Stockholm.",
                        english: "A new bridge is being built in Stockholm.",
                        parts: ["En", "ny", "bro", "byggs", "i", "Stockholm."]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Boken skrevs av Astrid Lindgren.",
                        english: "The book was written by Astrid Lindgren.",
                        parts: ["Boken", "skrevs", "av", "Astrid", "Lindgren."]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Beslutet togs av kommunen.",
                        english: "The decision was made by the municipality.",
                        parts: ["Beslutet", "togs", "av", "kommunen."]
                    }
                ]
            },
            {
                id: 2,
                title: "Formal vs Informal Register",
                description: "Adjusting your language for different social contexts.",
                type: "comprehensible_input",
                items: [
                    {
                        type: "theory",
                        title: "Register in Swedish",
                        content: "Sweden is relatively informal, but there are still important register differences. Formal writing uses longer sentences, passive voice, and avoids contractions. Informal speech uses 'dom' instead of 'de/dem', shortens words ('nåt' for 'något'), and uses slang."
                    },
                    {
                        type: "dialogue",
                        title: "Writing an Email vs Texting",
                        lines: [
                            { speaker: "Formal Email", swedish: "Hej, jag skulle vilja boka ett möte med dig. Passar det på torsdag?", english: "Hello, I would like to book a meeting with you. Does Thursday work?" },
                            { speaker: "Casual Text", swedish: "Tjena! Kan vi ses på torsdag? 😊", english: "Hey! Can we meet on Thursday? 😊" },
                            { speaker: "Formal Email", swedish: "Med vänliga hälsningar, Erik Svensson", english: "With kind regards, Erik Svensson" },
                            { speaker: "Casual Text", swedish: "Vi hörs! /Erik", english: "We'll be in touch! /Erik" }
                        ]
                    },
                    {
                        type: "theory",
                        title: "Key Formal Phrases",
                        content: "'Jag skulle vilja...' (I would like to...) is more formal than 'Jag vill...'. 'Med vänliga hälsningar' (With kind regards) closes formal emails. 'Tack för din tid' (Thank you for your time) shows respect."
                    },
                    {
                        type: "chunking",
                        chunk: "Jag skulle vilja boka ett möte.",
                        english: "I would like to book a meeting."
                    },
                    {
                        type: "chunking",
                        chunk: "Med vänliga hälsningar",
                        english: "With kind regards"
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Jag skulle vilja boka ett möte med dig.",
                        english: "I would like to book a meeting with you.",
                        parts: ["Jag", "skulle", "vilja", "boka", "ett", "möte", "med", "dig."]
                    }
                ]
            },
            {
                id: 3,
                title: "Modal Verbs in Depth",
                description: "Mastering 'ska', 'bör', 'kan', 'måste', 'får', and 'vill'.",
                type: "grammar_builder",
                items: [
                    {
                        type: "theory",
                        title: "The Swedish Modal Verbs",
                        content: "Swedish has six key modals: 'ska' (shall/will), 'bör' (should/ought to), 'kan' (can), 'måste' (must), 'får' (may/is allowed to), 'vill' (want to). Each one changes the meaning of your sentence dramatically. 'Får' is particularly tricky — it means both 'gets/receives' and 'is allowed to'."
                    },
                    {
                        type: "dialogue",
                        title: "At the Doctor's Office",
                        lines: [
                            { speaker: "Läkare", swedish: "Du bör vila mer och du måste dricka mycket vatten.", english: "You should rest more and you must drink a lot of water." },
                            { speaker: "Patient", swedish: "Kan jag fortfarande träna?", english: "Can I still exercise?" },
                            { speaker: "Läkare", swedish: "Du får träna lite, men du ska inte springa.", english: "You're allowed to exercise a little, but you should not run." },
                            { speaker: "Patient", swedish: "Jag vill bli frisk snabbt!", english: "I want to get healthy quickly!" },
                            { speaker: "Läkare", swedish: "Du ska bli frisk om du följer mina råd.", english: "You will get healthy if you follow my advice." }
                        ]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Du bör vila mer.",
                        english: "You should rest more.",
                        parts: ["Du", "bör", "vila", "mer."]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Du får träna lite men du ska inte springa.",
                        english: "You may exercise a little but you should not run.",
                        parts: ["Du", "får", "träna", "lite", "men", "du", "ska", "inte", "springa."]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Jag måste dricka mycket vatten.",
                        english: "I must drink a lot of water.",
                        parts: ["Jag", "måste", "dricka", "mycket", "vatten."]
                    }
                ]
            }
        ]
    },
    C1: {
        title: "Advanced - C1",
        description: "Fluent idioms, colloquial speech, abstract argumentation, and reading between the lines.",
        modules: [
            {
                id: 1,
                title: "Swedish Idioms & Proverbs",
                description: "Expressions that make you sound truly fluent.",
                type: "comprehensible_input",
                items: [
                    {
                        type: "theory",
                        title: "Why Idioms Matter",
                        content: "Swedish idioms are colorful and deeply cultural. Knowing them signals true fluency. 'Att lägga locket på' (to put the lid on) means to stop discussing something. 'Att ha rent mjöl i påsen' (to have clean flour in the bag) means to have a clear conscience."
                    },
                    {
                        type: "dialogue",
                        title: "Using Idioms Naturally",
                        lines: [
                            { speaker: "A", swedish: "Jag tycker vi ska lägga locket på den diskussionen.", english: "I think we should stop discussing that (put the lid on)." },
                            { speaker: "B", swedish: "Varför? Har du inte rent mjöl i påsen?", english: "Why? Do you not have a clear conscience (clean flour in the bag)?" },
                            { speaker: "A", swedish: "Det tog skruv! Men allvarligt, vi slår två flugor i en smäll om vi väntar.", english: "That hit home! (It took spin!) But seriously, we'll kill two birds with one stone if we wait." },
                            { speaker: "B", swedish: "Okej, men vi kör inte huvudet i sanden.", english: "Okay, but let's not bury our heads in the sand." }
                        ]
                    },
                    {
                        type: "theory",
                        title: "Common Idioms List",
                        content: "'Slå två flugor i en smäll' = Kill two birds with one stone. 'Lägga locket på' = Stop discussing it. 'Ha rent mjöl i påsen' = Have a clear conscience. 'Köra huvudet i sanden' = Bury your head in the sand. 'Bita i det sura äpplet' = Bite the bullet (bite the sour apple). 'Det tog skruv' = That really hit home."
                    },
                    {
                        type: "chunking",
                        chunk: "Slå två flugor i en smäll.",
                        english: "Kill two birds with one stone."
                    },
                    {
                        type: "chunking",
                        chunk: "Bita i det sura äpplet.",
                        english: "Bite the bullet (bite the sour apple)."
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Vi slår två flugor i en smäll om vi väntar.",
                        english: "We kill two birds with one stone if we wait.",
                        parts: ["Vi", "slår", "två", "flugor", "i", "en", "smäll", "om", "vi", "väntar."]
                    }
                ]
            },
            {
                id: 2,
                title: "Abstract Argumentation",
                description: "Building complex arguments about society and philosophy.",
                type: "comprehensible_input",
                items: [
                    {
                        type: "theory",
                        title: "Building Arguments",
                        content: "To argue persuasively in Swedish, use discourse markers: 'Å ena sidan...å andra sidan' (On one hand...on the other hand), 'Med tanke på att...' (Considering that...), 'Trots att...' (Despite that...), 'Sammanfattningsvis...' (In summary...)."
                    },
                    {
                        type: "dialogue",
                        title: "Debating Remote Work",
                        lines: [
                            { speaker: "A", swedish: "Å ena sidan ger distansarbete mer frihet.", english: "On one hand, remote work gives more freedom." },
                            { speaker: "B", swedish: "Å andra sidan kan det vara ensamt.", english: "On the other hand, it can be lonely." },
                            { speaker: "A", swedish: "Det stämmer. Men med tanke på att produktiviteten ökar, bör vi fortsätta.", english: "That's true. But considering that productivity increases, we should continue." },
                            { speaker: "B", swedish: "Trots att det fungerar nu, kan det skapa problem i framtiden.", english: "Despite it working now, it could create problems in the future." },
                            { speaker: "A", swedish: "Sammanfattningsvis behöver vi en balans mellan kontor och hem.", english: "In summary, we need a balance between office and home." }
                        ]
                    },
                    {
                        type: "chunking",
                        chunk: "Å ena sidan...å andra sidan...",
                        english: "On one hand...on the other hand..."
                    },
                    {
                        type: "chunking",
                        chunk: "Med tanke på att...",
                        english: "Considering that..."
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Trots att det fungerar kan det skapa problem.",
                        english: "Despite it working, it could create problems.",
                        parts: ["Trots", "att", "det", "fungerar", "kan", "det", "skapa", "problem."],
                        note: "The entire 'trots att' clause is Element 1, so 'kan' is Element 2 (V2 rule)."
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Sammanfattningsvis behöver vi en balans.",
                        english: "In summary, we need a balance.",
                        parts: ["Sammanfattningsvis", "behöver", "vi", "en", "balans."]
                    }
                ]
            },
            {
                id: 3,
                title: "Colloquial Swedish & Slang",
                description: "Understanding how Swedes actually talk on the street.",
                type: "comprehensible_input",
                items: [
                    {
                        type: "theory",
                        title: "Spoken vs Written Swedish",
                        content: "Spoken Swedish deviates a lot from textbook Swedish. 'De/Dem' becomes 'dom'. 'Något' becomes 'nåt'. 'Skall' becomes 'ska'. 'Hur är det?' becomes 'Hurär're?'. 'Jag vet inte' becomes 'Ja vet inte' or even 'Avet inte'. Understanding these contractions is essential for real conversations."
                    },
                    {
                        type: "dialogue",
                        title: "Hanging Out (Casual)",
                        lines: [
                            { speaker: "A", swedish: "Tjena! Ska du hänga ikväll?", english: "Hey! You wanna hang out tonight?" },
                            { speaker: "B", swedish: "Aa, varför inte. Ska vi dra nånstans?", english: "Yeah, why not. Shall we go somewhere?" },
                            { speaker: "A", swedish: "Vi drar till Stan. Det händer alltid nåt där.", english: "Let's go to town (Stan). Something always happens there." },
                            { speaker: "B", swedish: "Fett! Men jag har inte jättemycket cash.", english: "Awesome (Fat)! But I don't have a ton of cash." },
                            { speaker: "A", swedish: "Lugnt, det fixar sig. Vi tar det lugnt bara.", english: "Chill, it'll work out. We'll just take it easy." },
                            { speaker: "B", swedish: "Najs, vi hörs!", english: "Nice, we'll be in touch!" }
                        ]
                    },
                    {
                        type: "theory",
                        title: "Key Slang Words",
                        content: "'Fett' = Awesome/cool (literally: fat). 'Najs' = Nice (borrowed from English). 'Lugnt' = Chill/no worries (literally: calm). 'Stan' = Town/downtown (short for 'staden'). 'Hänga' = To hang out. 'Dra' = To go/leave (literally: to pull). 'Kolla' = To check/look (literally: to glance)."
                    },
                    {
                        type: "chunking",
                        chunk: "Det fixar sig.",
                        english: "It'll work out (It fixes itself)."
                    },
                    {
                        type: "chunking",
                        chunk: "Vi tar det lugnt.",
                        english: "We'll take it easy."
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Vi drar till Stan ikväll.",
                        english: "We're heading to town tonight.",
                        parts: ["Vi", "drar", "till", "Stan", "ikväll."]
                    },
                    {
                        type: "grammar_builder",
                        sentence: "Det händer alltid nåt där.",
                        english: "Something always happens there.",
                        parts: ["Det", "händer", "alltid", "nåt", "där."]
                    }
                ]
            }
        ]
    }
};
