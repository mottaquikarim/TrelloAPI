### Trello API wrapper

Best used for implementations where Trello serves as a lightweight CMS

### Getting access token

FYI: this is mad ghetto

1. From Trello Developers, get your API key (NOT secret)
2. Then:

```
// go here in browser:
https://trello.com/1/authorize?key=YOUR_API_KEY&scope=read&name=TrelloCMS&expiration=never&response_type=token
```

### Getting started

1. in main.js, set your access token and API key
2. in index.html, update the trello client.js script with your API key
3. start making calls!

### Currently supported

1. getAllCards -> filters out board by name, returns all cards + attachments on the first card
2. getCard -> returns all attachments on a specific card (by id)
