// Information about a users film perference

class userPref {
    constructor(title, description, link) {
        this.title = title;
        this.description = description;
        this.link = link
    }
}


let user1Pref = new userPref(
    'Midnight Diner',
    'Patrons of an otherwise mundane Japanese diner find simple yet profound connections with one another based on the shared love of a particular dish.',
    'takashi-miyazaki-64ajtpEzlYc-unsplash.jpg'
)

export default user1Pref;

