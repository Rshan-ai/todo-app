// Minimal app.js - full version available but keep simple for distribution
const API_URL = 'http://localhost:3000/todos';
const todoListEl = document.getElementById('todoList');
const todoForm = document.getElementById('todoForm') || document.getElementById('todo-form');
const filterSelect = document.getElementById('filter');

let todos = [];

async function fetchTodos(){
  try{
    const res = await fetch(API_URL);
    todos = await res.json();
    renderTodos();
  }catch(e){
    console.error('Failed to load todos', e);
  }
}

function renderTodos(){
  const ul = document.getElementById('todoList');
  if(!ul) return;
  ul.innerHTML = '';
  const now = new Date();
  todos.forEach(t=>{
    const li = document.createElement('li');
    const due = t.due ? new Date(t.due) : null;
    if(t.completed) li.classList.add('completed');
    if(due && due <= now && !t.completed) li.classList.add('overdue');
    li.innerHTML = `<div><strong>${t.title}</strong><div>${t.description||''}</div><div>${t.due||''}</div></div>
    <div>
      <button onclick="toggleComplete(${t.id}, ${t.completed})">✓</button>
      <button onclick="deleteTodo(${t.id})">🗑</button>
    </div>`;
    ul.appendChild(li);
  });
}

async function toggleComplete(id, current){
  await fetch(API_URL+'/'+id, {method:'PUT', headers:{'Content-Type':'application/json'}, body: JSON.stringify({...todos.find(x=>x.id===id), completed:!current})});
  fetchTodos();
}

async function deleteTodo(id){
  if(!confirm('Delete this task?')) return;
  await fetch(API_URL+'/'+id, {method:'DELETE'});
  fetchTodos();
}

if(todoForm){
  todoForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const due = document.getElementById('due').value;
    await fetch(API_URL, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({title, description, due, completed:false})});
    e.target.reset();
    fetchTodos();
  });
}

fetchTodos();
