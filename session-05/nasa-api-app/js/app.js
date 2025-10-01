document.addEventListener("DOMContentLoaded", () => {
  const fetchApodButton = document.getElementById("fetch-apod");
  const apodContent = document.getElementById("apod-content");
  const apiKey = "oX03fJ44j7dn1iOpgcwVBOmzmXHFRVTgeozm5S30";

  fetchApodButton.addEventListener("click", () => {
    const date = document.getElementById("date").value;
    const startDate = document.getElementById("start_date").value;
    const endDate = document.getElementById("end_date").value;
    const count = document.getElementById("count").value;
    const thumbs = document.getElementById("thumbs").checked;

    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    // Challenge 1
    // 1. check all the form fields to see which fields have data
    // 2. add them to the apiURL as parameters
    // 3. Test the responses in the Network tab

    if (date) {
      apiUrl += `&date=${date}`;
    } else if (startDate) {
      apiUrl += `&start_date=${startDate}`;
    } else if (endDate) {
      apiUrl += `&end_date=${endDate}`;
    } else if (count) {
      apiUrl += `&count=${count}`;
    } else if (thumbs) {
      apiUrl += `&thumbs=${thumbs}`;
    }
  
    // Challenge 2
    // 1. add the following headers to your API call content type, user agent & cache control
    let headersList = {
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    // 2. set the cache control no no cache
    "Cache-Control": "no-cache",
    // 3. set the content type application/json
    "Content-Type": "application/json"
    // 4. Test the responses in the Network tab
    }
    
    fetch(apiUrl, {
      method: "GET",
      headers: headersList
    })
      // Challenge 3
      // 1. change the anonymous arrow function below to check if the response code is 200(ok)
    .then((response) => {
      // 2. if the response is ok return the response.json() object
      // 3. if not ok throw a new error which includes the status code
      // 4. Test the responses in the Network tab
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        throw new Error(`${console.log(response.status)}`)
      }
    })
    
    .then((data) => {
      apodContent.innerHTML = "";

      // Challenge 4
      // 1. Move the if/else if/else into a resusable function ready for modularisation

      function displayApod(data, apodContent) {
        if (data.media_type === "image") {
          return apodContent.innerHTML += `
                            <figure class="image is-4by3">
                                <img src="${data.url}" alt="${data.title}">
                            </figure>
                            <h2 class="title is-4">${data.title}</h2>
                            <p>${data.explanation}</p>
                        `;
        } else if (data.media_type === "video") {
          return apodContent.innerHTML += `
                               <div class="video-apodContent">
                                   <iframe src="${data.url}" frameborder="0" allowfullscreen></iframe>
                               </div>
                               <h2 class="title is-4">${data.title}</h2>
                               <p>${data.explanation}</p>
                           `;
        } else {
          return apodContent.innerHTML += `<p>Media type not supported: ${data.media_type}</p>`;
        }
      }

      if (Array.isArray(data)) {
        for (let counter = 0; counter < data.length; counter++) {
          displayApod(data[counter], apodContent)
        }
      } else {
        displayApod(data, data.media_type)
        console.log(displayApod(data, apodContent))
      };
    })
    
    .catch((error) => {
      apodContent.innerHTML = `<p>Error fetching item: ${error.message}</p>`;
    });
  });
});







