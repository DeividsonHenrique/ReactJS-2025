import styled from "styled-components";

export const Container = styled.div`
    padding: 20px 150px;
    display: flex;
    justify-content: space-between;
`

export const Left = styled.div`
    width: 70%;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
`

export const Right = styled.div`
    width: 28%;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding-top: 30px;
`
export const Thumb = styled.div`
     width: 100%;

     img{
         width: 100%;
         height: auto;
         border-radius: 5px;
     }
`

export const Description = styled.div`
    padding: 30px 0;

    h2, p{
        margin-bottom: 15px;
        color: var(--secondary);
    }
`

export const Profile = styled.div`
    display: flex;
    justify-content: space-around;
`
export const ProfileImg = styled.div`
    width: 115px;
    height: 115px;
    background-color: var(--gray);
    overflow: hidden;
    display: flex;
    justify-content: center;
    border-radius: 5px;

    img{
        width: 150%;
        height: auto;
    }
`
export const ProfileDescription = styled.div`
    h3, p{
        margin-bottom: 15px;
        color: var(--secondary);
    }
`
export const ProfileContact = styled.div`
    h3, p{
        margin-bottom: 15px;
        color: var(--secondary);
    }
`
export const ProfileFormContact = styled.div`
    h3{
        margin-bottom: 15px;
        color: var(--secondary);
    }

    form{
        input, textarea{
            height: 50px;
            padding: 8px 15px;
            width: 100%;
            border-radius: 5px;
            color: var(--secondary);
            font-size: 1rem;
            letter-spacing: 0.1px;
            margin-bottom: 10px;
            outline: none;
            border: 1px solid var(--gray-light);
            resize: none;
        }

        textarea{
            height: 150px;
            width: 100%;
        }

        button{
            width: 100%;
            cursor: pointer;
            display: inline-block;
            text-align: center;
            background-color: var(--blue);
            line-height: 25px;
            border: none;
            color: var(--white);
            font-size: 1rem;
            font-weight: 600;
            border-radius: 5px;
            padding: 12px 20px;
            transition: all 0.3s ease-in-out;

            &:hover{
                box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
            }
        }
    }
`