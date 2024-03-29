import React, { useState } from 'react'
import HeaderTop from './../../components/Header/HeaderTop'
import MenuMain from './../../components/Menu/MenuMain'
import { ContainerMain, AddButton, Title, NewHabit, Days, DaysDiv, ButtonDiv } from './style'
import plus from './../../assets/plus.svg'
import AddNewHabit from '../../components/AddNewHabit'
import MyHabits from '../../components/MyHabits'



export default function Habitos() {

  const [add, setAdd] = useState(false);

  function addTask() {
    setAdd(true);
  }

  return (
    <>
      <HeaderTop />
      <ContainerMain>
        <Title>
          <h1>Meus Hábitos</h1>
          <AddButton
            data-test="habit-create-btn"
            onClick={(addTask)}>
            <img src={plus} />
          </AddButton>
        </Title>

        {add && (
          <AddNewHabit
            setAdd={setAdd} />
        )}

        {!add && (
          <MyHabits
            setAdd={setAdd} />
        )}



      </ContainerMain>


      <MenuMain />

    </>
  )
}

