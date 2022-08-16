/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {

  constructor(rows) {
            
    this.rows = rows;
    this.render();
  }
      
  get elem() {
    return this.elem;
  }
      
  render() {
    elem = document.createElement('table');
    this.elem.innerHTML =     
              this.rowsHtml()}
          
    this.elem.addEventListener('click', this.onTableClick);
  }
      
  rowsHtml() {
    return this.rows.map((row) => `
          <tr>
            <td>${row.name}</td>
            <td>${row.age}</td>
            <td>${row.salary}</td>
            <td>${row.city}</td>
            <td><button data-action="remove">X</button></td>
          </tr>
        `).join('')
  }
      
      
  onTableClick = (event) => {
    if (event.target.dataset.action !== 'remove') {
      return;
    }
        
    event.target.closest('tr').remove();
  };
    
}      
    const table = new UserTable(rows);
    document.body.append(table.elem);

