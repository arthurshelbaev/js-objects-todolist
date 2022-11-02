const todoList = {
    items: [
      {
        text: 'Завершить текущий челлендж',
        completed: false,
      },
      {
        text: 'Отдохнуть во время перерыва',
        completed: false,
      },
      {
        text: 'Помочь напарнику понять код',
        completed: false,
      },
      {
        text: 'Выиграть в мафию',
        completed: true,
      },
    ],
  
    num (index) {
      return(this.items.indexOf(this.items[index]) + 1 + '. ')
    },
    
    printAll: function() {
      for (let i = 0; i < this.items.length; i++) {
        console.log(this.num(i) + this.print(i - 1))
      }
    },
    
    add: function(text) {
      this.items.unshift({ text: text, completed: false })
    },
    
    remove: function(index) {
      if (typeof index === 'number') {
      this.items.splice(index-1, 1)
      }
    },
    
    print: function(index) {
      if (this.items[index + 1].completed === true) {
        return('[x] ' + this.items[index + 1].text)
      } else {
        return('[] ' + this.items[index + 1].text)
      }
    },
    
    complete: function(index) {
      if (this.items[index - 1].completed === true) {
        this.items[index - 1].completed = false
      } else {
        this.items[index - 1].completed = true
      }
    },
};