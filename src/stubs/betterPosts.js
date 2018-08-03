import React from 'react';

var betterPosts = [
    {
        id: "101",
        username: "Tee George",
        userImage: "/images/tee_george.PNG",
        timePassed: "4 hours",
        title: "I worked at snag and it was AWESOME!",
        body: <div><p>Review: McDonalds</p><p>Rating: 5</p><br/><br/><p>I picked up a shift at McDonalds the other day, and it was amazing! I had a blast serving customers in a new environment, the team was friendly and I met lots of nice people! Oh yeah! Here's a picture of one of my coworkers being awesome</p><img style={{margin: '20px',
            width: '400px'}} src={'/images/mcdonalds_worker.jpg'}/></div>,
        likes: 50,
        date: new Date(),
        comments: [
            {
                username: "Jonathan Samson",
                userImage: "/favicon.ico",
                body: "Hello, this is a comment and I totally agree with your post!"
            },
            {
                username: "Jonathan Samson",
                userImage: "/favicon.ico",
                body: "Hello, this is a comment and I really disagree with your post!"
            }
        ],
        tags: ["shift review", 'McDonalds - Glen Allen']
    },{
        id: "102",
        username: "Sabrina Rusli",
        userImage: "/images/sabrina_rusli.PNG",
        timePassed: "2 hours",
        title: "anyone else getting their paychecks late?",
        body: <p>Hey, not sure if anyone worked the Chuck E Cheese shifts with me last thursday, but I haven't received payment and it's been more than 5 days. Does anyone know what's going on, has anyone gotten paid or is this just me? </p>,
        likes: 2,
        date: new Date(),
        comments: [
            {
                username: "Jonathan Samson",
                userImage: "/images/jonathan_samson.jpg",
                body: "I got paid, I'd wait for a little bit, otherwise you could send in a support ticket to snag!"
            }
        ],
        tags: ['shift issue', 'Chuck E Cheese']
    },{
        id: "103",
        username: "Jonathan Samson",
        userImage: "/images/jonathan_samson.jpg",
        timePassed: "4 hours",
        title: "Anyone want my shift at Potbelly?",
        body: <p>would anyone be interested in my shift at Potbelly Sandwich Shop tomorrow from 3:30-8:15? I am out of town at a family event and not sure if I will make it back to Richmond on time. if you want it let me know and I'll drop it!</p>,
        likes: 50,

        date: new Date(),
        comments: [
            {
                username: "Allie Curtin",
                userImage: "/images/alberta.PNG",
                body: "Shift is available now for other workers. Thank you Jonathan for letting the workers know and dropping it so other workers would have time to pick it up since you were not able to be there this afternoon."
            },
        ],
        tags: ['available shift', 'Potbelly Sandwhich Shop']
    },{
        id: "104",
        username: "Allie Curtin",
        userImage: "/images/alberta.PNG",
        timePassed: "4 hours",
        title: "How does dropping a shift work?",
        body: <p>I have a question about dropping a shift. I'm moving this weekend, and I picked up a shift for Sat at 7pm, thinking I was doing the bulk of the moving on Sunday. Now it looks like I will need Sat off.

            I remember you don't get a strike if you cancel a shift at least 48 hrs before it begins. My question is does it affect my rating with the client, even if I give the 48 hrs? It's the only client I'm certified at, and the most reliable one for me to snag shifts for, especially since shifts seem harder to get lately. I enjoy working there and definitely need to try my best to get a shift or two there next week.</p>,
        likes: 50,
        date: new Date(),
        comments: [
            {
                username: "Jonathan Samson",
                userImage: "/favicon.ico",
                body: "Hello, this is a comment and I totally agree with your post!"
            },
            {
                username: "Jonathan Samson",
                userImage: "/favicon.ico",
                body: "Hello, this is a comment and I really disagree with your post!"
            }
        ],
        tags: ['question']
    }, {
        id: '107',
        username: "Jonathan Samson",
        userImage: "/images/jonathan_samson.jpg",
        timePassed: "1 hour",
        title: "Checkout this meal at Long John Silver's!",
        body: <div>We got treated to lunch during my shift and this really filled the spot.
            <img style={{margin: '20px', width: '400px'}} src={'/images/long-john.jpg'}/></div>,
        likes: 35,
        date: new Date(),
        comments: [
            {
                username: "Jonathan Samson",
                userImage: "/favicon.ico",
                body: "Hello, this is a comment and I totally agree with your post!"
            },
            {
                username: "Jonathan Samson",
                userImage: "/favicon.ico",
                body: "Hello, this is a comment and I really disagree with your post!"
            }
        ],
        tags: ["shift meal", 'Long John Silvers']
    },{
        id: '777',
        username: "Tee George",
        userImage: "/images/tee_george.PNG",
        timePassed: "1 hour",
        title: "I was at McDonalds and this happened",
        body: <div><p>So my shift at McDonalds started out normal and amazing like always, because snag shifts are so great. But midway through the shift a bunch of reporters started pouring in, and I was very confused.
            I asked my manager what was happening and he said he didn't know. Next thing I know, Lebron James comes strolling through the door. I guess all the people were paparazzi.


            I cannot believe it, I'm still freaking out. I got to meet him and everything, I even got his autograph.</p>
            <img style={{margin: '20px', width: '400px'}} src={'/images/lebron-mcdonalds.jpg'}/></div>,
        likes: 50,
        date: new Date(),
        comments: [
            {
                username: "Jonathan Samson",
                userImage: "/favicon.ico",
                body: "Hello, this is a comment and I totally agree with your post!"
            },
            {
                username: "Jonathan Samson",
                userImage: "/favicon.ico",
                body: "Hello, this is a comment and I really disagree with your post!"
            }
        ],
        tags: ["snagger story", 'McDonalds - Glen Allen']
    },{
        id: "110",
        username: "Jonathan Samson",
        userImage: "/images/jonathan_samson.jpg",
        timePassed: "4 hours",
        title: "Arby's is poopoo",
        body: <p>I don't like them.</p>,
        likes: 0,

        date: new Date(),
        comments: [],
        tags: []
    }
];

export default betterPosts;