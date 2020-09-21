var materials = [
    {
        name: "wooden",
        color: "996633"
    },
    {
        name: "steel",
        color: "C8D0D9"
    },
    {
        name: "diamond",
        color: "CCF0EF"
    },
    {
        name: "golden",
        color: "D9B815"
    },
    {
        name: "silver",
        color: "EDEDED"
    },
    {
        name: "dragonglass",
        color: "666666"
    },
    {
        name:  "emerald",
        color: "1CC98A"
    },
    {
        name: "ruby",
        color: "E62943"
    }

]

var types = [
    {
        name: "blade"
    },
    {
        name: "mace"
    },
    {
        name: "sword"
    },
    {
        name: "dagger"
    },
    {
        name: "cutlass"
    },
    {
        name: "scimitar"
    },
    {
        name: "axe"
    },
    {
        name: "club"
    },
    {
        name: "knife"
    },
    {
        name: "lance"
    },
    {
        name: "warhammer"
    },
    {
        name: "longbow"
    },
    {
        name: "crossbow"
    }
    
]

var adjectives = [
    "vorpal",
    "unending",
    "eternal",
    "unceasing",
    "tireless",
    "all-powerful",
    "mighty",
    "fearless",
    "valiant",
    "dauntless",
    "valorous"


]

var nouns = [
    "destruction",
    "suffering",
    "darkness",
    "horror",
    "revenge",
    "annihilation",
    "slaughter",
    "ruin"
]

var audio = new Audio('tada.mp3');

function newWeapon() {
    var randomMat = Math.floor(Math.random() * (materials.length));
    var randomType = Math.floor(Math.random() * (types.length));
    var randomAdj = Math.floor(Math.random() * (adjectives.length));
    var randomNoun = Math.floor(Math.random() * (nouns.length));

    var quoteString = materials[randomMat].name + ' ' + types[randomType].name + ' of ' + adjectives[randomAdj] + ' ' + nouns[randomNoun];
    var weaponColor = '#' + materials[randomMat].color;
    audio.pause();
    audio.load();
    audio.play();

    document.getElementById('nameDisplay').innerHTML = quoteString;
    document.getElementById('nameDisplay').style.color = weaponColor;

}