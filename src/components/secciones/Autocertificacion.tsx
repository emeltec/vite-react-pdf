import React from 'react'
import { Page, View, Text, Document, Image, StyleSheet } from '@react-pdf/renderer';
import { Styles } from '../style/styles';

export const Autocertificacion = () => {
  return (
    <>
      <View style={Styles.lineSeparator}>
        <Text style={Styles.title1}>Autocertificación de Residencia Fiscal</Text>
      </View>

      <View>
        <Text style={Styles.title2}>Domicilio Fiscal de la Persona Jurídica - Estados Unidos de América</Text>
      </View>

      <View style={Styles.tableRow}>
        <View style={[Styles.tableCol, Styles.thRow, { width: '100%' }]}>
          <Text style={Styles.tableCell}>¿Debe la Persona Jurídica declarar impuestos en los Estados Unidos de América? *</Text>
        </View>
      </View>
      <View style={Styles.tableRow}>
        <View style={[Styles.tableCol, { width: '50%', textAlign: 'right' }]}>
          <Text style={Styles.tableCell}>SI</Text>
        </View>
        <View style={[Styles.tableCol, { width: '50%' }]}>
          <Text style={Styles.tableCell}>NO</Text>
        </View>
      </View>

      <View style={Styles.tableRow}>
        <View style={[Styles.tableCol, Styles.thRow, { width: '100%' }]}>
          <Text style={Styles.tableCell}>Suministre el TIN o el EIN *</Text>
        </View>
      </View>
      <View style={Styles.tableRow}>
        <View style={[Styles.tableCol, { width: '50%', textAlign: 'right' }]}>
          <Text style={Styles.tableCell}>TIN</Text>
        </View>
        <View style={[Styles.tableCol, { width: '50%' }]}>
          <Text style={Styles.tableCell}>EIN</Text>
        </View>
      </View>

      <View style={Styles.tableRow}>
        <View style={[Styles.tableCol, Styles.thRow, { width: '100%' }]}>
          <Text style={Styles.tableCell}>¿Se encuentra la Persona Jurídica exenta de los requerimientos de reporte establecidos por la Ley FATCA EEUU? *</Text>
        </View>
      </View>
      <View style={Styles.tableRow}>
        <View style={[Styles.tableCol, { width: '50%', textAlign: 'right' }]}>
          <Text style={Styles.tableCell}>SI</Text>
        </View>
        <View style={[Styles.tableCol, { width: '50%' }]}>
          <Text style={Styles.tableCell}>NO</Text>
        </View>
      </View>

      <View>
        <Text style={Styles.title2}>Residencia Fiscal de la Persona Jurídica - Otros Países</Text>
      </View>

      <View style={Styles.tableRow}>
        <View style={[Styles.tableCol, Styles.thRow, { width: '100%' }]}>
          <Text style={Styles.tableCell}>¿Debe la Persona Jurídica declarar impuestos en un país/jurisdicción diferente a Perú o a los Estados Unidos de América? *</Text>
        </View>
      </View>
      <View style={Styles.tableRow}>
        <View style={[Styles.tableCol, { width: '50%', textAlign: 'right' }]}>
          <Text style={Styles.tableCell}>SI</Text>
        </View>
        <View style={[Styles.tableCol, { width: '50%' }]}>
          <Text style={Styles.tableCell}>NO</Text>
        </View>
      </View>

      <View>
        <Text style={Styles.title2}>Clasificación Inicial de la Persona Jurídica</Text>
      </View>

      <View style={Styles.tableRow}>
        <View style={[Styles.tableCol, Styles.thRow, { width: '100%' }]}>
          <Text style={Styles.tableCell}>¿Es la Persona Jurídica una Institución Financiera? *</Text>
        </View>
      </View>
      <View style={Styles.tableRow}>
        <View style={[Styles.tableCol, { width: '50%', textAlign: 'right' }]}>
          <Text style={Styles.tableCell}>SI</Text>
        </View>
        <View style={[Styles.tableCol, { width: '50%' }]}>
          <Text style={Styles.tableCell}>NO</Text>
        </View>
      </View>

      <View>
        <Text style={Styles.title2}>Clasificación de Instituciones Financieras (IF)</Text>
      </View>

      <View style={Styles.tableRow}>
        <View style={[Styles.tableCol, Styles.thRow, { width: '100%' }]}>
          <Text style={Styles.tableCell}>Elija sólo la clasificación que mejor describa, de las siguientes tres clasificaciones, a la Institución Financiera *</Text>
        </View>
      </View>
      <View style={Styles.tableRow}>
        <View style={[Styles.tableCol, { width: '100%' }]}>
          <Text style={Styles.tableCell}>Institución Financiera de EEUU</Text>
        </View>
      </View>

      <View>
        <Text style={Styles.title2}>Clasificación Inicial de la Persona Jurídica</Text>
      </View>

      <View style={Styles.tableRow}>
        <View style={[Styles.tableCol, Styles.thRow, { width: '100%' }]}>
          <Text style={Styles.tableCell}>
            ¿Es esta Institución Financiera una Entidad de Inversión que cumple con LAS SIGUIENTES DOS CONDICIONES?:
            Constituida en una jurisdicción que no es participante del Estándar Global para el Intercambio Automático de Información (Common
            Reporting Standard - CRS*, por sus siglas en inglés) Y administrada por otra institución financiera *
          </Text>
        </View>
      </View>
      <View style={Styles.tableRow}>
        <View style={[Styles.tableCol, { width: '50%', textAlign: 'right' }]}>
          <Text style={Styles.tableCell}>SI</Text>
        </View>
        <View style={[Styles.tableCol, { width: '50%' }]}>
          <Text style={Styles.tableCell}>NO</Text>
        </View>
      </View>

    </>
  )
}
