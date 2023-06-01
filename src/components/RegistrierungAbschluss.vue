<template>
    <h2>Vielen Dank für die Spende!</h2>
    Die Buchung war erfolgreich.
    Folgende Daten sind bei uns eingegangen:

    <table role="grid">  
        <thead>
            <tr>
            <th>Daten</th>
            <th>Gespeicherter Wert</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Kleidungsart</td>
                <td> {{ registrierungObjekt.kleidungsart }}</td>
            </tr>
            <tr>
                <td>Krisengebiet</td>
                <td> {{  registrierungObjekt.krisengebiet }}</td>
            </tr>
            <tr>
                <td>Abgabeort</td>
                <td> {{  registrierungObjekt.abgabeort }}</td>
            </tr>
            <template v-if="isAbholer">
                <tr>
                    <td>Straße</td>
                    <td> {{ registrierungAdresseObjekt.strasse }}</td>
                </tr>
                <tr>
                    <td>Hausnummer</td>
                    <td> {{ registrierungAdresseObjekt.hausnummer }}</td>
                </tr>
                <tr>
                    <td>Postleitzahl</td>
                    <td> {{ registrierungAdresseObjekt.postleitzahl }}</td>
                </tr>
                <tr>
                    <td>Stadt</td>
                    <td> {{ registrierungAdresseObjekt.stadt }}</td>
                </tr>
            </template>
            <tr>
                <td>Datum</td>
                <td> {{ registrierungObjekt.datum }}</td>
            </tr>
            <tr>
                <td>Uhrzeit</td>
                <td> {{  registrierungObjekt.uhrzeit }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
    import { reactive, computed } from 'vue'
    import { router } from '@/router'
    const registrierungObjekt = reactive({
        kleidungsart: router.currentRoute.value.query.kleidungsart,
        krisengebiet: router.currentRoute.value.query.krisengebiet,
        abgabeort: router.currentRoute.value.query.abgabeort,
        datum: router.currentRoute.value.query.datum,
        uhrzeit: router.currentRoute.value.query.uhrzeit
    })
    const registrierungAdresseObjekt = reactive({
        strasse: router.currentRoute.value.query.strasse,
        hausnummer: router.currentRoute.value.query.hausnummer,
        postleitzahl: router.currentRoute.value.query.postleitzahl,
        stadt: router.currentRoute.value.query.stadt
    })

    const isAbholer = computed (() =>{
        return registrierungObjekt.abgabeort === "Zuhause"
    })

</script>