let humans = []
let checkedInHumans = []
let line = document.querySelector('#line')
let human = document.createElement('li')
let textInput = document.querySelector('#myText')
let add = document.querySelector('#add')
let textOutput = document.querySelector('#noOneInLine')


function humanToLine() {  
  humans.forEach((p) => {
  /* för varje elemen skapa en li */
    let li = document.createElement('li')
  /* går in i li ger den ett child p */
    li.appendChild(document.createTextNode(p))
  /* apendar li som child i ol */
  line.appendChild(li)
  })}
  
  humanToLine()
  
  function addHuman() {
    //skapar li-element och en knapp
    let li = document.createElement('li')
    //ger li ett id
    li.id = 'person'
    let fastTrackButton = document.createElement("button");
    // lägger till input.value sist i arrayen
    humans.push(textInput.value)

    //när listan är noll så skrivs ett medelande. Varje gång funktionen körs så kollar
    //vi om listan är noll.
 if (humans.length > 0) {
      textOutput.innerText = ''
      
    }
    
  /* gör ett child till li av text
    sen går vi in i arrayen & letar till den sista platsen */
  li.appendChild(document.createTextNode   (humans[humans.length -1]))
  line.appendChild(li)
  //skapar fast track knapp och gör den child till li
  fastTrackButton.innerText = 'Fast Track'
  li.appendChild(fastTrackButton)

  // klickar på knappen och då läggs det elementet till först
  fastTrackButton.onclick = function(){
    line.prepend(li)
   
  }
  
}

const remove = () => {
  //om arrayens läng är större än 0
  if (humans.length > 0) {

  // så skapas en funktion som tar bort ett element med index 0
    line.removeChild(line.getElementsByTagName('li')[0]); 
  /* pushar in stringen av första elementet från humans till checkedInHumans
  //som också är en array */
   checkedInHumans.push(String(humans.splice (0,1))) 
   //samt loggar alla som är incheckade
   console.log(checkedInHumans)
   console.log(humans.length)
  
   
   if (!humans.length > 0) {
    textOutput.innerText = 'There’s currently no people standing in line'
   }   }
   
   
}
//när man laddar upp sidan så står det
textOutput.innerText ='There’s currently no people standing in line'