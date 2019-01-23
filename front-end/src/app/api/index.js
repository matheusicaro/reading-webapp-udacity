import request from "request"

function _get(url, path, user) {

    return new Promise((resolve, reject) => {

        var options = {
            method: 'GET',
            url: `http://${url}/${path}`,
            headers:
            {
                Authorization: user
            }
        };

        request(options, function (error, response, body) {
            if (error) reject(new Error(error));

            resolve( JSON.parse(body) );
        });
    })
}


function _post(url, path, user, object) {
    return new Promise((resolve, reject) => {

        var options = {
            method: 'POST',
            url: `http://${url}/${path}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: user
            },
            body: object
        };

        request(options, function (error, response, body) {
            if (error) reject(new Error(error));

            console.log("---POST---", { response });
            resolve({ body });
        });
    })
}

/*      EXAMPLES OBJECT IN POST
{ 
    id: '55oooo3ooooo333444443',
    timestamp: 3467166872634,
    title: 'TESTANDO POST',
    body: 'teste do post',
    author: 'matheusicaro',
    category: 'react'
}
/*


/*    
    | `PUT /posts/:id` | Edit the details of an existing post. | **title** - [String] <br> **body** - [String] |
    | `DELETE /posts/:id` | Sets the deleted flag for a post to 'true'. <br> Sets the parentDeleted flag for all child comments to 'true'. | |

*/





export default { _get }