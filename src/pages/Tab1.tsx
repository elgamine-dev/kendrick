import React from 'react';
import { IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
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
            <IonTitle size="large">Apps</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard routerLink='/apps/dollaz'>
                <IonCardContent>$$$</IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard routerLink='/apps/shopping'>
                  <IonCardContent>Groceries</IonCardContent>
                </IonCard>
              </IonCol>
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
