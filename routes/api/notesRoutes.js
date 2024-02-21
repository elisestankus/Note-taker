//dependencies
const router = require('express').Router();
const fs = require('fs');

// GET request for all notes
router.get('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
      } else {
        const notes = JSON.parse(data)
        res.json(notes)
      }
    })
});

// post route to add a new note
router.post('/', (req, res) => {
  // destructure items in req.body
  const { title, text } = req.body;
  // if there is a title and text --> post
  if (title && text) {
    // new object to be pushed to the db array
    const newNote = {
      title,
      text
    };
    // read existing notes
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedNotes = JSON.parse(data);

        // add new note to the existing array
        parsedNotes.push(newNote);

        // stringify so it can be saved
        const notesString = JSON.stringify(parsedNotes);

        // write updated notes array back to db file
        fs.writeFile('./db/db.json', notesString, (err) => 
        err
        ? console.error(err)
        : console.log(
            `Note added`
          )
        );
        const response = {
          status: 'success',
          body: notesString,
        };
        res.status(200).json(response)
      }
    })
  } else {
    res.status(500).json('Failed to post note :(');
  }
});

module.exports = router;