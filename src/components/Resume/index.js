import React from "react";
import Card from "../Card";
import * as C from "./styles";
import {FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign} from "react-icons/fa";

const Resume = ({income, expense, total}) => {
    return (
        <C.Container>
            <Card title="Entradas" Icon={FaRegArrowAltCircleUp} value={income}/>
            <Card title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense}/>
            <Card title="Total" Icon={FaDollarSign} value={total}/>
        </C.Container>
    )
}

export default Resume