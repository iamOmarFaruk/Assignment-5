# Assignment-5 - Emergency Hotline

This is an emergency hotline website project with interactive features.

## JavaScript DOM Questions & Answers

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**getElementById:** This one finds only one element by its ID. Like if you have `<div id="myDiv">`, you can get it using `document.getElementById('myDiv')`. It's super fast and returns just one element.

**getElementsByClassName:** This finds all elements that have the same class name. Returns a live HTMLCollection (like an array but not exactly). So if you have multiple divs with class "box", it'll get all of them.

**querySelector/querySelectorAll:** These are more flexible. You can use CSS selectors like you do in CSS. `querySelector` gets the first match, `querySelectorAll` gets all matches. You can search by class (.className), ID (#idName), or even complex selectors like `div > p.highlight`.

### 2. How do you create and insert a new element into the DOM?

Pretty straightforward actually:

```javascript
// Step 1: Create the element
const newDiv = document.createElement('div');

// Step 2: Add content and attributes
newDiv.textContent = 'Hello Bangladesh!';
newDiv.className = 'my-class';

// Step 3: Insert it somewhere
document.body.appendChild(newDiv); // at the end
// or
someElement.insertBefore(newDiv, existingElement); // before another element
```

You can also use `innerHTML` but `createElement` is safer and faster.

### 3. What is Event Bubbling and how does it work?

Event bubbling is like when you throw a stone in water - the ripples go outward. In DOM, when you click a button inside a div, the click event first happens on the button, then "bubbles up" to the div, then to the body, then to the document.

So if you click a button, the event goes: button → parent div → body → document. This happens automatically unless you stop it.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation means putting one event listener on a parent element instead of putting listeners on each child. The parent catches events from all its children because of event bubbling.

**Why it's useful:**
- Better performance (one listener instead of many)
- Works with dynamically added elements automatically
- Less memory usage
- Easier to manage

Example: Instead of adding click listeners to 100 buttons, add one listener to their parent container.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

**preventDefault():** Stops the default behavior of an element. Like if you click a link, it normally takes you to another page. `preventDefault()` stops that from happening, but the event still bubbles up.

**stopPropagation():** Stops the event from bubbling up to parent elements. The default behavior still happens, but parent elements won't know about the event.

Think of it like this:
- `preventDefault()`: "Don't do what you normally do"
- `stopPropagation()`: "Don't tell your parents about this"

You can use both together if needed!


