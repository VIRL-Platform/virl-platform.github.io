// JavaScript to change the content based on button click
function changeContent(place) {
    var imgElement = document.querySelector('#image-text-container d-figure figure img');
    var textElement = document.querySelector('#image-text-container d-figure figure figcaption');
  
    // Here you can add the image URLs and text for each place
    var images = {
      'Place1': 'virl_images/place_recommend/place1.png',
      'Place2': 'virl_images/place_recommend/place2.png',
      'Place3': 'virl_images/place_recommend/place3.png',
      'Place4': 'virl_images/place_recommend/place4.png',
      'Place5': 'virl_images/place_recommend/place5.png',
    };
  
    var texts = {
      'Place1': "Chow House is a highly recommended Sichuan restaurant, which aligns with Peng's background as he grew up in Sichuan. The restaurant offers authentic Sichuan food, which Peng might be familiar with and enjoy. The restaurant also has good seating, decoration, and friendly service, which would make for a pleasant dining experience. However, some dishes received mixed reviews, which is why the rating is not a perfect 10.",
      'Place2': 'This place offers Chinese food, which Peng might be familiar with and enjoy as he is from Chengdu, Sichuan. It is also located in the NYU neighborhood, which is convenient for him. The affordable prices are suitable for a student budget. However, the limited seating might be a slight inconvenience if Peng prefers to dine in.',
      'Place3': 'This place is highly recommended by customers for its food, atmosphere, and service. It is also located near NYU, which is convenient for Peng. However, it does not specify if it serves Sichuan cuisine, which Peng might prefer as he grew up in Sichuan.',
      'Place4': 'While the restaurant offers high-quality sushi and a great dining experience, it may not be suitable for Peng who is a first-year undergraduate student and might not be able to afford such an expensive meal. ',
      'Place5': "Dos Toros is a fast food restaurant which could be a good choice for a student like Peng who might be looking for a quick meal. The restaurant offers a variety of options including vegetarian, which could cater to different dietary preferences. However, there are some negative reviews about customer service and portion size, which might affect Peng's dining experience.",
    };

    // Create a new img element
    imgElement.src = images[place];

    // Update the text content
    textElement.textContent = texts[place];
  }
  