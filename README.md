# Simple Evet Bus

When you work with differrent Web Components or Javascript Frameworks on same page or SPA, in many cases the problem is the same, How can I pass data between them?

Well the answer is, **`Simple Event Bus`** :wink:

With **`Simple Event Bus`** you can pass data beetween components developed in React, VueJS or a simpre HTML Element.

##Usage

Just add the script


```
    <script src="event-bus.min.js"></script>
```

and then

```
    window.Messenger.addEventListener('chat-message', event => {   
       console.log(event);
    });
    
    ...

    window.Messenger.dispatchEvent('chat-message', { text: 'I ❤️ You ' });
```

:sparkles: Enjoy It :sparkles:   



######Original code: https://pineco.de/creating-a-javascript-event-bus/