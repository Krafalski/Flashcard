### User Stories

As a user, I would like to


####  /signup
  - be able to create a login so that I can log in
    - create basic html pages
    - create a log in page
    - create a form for log in
    - link it to the database
    - check the database that it is doing what it needs to be doing and communicating with the server



####   /
  - be able to log in so that I can have access to my 'stuff'
   - create a page that has two form fields for name and password
   - a submit button to submit START WITH THIS - create user stuff later...
   - be able to check the database and then send through to the proper routes
   - be able to give an error if name/password does not match
   - use the function that checks the user and then allows other functions/routes to happen



####   /?????????
  - be able to log out from any page so that I can log out without hassle
    - create a logout function
    - make it work on one page
    - make it work on many pages - or at least link it to the log out page. Maybe it/the links could redirect to a logout page?

  - be able to view all my cards so that I can keep track of what I have and update it as needed
#### /cards
    - make a page that will render the database entries as a list
      - make buttons for viewing a single card (then from the single card be able to edit stuff-see later DO THIS LATER)
      - make list items clickable to show individual cards that will allow for (edit, delete - see other user stories)
      - DEFAULT by seeing both views at the same time so that I can see everything about my cards and decide what I want to do (edit/delete/review)
      -  BONUS by side one so that I can see a short list
        - give a different view of all my cards - using just one side - new route, same data, just truncate the displays



#### /cards/new  
  - be able to create a new card
      - go to a page with a form
      - fill out the appropriate fields:
        - be able to create an item/volcab word (side 1)
        - be able to create a description (side 2)  
      - have a submit button
      - reroute to another page -> probably the 'list cards page'


#### /cards/:id
  - be able to view an individual card
    - go to a page with a view of one card
    - have options to edit, delete the card (see edit, delete user stories) via buttons



#### /cards/:id/edit
   - be able to edit a card
      - go to a new route/page
      - edit either side - by showing a form field for each side
      - be able to see both sides at the same time - to see what the card is and know what to edit
      - have a submit button
      - have a cancel button
      - be able to delete a card so that I can keep my collection of cards relevant by pressing a delete button (see next one)
      - redirect to /cards after action is done


### /cards/:id/?????delete????
  - be able to delete a card because I don't want to see it/use it any more
    - have a button specifically for deleting the card - for now, must go to individual card to delete it. Maybe later give delete button on list page.
    - redirect to /cards

  ## BONUS

  - be able to study my cards

   - side one

      - be able to look at side one so I can think about what the definition is
      - be able to click and see side two

   - side two

     - be able to look at side two so I can think about the definition
     - ? be able to write-in an answer
     - be able to click and show side one

     - be able to study my cards one at a time
     - be able to choose which side I am shown
     - ? be shown the cards in random order


  - be able to immediately edit my cards in case I see an error or problem with a card (go to edit view)


---
#### More Bonus ideas
 - be able to choose how many cards the user studies
 - be able to choose which cards to study, rather than deleting them
 - be able to keep track of how many cards the user got correct
 - be able to mark side two answers as correct or wrong (not with writing up the word-for-word answer - just with a button)
 - be able to rank cards as easy/medium/hard or some other system to help organize studying
 - create topics so that cards can be grouped by topics
 - allow users to set topics that they create to be available to other users
 - allow users to add cards to an already set topic
 - allow cards to be seen per user or open to all users
 - allow users to add cards to a public topic
 - allow users to see all the cards from another topic
 -allow users to choose which cards from a public topic they would like to add to their collection
 - allow users to hide cards (remove from their collection) from being seen, rather than just delete them - so that they don't delete public cards created by others but can avoid seeing cards that they don't want to see
 - allow comments on cards that are not theirs, in case information is wrong or more could be added
 - allow images to be added to side two
 - add a date added - to keep track of how long a user has been trying to study a subject
