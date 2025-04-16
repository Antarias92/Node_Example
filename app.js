const express = require("express");
const app = express();
const port = process.env.PORT;
const eventRouter = express.Router();

app.use(express.static("public"));
//app.use(express.static("src/views"));
app.use(express.static("bower_components"));

app.set("views", "./src/views");
app.set("view engine", "ejs");

const eventsData = [{
    name: "Event 1",
    description: "first event",
    date: "2016.01.01",
    time: "1:00 PM",
    duration: "1 hour",
    location: {
        streetAddr: "101 Main St.",
        city: "Los Angeles"
        },
    capacity: 100
    },
    {
        name: "Event 2",
        description: "second event",
        date: "2016.02.02",
        time: "2:00 PM",
        duration: "2 hour",
        location: {
        streetAddr: "202 Main St.",
        city: "Los Angeles"
        },
    capacity: 200
    },
    {
        name: "Event 3",
        description: "third event",
        date: "2016.03.03",
        time: "3:00 PM",
        duration: "3 hour",
        location: {
        streetAddr: "303 Main St.",
        city: "Los Angeles"
        },
    capacity: 300
    },
]


eventRouter.route("/")
    .get((request, response) => {
        response.render("events", {list: ["first event", "2nd event", "3rd event"],
            nav: [{Link: "services ", Text: "services"}, {Link: "portfolio", Text: "portfolio "}, {Link: "about", Text:"about"}, {Link: "team", Text: "team"}, {Link: "contact", Text: "contact"}, {Link: "events", Text: "events"}],
            events: eventsData
        })
    });
eventRouter.route("/events")
    .get((request, response) => {
        respond.render("Hello Events");
    })

app.use("/events", eventRouter)    

app.get("/", (request, response) => {
    response.render("index", {list: ["first val", "2nd val", "3rd val"],
        nav: [{Link: "services", Text: "services"}, {Link: "portfolio", Text: "portfolio"}, {Link: "about", Text:"about"}, {Link: "team", Text: "team"}, {Link: "contact", Text: "contact"}, {Link: "events", Text: "events"}]
    });
});
app.get("/routing", (request, response) => {
    response.send("We routing");
});
app.listen(3002, () => console.log("Server is running on localhost: 3002"));