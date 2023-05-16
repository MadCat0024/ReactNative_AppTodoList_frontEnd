import Realm from "realm";
export const TODOLIST_SCHEMA = "TodoList";
export const TODO_SCHEMA = "ToDo";

export const TodoSchema = {
    name : TODO_SCHEMA,
    primaryKey : 'id',
    properties : {
        id : 'int',
        name : { type: 'string', indexed: true},
        done : { type: 'bool', indexed: true},
    }
};

export const TodoListSchema = {
    name: TODOLIST_SCHEMA, 
    primaryKey: 'id',
    properties: {
        id: 'name',
        name: 'string',
        creationDate: 'date',
        todos: { type: 'list', objectType: TODO_SCHEMA},

    }
};

const databaseOptions = {
    path: 'todoListApp.realm',
    schema: [TODOLIST_SCHEMA, TODO_SCHEMA],
    schemaVersion: 0,
}
//function todolist
//function add database
export const insertNewTodoList = newTodoList => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(()=>{
            realm.create(TODOLIST_SCHEMA, newTodoList);
            resolve(newTodoList);
        });
    }).catch((error) => reject(error));
}); 

//update database list need complete
export const updateTodoList = todoList => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(()=>{
            //objectForPrimaryKey: search todo by key
            let updatingTodoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoList.id);
            updatingTodoList.name = todoList.name;
            resolve();
        });

    }).catch((error)=> reject(error));
})

export const deleteTodoList = todoListId => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm =>{
        realm.write(()=>{
            let deletingTodoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA,todoListId);
            realm.delete(deletingTodoList);
            resolve();
        });
    }).catch((error)=> reject(error));
})

//delete all todoList 
/** 
export const deleteAllTodoList = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm =>{
        realm.write(()=>{
            let allTodoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA);
            realm.delete(allTodoList);
            resolve();
        })
    }).catch((error)=> reject(error));
})
*/

export const queryAllTodoList = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm =>{
        let allTodoList = realm.objects(TODOLIST_SCHEMA);
        resolve(allTodoList);
    }).catch((error) => {
        reject(error)
    });
});

export default new Realm(databaseOptions);