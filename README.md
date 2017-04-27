# message-board  
  
  
  
  
The messages can be posted to the server like this:  
**POST /message**  
Request body:  
{  
  "text": "some message"  
}  
  
Response body:  
{  
  "id": 1168,  
  "message": "some message",  
  "time": 1493310627635,  
  "source": "::1"  
}  
  
  
  
  
All the messages posted till now can be retrieved with a get request. The messages are arranged in newest first order:  
**GET /**  
Response body:  
[  
  {  
    "id": 1168,  
    "message": "some message",  
    "time": 1493310627635,  
    "source": "::1"  
  },  
  {  
    "id": 1167,  
    "message": "some message",  
    "time": 1493310377326,  
    "source": "::1"  
  },  
  {  
    "id": 1166,  
    "message": "some message",  
    "time": 1493310376353,  
    "source": "::1"  
  }  
]  
  
  
  
  
To delete a message a delete request has to be sent with the secret token in the header:  
**DELETE /message/{messageId}**  
Header:  
token: secretToken  
  
The messages stay in server as long as sever is running. Not persisting the messages in a db currently.  