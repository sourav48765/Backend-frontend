import express from 'express'

const app = express();

//get a list of 5 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "joke 1",
            content: "This is a joke"
        },
        {
            id: 2,
            title: "joke 2",
            content: "Another joke"
        },
        {
            id: 3,
            title: "joke 3",
            content: "This is 3rd joke"
        },
        {
            id: 4,
            title: "joke 4",
            content: "This is 4th joke"
        },
        {
            id: 5,
            title: "joke 5",
            content: "This is 5th joke"
        },
    ]

    res.send(jokes)
}
)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost/${port}`);
})