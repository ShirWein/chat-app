import { Message } from '../types/message';
import { mockUsers } from '../assets/mockUsers'; // todo: remove this line after server implementation

const endpoint = 'http://localhost:5555'; // todo: add endpoint (server) address (starting with http://)


/**
 * GET Request to get the list of messages
 **/
export async function getMessages() {
  // todo: replace this with fetch to get the messages from the server
  const res = await fetch(`${endpoint}/mockMessages`);
  return (await res.json());
}

/**
 * GET request to get the full list of users - id + name
 **/
export async function getUsers() {
  // todo: replace this with fetch to get the user list from the server
  const result = await fetch(`${endpoint}/mockUsers`);
  return (await result.json());
}


/**
 * GET request to get the full details of a user
 **/
export async function getUserDetails(userId: number) {
  // todo: replace this with fetch to get the user details from the server.
  //  For mocking example, we're calling an external JSON service.
  //  You can use mockUserDetails.ts for the list of user details in the server.
  const result = await fetch(`${endpoint}/mockUsers/${userId}`);
  return (await result.json())[0];
}

/**
 * POST request to add a message. The message contains: id, body, timestamp, authorId
 **/
export async function addNewMessage(message: Message) {
  // todo: implement sending a new message to the server
  const body = JSON.stringify(message);
  const method = 'POST';
  const headers = {
      'content-type': 'application/json',
  }
  return await fetch(`${endpoint}/mockMessages`, {method, headers, body})
}


/**
 * POST request to change the user's like of a message
 **/
export async function changeMessageLikes(messageId: number, userId: number, like: boolean) {
  // todo: implement sending a request to change the like of a message by the user
  const body = JSON.stringify({userId, like});
    const method = 'POST';
    const headers = {
        'content-type': 'application/json',
    }
    return await fetch(`${endpoint}/mockMessages/${messageId}`, {method, headers, body});
}
