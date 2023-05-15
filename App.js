import { StyleSheet, Text, View, Button, Alert ,TouchableWithoutFeedback , TouchableOpacity, ScrollView } from 'react-native';

import React, {useState} from 'react';
import Task from './components/Task';
import styles from './appComponents.Styles';
import Form from './components/Form';

export default function appNote() {
  const [taskList, settaskList] = useState([])

  const handleAddTask = (task) => {
    settaskList([...taskList, task])
  }
  const handleDeleteTask = (index) =>{
    Alert.alert('Delete Task', 'Bạn đã hoàn thành việc này?', [
      {
        text: 'Yes',
        onPress: () => {
          let taskListTmp = [...taskList];
          //xoá 1 phần tử từ vị trí index
          taskListTmp.splice(index, 1);
          settaskList(taskListTmp);
        }
      },
      {text: 'No', onPress: () => {}},
    ]);
  }
  return(
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {
            taskList.map((item, index) =>{
                return <Task key = {index} title={item} number={index+1} onDeleteTask={() => handleDeleteTask(index)}/>
            })
          }
        </ScrollView>

      </View>
      <View style={styles.textInput}></View>
      <Form onAddTask={handleAddTask} />
    </View>
  )
}
