// State
const state = {
    image: null,
    topText: '',
    topTextX: 50,
    topTextY: 4,
    bottomText: '',
    bottomTextX: 50,
    bottomTextY: 96,
    textColor: '#ffffff',
    borderColor: '#000000',
    fontSize: 48,
    fontFamily: 'Impact',
    outlineWidth: 5,
    uppercase: true
};

// DOM Elements
const uploadInput = document.getElementById('imageUpload');
const topTextInput = document.getElementById('topText');
const bottomTextInput = document.getElementById('bottomText');
const textColorInput = document.getElementById('textColor');
const borderColorInput = document.getElementById('borderColor');
const fontSizeInput = document.getElementById('fontSize');
const downloadBtn = document.getElementById('downloadBtn');

const canvas = document.getElementById('memeCanvas');
const ctx = canvas.getContext('2d');
const placeholder = document.getElementById('placeholder');
const textColorHex = document.getElementById('textColorHex');
const borderColorHex = document.getElementById('borderColorHex');
const fontSizeDisplay = document.getElementById('fontSizeDisplay');
const fontFamilyInput = document.getElementById('fontFamily');
const uppercaseToggle = document.getElementById('uppercaseToggle');
const topTextXInput = document.getElementById('topTextX');
const topTextYInput = document.getElementById('topTextY');
const bottomTextXInput = document.getElementById('bottomTextX');
const bottomTextYInput = document.getElementById('bottomTextY');
const outlineWidthInput = document.getElementById('outlineWidth');
const topTextXDisplay = document.getElementById('topTextXDisplay');
const topTextYDisplay = document.getElementById('topTextYDisplay');
const bottomTextXDisplay = document.getElementById('bottomTextXDisplay');
const bottomTextYDisplay = document.getElementById('bottomTextYDisplay');
const outlineWidthDisplay = document.getElementById('outlineWidthDisplay');

// Event Listeners
uploadInput.addEventListener('change', handleImageUpload);
topTextInput.addEventListener('input', (e) => { state.topText = e.target.value; updateCanvas(); });
bottomTextInput.addEventListener('input', (e) => { state.bottomText = e.target.value; updateCanvas(); });
textColorInput.addEventListener('input', (e) => { state.textColor = e.target.value; textColorHex.textContent = e.target.value; updateCanvas(); });
borderColorInput.addEventListener('input', (e) => { state.borderColor = e.target.value; borderColorHex.textContent = e.target.value; updateCanvas(); });
fontSizeInput.addEventListener('input', (e) => { state.fontSize = e.target.value; fontSizeDisplay.textContent = `${e.target.value}px`; updateCanvas(); });
downloadBtn.addEventListener('click', downloadMeme);
fontFamilyInput.addEventListener('change', (e) => { state.fontFamily = e.target.value; updateCanvas(); });
uppercaseToggle.addEventListener('change', (e) => { state.uppercase = e.target.checked; updateCanvas(); });
outlineWidthInput.addEventListener('input', (e) => { state.outlineWidth = e.target.value; outlineWidthDisplay.textContent = e.target.value; updateCanvas(); });
topTextXInput.addEventListener('input', (e) => { state.topTextX = e.target.value; topTextXDisplay.textContent = e.target.value; updateCanvas(); });
topTextYInput.addEventListener('input', (e) => { state.topTextY = e.target.value; topTextYDisplay.textContent = e.target.value; updateCanvas(); });
bottomTextXInput.addEventListener('input', (e) => { state.bottomTextX = e.target.value; bottomTextXDisplay.textContent = e.target.value; updateCanvas(); });
bottomTextYInput.addEventListener('input', (e) => { state.bottomTextY = e.target.value; bottomTextYDisplay.textContent = e.target.value; updateCanvas(); });

function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
            state.image = img;
            placeholder.style.display = 'none';
            canvas.style.display = 'block';
            downloadBtn.disabled = false;
            updateCanvas();
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
}

function updateCanvas() {
    if (!state.image) return;

    // Set canvas dimensions to match image
    canvas.width = state.image.width;
    canvas.height = state.image.height;

    // Draw Image
    ctx.drawImage(state.image, 0, 0);

    // Typography Settings
    const fontSize = canvas.width * (state.fontSize / 1000); // Scale font size relative to image width for consistency
    const fontSizePx = Math.max(20, fontSize); // Minimum 20px
    ctx.font = `bold ${fontSizePx}px "${state.fontFamily}", 'Arial Black', sans-serif`;
    ctx.fillStyle = state.textColor;
    ctx.strokeStyle = state.borderColor;
    ctx.lineWidth = fontSizePx * (state.outlineWidth / 100);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round'; // smooth corners for outlines

    // Draw Top Text
    if (state.topText) {
        let text = state.uppercase ? state.topText.toUpperCase() : state.topText;
        const x = canvas.width * (state.topTextX / 100);
        const y = canvas.height * (state.topTextY / 100);
        if(ctx.lineWidth > 0) ctx.strokeText(text, x, y);
        ctx.fillText(text, x, y);
    }

    // Draw Bottom Text
    if (state.bottomText) {
        let text = state.uppercase ? state.bottomText.toUpperCase() : state.bottomText;
        const x = canvas.width * (state.bottomTextX / 100);
        const y = canvas.height * (state.bottomTextY / 100);
        if(ctx.lineWidth > 0) ctx.strokeText(text, x, y);
        ctx.fillText(text, x, y);
    }
}

function downloadMeme() {
    if (!state.image) return;
    
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `memecraft-${Date.now()}.png`;
    link.href = dataURL;
    link.click();
}
