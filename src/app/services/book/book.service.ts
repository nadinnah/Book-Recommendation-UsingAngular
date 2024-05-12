import { Injectable } from '@angular/core';
import { Book } from '../../shared/models/Book';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(){}
  toggleFavorite(book: Book): void {
    book.favorite = !book.favorite; // Toggle the favorite status
  }

  getBookById(id: number): Book{
    return this.getAll().find(book => book.id == id)!;
  }

  getAllTags(): Tag[] {
    return [
    { name: 'All', count:11},
    {name:'Fantasy',count:4},
    {name:'Sci-Fi',count:0},
    {name:'Romance',count:6},
    {name:'Mystery',count:2},
    {name:'Thriller',count:3},
  ];
    
  }


  getAllBooksByTag(tag: string): Book[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(book => book.tags?.includes(tag));
  }

  getAll(): Book[] {
    return [
      {
        id: 1,
        name: 'A Calamity Of Souls',
        price: 10,
        favorite: false,
        imageUrl: '/assets/images/ACalamityOfSouls.jpg',
        tags: ['Thriller', 'Action', 'Crime'],
        description: `Set in the tumultuous year of 1968 in southern Virginia, a racially-charged murder case sets a duo of white and Black lawyers against a deeply unfair system as they work to defend their wrongfully-accused Black defendants in this courtroom drama from #1 New York Times bestselling author David Baldacci.

        Jack Lee is a white lawyer from Freeman County, Virginia, who has never done anything to push back against racism, until he decides to represent Jerome Washington, a Black man charged with brutally killing an elderly and wealthy white couple. Doubting his decision, Lee fears that his legal skills may not be enough to prevail in a case where the odds are already stacked against both him and his client. And he quickly finds himself out of his depth when he realizes that what is at stake is far greater than the outcome of a murder trial.
        
        Desiree DuBose is a Black lawyer from Chicago who has devoted her life to furthering the causes of justice and equality for everyone. She comes to Freeman County and enters a fractious and unwieldy partnership with Lee in a legal battle against the best prosecutor in the Commonwealth. Yet DuBose is also aware that powerful outside forces are at work to blunt the victories achieved by the Civil Rights era.
        
        Lee and DuBose could not be more dissimilar. On their own, neither one can stop the prosecution’s deliberate march towards a guilty verdict and the electric chair. But together, the pair fight for what once seemed impossible: a chance for a fair trial and true justice.
        
        Over a decade in the writing, A Calamity of Souls breathes richly imagined and detailed life into a bygone era, taking the reader through a world that will seem both foreign and familiar.`,
        Author:"",
        publisher:"",
        dateOfPublish: 10,
      },
      {
        id: 2,
        name: 'A Court Of Mist And Fury',
        price: 20,
        favorite: true,
        imageUrl: '/assets/images/ACourtOfMistAndFury.jpg',
        tags: ['Fantasy', 'Romance', 'Young Adult'],
        description: `Goodreads Choice AwardWinner for Best Young Adult Fantasy & Science Fiction (2016)
        The seductive and stunning #1 New York Times bestselling sequel to Sarah J. Maas's spellbinding A Court of Thorns and Roses .
        
        Feyre has undergone more trials than one human woman can carry in her heart. Though she's now been granted the powers and lifespan of the High Fae, she is haunted by her time Under the Mountain and the terrible deeds she performed to save the lives of Tamlin and his people.
        
        As her marriage to Tamlin approaches, Feyre's hollowness and nightmares consume her. She finds herself split into two different one who upholds her bargain with Rhysand, High Lord of the feared Night Court, and one who lives out her life in the Spring Court with Tamlin. While Feyre navigates a dark web of politics, passion, and dazzling power, a greater evil looms. She might just be the key to stopping it, but only if she can harness her harrowing gifts, heal her fractured soul, and decide how she wishes to shape her future-and the future of a world in turmoil.
        
        Bestselling author Sarah J. Maas's masterful storytelling brings this second book in her dazzling, sexy, action-packed series to new heights.`
        ,
        Author:"",
        publisher:"",
        dateOfPublish: 10,},
      {
        id: 3,
        name: 'A Court Of Thorns And Roses',
        price: 5,
        favorite: false,
        imageUrl: '/assets/images/ACourtOfThornsAndRoses.jpg',
        tags: ['Romance', 'Fantasy'],
        description: `Goodreads Choice AwardNominee for Best Young Adult Fantasy & Science Fiction (2015)
        When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution. Dragged to a treacherous magical land she knows about only from legends, Feyre discovers that her captor is not truly a beast, but one of the lethal, immortal faeries who once ruled her world.
        
        At least, he’s not a beast all the time.
        
        As she adapts to her new home, her feelings for the faerie, Tamlin, transform from icy hostility into a fiery passion that burns through every lie she’s been told about the beautiful, dangerous world of the Fae. But something is not right in the faerie lands. An ancient, wicked shadow is growing, and Feyre must find a way to stop it, or doom Tamlin—and his world—forever.
        
        From bestselling author Sarah J. Maas comes a seductive, breathtaking book that blends romance, adventure, and faerie lore into an unforgettable read.`
        ,
        Author:"",
        publisher:"",
        dateOfPublish: 10,},
      {
        id: 4,
        name: 'A Court Of Wings And Ruin',
        price: 2,
        favorite: true,
        imageUrl: '/assets/images/ACourtOfWingsAndRuin.jpg',
        tags: ['Fantasy', 'Romance', 'Young Adult'],
        description: `Winner for Best Young Adult Fantasy & Science Fiction (2017)
        The epic third novel in the #1 New York Times bestselling Court of Thorns and Roses series by Sarah J. Maas.
        
        Feyre has returned to the Spring Court, determined to gather information on Tamlin's actions and learn what she can about the invading king threatening to bring her land to its knees. But to do so she must play a deadly game of deceit. One slip could bring doom not only for Feyre, but for everything-and everyone-she holds dear. 
        
        As war bears down upon them all, Feyre endeavors to take her place amongst the High Fae of the land, balancing her struggle to master her powers-both magical and political-and her love for her court and family. Amidst these struggles, Feyre and Rhysand must decide whom to trust amongst the cunning and lethal High Lords, and hunt for allies in unexpected places.

        In this thrilling third book in the #1 New York Times bestselling series from Sarah J. Maas, the fate of Feyre's world is at stake as armies grapple for power over the one thing that could destroy it.`
        ,
        Author:"",
        publisher:"",
        dateOfPublish: 10,},
      {
        id: 5,
        name: 'Funny Story',
        price: 11,
        favorite: false,
        imageUrl: '/assets/images/FunnyStory.jpg',
        tags: ['Fiction', 'Romance', 'Contemporary'],
        description: `A shimmering, joyful new novel about a pair of opposites with the wrong thing in common.

        Daphne always loved the way her fiancé Peter told their story. How they met (on a blustery day), fell in love (over an errant hat), and moved back to his lakeside hometown to begin their life together. He really was good at telling it…right up until the moment he realized he was actually in love with his childhood best friend Petra.
        
        Which is how Daphne begins her new story: Stranded in beautiful Waning Bay, Michigan, without friends or family but with a dream job as a children’s librarian (that barely pays the bills), and proposing to be roommates with the only person who could possibly understand her predicament: Petra’s ex, Miles Nowak.
        
        Scruffy and chaotic—with a penchant for taking solace in the sounds of heart break love ballads—Miles is exactly the opposite of practical, buttoned up Daphne, whose coworkers know so little about her they have a running bet that she’s either FBI or in witness protection. The roommates mainly avoid one another, until one day, while drowning their sorrows, they form a tenuous friendship and a plan. If said plan also involves posting deliberately misleading photos of their summer adventures together, well, who could blame them?
        
        But it’s all just for show, of course, because there’s no way Daphne would actually start her new chapter by falling in love with her ex-fiancé’s new fiancée’s ex…right?`
        ,
        Author:"",
        publisher:"",
        dateOfPublish: 10,},
      {
        id: 6,
        name: 'Home Is Where The Bodies Are',
        price: 9,
        favorite: false,
        imageUrl: '/assets/images/HomeIsWhereTheBodiesAre.jpg',
        tags: ['Thriller', 'Horror', 'Mystery'],
        description: `From New York Times bestselling author of The Perfect Marriage and You Shouldn’t Have Come Here comes a chilling family thriller about the (sometimes literal) skeletons in the closet.

        After their mother passes, three estranged siblings reunite to sort out her estate. Beth, the oldest, never left home. She stayed with her mom, caring for her until the very end. Nicole, the middle child, has been kept at arm’s length due to her ongoing battle with a serious drug addiction. Michael, the youngest, lives out of state and hasn’t been back to their small Wisconsin town since their father ran out on them seven years before.
        
        While going through their parent’s belongings, the siblings stumble upon a collection of home videos and decide to revisit those happier memories. However, the nostalgia is cut short when one of the VHS tapes reveals a night back in 1999 that none of them have any recollection of. On screen, their father appears covered in blood. What follows is a dead body and a pact between their parents to get rid of it, before the video abruptly ends.
        
        Beth, Nicole, and Michael must now decide whether to leave the past in the past or uncover the dark secret their mother took to her grave.`
        ,
        Author:"",
        publisher:"",
        dateOfPublish: 10,},
      {
        id: 7,
        name: 'Just For The Summer',
        price: 9,
        favorite: false,
        imageUrl: '/assets/images/JustForTheSummer.jpg',
        tags: ['Fiction', 'Romance', 'Contemporary'],
        description: `Justin has a curse, and thanks to a Reddit thread, it's now all over the internet. Every woman he dates goes on to find their soul mate the second they break up. When a woman slides into his DMs with the same problem, they come up with a plan: They'll date each other and break up. Their curses will cancel each other’s out, and they’ll both go on to find the love of their lives. It’s a bonkers idea… and it just might work.

        Emma hadn't planned that her next assignment as a traveling nurse would be in Minnesota, but she and her best friend agree that dating Justin is too good of an opportunity to pass up, especially when they get to rent an adorable cottage on a private island on Lake Minnetonka.
        
        It's supposed to be a quick fling, just for the summer. But when Emma's toxic mother shows up and Justin has to assume guardianship of his three siblings, they're suddenly navigating a lot more than they expected–including catching real feelings for each other. What if this time Fate has actually brought the perfect pair together?`
        ,
        Author:"",
        publisher:"",
        dateOfPublish: 10,},
      {
        id: 8,
        name: 'King Of Sloth',
        price: 9,
        favorite: false,
        imageUrl: '/assets/images/KingOfSloth.jpg',
        tags: ['Fiction', 'Romance', 'Fantasy'],
        description: `He'd never wanted anyone enough to chase them...until he met her.

        Charming, easygoing, and rich beyond belief, Xavier Castillo has the world at his fingertips. 
        
        He also has no interest in taking over his family’s empire (much to his father’s chagrin), but that hasn’t stopped women from throwing themselves at him…unless the woman in question is his publicist. 
        
        Nothing brings him more joy than riling her up, but when a tragedy forces them closer than ever, he must grapple with the uncertainty of his future—and the realization that the only person immune to his charms is the only one he truly wants.  
        
        ***
        Cool, intelligent, and ambitious, Sloane Kensington is a high-powered publicist who’s used to dealing with difficult clients. 
        
        However, none infuriate—or tempt—her more than a certain billionaire heir, with his stupid dimples and laid-back attitude. 
        
        She may be forced to work with him, but she’ll never fall for him…no matter how fast he makes her heart beat or how thoughtful he is beneath his party persona. 
        
        He’s her client, and that’s all he’ll ever be. Right?`
        ,
        Author:"",
        publisher:"",
        dateOfPublish: 10,},
      {
        id: 9,
        name: 'Murder Your Employer',
        price: 9,
        favorite: false,
        imageUrl: '/assets/images/MurderYourEmployer.jpg',
        tags: ['Thriller', 'Humor', 'Mystery'],
        description: "Who hasn't wondered for a split second what the world would be like the object of your affliction ceased to exist? But then you've probably never heard of The McMasters Conservatory, dedicated to the consummate execution of the homicidal arts. To gain admission, a student must have an ethical reason for erasing someone who deeply deserves a fate no worse (nor better) than death."
        ,
        Author:"",
        publisher:"",
        dateOfPublish: 10,},
      {
        id: 10,
        name: 'Only The Brave',
        price: 9,
        favorite: false,
        imageUrl: '/assets/images/OnlyTheBrave.jpg',
        tags: ['Historical Fiction', 'Historical Romance'],
        description: "A powerful new novel from Danielle Steel, whose countless #1 New York Times bestselling novels have made her one of America’s favorite storytellers."
        ,
        Author:"",
        publisher:"",
        dateOfPublish: 10,},
      {
        id: 11,
        name: 'The Women',
        price: 9,
        favorite: false,
        imageUrl: '/assets/images/TheWomen.jpg',
        tags: ['Historical Fiction', 'War', 'Adult'],
        description: `An intimate portrait of coming of age in a dangerous time and an epic tale of a nation divided.

        Women can be heroes. When twenty-year-old nursing student Frances “Frankie” McGrath hears these words, it is a revelation. Raised in the sun-drenched, idyllic world of Southern California and sheltered by her conservative parents, she has always prided herself on doing the right thing. But in 1965, the world is changing, and she suddenly dares to imagine a different future for herself. When her brother ships out to serve in Vietnam, she joins the Army Nurse Corps and follows his path.
        
        As green and inexperienced as the men sent to Vietnam to fight, Frankie is over- whelmed by the chaos and destruction of war. Each day is a gamble of life and death, hope and betrayal; friendships run deep and can be shattered in an instant. In war, she meets—and becomes one of—the lucky, the brave, the broken, and the lost.
        
        But war is just the beginning for Frankie and her veteran friends. The real battle lies in coming home to a changed and divided America, to angry protesters, and to a country that wants to forget Vietnam.
        
        The Women is the story of one woman gone to war, but it shines a light on all women who put themselves in harm’s way and whose sacrifice and commitment to their country has too often been forgotten. A novel about deep friendships and bold patriotism, The Women is a richly drawn story with a memorable heroine whose idealism and courage under fire will come to define an era.`
        ,
        Author:"",
        publisher:"",
        dateOfPublish: 10,},
    ];
  }
}
