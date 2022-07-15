// 
// 
// 
function renderJig(){
    let Rules = {
        address: document.getElementById("address1").value,
        domain: document.getElementById("domain").value
    };

    const address = document.getElementById("address");
    address.textContent = getAddress(Rules.address);

    const phone = document.getElementById("phone");
    phone.textContent = getPhone();

    getMail(Rules.domain)

}

function copyEvent(id){
    let str = document.getElementById(id)
    window.getSelection().selectAllChildren(str)
    document.execCommand("Copy")
}

function getMail(userDomain) {
	fnames = ["Tara", "Rebekah", "Michael", "Joseph", "James", "Maria", "Thomas", "Tiffany", "Dexter", "Helen", "Richard", "Alfred", "Rodney", "Dora", "Christopher", "Patricia", "Shantel", "Sherri", "Sean", "Grace", "Linda", "Angela", "Richard", "Mario", "Lucille", "Jacquelyn", "Gail", "Frances", "Theodore", "Donna", "Mitzi", "Louis", "Patricia", "Sandra", "Andre", "Roy", "Leroy", "Scott", "John", "Rene", "Anthony", "Barbara", "Shirley", "Christopher", "Marcia", "John", "William", "Debra", "Everett", "Reginald", "Tamera", "Tasha", "Patrick", "Jade", "William", "Shirley", "Bettina", "Jennifer", "Deborah", "David", "Rosa", "Floy", "Eugene", "Reggie", "Nathan", "Brian", "Richard", "James", "Kenneth", "Clarence", "Nathaniel", "William", "Charles", "James", "Jerry", "David", "Kenneth", "Jose", "Laverne", "Ashley", "Thomas", "Mary", "Velma", "Lisa", "Frank", "Carl", "Ha", "Yvonne", "James", "Robert", "Alma", "Larry", "John", "Donald", "Raquel", "John", "Shawna", "Jacqueline", "Joshua", "Cliff", "Mike", "Andrew", "Leon", "Michael", "Elizabeth", "Melba", "Stacy", "Fred", "Erica", "Eugene", "Mari", "Sean", "Neal", "Jason", "Fanny", "Loretta", "Aisha", "Thomas", "Terry", "Jeremy", "Frank", "Ronald", "Michael", "Margie", "Todd", "Rita", "Pamela", "Nancy", "Ava", "Michael", "Linda", "Susanne", "Elijah", "Alexandra", "Robert", "Scott", "Saundra", "Riley", "Jason", "Carmen", "Donald", "Porter", "Edward", "Susan", "Carolyn", "Pam", "Gregory", "Gregory", "Janice", "Jacob", "Toni", "Mandy", "Elena", "Christian", "Ronda", "Richard", "Miguel", "Simon", "William", "Robert", "Jannie", "George", "Yolanda", "Amber", "Donald", "James", "Brad", "Chris", "Andrea", "Marcus", "Otis", "Karey", "Donnie", "Ruby", "Anthony", "Annie", "Mary", "Tasha", "Ulysses", "Fred", "Jennifer", "Catherine", "Ronald", "Thomas", "David", "Brigida", "Barbara", "Fay", "James", "Gregory", "Janet", "Ruth", "David", "Lois", "Thomas", "Maurice", "Robert", "Robert", "Shirley", "Arthur", "Angelia", "Rick", "Flora", "Elizabeth", "Megan", "Allen", "Wallace", "Dale", "Gracie", "Angela", "James", "Sadie", "Christine", "Christina", "Joseph", "Ryan", "Billy", "Christopher", "Leanne", "Roma", "Jacob", "Nelson", "Patrica", "Norman", "Alice", "Timothy", "Brent", "Debbie", "Diane", "Ivan", "Terry", "Robert", "Trena", "Thomas", "Edna", "Asa", "Lora", "Gayle", "Dustin", "Carlee", "Margaret", "Rachel", "Clara", "Michael", "Dorothy", "Lanell", "Jeffrey", "Richard", "Dennis", "Steven", "Gustavo", "Frances", "Michael", "Janet", "Mercedes", "Theodore", "Jennifer", "Jacob", "Francis", "Mabel", "Burl", "Joe", "August", "Kathy", "Clara", "Ronald", "Rebecca", "Larry", "Jeffery", "Lisa", "Robert", "Christopher", "Latanya", "Robert", "Randall", "Rodney", "Nicholas", "Bettie", "John", "Michael", "Clifton", "Jessica", "Desiree", "Kenneth", "Yen", "Alberto", "Dianna", "David", "Rose", "Doris", "Fredrick", "Bruce", "Grace", "Diana", "Robert", "Anna", "Mildred", "Michael", "Jesse", "Mark", "Cortney", "Sherry", "Francis", "Chuck", "Yvette", "Paul", "Erica", "Terry", "Dorothy", "Lottie", "Lee", "Willie", "Rochelle", "Earl", "Blake", "Rosemarie", "Harold", "Sandra", "Charles", "Gina", "Luke", "Daniel", "Raul", "Deanna", "James", "Erika", "Alan", "Francisco", "Eleanor", "Peter", "Marion", "Mary", "Angela", "Warren", "Samuel", "Andrew", "Russell", "Erin", "June", "Kurt", "Carolyn", "Lisa", "Brian", "Renata", "William", "Paula", "Caridad", "Troy", "Steven", "Josh", "Raymond", "Stephanie", "Bernice", "Lori", "Paul", "Donald", "Elisabeth", "Shantel", "Marissa", "Jason", "Nathaniel", "Muriel", "Kim", "Wanda", "Ronald", "Nathaniel", "Jessica", "Brandon", "Pamela", "Kelley", "James", "Ronald", "Jennifer", "Lois", "Ronald", "John", "Francis", "Emma", "Ron", "Elizabeth", "Richard", "Tammy", "Edward", "Shirley", "Leah", "Stephanie", "Linda", "Jay", "Sylvia", "Linda", "Edwin", "Clifford", "Leslie", "Crystal", "Donald", "Lisa", "Darci", "Frank", "Corinne", "Stephanie", "Vicky", "Annette", "Virginia", "Brenda", "Edward", "Tanya", "Jenny", "Monica", "William", "John", "Joseph", "Amber", "David", "Marjorie", "Queenie", "Christian", "Omer", "Linda", "Timothy", "Margaret", "Timothy", "Patricia", "Kevin", "Jake", "Ruth", "Nyla", "Elizabeth", "Herman", "Richard", "Nellie", "Keith", "Steven", "Bessie", "Ninfa", "Laura", "Tiny", "Bruce", "Stanley", "Chris", "Marvin", "Maria", "James", "Annette", "Mark", "Maria", "Steven", "Beatrice", "Kathryn", "Alfred", "Lynette", "Russell", "Anita", "Charles", "Charlotte", "Norman", "Steven", "Karen", "Samuel", "Fred", "David", "Louis", "Terence", "Carmen", "Molly", "James", "Jose", "Cindy", "Cathy", "Phylis", "Donovan", "Mabel", "Cynthia", "Patricia", "Katherine", "Michael", "Juli", "Cynthia", "Joseph", "Helen", "Stacey", "Emanuel", "Robin", "Jamie", "William", "Christine", "Eric", "Margaret", "Valerie", "Shirley", "Raymond", "Cindy", "Roger", "Christine", "Charlotte", "Lisa", "Joeann", "Robert", "Rebecca", "Connie", "Ethel", "Donna", "Juanita", "Loretta", "Rosalie", "Phillis", "Lara", "Jermaine", "Danny", "Suzanne", "James", "William", "Christy", "Brenda", "Marcus", "Muriel", "Mary", "Randy", "Jacqueline", "Lynne", "Nicholas", "Ethel", "Constance", "Errol", "George", "Phyllis", "Marion", "Michael", "Annette", "Trey", "Edith", "Virginia", "Wade", "Ruth", "David", "Lewis", "Dennis", "Julie", "Shannon", "Erin", "Joseph", "Jonathan", "Mable", "Glen", "Megan", "Charles", "Albert", "Mary", "Jessie", "Frances", "Edith", "Kendra", "Mark", "Anna", "Danny", "Michael", "Rick", "Juanita", "Selena", "Gregory", "Joan", "James", "Russell", "Jay", "John", "Destiny", "Hugo", "Tammy", "Joseph", "Angela", "Alan", "Robert", "Lillian", "Carrie", "Diane", "Phillip", "Patrick", "Shannon", "Mary", "Mary", "Helen", "Delia", "Laura", "William", "Floyd", "Harold", "Danielle", "Iris", "Billy", "Cory", "Carol", "Heather", "Gregory", "Joshua", "Robert", "Violeta", "Damon", "Joan", "Amy", "Diane", "Shanell", "Ryan", "Diana", "Robert", "Brian", "Christopher", "Bonita", "Angelo", "Phyllis", "William", "James", "Deborah", "Michael", "Frank", "Carol", "Grace", "Irene", "Christopher", "Steve", "Gary", "Joseph", "Shelby", "April", "Rhonda", "Raymond", "Earl", "Diana", "Thomas", "Donald", "Gabriela", "William", "Carol", "Milton", "Elizabeth", "Julio", "Georgia", "Aaron", "Arthur", "Michelle", "Marsha", "Lori", "Jackie", "Bradley", "Michael", "Greg", "Fannie", "William", "Sandra", "Betty", "James", "Elena", "Yvette", "Matthew", "Diane", "James", "Frederick", "Ramona", "Terence", "William", "Donald", "Edelmira", "Stephanie", "Chad", "Francis", "Johnny", "Jose", "Freddie", "Ed", "Viola", "Steven", "Carl", "Wendy", "Whitney", "Amanda", "Victoria", "Charles", "Cynthia", "Gayle", "Ann", "Nola", "Gordon", "Nancy", "Mark", "Larry", "Bobby", "Eileen", "Jane", "Eldon", "Marcus", "Jeffery", "Tara", "Rocco", "Blanche", "Nathaniel", "Mary", "Mary", "Amanda", "Steven", "Bertha", "Daniel", "Roger", "Santos", "James", "Dorothy", "Joseph", "Mary", "Astrid", "Carroll", "Shawn", "Robert", "Kenneth", "Shanna", "Loren", "Andre", "Sharon", "Clarence", "Michael", "Jason", "James", "David", "Aaron", "Robert", "Michael", "Mavis", "Melissa", "Christopher", "Catherine", "Dawn", "Scott", "Lonnie", "Marilyn", "James", "Clay", "Paul", "Stephen", "Willie", "William", "Jeanette", "Louise", "Mark", "Blanche", "Thomas", "Mark", "Clara", "Shane", "Vaughn", "Robert", "Thomas", "Terry", "John", "Matt", "Thomas", "Ed", "Katherine", "Mary", "Julie", "Leona", "Nathan", "Christopher", "Teri", "Eric", "Justin", "Dudley", "Deborah", "Bobby", "Christina", "Claire", "Vivian", "Virginia", "Jonathan", "Susan", "Carrie", "Doris", "James", "Lisa", "Sonya", "Juan", "Dina", "Bonnie", "Donna", "Ray", "Barbara", "Frank", "Kristen", "Charles", "Curtis", "Eric", "Elsie", "Brian", "Edward", "Joe", "Matthew", "Juan", "Marilou", "Laura", "Cynthia", "Norma", "John", "Raymond", "Adam", "Brenda", "Kathy", "Melissa", "Mary", "Jesus", "Julius", "Mary", "Josephina", "Marie", "Eva", "Charles", "Christopher", "Leonard", "Keith", "Patricia", "Maria", "Helen", "Rebecca", "Jane", "Mary", "Donny", "Kenneth", "Dorothy", "Sal", "Teresa", "Alan", "Clarence", "Ellis", "Patricia", "Jamie", "Lloyd", "Ramiro", "Duncan", "Barbara", "Kyle", "Marie", "Valerie", "Philip", "Vincent", "James", "Zachary", "Kelly", "Emerald", "Gerald", "Juan", "Floyd", "Rudolph", "April", "Mitzi", "Edith", "Kristin", "Christina", "Shannon", "Harlan", "Margaret", "Keenan", "Frederick", "Mildred", "Amanda", "Marcella", "Richard", "Janae", "Ellen", "Marie", "Wally", "George", "Robert", "Amanda", "Alma", "Dustin", "Patricia", "Jocelyn", "Courtney", "Randy", "Randolph", "John", "Hector", "Lonnie", "Barbara", "Angel", "Cynthia", "Natalie", "Rose", "John", "Brandon", "Ronald", "Jason", "Gail", "Elaine", "Sherrie", "Diane", "David", "Stacey", "Maxine", "Donna", "Norman", "Elijah", "Nicholas", "Carrie", "Janie", "Pamela", "Arthur", "Wanda", "Robert", "Mary", "Steven", "Goldie", "John", "Tracie", "Vincent", "Joyce", "Eric", "Ronald", "Damion", "Joanne", "Robert", "Angel", "Kenneth", "Ida", "Victoria", "Lucia", "Phyllis", "Jose", "Bessie", "Dorothy", "Jose", "Forrest", "Joseph", "Norma", "Donna", "Marie", "Samantha", "Elizabeth", "Bonnie", "Jeanette", "Thomas", "Theresa", "Tom", "Gloria", "Christine", "John", "Jerry", "Marilyn", "Susana", "George", "Matthew", "Ines", "Christopher", "Lionel", "Elmer", "Gary", "Kara", "Michael", "Anita", "Robert", "Eugene", "Ruben", "John", "Eric", "Shirley", "June", "Steven", "Norman", "Shawn", "Scott", "Doloris", "Billie", "Christen", "Darlene", "Paul", "Mabel", "Mary", "Winifred", "Lisa", "Matthew", "Wayne", "Patricia", "Markus", "Peter", "Louis", "Werner", "Gregory", "Miguel", "Jeremy", "Ashley", "Scott", "Becky", "Mark", "Barry", "Robert", "Ann", "James", "George", "Orlando", "Regina", "Curtis", "Randolph", "Gary", "Gregory", "Brett", "Gloria"];
	lnames = ["Conn", "Lee", "Hartman", "Sweeney", "Groh", "Doolittle", "Martin", "Ogan", "Contreras", "Etheridge", "Sherrick", "Cantu", "Butler", "Steiner", "Gustafson", "Gaffney", "McCoy", "Guerrero", "Carlyle", "Roughton", "Emerson", "Larson", "Smotherman", "Parker", "Carrillo", "Fox", "Miller", "Ross", "Warwick", "Thompson", "Everson", "Hose", "Kersey", "Butler", "Thompson", "McLachlan", "O'Donnell", "Dean", "Wilson", "Wilson", "Meade", "Kent", "Billings", "Johnson", "English", "Dice", "King", "Oakes", "Chapman", "Spencer", "Jackson", "Brandt", "Greggs", "Hoang", "Means", "Harrell", "Scott", "Glover", "Pierce", "Jackson", "Tufts", "Moore", "Stern", "Campbell", "Farmer", "Harris", "Tilton", "Alston", "Guzik", "Stark", "Parker", "Lovely", "Stevenson", "Zuniga", "Laird", "Curry", "Kreider", "Deacon", "Guillotte", "Schuster", "Martin", "Corral", "Williamson", "Jones", "Stone", "Copeland", "Vanhouten", "Atkinson", "Miller", "Peden", "Branham", "Johnson", "Mead", "Levy", "Schroeder", "Dover", "Delgado", "Anderson", "Burger", "Wilson", "Holleman", "Lamar", "Varner", "Stanley", "Fletcher", "Chill", "Coffin", "Ross", "Burns", "Hodges", "Davis", "Dyson", "Pilger", "Spikes", "Clay", "Arteaga", "Watkins", "Stone", "Gonzalez", "Billings", "James", "Cryer", "Harms", "Simms", "Seigler", "Lewis", "Schoenrock", "Hennessey", "Jackson", "Bryant", "Petties", "Rains", "Walter", "Rodriguez", "Gray", "Ibarra", "Leaman", "Bullock", "Elliot", "Westmoreland", "Noe", "Disney", "Webber", "Smith", "Griffin", "Jacob", "Hileman", "Reynolds", "Bradburn", "Rincon", "Catania", "Williams", "Thrush", "Thompson", "Bonds", "Spain", "Slone", "Pena", "Padilla", "Doll", "Aguilar", "Kennedy", "Foos", "Williams", "Williams", "McKinney", "Vasquez", "Grubbs", "Trotter", "Luna", "Eggleston", "White", "Scott", "Clark", "Wu", "Gardner", "Beauchamp", "Ross", "Frazier", "Ping", "Villalpando", "Palmatier", "Taylor", "Reid", "Yoder", "Reed", "Morgan", "Neill", "Sterling", "Schatz", "Branham", "Smith", "Garcia", "Raymond", "Miller", "Post", "Anderson", "Whittaker", "Noble", "Bond", "Dinkins", "Lattin", "Macri", "Nash", "James", "Arnold", "Ford", "Fillion", "Sanchez", "Hill", "Kendall", "Goss", "Mitchell", "Wan", "Hurt", "Dean", "Nieves", "Vickers", "Marlowe", "Brooks", "Gist", "Palmer", "Burch", "McClanahan", "Samuels", "Green", "Hutchinson", "Fisher", "Naquin", "Norman", "McCarthy", "Rickard", "Schrom", "Escobedo", "Gomez", "Davis", "Lynch", "Coughlin", "Travis", "Moffett", "Haveman", "Jones", "Mills", "Gimbel", "Kitchen", "Larsen", "Kinley", "Ancheta", "Hayashi", "Read", "Bryant", "Almond", "Young", "Weiss", "Holloway", "Baines", "Eaton", "Rhodes", "Amos", "Severt", "Hendricks", "Dow", "Roger", "Lore", "Phillips", "Clark", "Bell", "Benson", "Hinton", "Lee", "Taylor", "Bailey", "Minarik", "Deluca", "Greene", "Walton", "Scott", "Parker", "Rubin", "Osgood", "Lee", "Woods", "Bowen", "Polite", "Jennings", "Magoon", "Evans", "Herrera", "Rogers", "West", "Starr", "Tong", "Yang", "Tovar", "Thornton", "Nunes", "Fischer", "Pound", "Spillers", "Fortune", "Vang", "Johnson", "Alexander", "Arnold", "Le", "Roberts", "Bryson", "Price", "Watts", "Sweeney", "Wolfe", "Hendricks", "Peterson", "Jordan", "Inoue", "Story", "Amaro", "McCormick", "Edwards", "Sullivan", "Ramirez", "Blankenship", "Macpherson", "Brown", "Cardenas", "Soto", "Flores", "Sine", "Montes", "Flores", "Peterman", "Hedrick", "Wilson", "Bostick", "Irvin", "Tebo", "Emerick", "Donaghy", "Cook", "Horton", "Snyder", "Burg", "Wynn", "McDaniel", "McCallum", "Raposo", "Etheridge", "Hansen", "Cash", "Vang", "Fraser", "Pine", "Hartwell", "Jones", "Willingham", "Overly", "Trainor", "Miller", "Morales", "Morris", "Elrod", "Albertson", "Street", "Walton", "Fleming", "Yingst", "Wendt", "Gentle", "Schmidt", "Medley", "Clark", "Smith", "Sharp", "Wagner", "Keegan", "Gaston", "Hutchings", "Burgess", "Carter", "Torres", "Schank", "Do", "Dykes", "Cross", "Carter", "Wright", "Rivera", "Gaines", "Perez", "Bacon", "McDonald", "Medina", "Lessard", "Strickland", "Zielke", "Burgos", "Greene", "King", "Shipman", "Schexnayder", "Vargas", "Hood", "Pratt", "Mansour", "Jenkins", "Coons", "Thornton", "Nadeau", "Sloane", "Westcott", "Barton", "Clark", "Jones", "Ohler", "Chandler", "Dale", "Caldwell", "Urena", "Grose", "Lawrence", "Adams", "Snowden", "Pollard", "Martinez", "Aparicio", "McNabb", "Esquivel", "Schilling", "Hilton", "Laplante", "Chadwick", "Milstead", "Bruce", "Stoney", "Cook", "Maney", "Owens", "Harrington", "Saxton", "Smith", "Gabriel", "Dean", "Harned", "Hauser", "Pullum", "Ray", "Kern", "Bronson", "Russell", "Castro", "Dunlap", "Birdsong", "Laxton", "Lafon", "Turner", "Kang", "Greene", "Adams", "Council", "Puga", "Handley", "Russell", "Teasley", "Phelps", "Hansen", "Dellinger", "Pope", "Lewis", "Christensen", "Hogg", "Kennard", "Stacy", "Flanagan", "Bryson", "Cannon", "Alford", "Pelaez", "Harvey", "Fletcher", "White", "Jenkins", "Link", "Murrell", "Sizemore", "Singleton", "Garcia", "Kemp", "Harding", "Mims", "Kirwan", "Plascencia", "Funk", "Allen", "Ellis", "Allaire", "Ayala", "Steverson", "Basso", "Vaughan", "Mooney", "Patterson", "Young", "Lombardo", "Pincus", "Ellis", "Reedy", "Humphrey", "Stevenson", "Price", "Fisher", "Gates", "Hall", "Burkett", "Scroggs", "Lassiter", "Jennings", "Brown", "Murphy", "Larrabee", "Powell", "Mack", "Crockett", "Hilton", "Parks", "Boyd", "Barrett", "Alford", "Pierce", "Pendergrass", "Parker", "May", "Hodges", "Carter", "Smith", "Garcia", "Perry", "Bade", "Britt", "Reed", "Christiansen", "Smith", "Ohman", "Miller", "Swain", "Farmer", "Phillips", "Glassman", "Hanson", "Caton", "Preston", "Estrada", "Maynard", "Allee", "David", "Durham", "McCracken", "McElroy", "Candelaria", "Grimes", "Mack", "McQuillen", "Smith", "Tibbetts", "Maxwell", "Tirado", "Vaughn", "Bourne", "Randolph", "Smith", "Geno", "Vancleave", "Don", "Smith", "Westman", "Franz", "Hungerford", "Gardea", "Crichton", "Say", "Mock", "Davila", "Townley", "Steele", "Sexton", "Foret", "Page", "Crosby", "Rodriquez", "Crum", "Lindsey", "Williams", "Valencia", "Garrett", "Zucker", "Richardson", "Rodriguez", "McAdams", "Oneal", "Valdez", "Foulks", "Cunningham", "Miller", "Guerrero", "Hutchison", "Sloan", "Chaney", "Nicholas", "Sumler", "Olive", "Nehls", "Wyatt", "Karp", "Markowitz", "Roberts", "Crowder", "Graham", "Hile", "Castillo", "Benavides", "Drummond", "Johnson", "Dunn", "Salinas", "Griffin", "Lane", "Jenkins", "Lester", "Frye", "Gonzales", "Muller", "Pucci", "Conkle", "Knipp", "Talarico", "Collie", "Steen", "Holcombe", "Torres", "Grant", "Mann", "Luke", "Sanders", "Jenkins", "Camacho", "Griffin", "Ethridge", "Ellis", "Greer", "Mascarenas", "Jimison", "Vazquez", "Whitt", "Andrade", "Clark", "Johnson", "Grose", "Hill", "Hamlet", "White", "Wymore", "Martinez", "Carroll", "Thompson", "Renfro", "Charest", "Heffernan", "Rodriguez", "Segura", "Trader", "McCarthy", "Kerby", "Jacobs", "Boynton", "Milburn", "Greene", "McCarty", "Guidry", "Hubbard", "Smothers", "Stanford", "Lee", "Monger", "McCulloch", "Ramirez", "Westover", "Arias", "Baird", "Farrell", "Bunnell", "Hodges", "Khalil", "Lee", "Sweeten", "Gray", "Farrell", "Smith", "Peterman", "Fan", "Pellegrini", "Lewis", "Pereda", "Williamson", "Tyson", "Rivera", "Vang", "Bowman", "Bonetti", "Wingo", "James", "Stone", "Neal", "Erickson", "Rico", "Swanson", "Sheets", "Lafave", "Johnson", "Davis", "Sherman", "Miller", "Roy", "Rich", "Leach", "Williams", "Springer", "Aldrich", "Ferrill", "Green", "Bridges", "Davis", "Hernandez", "Conner", "Wargo", "Smith", "Robertson", "Dawson", "Williams", "Hilton", "Moore", "Blanton", "Montford", "Cork", "Cochran", "Schenk", "Gooch", "Norsworthy", "Dixon", "Rivera", "Lachance", "Baker", "Broadway", "Gooding", "Hodo", "Field", "Kraus", "Breen", "Russell", "Hoff", "Williams", "O'Connor", "Anderson", "Pope", "Smith", "Fernandez", "McCaleb", "Pryor", "Hornback", "Phipps", "Wisniewski", "Bacchus", "Phillips", "Kahler", "Davis", "Rhodes", "Bassett", "Spano", "Slaugh", "Jackson", "Lazo", "Duca", "Parker", "Coppola", "Chapman", "Shelley", "Adams", "Slemp", "Mosley", "Mudge", "Jacobs", "Coleman", "Wetzel", "Trueblood", "Stewart", "Roberts", "Diebold", "Phillips", "Martin", "West", "Heckler", "Moreno", "Moody", "Roberts", "Roberts", "Fry", "Jackson", "Bessette", "Pauley", "Rose", "McGarvey", "Delacerda", "King", "Vidal", "Hunter", "Munson", "Ward", "Mullins", "Grimes", "Croll", "Halpern", "Bell", "Williams", "Null", "Ragland", "Abbott", "Schreffler", "Pospisil", "Craft", "Gomez", "Gruber", "Hamann", "Smith", "Gaines", "Harris", "Austin", "Lin", "Baker", "Ham", "Montoya", "Lee", "Heintz", "Louis", "Harris", "Johnson", "Mickle", "Schultz", "Pettigrew", "Gonzales", "Selfridge", "Snyder", "Martz", "Sachs", "Navarro", "Decarlo", "Clark", "Kidd", "Smith", "Langley", "Hessler", "Beck", "Stage", "Pedersen", "Angelo", "Bishop", "Cortez", "Caple", "Carson", "Anderson", "Huffman", "Kelly", "Kumar", "Brandon", "Wright", "Higgins", "Maddox", "Melton", "Sherman", "Green", "Cyrus", "Gay", "Isaacs", "Bezanson", "Fisher", "Joseph", "Chavez", "Lindner", "Silva", "McGowen", "Harewood", "Lafleur", "Hamilton", "Pinson", "Alvarez", "Sawyers", "McLendon", "Gore", "Hall", "Jackson", "Brown", "Holloway", "Miller", "Shipley", "Fisher", "Cave", "Helman", "Gordon", "Jackson", "Stratton", "Dancy", "Crist", "Valdez", "Spaulding", "Howarth", "Mitchell", "Romano", "Mosley", "Stewart", "Sands", "Wurth", "Asher", "McLendon", "Costello", "Johnson", "Draper", "Beck", "Colvin", "Leber", "Ledbetter", "Mickelson", "Bailey", "McCord", "Adams", "Marcoux", "Collman", "Keach", "Brown", "Granderson", "Taylor", "Harris", "Ramsey", "Alban", "Baltz", "Ware", "Suarez", "Olson", "Holman", "Rubino", "McCallum", "White", "Torrez", "Watkins", "Guerra", "Turner", "Johnson", "Gorton", "Berrios", "Pruitt", "Walker", "Searfoss", "Troche", "Alexander", "Quick", "Ku", "Greene", "Altman", "Alvarez", "Bell", "Miller", "Omalley", "Holland", "Bennett", "Stonge", "Jones", "Eggers", "Smith", "Wilcox", "Witte", "Gibson", "Gerhardt", "Parrish", "Moore", "Downey", "Tello", "Walker", "Garcia", "Saunders", "Douglas", "Ibanez", "Stapleton", "Granillo", "Brown", "Griffin", "Fowler", "Hernandez", "James", "Huddleston", "Lamoureux", "Carpenter", "Bowen", "Elkins", "Dorsey"];
	nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	tally = 1;
	numsatend = Math.floor(Math.random() * (4 - 1) + 1);;
	domain = userDomain;
	if (domain[0] != "@") domain = "@" + domain;
	if (tally > 5000 || domain == "") alert("5000 max");
	else {
		var rows = tally;
		if (tally > 50) rows = 50;
		var maxlength = 10;
		for (var i = 0; i < tally; i++) {
			if (i <= 10000) {
				fnames.sort(randOrd);
				lnames.sort(randOrd);
				var newemail = fnames[0] + lnames[0];
				for (var j = 0; j < numsatend; j++) {
					nums.sort(randOrd);
					newemail += nums[0];
				}
				newemail += domain;
				if (newemail.length > maxlength) maxlength = newemail.length
			}
		}
	}
	function randOrd() {
		return (Math.round(Math.random()) - 0.5);
	}
    const fname = document.getElementById("fname");
    fname.textContent = fnames[0];
    const lname = document.getElementById("lname");
    lname.textContent = lnames[0];
    const email = document.getElementById("email");
    email.textContent = newemail;
}


function getPhone(){
    number = Math.floor(Math.pow(10, 10-1) + Math.random() * 9 * Math.pow(10, 10-1));
    return number.toString().replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
}


function getAddress(addressString){
    TRANSLATIONS = [
        ["street", "st.", "st"],
        ["drive", "dr.", "dr"],
        ["lane", "ln.", "ln"],
        ["avenue", "ave.", "ave"],
        ["west", "w.", "w"],
        ["east", "e.", "e"],
        ["north", "n.", "n"],
        ["south", "s.", "s"],
        ["east", "e.", "e"],
        ["boulevard", "blvd", "blvd."],
        ["mountain", "mtn.", "mtn"]
    ];
    
    UNITS = ["Unit A", "Unit B", "Unit C"];
    
    PREFIXES = ["ABC", "XYZ", "AAA", "BBB", "CCC", "DDD"];

    jigs = new Set([addressString]);
    lines = addressString.split("\n");
    parts = lines[0].split(" ");
    for (var index = 0; index < parts.length; index++) {
        part = parts[index];
        TRANSLATIONS.forEach(entry => {
            possibleJigs = [];
            entry.forEach(val => {
                if (part.toLowerCase() === val) {
                    entry.forEach(value => {
                        if (value !== val && (!value.endsWith(".") || part.endsWith("."))) {
                            possibleJigs.push(value);
                        }
                    });
                }
            });
            possibleJigs.forEach(jig => {
                jigs.forEach(address => {
                    fullJig = "";
                    valueLines = address.split("\n");
                    valueParts = valueLines[0].split(" ");
                    for (var i = 0; i < valueParts.length; i++) {
                        fullJig += (i !== index ? valueParts[i] : jig) + " ";
                    }
                    fullJig = fullJig.substring(0, fullJig.length - 1);
                    for (var i = 1; i < valueLines.length; i++) {
                        fullJig += "\." + valueLines[i];
                    }
                    jigs.add(fullJig);
                });
            });
        });
    }
    if (parts.length >= 3) {
        jigs.forEach(address => {
            if (lines.length == 1 && !address.includes("\n")) {
                addressParts = address.split(" ");
                for (var i = 2; i < addressParts.length; i++) {
                    if (addressParts.length == 3) {
                        if (addressParts[2].length < 3) {
                            continue;
                        }
                    }
                    splitAddress = "";
                    for (var j = 0; j < i; j++) {
                        splitAddress += addressParts[j] + " ";
                    }
                    splitAddress =
                        splitAddress.substring(0, splitAddress.length - 1) + "\.";
                    for (var j = i; j < addressParts.length; j++) {
                        splitAddress += addressParts[j] + " ";
                    }
                    jigs.add(splitAddress.substring(0, splitAddress.length - 1));
                }
            }
        });
    }
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < 4; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    const list = ['Apt', 'Suite', 'Building', 'Floor', 'Unit', 'Room'];
    const number = Math.floor(Math.random() * (30 - 1) + 1);

    return (`${result.toUpperCase()} 
            ${[...jigs][[Math.floor(Math.random() * jigs.size)]]} 
            ${list[Math.floor(Math.random() * list.length)]} 
            ${number}`);
}