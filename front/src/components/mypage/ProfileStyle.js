import { Grid, Box, InputBase, FormHelperText } from "@mui/material";

import Button from "@material-ui/core/Button";
import styled from "@emotion/styled";

const MyBox = styled(Box)`
    background-color: #ffffff;
    width: 70%;
    height: 100%;
    margin: 2%;
`;

const Title = styled(Grid)`
    border-bottom: solid 1px #ebebeb;
    font-size: 30px;
    font-weight: bold;
    color: black;
    padding: 3%;
    margin-bottom: 3%;
`;

const StyledInput = styled(InputBase)`
    width: 100%;
    padding: 1%;
    background: white;
    border-radius: 8px;
    border: 1px solid #d6ccc2;
    &:hover {
        border-color: gray;
    }
`;

const Content = styled(Grid)`
    width: 70%;
    height: 80%;
    margin: 0 auto;
`;

const SubTitle = styled(Grid)`
    font-size: 15px;
    color: black;
    width: 90%;
    padding: 2px 0 5px 2px;
`;

const SubContent = styled(Grid)`
    padding: 1%;
    height: 85px;
    margin-bottom: 5px;
`;

const HelperText = styled(FormHelperText)`
    font-size: 10px;
    color: gray;
    padding-left: 1%;
`;

const MyButton = styled(Button)`
    width: 60%;
    font-weight: bold;
    color: #ffffff;
    background-color: #d6ccc2;
    font-size: 20px;
    text-align: center;
    border-radius: 30px;
    padding: ;

    :hover {
        background-color: black;
    }
`;

const GoogleTitle = styled(Grid)`
    border-bottom: solid 1px #ebebeb;
    width: 50%;
    font-size: 20px;
    color: black;
    padding: 3%;
    margin: auto;
`;

export {
    MyBox,
    Title,
    StyledInput,
    Content,
    SubTitle,
    SubContent,
    HelperText,
    MyButton,
    GoogleTitle,
};
