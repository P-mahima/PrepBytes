import axios from 'axios'
import React, { useState , useEffect} from 'react'

const Check = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://prepbyteclone-server.onrender.com/user/elevation')
            .then((response) => {
                // console.log(response);
                setData(response.data)
                // setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
  return (
    <div>
        {
            data.map((item) => {
                return(
                    <div>
                        <img src={item.img} alt=''></img>
                    </div>
                )
            })
        }
      
    </div>
  )
}

export default Check
