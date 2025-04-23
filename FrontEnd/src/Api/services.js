const server = 'http://localhost:3000/api'

export const getCitiesApi= async ()=>{

    const response= await fetch(`${server}/cities/allcities`)
          
    return await response.json()
 }

export const getHourApi = async (city) => {
    const response =await fetch(`${server}/hourcity`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city }),
      })

    return await response.json()
}