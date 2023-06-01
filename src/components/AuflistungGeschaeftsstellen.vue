<template>
    <h2>Abholstationen</h2>
    <table role="grid" >
        <thead>
            <tr>
            <th>Postleitzahl</th>
            <th>Stadt</th>
            <th>Straße</th>
            <th>Hausnummer</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="abholstation in Abholstationen" :key="abholstation.plz">
                <td>{{ abholstation.plz }}</td> 
                <td>{{ abholstation.stadt }}</td>
                <td>{{ abholstation.strasse }}</td>
                <td>{{ abholstation.hausnr }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import Abholstationen from '../data/Abholstationen'
</script>