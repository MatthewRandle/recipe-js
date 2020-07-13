const tags = [
    "dessert",
    "fruit",
    "appetizer",
    "snack",
    "dip",
    "spread",
    "vegetarian",
    "main dish",
    "breakfast",
    "grill",
    "indian"
];

const recipes = [
    {
        "id": 1,
        "title": "Banana Oatmeal Cookie",
        "description": "This recipe has been handed down in my family for generations. It's a good way to use overripe bananas. It's also a moist cookie that travels well either in the mail or car.",
        "ingredients": [
            { "quantity": 0.0625, "name": "Cup sifted all-purpose flour" },
            { "quantity": 0.02083333333, "name": "Teaspoon baking soda" },
            { "quantity": 0.04166666666, "name": "Teaspoon salt" },
            { "quantity": 0.01041666666, "name": "Teaspoon ground nutmeg" },
            { "quantity": 0.03125, "name": "Teaspoon ground cinnamon" },
            { "quantity": 0.03125, "name": "Cup shortening" },
            { "quantity": 0.04166666666, "name": "Cup white sugar" },
            { "quantity": 0.04166666666, "name": "Egg" },
            { "quantity": 0.04166666666, "name": "Cup mashed bananas" },
            { "quantity": 0.07291666666, "name": "Cup quick cooking oats" },
            { "quantity": 0.02083333333, "name": "Cup chopped nuts" }
        ],
        "directions": [
            "Preheat oven to 400 degrees F (200 degrees C).",
            "Sift together the flour, baking soda, salt, nutmeg and cinnamon.",
            "Cream together the shortening and sugar; beat until light and fluffy. Add egg, banana, oatmeal and nuts. Mix well.",
            "Add dry ingredients, mix well and drop by the teaspoon on ungreased cookie sheet.",
            "Bake at 400 degrees F (200 degrees C) for 15 minutes or until edges turn lightly brown. Cool on wire rack. Store in a closed container."
        ],
        "servings": 24,
        "tags": ["dessert", "fruit"],
        "author": {
            "name": "Blair Bunny",
            "url": "http://allrecipes.com/cook/10179/profile.aspx"
        },
        "source_url": "http://allrecipes.com/Recipe/Banana-Oatmeal-Cookie/Detail.aspx"
    },
    {
        "id": 2,
        "title": "Basil and Pesto Hummus",
        "description": "This deliciously-sweet hummus is bursting with basil and an all-around pesto body.",
        "ingredients": [
            { "quantity": 0.2, "name": "(16 ounce) Garbanzo beans (chickpeas), drained and rinsed" },
            { "quantity": 0.1, "name": "Cup basil leaves" },
            { "quantity": 0.2, "name": "Clove garlic" },
            { "quantity": 0.2, "name": "Tablespoon olive oil" },
            { "quantity": 0.1, "name": "Teaspoon balsamic vinegar" },
            { "quantity": 0.1, "name": "Teaspoon soy sauce" },
            { "quantity": 0, "name": "Salt and ground black pepper to taste" }
        ],
        "directions": [
            "Combine the garbanzo beans, basil, and garlic in a food processor; pulse several times. Use a spatula to push mixture from sides of processor bowl.",
            "Pulse the mixture again while drizzling in the olive oil.",
            "Add the vinegar and soy sauce; pulse until combined.",
            "Season with salt and pepper."
        ],
        "prep_time_min": 10,
        "servings": 5,
        "tags": ["appetizer", "snack", "dip", "spread", "vegetarian"],
        "author": {
            "name": "Fantastic Dan",
            "url": "http://allrecipes.com/cook/10167621/profile.aspx"
        },
        "source_url": "http://allrecipes.com/Recipe/Basil-and-Pesto-Hummus/Detail.aspx"
    },
    {
        "id": 3,
        "title": "Black Bean and Rice Enchiladas",
        "description": "These vegetarian black bean and rice enchiladas are just as satisfying as those served in restaurants.",
        "ingredients": [
            { "quantity": 0.125, "name": "Tablespoon olive oil" },
            { "quantity": 0.125, "name": "Green bell pepper, chopped" },
            { "quantity": 0.125, "name": "Onion, chopped" },
            { "quantity": 0.375, "name": "Cloves garlic, minced" },
            { "quantity": 0.125, "name": "(15 ounce) Can black beans, rinsed and drained" },
            { "quantity": 0.125, "name": "(14.5 ounce) Can diced tomatoes and green chilies" },
            { "quantity": 0.03125, "name": "Cup picante sauce" },
            { "quantity": 0.125, "name": "Tablespoon chili powder" },
            { "quantity": 0.125, "name": "Teaspoon ground cumin" },
            { "quantity": 0.03125, "name": "Teaspoon red pepper flakes" },
            { "quantity": 0.25, "name": "Cups cooked brown rice" },
            { "quantity": 1, "name": "(6 inch) Flour tortillas, warmed" },
            { "quantity": 0.125, "name": "Cup salsa" },
            { "quantity": 0.125, "name": "Cup shredded Cheddar cheese" },
            { "quantity": 0.375, "name": "Tablespoons chopped fresh cilantro leaves" },
            { "quantity": 0.03125, "name": "Cup shredded Cheddar cheese" }
        ],
        "directions": [
            "Preheat oven to 350 degrees F (175 degrees C). Lightly grease a 9x13-inch baking dish.",
            "Heat oil in a large skillet over medium heat; cook and stir green pepper, onion, and garlic until tender, about 7 minutes. Stir in beans, tomatoes, picante sauce, chili powder, cumin, and red pepper flakes; bring to a boil. Reduce heat to low and simmer, uncovered, until heated through and mixture thickens, about 5 minutes. Fold in rice and 1 cup Cheddar cheese; cook until heated through, about 5 minutes.",
            "Spoon a rounded 1/2 cup bean mixture down the center of each tortilla. Fold sides over filling and roll up. Place enchiladas seam side down in baking dish; spoon salsa over each tortilla. Cover baking dish with aluminum foil.",
            "Bake in preheated oven for 25 minutes. Uncover and sprinkle with cilantro and 1/4 cup Cheddar cheese. Bake until cheese is melted, 2 to 3 minutes."
        ],
        "prep_time_min": 15,
        "cook_time_min": 50,
        "servings": 8,
        "tags": ["main dish", "vegetarian"],
        "author": {
            "name": "Diana Manzella-Miller",
            "url": "http://allrecipes.com/cook/13191855/profile.aspx"
        },
        "source_url": "http://allrecipes.com/Recipe/Black-Bean-and-Rice-Enchiladas-2"
    },
    {
        "id": 4,
        "title": "Divine Hard-Boiled Eggs",
        "description": "These hard-boiled eggs are cooked perfectly every time without turning the yolks green.",
        "ingredients": [
            { "quantity": 1, "name": "Eggs" }
        ],
        "directions": [
            "Place eggs in a pot; pour enough water over the eggs to cover.",
            "Cover and turn stove to high; bring to a boil; turn off heat and place pot on a cool burner. Let the pot sit with the cover on for 15 minutes.",
            "Meanwhile, fill a large bowl halfway with cold water; transfer the eggs from the pot to the cold water. Replace the water with cold water as needed to keep cold until the eggs are completely cooled.",
            "Chill in refrigerator at least 2 hours before peeling."
        ],
        "prep_time_min": 5,
        "cook_time_min": 15,
        "servings": 12,
        "tags": ["appetizer", "snack", "breakfast"],
        "author": {
            "name": "Rocky Road",
            "url": "http://allrecipes.com/cook/13810306/profile.aspx"
        },
        "source_url": "http://allrecipes.com/recipe/divine-hard-boiled-eggs/detail.aspx"
    },
    {
        "id": 5,
        "title": "Four Cheese Margherita Pizza",
        "description": "This is a fantastic version of an Italian classic. The feta cheese adds a rich flavor that brings this dish to life. Incredibly easy and incredibly delicious!",
        "ingredients": [
            { "quantity": 0.03125, "name": "Cup olive oil" },
            { "quantity": 0.125, "name": "Tablespoon minced garlic" },
            { "quantity": 0.0625, "name": "Teaspoon sea salt" },
            { "quantity": 1, "name": "Roma tomatoes, sliced" },
            { "quantity": 0.25, "name": "(12 inch) Pre-baked pizza crusts" },
            { "quantity": 1, "name": "Ounces shredded Mozzarella cheese" },
            { "quantity": 0.5, "name": "Ounces shredded Fontina cheese" },
            { "quantity": 1.25, "name": "Fresh basil leaves, washed, dried" },
            { "quantity": 0.0625, "name": "Cup freshly grated Parmesan cheese" },
            { "quantity": 0.0625, "name": "Cup crumbled feta cheese" }
        ],
        "directions": [
            "Stir together olive oil, garlic, and salt; toss with tomatoes, and allow to stand for 15 minutes.",
            "Preheat oven to 400 degrees F (200 degrees C).",
            "Brush each pizza crust with some of the tomato marinade. Sprinkle the pizzas evenly with Mozzarella and Fontina cheeses. Arrange tomatoes overtop, then sprinkle with shredded basil, Parmesan, and feta cheese.",
            "Bake in preheated oven until the cheese is bubbly and golden brown, about 10 minutes."
        ],
        "prep_time_min": 15,
        "cook_time_min": 10,
        "servings": 8,
        "tags": ["main dish"],
        "author": {
            "name": "Michelle",
            "url": "http://allrecipes.com/cook/18668259/profile.aspx"
        },
        "source_url": "http://allrecipes.com/recipe/four-cheese-margherita-pizza"
    },
    {
        "id": 6,
        "title": "Homemade Black Bean Veggie Burgers",
        "description": "You will never want to eat frozen veggie burgers again. These are so easy, and you'll be proud to have created such a vegetarian delight.",
        "ingredients": [
            { "quantity": 0.25, "name": "(16 ounce) Can black beans, drained and rinsed" },
            { "quantity": 0.125, "name": "Green bell pepper, cut into 2 inch pieces" },
            { "quantity": 0.125, "name": "Onion, cut into wedges" },
            { "quantity": 0.75, "name": "Cloves garlic, peeled" },
            { "quantity": 0.25, "name": "Egg" },
            { "quantity": 0.25, "name": "Tablespoon chili powder" },
            { "quantity": 0.25, "name": "Tablespoon cumin" },
            { "quantity": 0.25, "name": "Teaspoon Thai chili sauce or hot sauce" },
            { "quantity": 0.125, "name": "Cup bread crumbs" }
        ],
        "directions": [
            "If grilling, preheat an outdoor grill for high heat, and lightly oil a sheet of aluminum foil. If baking, preheat oven to 375 degrees F (190 degrees C), and lightly oil a baking sheet.",
            "In a medium bowl, mash black beans with a fork until thick and pasty.",
            "In a food processor, finely chop bell pepper, onion, and garlic. Then stir into mashed beans.",
            "In a small bowl, stir together egg, chili powder, cumin, and chili sauce.",
            "Stir the egg mixture into the mashed beans. Mix in bread crumbs until the mixture is sticky and holds together. Divide mixture into four patties.",
            "If grilling, place patties on foil, and grill about 8 minutes on each side. If baking, place patties on baking sheet, and bake about 10 minutes on each side."
        ],
        "prep_time_min": 15,
        "cook_time_min": 20,
        "servings": 4,
        "tags": ["main dish", "vegetarian", "grill"],
        "author": {
            "name": "Lauren Mu",
            "url": "http://allrecipes.com/cook/1445297/profile.aspx"
        },
        "source_url": "http://allrecipes.com/Recipe/Homemade-Black-Bean-Veggie-Burgers/Detail.aspx"
    },
    {
        "id": 7,
        "title": "Homemade Chicken Enchiladas",
        "description": "These enchiladas are great. Even my 5 year old loves them!",
        "ingredients": [
            { "quantity": 0.125, "name": "Tablespoon olive oil" },
            { "quantity": 0.25, "name": "Cooked chicken breasts, shredded" },
            { "quantity": 0.125, "name": "Onion, diced" },
            { "quantity": 0.125, "name": "Green bell pepper, diced" },
            { "quantity": 0.1875, "name": "Cloves garlic, chopped" },
            { "quantity": 0.125, "name": "Cup cream cheese" },
            { "quantity": 0.125, "name": "Cup shredded Monterey Jack cheese" },
            { "quantity": 0.125, "name": "(15 ounce) Can tomato sauce" },
            { "quantity": 0.125, "name": "Tablespoon chili powder" },
            { "quantity": 0.125, "name": "Tablespoon dried parsley" },
            { "quantity": 0.125, "name": "Teaspoon dried oregano" },
            { "quantity": 0.0625, "name": "Teaspoon salt" },
            { "quantity": 0.0625, "name": "Teaspoon ground black pepper" },
            { "quantity": 1, "name": "(10 inch) Flour tortillas" },
            { "quantity": 0.25, "name": "Cups enchilada sauce" },
            { "quantity": 0.125, "name": "Cup shredded Monterey Jack cheese" }
        ],
        "directions": [
            "Preheat oven to 350 degrees F (175 degrees C).",
            "Heat olive oil in a skillet over medium heat. Cook and stir chicken, onion, green bell pepper, garlic, cream cheese, and 1 cup Monterey Jack cheese in hot oil until the cheese melts, about 5 minutes. Stir tomato sauce, chili powder, parsley, oregano, salt, and black pepper into the chicken mixture.",
            "Divide mixture evenly into tortillas, roll the tortillas around the filling, and arrange in a baking dish. Cover with enchilada sauce and remaining 1 cup Monterey Jack cheese.",
            "Bake in preheated oven until cheese topping melts and begins to brown, about 15 minutes."
        ],
        "prep_time_min": 15,
        "cook_time_min": 20,
        "servings": 8,
        "tags": ["main dish"],
        "author": {
            "name": "Mary Kate",
            "url": "http://allrecipes.com/cook/14977239/profile.aspx"
        },
        "source_url": "http://allrecipes.com/Recipe/Homemade-Chicken-Enchiladas/Detail.aspx"
    },
    {
        "id": 8,
        "title": "Marinated Grilled Shrimp",
        "description": "A very simple and easy marinade that makes your shrimp so yummy you don't even need cocktail sauce! Don't let the cayenne pepper scare you, you don't even taste it. My 2 and 4 year-olds love it and eat more shrimp than their parents! It is also a big hit with company, and easy to prepare. I make this with frozen or fresh shrimp and use my indoor electric grill if the weather is not good for outside grilling. Try it with a salad, baked potato, and garlic bread. You will not be disappointed!!!",
        "ingredients": [
            { "quantity": 0.5, "name": "Cloves garlic, minced" },
            { "quantity": 0.05555555555, "name": "Cup olive oil" },
            { "quantity": 0.04166666666, "name": "Cup tomato sauce" },
            { "quantity": 0.33333333333, "name": "Tablespoons red wine vinegar" },
            { "quantity": 0.33333333333, "name": "Tablespoons chopped fresh basil" },
            { "quantity": 0.08333333333, "name": "Teaspoon salt" },
            { "quantity": 0.04166666666, "name": "Teaspoon cayenne pepper" },
            { "quantity": 0.33333333333, "name": "Pounds fresh shrimp, peeled and deveined" },
            { "quantity": 0.16666666666, "name": "Skewers" }
        ],
        "directions": [
            "In a large bowl, stir together the garlic, olive oil, tomato sauce, and red wine vinegar. Season with basil, salt, and cayenne pepper. Add shrimp to the bowl, and stir until evenly coated. Cover, and refrigerate for 30 minutes to 1 hour, stirring once or twice.",
            "Preheat grill for medium heat. Thread shrimp onto skewers, piercing once near the tail and once near the head. Discard marinade.",
            "Lightly oil grill grate. Cook shrimp on preheated grill for 2 to 3 minutes per side, or until opaque."
        ],
        "prep_time_min": 15,
        "cook_time_min": 6,
        "servings": 6,
        "tags": ["main dish", "grill"],
        "author": {
            "name": "Blondie Perez",
            "url": "http://allrecipes.com/cook/1804621/profile.aspx"
        },
        "source_url": "http://allrecipes.com/recipe/marinated-grilled-shrimp"
    },
    {
        "id": 9,
        "title": "Vegetable Fried Rice",
        "description": "This dish combines the nutty flavor of brown rice with the fresh taste of bell peppers, baby peas, and other vegetables.",
        "ingredients": [
            { "quantity": 0.75, "name": "Cups water" },
            { "quantity": 0.375, "name": "Cups quick-cooking brown rice" },
            { "quantity": 0.5, "name": "Tablespoons peanut oil" },
            { "quantity": 0.25, "name": "Small yellow onion, chopped" },
            { "quantity": 0.25, "name": "Small green bell pepper, chopped" },
            { "quantity": 0.25, "name": "Teaspoon minced garlic" },
            { "quantity": 0.0625, "name": "Teaspoon red pepper flakes" },
            { "quantity": 0.75, "name": "Green onions, thinly sliced" },
            { "quantity": 0.75, "name": "Tablespoons soy sauce" },
            { "quantity": 0.25, "name": "Cup frozen petite peas" },
            { "quantity": 0.5, "name": "Teaspoons sesame oil" },
            { "quantity": 0.0625, "name": "Cup roasted peanuts (optional)" }
        ],
        "directions": [
            "In a saucepan bring water to a boil. Stir in rice. Reduce heat, cover and simmer for 20 minutes.",
            "Meanwhile, heat peanut oil in a large skillet or wok over medium heat. Add onions, bell pepper, garlic and pepper flakes, to taste. Cook 3 minutes, stirring occasionally.",
            "Increase heat to medium-high and stir in cooked rice, green onions and soy sauce. Stir-fry for 1 minute. Add peas and cook 1 minute more. Remove from heat. Add sesame oil and mix well. Garnish with peanuts, if desired."
        ],
        "prep_time_min": 15,
        "cook_time_min": 40,
        "servings": 4,
        "tags": ["main dish", "vegetarian"],
        "author": {
            "name": "Dakota Kelly",
            "url": "http://allrecipes.com/cook/1223369/profile.aspx"
        },
        "source_url": "http://allrecipes.com/Recipe/Vegetable-Fried-Rice/Detail.aspx"
    },
    {
        "id": 10,
        "title": "Vegetarian Korma",
        "description": "This is an easy and exotic Indian dish. It's rich, creamy, mildly spiced, and extremely flavorful. Serve with naan and rice.",
        "ingredients": [
            { "quantity": 0.375, "name": "Tablespoons vegetable oil" },
            { "quantity": 0.25, "name": "Small onion, diced" },
            { "quantity": 0.25, "name": "Teaspoon minced fresh ginger root" },
            { "quantity": 1, "name": "Cloves garlic, minced" },
            { "quantity": 0.5, "name": "Potatoes, cubed" },
            { "quantity": 1, "name": "Carrots, cubed" },
            { "quantity": 0.25, "name": "Fresh jalapeno pepper, seeded and sliced" },
            { "quantity": 0.75, "name": "Tablespoons ground unsalted cashews" },
            { "quantity": 0.25, "name": "(4 ounce) Can tomato sauce" },
            { "quantity": 0.5, "name": "Teaspoons salt" },
            { "quantity": 0.375, "name": "Tablespoons curry powder" },
            { "quantity": 0.25, "name": "Cup frozen green peas" },
            { "quantity": 0.125, "name": "Green bell pepper, chopped" },
            { "quantity": 0.125, "name": "Red bell pepper, chopped" },
            { "quantity": 0.25, "name": "Cup heavy cream" },
            { "quantity": 0.25, "name": "Bunch fresh cilantro for garnish" }
        ],
        "directions": [
            "Heat the oil in a skillet over medium heat. Stir in the onion, and cook until tender.",
            "Mix in ginger and garlic, and continue cooking 1 minute.",
            "Mix potatoes, carrots, jalapeno, cashews, and tomato sauce. Season with salt and curry powder. Cook and stir 10 minutes, or until potatoes are tender.",
            "Stir peas, green bell pepper, red bell pepper, and cream into the skillet. Reduce heat to low, cover, and simmer 10 minutes.",
            "Garnish with cilantro to serve."
        ],
        "prep_time_min": 25,
        "cook_time_min": 30,
        "servings": 4,
        "tags": ["main dish", "vegetarian", "indian"],
        "author": {
            "name": "Yakuta",
            "url": "http://allrecipes.com/cook/116722/profile.aspx"
        },
        "source_url": "http://allrecipes.com/Recipe/Vegetarian-Korma/Detail.aspx"
    },
    {
        "id": 11,
        "title": "World's Best Lasagna",
        "description": "It takes a little work, but it is worth it.",
        "ingredients": [
            { "quantity": 0.08333333333, "name": "Pound sweet Italian sausage" },
            { "quantity": 0.0625, "name": "Pound lean ground beef" },
            { "quantity": 0.04166666666, "name": "Cup minced onion" },
            { "quantity": 0.16666666666, "name": "Cloves garlic, crushed" },
            { "quantity": 0.08333333333, "name": "(28 ounce) Can crushed tomatoes" },
            { "quantity": 0.16666666666, "name": "(6 ounce) Cans tomato paste" },
            { "quantity": 0.16666666666, "name": "(6.5 ounce) Cans canned tomato sauce" },
            { "quantity": 0.04166666666, "name": "Cup water" },
            { "quantity": 0.16666666666, "name": "Tablespoons white sugar" },
            { "quantity": 0.125, "name": "Teaspoons dried basil leaves" },
            { "quantity": 0.04166666666, "name": "Teaspoon fennel seeds" },
            { "quantity": 0.08333333333, "name": "Teaspoon Italian seasoning" },
            { "quantity": 0.08333333333, "name": "Tablespoon salt" },
            { "quantity": 0.02083333333, "name": "Teaspoon ground black pepper" },
            { "quantity": 0.33333333333, "name": "Tablespoons chopped fresh parsley" },
            { "quantity": 1, "name": "Lasagna noodles" },
            { "quantity": 1.33333333333, "name": "Ounces ricotta cheese" },
            { "quantity": 0.08333333333, "name": "Egg" },
            { "quantity": 0.04166666666, "name": "Teaspoon salt" },
            { "quantity": 0.0625, "name": "Pound mozzarella cheese, sliced" },
            { "quantity": 0.0625, "name": "Cup grated Parmesan cheese" }
        ],
        "directions": [
            "In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 tablespoon salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally.",
            "Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and 1/2 teaspoon salt.",
            "Preheat oven to 375 degrees F (190 degrees C).",
            "To assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13 inch baking dish. Arrange 6 noodles lengthwise over meat sauce. Spread with one half of the ricotta cheese mixture. Top with a third of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese. Repeat layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to prevent sticking, either spray foil with cooking spray, or make sure the foil does not touch the cheese.",
            "Bake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes. Cool for 15 minutes before serving."
        ],
        "prep_time_min": 30,
        "cook_time_min": 150,
        "servings": 12,
        "tags": ["main dish"],
        "author": {
            "name": "John Chandler",
            "url": "http://allrecipes.com/cook/1899478/profile.aspx"
        },
        "source_url": "http://allrecipes.com/Recipe/Worlds-Best-Lasagna/Detail.aspx"
    }
];