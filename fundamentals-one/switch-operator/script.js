const language = 'Mandarin'

switch (language) {
    case 'Mandarin':
    case 'Chinese':
        console.log(`MOST number of native speakers!`);
        break;
    case 'Spanish':
        console.log(`2nd place in number of native speakers`);
        break;
    case 'English':
        console.log(`3rd place`);
        break;
    case 'Hindi':
        console.log(`4th place`);
        break;
    case 'Arabic':
        console.log(`5th most spoken language`);
        break;
    default:
        console.log(`Great language too! But, not in the top 5`);
        break;
}

