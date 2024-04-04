import React from "react";
import ListItem from "../ListItem/ListItem";
import "./content.css"

function Content() {
    return (
      <React.Fragment>
        <div className="todo-list">
        <ListItem className="todo-item" name="Посмотреть урок по реакту"/>
        <ListItem className="todo-item" name="Сделать домашку"/>
        <ListItem className="todo-item" name="Приготовить ужин"/>
        <ListItem className="todo-item" name="Покормить кота"/>
        <ListItem className="todo-item" name="Сходить на тренировку"/>
        </div>
      </React.Fragment>
    );
  }

export default Content;