function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

window.addEventListener('DOMContentLoaded', function() {
  // YOUR CODE

  let allRideslButton = document.querySelector('#all-filter')
  // console.log(allRideslButton)
  allRideslButton.addEventListener('click', async function(event) {
    console.log('allRideslButton!')


    let url = 'https://kiei451.com/api/rides.json'
    let response = await fetch(url)
    let json = await response.json()
    console.log(json)

    document.querySelector('.rides').innerHTML = '' 
    renderRides(json)

  })




  



// nooberPool //

  let nooberPoolButton = document.querySelector('#noober-pool-filter')
  // console.log(nooberPoolButton)
  nooberPoolButton.addEventListener('click', async function(event) {
    console.log('POOL!')

    //step 4.1 for nooberPool
    let url = 'https://kiei451.com/api/rides.json'
    let response = await fetch(url)
    let json = await response.json()

    //step 4.2 for nooberPool
    let newArray = []
    for (let i=0; i<json.length; i++) {
      let ride = json[i]

      if (levelOfService(ride) == 'Noober Pool') {
        newArray.push(ride)
      }
    }
    document.querySelector('.rides').innerHTML = ''
    //lastly, pass the new array of filtered rides to the renderRides() function
      renderRides(newArray)
    
  })



// nooberPurple //

  let nooberPurpleButton = document.querySelector('#noober-purple-filter')
  // console.log(nooberPurpleButton)
  nooberPurpleButton.addEventListener('click', async function(event) {
    console.log('Purple!')


   //step 4.1 for nooberPurple
      let url = 'https://kiei451.com/api/rides.json'
      let response = await fetch(url)
      let json = await response.json()
  
  //step 4.2 for nooberPurple
      let newArray = []
      for (let i=0; i<json.length; i++) {
        let ride = json[i]
  
        if (levelOfService(ride) == 'Noober Purple') {
          newArray.push(ride)
        }
      }
      document.querySelector('.rides').innerHTML = ''
      //lastly, pass the new array of filtered rides to the renderRides() function
        renderRides(newArray)
      
    })

  })




 //XL//
  let nooberXlButton = document.querySelector('#noober-xl-filter')
  // console.log(nooberXlButton)
  nooberXlButton.addEventListener('click', async function(event) {
    console.log('XL!')

   //step 4.1 
   let url = 'https://kiei451.com/api/rides.json'
   let response = await fetch(url)
   let json = await response.json()

  //step 4.2 
   let newArray = []
   for (let i=0; i<json.length; i++) {
     let ride = json[i]

     if (levelOfService(ride) == 'Noober XL') {
       newArray.push(ride)
     }
   }
   document.querySelector('.rides').innerHTML = ''
   //lastly, pass the new array of filtered rides to the renderRides() function
     renderRides(newArray)
   
 })









//X//
  let nooberXButton = document.querySelector('#noober-x-filter')
  // console.log(nooberXButton)
  nooberXButton.addEventListener('click', async function(event) {
    console.log('X!')


     //step 4.1 
   let url = 'https://kiei451.com/api/rides.json'
   let response = await fetch(url)
   let json = await response.json()

  //step 4.2 
   let newArray = []
   for (let i=0; i<json.length; i++) {
     let ride = json[i]

     if (levelOfService(ride) == 'Noober X') {
       newArray.push(ride)
     }
   }
   document.querySelector('.rides').innerHTML = ''
   //lastly, pass the new array of filtered rides to the renderRides() function
     renderRides(newArray)
  })






