import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import EllipsizSpinner from '../Components/EllipsizSpinner'

const ContaniersUsers = () => {
    const [postUser, setPostUser] = useState({})
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            axios.get(`https://jsonplaceholder.typicode.com/users/${slug}`)
                .then(({ data }) => {
                    toast.success("USER")
                    setPostUser(data)
                    setLoader(false)
                }).catch(() => toast.error("USER.NOT.CANNOT !"))
            setLoader(false)
        }, 500)
    }, [])
    const { slug } = useParams()
    const navigate = useNavigate()

    return (
        <Wrapper>
            <div className='card'>
                <button
                    className='button'
                    onClick={() => navigate(-1)}
                >
                    back
                </button>
                {loader ?
                    <div className='forAbsSpinner'>
                        <EllipsizSpinner />
                    </div> : (
                        <>
                            <h4>{postUser.name} </h4>
                            <p>{postUser.email}</p>
                            <p>{postUser.username}</p>
                            <p>{postUser.website}</p>
                        </>
                    )
                }
            </div>
        </Wrapper >
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
        position: relative;
    }
    .button{
        border: none;
        padding: 10px;
        font-size: 16px;
        border-radius: 8px;
    }
    .forAbsSpinner{
     width: 50px;
     height: 50px;
     position: absolute;
     top: 0;
     right: 0;
     margin-top:-20px;
    }
`
