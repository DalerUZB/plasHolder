import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import Spinner from '../Components/Spinner'

const ContaniersUsers = () => {

    const [postUsers, setPostUsers] = useState([])
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        setLoader(true)

        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(({ data }) => {
                    setPostUsers(data)
                    toast.success("USERS");
                    setLoader(false)
                })
                .catch(() => toast.error('error com'))
        }, 300)


    }, [])



    return (
        <>
            <Wrapper>
                {loader ? < Spinner /> : (
                    postUsers.map(item => {
                        return (
                            <Link to={`/user/${item.id}`}>
                                <div className='card'>
                                    <h4>{item.name}</h4>
                                    <p>{item.phone}</p>
                                    <p>{item.email}</p>
                                    <p>{item.website}</p>
                                </div>
                            </Link>
                        )
                    })
                )}
            </Wrapper >
        </>
    )
}

export default ContaniersUsers

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
    padding: 30px;
    
    .card{
        padding: 20px;
        border: 2px solid black;
        width:250px;
    }
   > a {
    text-decoration: none;
    color: black;
   }
`



