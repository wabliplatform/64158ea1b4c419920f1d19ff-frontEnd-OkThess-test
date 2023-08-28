let apiMoviesApi = new TempApi.MoviesApi();import TempApi from '../src/index';window.onload = () => {apiMoviesApi.getAllmovies((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("itn4b").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'movieImg']");
if(insideSubDataElement !== null && data[data.length -i -1].movieImg !== undefined){
  insideSubDataElement.src = data[data.length -i -1].movieImg.data;
  insideSubDataElement.name = data[data.length -i -1].movieImg.name;
}
else if(subDataElements[i].getAttribute('annotationname') === 'movieImg' && data[data.length -i -1].movieImg !== undefined){
  subDataElements[i].src = data[data.length -i -1].movieImg.data;
  subDataElements[i].name = data[data.length -i -1].movieImg.name;
}
 } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    
    // Retrieve current data from local storage
    const storedData = window.localStorage.getItem("data");
    const currentData = storedData
        ? new Map(JSON.parse(storedData))
        : new Map();

    // Add new data to current data
    const newData = Array.from(map.entries());
    newData.forEach(([key, value]) => {
        currentData.set(key, value);
    });

    // Save updated data to local storage
    window.localStorage.setItem(
        "data",
        JSON.stringify(Array.from(currentData.entries()))
    );
    
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};