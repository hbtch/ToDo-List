import React from "react";
import ListItem from "../ListItem/ListItem";
import "./content.css"

function Content() {
    return (
      <React.Fragment>
        <ListItem name="Посмотреть урок по реакту"/>
        <ListItem name="Сделать домашку"/>
        <ListItem name="Приготовить ужин"/>
        <ListItem name="Покормить кота"/>
        <ListItem name="Сходить на тренировку"/>
      </React.Fragment>
    );
  }

export default Content;