// let latinput=document.getElementById("lat")

function getGeolocation(){

    navigator.geolocation.getCurrentPosition((position)=>{
        document.getElementById("lat").value=position.coords.latitude
        document.getElementById("long").value=position.coords.longitude
    })
    
}
getGeolocation()