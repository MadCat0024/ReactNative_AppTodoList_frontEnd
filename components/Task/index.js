import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style';
import { updateTodoList, deleteTodoList, queryAllTodoList } from '../../database/allSchema';

const Task = (props) => {
  const {number} = props;
  const numberText = number < 10 ? `0${number}` : {number};
  const itemColor = number % 2 === 0 ? styles.even : styles.odd;
  return (
    <TouchableOpacity
      onPress={props.onDeleteTask}
    >
        <View style={styles.item}>
            <View style={[styles.checkBox, itemColor]}>
            <Text style={styles.number}>{numberText}</Text>
            </View>
            <Text style={styles.content}>{props.title}</Text>
        </View>
    </TouchableOpacity>
  )
}
export default Task