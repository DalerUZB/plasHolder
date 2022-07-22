import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigation = useNavigate()
    return (
        <Wrapper>
            <div className='card'>
                <h1>Not Found</h1>
                <button className='button'
                    onClick={() => navigation(-1)}
                >
                    back
                </button>
            </div>
        </Wrapper >
    )
}

export default NotFound;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .card{
        padding: 20px;
        border: 2px solid black;
        width:250px;
    }
    .button{
        border: none;
        padding: 10px;
        font-size: 16px;
        border-radius: 8px;
    }
`