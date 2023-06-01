<template>
    <form @submit="registrierungAdresseAbgeschlossen">
        <h3>Kleiderspende Registrierung Addresseingabe</h3>
    
        <label>Straße
            <input type="text" name="Straße" placeholder="Musterstrasse" v-model="registrierungAdresseObjekt.strasse">
        </label>
    
    
        <label>Hausnummer
            <input type="number" min="0" name="Hausnummer" placeholder="12" v-model="registrierungAdresseObjekt.hausnummer">
        </label>
    
    
        <label>Postleitzahl
            <input type="number" min="0" name="Postleitzahl" placeholder="12345" v-model="registrierungAdresseObjekt.postleitzahl" @change="checkPostleitzahl">
        </label>
    
    
        <label>Stadt
            <input type="text" name="Stadt" placeholder="Musterstadt" v-model="registrierungAdresseObjekt.stadt">
        </label>
    
        <div class="grid">
            <label>Gewünschtes Abholdatum
                <input type="date" name="datum" v-model="registrierungObjekt.datum">
            </label>

            <label>Gewünschte Abholuhrzeit
                <input type="time" name="uhrzeit" v-model="registrierungObjekt.uhrzeit">
            </label>
        </div>
        <button type="submit">
            Weiter
        </button> 
    </form>
</template>
<script setup>
    import { reactive } from 'vue'
    import { router } from '@/router'
    import Abholstationen from '../data/Abholstationen.json'

    const registrierungAdresseObjekt = reactive({
        strasse: '',
        hausnummer: 0,
        postleitzahl: 0,
        stadt: ''
    })

    const registrierungObjekt = reactive({
        kleidungsart: router.currentRoute.value.query.kleidungsart,
        krisengebiet: router.currentRoute.value.query.krisengebiet,
        abgabeort: router.currentRoute.value.query.abgabeort,
        datum: "",
        uhrzeit: ""
    })


    function pflichtfeldPruefung(){
        if(registrierungAdresseObjekt.strasse ===''
            || registrierungAdresseObjekt.hausnummer === 0
            || registrierungAdresseObjekt.postleitzahl === 0
            || registrierungAdresseObjekt.stadt === ''
            || registrierungObjekt.datum === ''
        ){
            return false
        }
        return true
    }

    function checkPostleitzahl(){  
        for(let abholstation of Abholstationen){ //Wenn die ersten beiden Ziffern gleich sind, ist die Abholstation in der Nähe
            if(registrierungAdresseObjekt.postleitzahl.toString()[0] === abholstation.plz.toString()[0]
                && registrierungAdresseObjekt.postleitzahl.toString()[1] === abholstation.plz.toString()[1])    
            {
                return true
            }
        }
        //Adresse nicht in der Naehe eines Abgabeortes
        alert('Keine Abholstation in der Nähe. Alle Abholstationen gibt es im Menü unter dem Reiter Geschäftstellen.')
        registrierungAdresseObjekt.postleitzahl =0
        return false
    }
    

    function registrierungAdresseAbgeschlossen(){
        if (!pflichtfeldPruefung()){   //nicht alle Felder ausgefuellt
            alert('Bitte alle Felder ausfuellen')
        }
        else{   //Adresse fertig eingegeben
            router.replace({name: 'RegistrierungAbschluss',
            query:{kleidungsart: registrierungObjekt.kleidungsart,
            krisengebiet: registrierungObjekt.krisengebiet,
            abgabeort: registrierungObjekt.abgabeort,
            datum: registrierungObjekt.datum,
            uhrzeit: registrierungObjekt.uhrzeit,
            strasse: registrierungAdresseObjekt.strasse,
            hausnummer: registrierungAdresseObjekt.hausnummer,
            postleitzahl: registrierungAdresseObjekt.postleitzahl,
            stadt: registrierungAdresseObjekt.stadt }
            })
        }
    }
                

</script>