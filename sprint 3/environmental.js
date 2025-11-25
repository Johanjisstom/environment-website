const heroData = [
    { text: "Deforestation is reducing habitats worldwide.", img: "https://via.placeholder.com/600x300?text=Deforestation" },
    { text: "Pollution is harming our oceans and air quality.", img: "https://via.placeholder.com/600x300?text=Pollution" },
    { text: "Climate change is causing extreme weather.", img: "https://via.placeholder.com/600x300?text=Climate+Change" },
    { text: "Biodiversity loss threatens ecosystems.", img: "https://via.placeholder.com/600x300?text=Biodiversity" }
];

let heroIndex = 0;
const heroImage = document.getElementById("hero-image");
const heroText = document.getElementById("hero-text");

function updateHero() {
    heroImage.src = heroData[heroIndex].img;
    heroText.textContent = heroData[heroIndex].text;
    heroIndex = (heroIndex + 1) % heroData.length;
}

setInterval(updateHero, 3000);
updateHero();

// Tabs
const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

