import React from 'react';
import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol><a href="/dollaz">Dollaz</a></IonCol>
            <IonCol><a href="/shopping">Shopping</a></IonCol>
            <IonCol>a</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>a</IonCol>
            <IonCol>a</IonCol>
            <IonCol>a</IonCol>
            <IonCol>a</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
