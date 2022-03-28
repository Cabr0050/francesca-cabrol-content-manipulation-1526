// Get all buttons in a NODE LIST of buttons (array like structure) 
// References to activate HTML elements 
const resources = {
    btns: document.querySelectorAll('.controls ul li button'),
    dc: document.querySelector('.dynamic-content')
}; 


/*
Complete your resource-object that will store the dynamic content.
Resource object should 3 sub-objects. Give your sub-objects meaningful names. 
Every sub-object should have the following properties headingContent, bodyText, imgUrl and imgAlt. 
*/

// database 
const contents = {
    c1: {
        heading: 'Roses',
        bodyText: 'Roses are a type of flower that is commonly known and very popular. Roses come in a variety of shades and colours and each of these colours holds a different type of meaning. For example, red roses symbolize love and romance. It is a great gift to give to your significant other on Valentine’s Day or any day of the year to show your love for them.  While other colours of roses represent other meanings besides love and affection, roses tend to be a very popular flower to display love and can be shown through the number of roses given. One rose symbolizes love at first sight, two roses symbolize shared and deep love, three roses mean “I love you”, and the meanings continue to increase with the number of flowers given.', 
        imageUrl: './img/rose.jpg',
        imageAlt: 'Roses',
        bodyTextSource: 'Source: Fresh, F. T. D. (2020, December 2). Rose flower meaning and symbolism. FTD.com. https://www.ftd.com/blog/share/rose-meaning-and-symbolism '
    },
    c2: {
        heading: 'Hydrangeas',
        bodyText: 'Hydrangeas are believed to have originated in Japan. They became associated with heartfelt emotion, gratitude for understanding, and apology in accordance with a Japanese legend. While they are believed to have originated in Japan, you can find a great diversity of hydrangea species around eastern Asia including Japan, China, and Korea. Hydrangeas come in multiple shades such as blue, pink, and many more and each of these colours symbolize different meanings. For example, blue hydrangeas symbolize frigidity and apology while pink hydrangeas symbolize heartfelt emotion. The colour of hydrangeas is based on the soil’s acidity. You can change the colours of your hydrangeas by simply increasing or decreasing the acidity of the soil. ', 
        imageUrl: './img/hydrangea.jpg',
        imageAlt: 'Hydrangeas',
        bodyTextSource: 'Source: Fresh, F. T. D. (2020, December 1). Hydrangea meaning and symbolism. FTD.com. https://www.ftd.com/blog/share/hydrangea-meaning-and-symbolism '
    },
    c3: {
        heading: 'Carnations',
        bodyText: 'Carnations also known as ‘Pinks’ due to their spikey pink petals have several theories on how they got their name. Scientifically, Carnations are called ‘Dianthus caryophyllus’ originating from the myth Diana. Just like other species of flowers, carnations grow in a wide variety of colours such as pink, white, red, yellow, and scarlet. In the language of flowers, carnations mean fascination, distinction, and love, but each colour has its own representation.  For example, White carnations represent purity and luck while pink carnations represent gratitude and light red carnations represent admiration. ', 
        imageUrl: './img/carnation.jpg',
        imageAlt: 'Carnations', 
        bodyTextSource: 'Source: Fresh, F. T. D. (2020, November 25). Carnation meaning and symbolism. FTD.com. https://www.ftd.com/blog/share/carnation-meaning-and-symbolism'
    }
};
   
// Get the reference to your HTML-container that will be dynamically loaded from the resource-object.

// Loading initial content (on the page load)
resources.dc.innerHTML = `<h2>${contents.c1.heading}</h2>
                          <figure>
                          <img src="${contents.c1.imageUrl}" alt="${contents.c1.imageAlt}"/>
                          </figure>
                          <p>${contents.c1.bodyText}</p>
                          <p class="source">${contents.c1.bodyTextSource}</p>
`; 

//When button is clicked, content is updated 
let handleclick = ev => {
    // Stop directing user to the location specified in the href link 
    ev.preventDefault();
    // fetch the reference to the current button 
    let currentButton = ev.target; 
    // loop through node list of items and remove id active where it happens to be
    for (let btn of resources.btns) {
        if (btn.id) {
            btn.removeAttribute('id') // removeAttribute can be used for 'class' and 'type' as well 
        }
    }
    // add attribute id to the clicked item 
    currentButton.id = 'active'; 
    // extract the value of data attribute 
    let currentContent = currentButton.dataset.btn;
    // updated the content 
    resources.dc.innerHTML = `<h2>${contents[currentContent].heading}</h2>
                              <figure>
                              <img src="${contents[currentContent].imageUrl}" alt="${contents[currentContent].imageAlt}"/>
                              </figure>
                              <p>${contents[currentContent].bodyText}</p>
                              <p class="source">${contents[currentContent].bodyTextSource}</p>
    `; 
}

// register all 3 buttons from click event 
for (let btn of resources.btns){
    btn.addEventListener('click', handleclick);
}
    