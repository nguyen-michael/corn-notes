GET: localhost:8080/api/note/[Note's ID]

RESPONSE: (With all associated questions populated fully)
``` json
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

------

POST: localhost:8080/api/new/note

BODY: (All optional, will default to empty.)
``` json
{
	"topic": "Skler Tero",
	"subtopic": "string X",
    "image_url": "890x502.jpg",
    "summary": "Manifolded Dingle those strings. :D",
    "externalAssets": ["cat.com", "fish.dog", "dragon.boo"]
}
```

RESPONSE: (The full mongo document)

``` json
{
    "__v": 0,
    "_id": "5959539a9eb24404641db760",
    "questions": [],
    "externalAssets": [
        "cat.com",
        "fish.dog",
        "dragon.boo"
    ],
    "summary": "Manifolded Dingle those strings. :D",
    "image_url": "890x502.jpg",
    "subtopic": "string X",
    "topic": "Skler Tero",
    "updatedAt": "2017-07-02T20:12:10.001Z",
    "createdAt": "2017-07-02T20:12:10.001Z"
}
```

------

POST: localhost:8080/api/new/question

BODY: (All optional, will default to elaboration)
``` json
{
    "questionType": "distinction",
    "questionText": "Will Will will Will's Will?",
    "answer": "Only Will will will Will's Will."
}
```

RESPONSE: (full document)
``` json
{
    "__v": 0,
    "questionText": "Will Will will Will's Will?",
    "_id": "595955da9eb24404641db762",
    "answer": "Only Will will will Will's Will.",
    "questionType": "distinction",
    "updatedAt": "2017-07-02T20:21:46.883Z",
    "createdAt": "2017-07-02T20:21:46.883Z"
}
``` 
------

PUT: localhost:8080/api/update/note

BODY: (Any are optional, will only update declared fields.)
``` json
{
    "_id": "59557b7502ebab1614dbfa1d",
	"subtopic": "Forvgest",
    "summary": "How about yarn"
}
```

RESPONSE: (newly updated full document)
``` json
{
    "_id": "59557b7502ebab1614dbfa1d",
    "__v": 0,
    "questions": [
        "5955ac59dd1c7410a0461c37"
    ],
    "externalAssets": [
        "cat.com",
        "fish.dog"
    ],
    "summary": "How about yarn",
    "image_url": "http://cheltenhamfestivals-assets.s3.amazonaws.com/assets/Image/254-fitandcrop-890x502.jpg",
    "subtopic": "Forvgest",
    "topic": "String Theory",
    "updatedAt": "2017-06-29T22:13:09.892Z",
    "createdAt": "2017-06-29T22:13:09.892Z"
}
``` 
------

PUT: localhost:8080/api/update/question

BODY: (any are optional, will only update declared fields)
``` json
{
	"_id": "5955ac59dd1c7410a0461c37",
    "questionText": "Orphaned? I say.",
    "answer": "Quiile Neverat Gaol"
}
```

RESPONSE: 
``` json
{
    "_id": "5955ac59dd1c7410a0461c37",
    "questionText": "Orphaned? I say.",
    "__v": 0,
    "answer": "Quiile Neverat Gaol",
    "questionType": "elaboration",
    "updatedAt": "2017-06-30T01:41:45.176Z",
    "createdAt": "2017-06-30T01:41:45.176Z"
}
``` 
------

PUT: localhost:8080/api/update/addQuestionToNote

BODY: (neither are optional)
``` json
{
    "noteId": "5959539a9eb24404641db760",
    "questionId": "595955da9eb24404641db762"
} 
```

RESPONSE: (Returns note with updated question, unpopulated)
``` json
{
    "_id": "5959539a9eb24404641db760",
    "__v": 0,
    "questions": [
        "595955da9eb24404641db762"
    ],
    "externalAssets": [
        "cat.com",
        "fish.dog",
        "dragon.boo"
    ],
    "summary": "Manifolded Dingle those strings. :D",
    "image_url": "890x502.jpg",
    "subtopic": "string X",
    "topic": "Skler Tero",
    "updatedAt": "2017-07-02T20:12:10.001Z",
    "createdAt": "2017-07-02T20:12:10.001Z"
}
``` 
------
