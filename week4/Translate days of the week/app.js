const translateButton = document.getElementById("translateButton");

translateButton.addEventListener("click", () => {
    const inputDay = document.getElementById("inputDay").value;
    const translatedDay = translateToFrench(inputDay);
    document.getElementById("translatedDay").textContent = translatedDay;
});


function translateToFrench(day) {
    switch (day.toLowerCase()) {
        case 'sunday':
            return 'Dimanche';
        case 'monday':
            return 'Lundi';
        case 'tuesday':
            return 'Mardi';
        case 'wednesday':
            return 'Mercredi';
        case 'thursday':
            return 'Jeudi';
        case 'friday':
            return 'Vendredi';
        case 'saturday':
            return 'Samedi';
        default:
            return 'Please write a valid day in english';
    }
}
