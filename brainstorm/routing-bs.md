## Proposed Routes and Descriptions

- __GET__ Get one Note by ID:
    - URL: 
        ```javascript
        "/api/note/:id"
        ```
    - _Request_ URL will pass ID as string
    - use `mongoose.Types.ObjectId(str)` to convert to proper ID type
    - _Response_ 
        ``` javascript
        {
    "_id": "594eadfaa6bbf62a547e53f0",
    "__v": 0,
    "questions": [
        {
            "_id": "594eadfaa6bbf62a547e53ef",
            "questionText": "Where?@ Are the dogs when you need them?",
            "__v": 0,
            "answer": "Mah Hellow Workd.",
            "questionType": "Requec Poop",
            "updatedAt": "2017-06-24T18:22:50.027Z",
            "createdAt": "2017-06-24T18:22:50.026Z"
        },
        {
            "_id": "594eb0f05af80d134044f681",
            "questionText": "Decisor?",
            "__v": 0,
            "answer": "BafdsMah Helafealow AerWaeafaeforkd.",
            "questionType": "RAranfp",
            "updatedAt": "2017-06-24T18:35:28.970Z",
            "createdAt": "2017-06-24T18:35:28.970Z"
        },
        {
            "_id": "594eb520901c8d2b6ce76e73",
            "questionText": "Decisor?",
            "__v": 0,
            "answer": "BafdsMah Helafealow AerWaeafaeforkd.",
            "questionType": "RAranfp",
            "updatedAt": "2017-06-24T18:53:20.674Z",
            "createdAt": "2017-06-24T18:53:20.674Z"
        },
        {
            "_id": "594eb531901c8d2b6ce76e74",
            "questionText": "Decisor?",
            "__v": 0,
            "answer": "BafdsMah Helafealow AerWaeafaeforkd.",
            "questionType": "RAranfp",
            "updatedAt": "2017-06-24T18:53:37.710Z",
            "createdAt": "2017-06-24T18:53:37.710Z"
        }
    ],
    "externalAssets": [],
    "summary": "Cat",
    "image_url": "hello.jpg",
    "subtopic": "",
    "topic": "Hello",
    "updatedAt": "2017-06-24T18:22:50.073Z",
    "createdAt": "2017-06-24T18:22:50.073Z"
}
        ```

- __POST__ Create New Note:
    - URL: 
    - _Request_:
        - 
    - When Note created, get it's ID
    - _Response_ with ID... useful for recall, updates, listing, etc.

- Create New Question: (needs note ID), Immediately assign to current note. Ideally, questions are created only when a notes page is active. Respond with question ID

- Update Note's fields:

- Update Question's fields:

- Add Question to Note:

- Stretch: Deletions: Think about "cascading" middle ware.