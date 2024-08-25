import { Injectable } from '@angular/core';
import { Reader } from '../../shared/models/Book';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {
  private readers: Reader[] = [
    {
      id: 1,
      name: 'John Doe',
      books: [
        {
          book: {
            id: 1,
        name: 'A Calamity Of Souls',
        price: 10,
        favorite: false,
        imageUrl: '/assets/images/ACalamityOfSouls.jpg',
        tags: ['Thriller'],
        description: `Set in the tumultuous year of 1968 in southern Virginia, a racially-charged murder case sets a duo of white and Black lawyers against a deeply unfair system as they work to defend their wrongfully-accused Black defendants in this courtroom drama from #1 New York Times bestselling author David Baldacci.

        Jack Lee is a white lawyer from Freeman County, Virginia, who has never done anything to push back against racism, until he decides to represent Jerome Washington, a Black man charged with brutally killing an elderly and wealthy white couple. Doubting his decision, Lee fears that his legal skills may not be enough to prevail in a case where the odds are already stacked against both him and his client. And he quickly finds himself out of his depth when he realizes that what is at stake is far greater than the outcome of a murder trial.
        
        Desiree DuBose is a Black lawyer from Chicago who has devoted her life to furthering the causes of justice and equality for everyone. She comes to Freeman County and enters a fractious and unwieldy partnership with Lee in a legal battle against the best prosecutor in the Commonwealth. Yet DuBose is also aware that powerful outside forces are at work to blunt the victories achieved by the Civil Rights era.
        
        Lee and DuBose could not be more dissimilar. On their own, neither one can stop the prosecution’s deliberate march towards a guilty verdict and the electric chair. But together, the pair fight for what once seemed impossible: a chance for a fair trial and true justice.
        
        Over a decade in the writing, A Calamity of Souls breathes richly imagined and detailed life into a bygone era, taking the reader through a world that will seem both foreign and familiar.`,
        Author:"",
        publisher:"",
        dateOfPublish: new Date(2023, 0, 1),
          },
          rating: 4,
          status: 'Reading'
        },
        // Add more books with ratings and statuses...
      ]
    },
    // Add more readers with their books...
  ];

  constructor() { }

  getReaderById(id: number): Reader | undefined {
    return this.readers.find(reader => reader.id === id);
  }
}
