import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {

  categories: any[] = [
    {id:'rwe45t4t-gfd45-gdfd', name:'Drawing Category', parent: null, order:1},
    {id:'rwe45t4t-6544-gdfd', name:'Spilling Category', parent: null, order:2},
    {id:'rwegd5745t4t-khd4-ui65w', name:'Drawing Sub Category', parent: 'rwe45t4t-gfd45-gdfd', order:0},
    {id:'tre5hgh6-dg654-fds43', name:'Cutting Category', parent: null, order:0},
    {id:'fg45-jgg-876gh-kh5ji', name:'Super sub Cutting Category', parent: 'rwegd5745t4t-khd4-ui65w', order:0},
  ];

  get orderedCategories(){
    return this.categories.sort((a,b)=>a.order-b.order);
  }

  onDragChange(e) {
    // not allowing to insert item as a child to itself

    let visibleRows = e.component.getVisibleRows(),
        sourceNode = e.component.getNodeByKey(e.itemData.id),
        targetNode = visibleRows[e.toIndex].node;

    while(targetNode && targetNode.data) {
        if (targetNode.data.id === sourceNode.data.id) {
            e.cancel = true;
            break;
        }
        targetNode = targetNode.parent;
    }
  }

  onReorder = (e) => {
    let visibleRows =  e.component.getVisibleRows(),
        sourceData = e.itemData,
        targetData = visibleRows[e.toIndex].data;

    if (e.dropInsideItem) {
      // putting source item to the end of the it's new parent item's children

      const highestOrderInList = this.categories.filter(cat=>cat.parent===targetData.id).reduce((prev, current)=>prev<current.order?current.order:prev,0);
      sourceData.order = highestOrderInList+1;
      sourceData.parent = targetData.id;
      e.component.refresh();
    } else {
        // offseting all items after target item down by 1 order and either putting source item before or after target item depending on from and to index

        this.categories.map(cat=>{
          if(cat.parent===targetData.parent&&cat.order>targetData.order)
            cat.order++;
          return cat;
        });
        sourceData.order = e.fromIndex > e.toIndex? targetData.order:targetData.order+1;
        e.fromIndex > e.toIndex && targetData.order++;
        
        if (sourceData.parent !== targetData.parent) {
          sourceData.parent = targetData.parent;
          e.component.refresh();
        }
    }
  }

  setOrder(item){
    const highestOrderWithoutParent = this.categories.filter(cat=>cat.parent===null).reduce((prev, current)=>prev<current.order?current.order:prev,0);
    item.data.order = highestOrderWithoutParent+1;
  }

  logData(data){console.log(data);}

  constructor() { }

  ngOnInit(): void {}

}
