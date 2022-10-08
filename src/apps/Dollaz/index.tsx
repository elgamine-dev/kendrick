import { IonCard, IonCardContent, IonContent, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import React from 'react';
import {evaluate} from 'mathjs';


interface ContainerProps {
  name: string;
}

const DollazContainer: React.FC<ContainerProps> = () => {
  const [hours, setHours] = React.useState(176)
  const rate = 65;
  const xchange = 0.7469865;
  const cad = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  }).format;
  const euro = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format;

  const setInput = (str: string) => {
    try {
      const ev = evaluate(str);
      setHours(ev)
    } catch (e) {
      console.error(e)
    }
  }
  
  const sum = (h: number) => {
    const dollaz = h * rate; 
    const eur  = dollaz * xchange - 31;
    const ursaaf = -1 * (eur * .22 + eur * .02);
    const net = eur + ursaaf;
    const conge = net * .1;
    const r = net - conge;

    return {
      hours: h,
      rawCad: dollaz,
      rawEuro: eur,
      taxes: ursaaf,
      net,
      conge,
      revenu: r,
    }
  }
  
  const c = sum(hours)

  return (
    <IonContent className="container">
        <IonInput onIonChange={v => setInput(v?.detail?.value || "176")}/>
        <IonCard>
            <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonLabel>{cad(rate)} x {c.hours} hours</IonLabel>
                      {cad(c.rawCad)}
                  </IonItem>
                  <IonItem>
                    <IonLabel>{cad(rate)} x {c.hours} hours x {xchange}</IonLabel>
                       {euro(c.rawEuro)}
                  </IonItem>
                  <IonItem>
                    <IonLabel>URSAAF</IonLabel>
                    {euro(c.taxes)}
                  </IonItem>
                  <IonItem>
                    <IonLabel>Net</IonLabel>
                     {euro(c.net)} ( {euro(c.revenu)} + {euro(c.conge)} )
                  </IonItem>
                </IonList>
            </IonCardContent>
        </IonCard>
    </IonContent>
  );
};

export default DollazContainer;