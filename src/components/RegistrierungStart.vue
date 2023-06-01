<template>
    <form @submit="registrierungStartAbgeschlossen" >
        <h3>Kleiderspende Registrierung</h3>
        
        <label>Art der Kleidung
            <input type="text" name="Kleidungsart" placeholder="Hosen, Jacken, ..." v-model="registrierungObjekt.kleidungsart">
        </label>
        
        
        <label>Krisengebiet
            <select name="Krisengebiet" type="text" v-model="registrierungObjekt.krisengebiet">
                <option disabled value="">Bitte auswählen</option>
                <option v-for="einKrisengebiet in Krisengebiete" :key="einKrisengebiet.Land">
                    {{ einKrisengebiet.Land }}
                </option>
            </select>
        </label>
        
        
        <label>Abgabeort
            <select name="abgabeort" type="text" v-model="registrierungObjekt.abgabeort">
                <option disabled value="" >Bitte auswählen</option>
                <option value="Zuhause">Persönliche Abholung bei Ihnen Zuhause</option>
                <option value="Vereinsstelle">Abgabe an der Geschäftstelle des Vereins</option>
            </select>
        </label>
        
        <template v-if="!isAbholer">
            
                <label>Abgabezentrum
                    <select name="abgabezentrum" type="text" v-model="registrierungObjekt.abgabezentrum">
                        <option disabled value="" >Bitte auswählen</option>
                        <option v-for="einAbgabezentrum in Abholstationen" :key="einAbgabezentrum.plz">
                            {{ einAbgabezentrum.plz }}
                        </option>
                    </select>
                </label>
            
        </template>
        
        <button type="submit">
            Weiter
        </button> 
    </form> 
</template>
<script setup>
    import { reactive, computed } from 'vue'
    import { router } from '@/router'
    import Krisengebiete from '../data/Krisengebiete.json'
    import Abholstationen from '../data/Abholstationen.json'

    const registrierungObjekt = reactive({
        kleidungsart: '',
        krisengebiet: '',
        abgabeort: 'Zuhause',    //Defaultwert wird festgelegt
        abgabezentrum: ''
    })

    function pflichtfeldPruefung(){
        if(registrierungObjekt.kleidungsart ===''
            || registrierungObjekt.krisengebiet === ''
            || registrierungObjekt.abgabeort === ''
            || (!isAbholer.value && registrierungObjekt.abgabezentrum === '' )
        ){
            return false
        }
        else{
            return true
        }
    }
    var newPath;

   const isAbholer = computed (() =>{
        return registrierungObjekt.abgabeort == 'Zuhause'
    })

    const actualDate = computed(()=>{
        var today = new Date();
        return today.getFullYear() + '-' + twoDigits(today.getMonth()+1) + '-' + twoDigits(today.getDate())
    })
    const actualTime = computed(()=>{
        var today = new Date();
        return twoDigits(today.getHours()) + ":" + twoDigits(today.getMinutes())
    })

    function twoDigits (n){
        var str = n.toString()
        if (str.length == 1){
            str = '0' + str
        }
        return str
    }

    function registrierungStartAbgeschlossen(){
        if (!pflichtfeldPruefung()){   //nicht alle Felder ausgefuellt
            alert('Bitte alle Felder eingeben')
        }
        else{
            if(isAbholer.value)
            {
                newPath ='RegistrierungAdresse'
            }
            else{
                newPath = 'RegistrierungAbschluss'
            }
            //Gibt die aktuellen Werte als Query weiter
            router.replace({name: newPath, 
            query:{kleidungsart: registrierungObjekt.kleidungsart,
            krisengebiet: registrierungObjekt.krisengebiet,
            abgabeort: registrierungObjekt.abgabeort,
            datum: actualDate.value,
            uhrzeit: actualTime.value}})
        }
    }
                

</script>