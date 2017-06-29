## Proposed Routes and Descriptions

- __GET__ Get one Note by ID:
    - URL: 
        ```javascript
        var url = "/api/note/:id"

        const id = mongoose.types.ObjectId.str(req.params.id);
        ```
    - _Request_ URL will pass ID as string
    - use `mongoose.Types.ObjectId(str)` to convert to proper ID type
    - _Response_ will be fully populated JSON.
    - Can use this to update a notes page.

- __POST__ Create New Note:
    - URL: 
    - _Request_:
        - 
    - When Note created, get it's ID
    - _Response_ with ID... useful for recall, updates, listing, etc.

- Create New Question: (needs note ID), Immediately assign to current note. Ideally, questions are created only when a notes page is active. Respond with question ID

- Update Notes:

- Update Question: