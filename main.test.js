import { sort, search, newsList } from "./main.js";

test("Search function testing ", () => {
  expect(search()).toContain("What films should an aspiring journalist watch?");
});

// "What films should an aspiring journalist watch?",
// "Buried underpants and tea bags help scientists evaluate soil",
// "Decoder: Mining asteroids for minerals can help spare Earth",
// "Media glare can enrich tennis pros yet imperil mental health",
// "'Nightmare' TV show 'Euphoria — health threat or high art?",
// "Decoder: Armenia in a bind as Ukraine war resets global order",
// "What books should an aspiring journalist read?",
// "Marie Colvin shined a light on war-torn corners of the world",

test("Sort A-Z function testing ", () => {
    expect(sort("ascending")).toEqual([
        // sort up - down
        "'Nightmare' TV show 'Euphoria — health threat or high art?", 
        'Buried underpants and tea bags help scientists evaluate soil', 
        'Decoder: Armenia in a bind as Ukraine war resets global order', 
        'Decoder: Mining asteroids for minerals can help spare Earth', 
        'Marie Colvin shined a light on war-torn corners of the world', 
        'Media glare can enrich tennis pros yet imperil mental health', 
        'What books should an aspiring journalist read?', 
        'What films should an aspiring journalist watch?'
    ]);
  });

test("Sort Z-A function testing ", () => {
expect(sort("descending")).toEqual([
        // sort down - up
        'What films should an aspiring journalist watch?', 
        'What books should an aspiring journalist read?', 
        'Media glare can enrich tennis pros yet imperil mental health', 
        'Marie Colvin shined a light on war-torn corners of the world', 
        'Decoder: Mining asteroids for minerals can help spare Earth', 
        'Decoder: Armenia in a bind as Ukraine war resets global order', 
        'Buried underpants and tea bags help scientists evaluate soil', 
        "'Nightmare' TV show 'Euphoria — health threat or high art?"
    ]);
});

