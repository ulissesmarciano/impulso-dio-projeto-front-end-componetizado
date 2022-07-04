import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;
    
    input {
        color: #ddd;
        border: 1px solid rgb(95, 221, 253);
        box-shadow: 1px 1px 5px 5px rgb(95, 21, 253);
        border-radius: 8px;
        width: 100%;
        height: 44px;
        padding: 8px;
        font-weight: 500;
    }

       
    button {
        background-color: rgb(95, 21, 253);
        padding: 8px 16px;
        margin: 0 8px;
        border-radius: 8px;
        font-weight: bold;
        font-sise: 16px;

        &:hover {
            box-shadow: 0px 0px 2px 2px rgba(95, 221, 253, 0.616);
        }

        span {
            font-weight: bold;
            color: white;
        }
    }
`;

