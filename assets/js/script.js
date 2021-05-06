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
    delItem(index){
       this.todos.splice(index,1)
    },
    addTodo(){
      if(this.strTodo.length > 2){
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
    }


  }
  
});