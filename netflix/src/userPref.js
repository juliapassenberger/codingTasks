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
    'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABR1vSGohCHmP6xCXQP_OdOk5MUnKxiokJVGvVoHuNf2qg5xc2Rc_10-vQ751Sfp8-shXwQQoLqJEpNyDKRIK9afkQdTPhKKXmX_g.webp?r=218'
)

export default user1Pref;

