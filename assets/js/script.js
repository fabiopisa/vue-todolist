/* Rifare l’esercizio della to do list come fatto assieme in classe:
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni elemento ha due stati (checked o non checked)
- al click dell’elemento avviene il toggle dello status
- al click sulla croce si elimina l’elemento
- clickando sul bottone si aggiunge il contenuto dell’input text solo se è più lungo di 2 caratteri
- se è più corto appare un alert che scompare dopo 2 secondi */
/*  bonus: rendere possibile l’eliminazione dell’item solo se prima è stato checkato */
const app = new Vue({

  el:'#app',
  data:{
    alertItem:false,
    alertNoCompleted:false,
    strTodo:'',
    todos:[
      {
        todo:'Ripassare HTML/CSS',
        checked:false
      },
      {
        todo:'Studiare Vue',
        checked:false
      },
      {
        todo:'Amare Vue',
        checked:true
      },
      {
        todo:'Alzarsi presto la mattina per ripassare',
        checked:false
      }
    ],

  },
  methods:{
    delItem(index,todo){
      if(todo.checked === true){
        this.todos.splice(index,1);
      }else{
        this.alertNoCompleted = true,
        setTimeout(()=>{
          this.alertNoCompleted = false;
        },2000);
      }
       
    },
    addTodo(){
      if(this.strTodo.trim().length > 2){
        this.todos.push({
          todo: this.strTodo,
          checked:false,
        });
        this.strTodo='';
      }else{
        this.alertItem = true;
        setTimeout(()=>{
          this.alertItem = false;
        },2000)
        this.strTodo='';
      }
    },
    /* nell'hatml in li usavamo questo
      :class="(todo.checked === true) ? 'checked' : null"
      :style="(index === todos.length -1 ) ? 'border:0;': null" 
      ora usiamo questa funzione con :class="addClasses(todo,index) in li nell'html"
    */
    addClasses(todo, index){
      return{
        //queste sono solo condizioni vere
       'checked': todo.checked,
       'last': index === this.todos.length -1
      }
    }


  }
  
});