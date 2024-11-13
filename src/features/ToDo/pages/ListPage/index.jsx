import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';


ListPage.propTypes = {
    
};

function ListPage(props) {

    const initTodoList = [
        {
            id: '1',
            title: 'Eat',
            status: 'new'
        },
        {
            id: '2',
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: '3',
            title: 'Code',
            status: 'new'
        }
    ]

    const location = useLocation()



    const [todoList, setTodoList] = useState(initTodoList)

    const [filterStatus, setFilterStatus]  = useState()


    const handleTodoClick = (todo, index) => {
        //state là object hoặc array thì phải clone ra trước
        //clone current array to the new one
        const newTodoList = [...todoList]

        //toggle state
        const newTodo = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new'
        }
        newTodoList[index] = newTodo

        //update todo list
        setTodoList(newTodoList)
    }
    const handleShowAllClick = () => {
        setFilterStatus('all')
    }
    const handleShowCompletedClick = () => {
        setFilterStatus('completed')
    }
    const handleShowNewClick = () => {
        setFilterStatus('new')
    }

    const renderTodoList = todoList.filter( todo => filterStatus === 'all' || filterStatus === todo.status)
    //filter(element => condition);
    //nếu condition là false thì phần tử đó bị loại bỏ
    // Duyệt qua từng phần tử: .filter() sẽ duyệt qua từng phần tử trong mảng originalArray.
    // Kiểm tra điều kiện: Với mỗi phần tử, hàm callback (hàm điều kiện) sẽ được gọi để kiểm tra xem phần tử đó có thỏa mãn điều kiện hay không.
    // Tạo mảng mới: Nếu phần tử thỏa mãn điều kiện (tức là hàm callback trả về true), phần tử đó sẽ được thêm vào mảng mới newArray.
    // Nếu không, nó sẽ bị bỏ qua.
    
    const handleTodoFormSubmit = (values) => {
        console.log('Form submit: ', values);
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: 'new',            
        }
        const newTodoList = [...todoList, newTodo] //list hiện tại + object mới
        setTodoList(newTodoList)
        
    }
    
    
    return (
        <div>
            <h3>What to do?</h3>
            <TodoForm onSubmit={handleTodoFormSubmit}/>
            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick}/>

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;