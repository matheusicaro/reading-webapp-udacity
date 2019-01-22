export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getTweets(),
    ]).then(([users, tweets]) => ({
        users,
        tweets,
    }))
}

// RETURN FUNCTION
function _getUsers() {
    return new Promise((res, rej) => {
        setTimeout(() => res({ ...users }), 1000)
    })
}

function _getTweets() {
    return new Promise((res, rej) => {
        setTimeout(() => res({ ...tweets }), 1000)
    })
}

// OBJECT DATE EXAMPLE
let users = {
    sarah_edo: {
        id: "sarah_edo",
        name: "Sarah Drasner",
        avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
        tweets: ['8xf0y6ziyjabvozdd253nd', 'hbsc73kzqi75rg7v1e0i6a', '2mb6re13q842wu8n106bhk', '6h5ims9iks66d4m7kqizmv', '3sklxkf9yyfowrf0o1ftbb'],
    },
    tylermcginnis: {
        id: "tylermcginnis",
        name: "Tyler McGinnis",
        avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
        tweets: ['5c9qojr2d1738zlx09afby', 'f4xzgapq7mu783k9t02ghx', 'nnvkjqoevs8t02lzcc0ky', '4pt0px8l0l9g6y69ylivti', 'fap8sdxppna8oabnxljzcv', 'leqp4lzfox7cqvsgdj0e7', '26p5pskqi88i58qmza2gid', 'xi3ca2jcfvpa0i3t4m7ag'],
    },
    dan_abramov: {
        id: "dan_abramov",
        name: "Dan Abramov",
        avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
        tweets: ['5w6k1n34dkp1x29cuzn2zn', 'czpa59mg577x1oo45cup0d', 'omdbjl68fxact38hk7ypy6', '3km0v4hf1ps92ajf4z2ytg', 'njv20mq7jsxa6bgsqc97', 'sfljgka8pfddbcer8nuxv', 'r0xu2v1qrxa6ygtvf2rkjw'],
    }
}

let tweets = {
    "8xf0y6ziyjabvozdd253nd": {
      id: "8xf0y6ziyjabvozdd253nd",
      text: "Shoutout to all the speakers I know for whom English is not a first language, but can STILL explain a concept well. It's hard enough to give a good talk in your mother tongue!",
      author: "sarah_edo",
      timestamp: 1518122597860,
      likes: ['tylermcginnis'],
      replies: ['fap8sdxppna8oabnxljzcv', '3km0v4hf1ps92ajf4z2ytg'],
      replyingTo: null,
    },
    "5c9qojr2d1738zlx09afby": {
      id: "5c9qojr2d1738zlx09afby",
      text: "I hope one day the propTypes pendulum swings back. Such a simple yet effective API. Was one of my favorite parts of React.",
      author: "tylermcginnis",
      timestamp: 1518043995650,
      likes: ['sarah_edo', 'dan_abramov'],
      replies: ['njv20mq7jsxa6bgsqc97'],
      replyingTo: null,
    },
    "f4xzgapq7mu783k9t02ghx": {
      id: "f4xzgapq7mu783k9t02ghx",
      text: "Want to work at Facebook/Google/:BigCompany? Start contributing code long before you ever interview there.",
      author: "tylermcginnis",
      timestamp: 1517043995650,
      likes: ['dan_abramov'],
      replies: [],
      replyingTo: null,
    }
}
