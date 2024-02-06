//Function that takes commands as parameter:
const generateQuote = command => {
    let quote;

//Array of quotes for "Encourage me!" command:
    switch (command) {
        case "Encourage me!":
            const encourageQuotes = [
                "Believe you can, and you're halfway there. - Theodore Roosevelt",
                "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
                "The only way to do great work is to love what you do. - Steve Jobs",
                "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
                "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
                "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
                "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
                "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
                "It always seems impossible until it's done. - Nelson Mandela",
                "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
                "Every morning brings new potential, but only if you make the most of it. - Harvey Mackay",
                "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
                "You are stronger than you think. More capable than you ever dreamed. - Robin Sharma",
                "No matter what you're going through, there's a light at the end of the tunnel. - Demi Lovato",
                "In the middle of every difficulty lies opportunity. - Albert Einstein",
                "Difficulties in life are intended to make us better, not bitter. - Dan Reeves",
                "The best way to predict the future is to create it. - Peter Drucker",
                "Your attitude, not your aptitude, will determine your altitude. - Zig Ziglar",
                "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
                "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
                "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
                "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett"
                // Add more unique encouragement quotes as needed
            ];
            quote = encourageQuotes[Math.floor(Math.random() * encourageQuotes.length)];
            break;

//Array of quotes for "Compliment me!" command:
        case "Compliment me!":
            const complimentQuotes = [
                "Your positivity is infectious!",
                "You radiate beauty, inside and out.",
                "You have the most incredible smile.",
                "Your kindness is a balm to all who encounter it.",
                "You're even more beautiful on the inside than you are on the outside.",
                "You have the courage of your convictions.",
                "Your passion always inspires me.",
                "You light up the room with your energy.",
                "You're a great listener.",
                "You have a heart of gold.",
                "You're a true gem.",
                "You're so thoughtful and generous.",
                "Your creativity knows no bounds.",
                "You're a fantastic friend.",
                "You're an incredible parent.",
                "You're an amazing mentor.",
                "You have an impressive work ethic.",
                "Your intelligence is inspiring.",
                "You're a true leader.",
                "You have a great sense of humor.",
                "You're incredibly resilient.",
                "You make a positive impact wherever you go.",
                "You're a constant source of motivation.",
                "You're so good at what you do.",
                "Your presence is a present to the world.",
                "You're exceptionally talented.",
                "You have a heart as big as your smile.",
                "You're a ray of sunshine on a cloudy day.",
                "Your optimism is contagious.",
                "You're a true original.",
                "You have an amazing ability to make people feel valued.",
                "You're a true inspiration.",
                "You're not just good enough; you're fantastic!"
                // Add more unique compliment quotes as needed
            ];
            quote = complimentQuotes[Math.floor(Math.random() * complimentQuotes.length)];
            break;

//Array of quotes for "Teach me something!" command:
        case "Teach me something!":
            const learnSomethingQuotes = [
                "The Great Wall of China is not visible from the Moon without aid.",
                "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
                "Bananas are berries, but strawberries aren't.",
                "The longest time between two twins being born is 87 days.",
                "Cows have best friends and can become stressed when they are separated.",
                "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion of the iron.",
                "The average person will spend six months of their life waiting for red lights to turn green.",
                "Venus rotates in the opposite direction to most planets in our solar system.",
                "The shortest war in history was between Britain and Zanzibar on August 27, 1896, lasting only 38 minutes.",
                "A group of flamingos is called a 'flamboyance.'",
                "The Great Barrier Reef is the largest living structure on Earth, visible from space.",
                "A single rain forest can produce 20% of the Earth's oxygen.",
                "The world's largest desert is Antarctica.",
                "The smell of freshly-cut grass is actually a plant distress call.",
                "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid of Giza.",
                "Hippopotomonstrosesquippedaliophobia is the fear of long words.",
                "A day on Venus is longer than a year on Venus.",
                "The word 'nerd' was first coined by Dr. Seuss in 'If I Ran the Zoo' in 1950.",
                "Penguins are known to engage in prostitution by trading sex for stones, which they use to build their nests.",
                "A group of owls is called a 'parliament.'",
                "There are more possible iterations of a game of chess than there are atoms in the observable universe.",
                "A jiffy is an actual unit of time: 1/100th of a second.",
                "Octopuses have three hearts and blue blood.",
                "The shortest war in history was between Britain and Zanzibar on August 27, 1896, lasting only 38 minutes.",
                "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
                "Bananas are berries, but strawberries aren't.",
                "The average person will spend six months of their life waiting for red lights to turn green.",
                "Venus rotates in the opposite direction to most planets in our solar system.",
                "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion of the iron.",
                "A single rain forest can produce 20% of the Earth's oxygen.",
                "The Great Barrier Reef is the largest living structure on Earth, visible from space.",
                "A day on Venus is longer than a year on Venus.",
                "The world's largest desert is Antarctica."
                // Add more unique knowledge quotes as needed
            ];
            quote = learnSomethingQuotes[Math.floor(Math.random() * learnSomethingQuotes.length)];
            break;

        default:
            quote = "Invalid Command!";
    }
    return quote;
}

/*Example usage:
console.log(generateQuote("Encourage me!"));
console.log(generateQuote("Compliment me!"));
console.log(generateQuote("Teach me something!"));*/