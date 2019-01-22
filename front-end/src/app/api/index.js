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
            if (error) reject (new Error(error));

            resolve ({ body });
        });
    })
}


function _post(url, path, user) {
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
            if (error) reject (new Error(error));

            resolve ({ body });
        });
    })
}

/*    
    | `POST /posts` | Add a new post. | 
        **id** - UUID should be fine, but any unique id will work <br> 
        **timestamp** - [Timestamp] Can in whatever format you like, you can use `Date.now()` if you like. <br> *
        *title** - [String] <br> **body** - [String] <br> **author** - [String] <br> 
        **category** -  Any of the categories listed in `categories.js`. Feel free to extend this list as you desire. |
    | `GET /posts/:id` | Get the details of a single post. | |
    | `POST /posts/:id` | Used for voting on a post. | **option** - [String]: Either `"upVote"` or `"downVote"`. |
    | `PUT /posts/:id` | Edit the details of an existing post. | **title** - [String] <br> **body** - [String] |
    | `DELETE /posts/:id` | Sets the deleted flag for a post to 'true'. <br> Sets the parentDeleted flag for all child comments to 'true'. | |

*/





export default {_get}