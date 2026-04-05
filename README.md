# Tools Hub 🛠️

A modern, responsive, and beautifully designed central index page for all your web tools and mini-applications. Built with pure HTML, CSS, and vanilla JavaScript.

## ✨ Features

- **Glassmorphism UI:** A sleek, modern user interface with blurred backgrounds and vibrant gradients.
- **Dynamic Content:** Easily add, edit, or remove tools through a simple JavaScript array.
- **Instant Search:** Quickly find the tool you need using the built-in search functionality.
- **Fully Responsive:** Looks great on desktops, tablets, and smartphones.
- **No Build Tools Required:** Just drop your folders, edit the script, and it's ready to host on GitHub Pages or any static hosting.

## 🚀 How to Use

1. Check out or clone this repository.
2. Inside this root directory, you can place your individual tool folders (e.g., `MemeCraft/`).
3. Open `script.js` and edit the `tools` array to include your tools.

### Adding a New Tool

To register a new tool so it appears as a card on the index page, open `script.js` and add an object to the `tools` array:

```javascript
{
    folder: "MemeCraft",             // The exact name of the folder where your tool exists
    name: "MemeCraft",               // The display title on the card
    icon: "fa-solid fa-face-smile",  // FontAwesome icon class
    color: "blue",                   // Theme color: 'blue', 'green', 'pink', 'orange' (default is purple)
    desc: "Create and customize memes easily." // A brief description of what the tool does
}
```

When a user clicks on the card, they will be instantly navigated to `./MemeCraft/`.

## 🛠️ Built With

- **HTML5**
- **CSS3** (Custom Properties, Flexbox, Grid, Glassmorphism)
- **Vanilla JavaScript** (ES6)
- **FontAwesome 6** (For beautiful vector icons)
- **Google Fonts** (Outfit typography)

## 📎 Hosting

Since this uses standard web technologies, it can be hosted seamlessly on platforms like **GitHub Pages**, **Vercel**, **Netlify**, or standard Apache/Nginx web servers.

---
*Built with ❤️ to keep tools organized.*
