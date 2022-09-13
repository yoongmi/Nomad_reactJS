import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface Iform {
  toDo: string;
}

function ToDoList() {
  //watch : form의 입력값들의 변화를 관찰 할 수 있게 해주는 함수
  const { register, handleSubmit, setValue } = useForm<Iform>();
  const handleValid = (data: Iform) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "please write a To do",
          })}
          type="text"
          placeholder="write a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
export default ToDoList;
