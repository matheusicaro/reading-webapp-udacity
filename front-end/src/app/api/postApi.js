import API from './'

export function getInitialData(user) {

    const url = 'localhost:3001';
    const path = 'posts'

    return Promise.all([
        API._get(url, path, user),

    ]).then(([posts]) =>  ({ posts }))
}


