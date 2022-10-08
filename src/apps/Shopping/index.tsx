import { IonItem, IonLabel, IonReorder, IonReorderGroup, IonTextarea } from '@ionic/react';
import React from 'react';
import './ShoppingContainer.css';
import { ItemReorderEventDetail } from '@ionic/core';

interface ContainerProps {
  name: string;
}

const ShoppingContainer: React.FC<ContainerProps> = () => {
  const [els, setEls] = React.useState<string[]>([])
  const doit = (e: any ) => {
    const raw: string[] = e.detail?.value.split("\n") || [];
    setEls(raw.map((l: string) => l.trim()).filter(l => !!l))

  }

  function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);
  
    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }

  return (
    <div className="container">
      <strong>Shopping</strong>
      <p>Paste stuff here</p>
      <IonTextarea onIonChange={doit} />
      <button>Do</button>
      <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
        {els.map((l, i) => (
          <IonItem key={i}>
            <IonLabel>{l}</IonLabel>
            <IonReorder slot='end'/>
          </IonItem>
        ))}
      </IonReorderGroup>
    </div>
  );
};

export default ShoppingContainer;