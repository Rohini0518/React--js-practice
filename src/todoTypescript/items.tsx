interface TodoListItem {
  id: number;
  task: string;
  itemDescription: string;
  createdOn: number;
  isCompleted: boolean;
}
export default function items() {

  const items :TodoListItem[]= [
    {id:1, task: 'Buy milk', createdOn: Date.now(), iscompleted: false, itemdescription: '2 liters of milk' },
    {id:2, task: 'Walk dog', createdOn: Date.now(), iscompleted: false, itemdescription: 'Evening walk, 30 mins' },
    {id:3, task: 'Read book', createdOn: Date.now(), iscompleted: false, itemdescription: 'Read 50 pages' },
    { id:4,task: 'Write code', createdOn: Date.now(), iscompleted: false, itemdescription: 'Work on React practice' },
  ];

  return (
    <div>
        <h1>Tasks</h1>
    {items.map((thing)=>(<div key="">
        <p>{thing.task}</p>
        <p>{thing.itemDescription}</p>
    </div>))}</div>
  )
}

 