import React, {useState} from 'react'
import {View, Text} from 'react-native';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { FlatList } from 'react-native-gesture-handler';
import { ListHeader } from '../../components/ListHeader';
import { CategorySelect } from '../../components/CategorySelect';
import { Appointments } from '../../components/Appointments';

import { styles } from './styles';
import { ListDivider } from '../../components/ListDivider';


export function Home() {
  const [category,setCategory] = useState('')

  const apointments = [
    {
      id:'1',
      guild: {
        id: '1',
        name:'Lendários',
        icon: null,
        owner: true,
      },
      category:1,
      date:'22/06/ às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id:'2',
      guild: {
        id: '1',
        name:'Lendários',
        icon: null,
        owner: false,
      },
      category:1,
      date:'22/06/ às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
  ]

  function handleCategorySelect(categoryId:string) {
    categoryId === category ? setCategory(''): setCategory(categoryId)
  }
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Profile/>
        <ButtonAdd />
      </View>
        <CategorySelect 
          categorySelected={category}
          setCategory={handleCategorySelect}
        />


        <View style={styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" />
          <FlatList 
            data={apointments} 
            keyExtractor={item => item.id} 
            renderItem={({item}) => (
             <Appointments data={item}/>
            )}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
          />

      </View>
    </View>
  )
}
