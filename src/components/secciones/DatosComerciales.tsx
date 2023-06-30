import { Page, View, Text, Document, Image, StyleSheet } from '@react-pdf/renderer';
import { Styles } from '../style/styles';

import React from 'react'

export const DatosComerciales = () => {
  return (
    <>
      <View style={Styles.lineSeparator}>
        <Text style={Styles.title1}>Autocertificación de Residencia Fiscal</Text>
      </View>

      <View style={Styles.tableRow}>
        <View style={[Styles.tableCol, Styles.thRow, { width: '50%' }]}>
          <Text style={Styles.tableCell}>Ventas Anuales Brutas Moneda Nacional *</Text>
        </View>
        <View style={[Styles.tableCol, Styles.thRow, { width: '50%' }]}>
          <Text style={Styles.tableCell}>Ventas Anuales Brutas Moneda Extranjera</Text>
        </View>
      </View>
      <View style={Styles.tableRow}>
        <View style={[Styles.tableCol, { width: '50%' }]}>
          <Text style={Styles.tableCell}>9997333</Text>
        </View>
        <View style={[Styles.tableCol, { width: '50%' }]}>
          <Text style={Styles.tableCell}>USD</Text>
        </View>
      </View>

      <View style={Styles.tableRow}>
        <View style={[Styles.tableCol, Styles.thRow, { width: '100%' }]}>
          <Text style={Styles.tableCell}>¿Cotiza en Bolsa? *</Text>
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
          <Text style={Styles.tableCell}>Provea una descripción del negocio al cual se dedica su empresa *</Text>
        </View>
      </View>
      <View style={Styles.tableRow}>
        <View style={[Styles.tableCol, { width: '100%' }]}>
          <Text style={Styles.tableCell}>Servicios educativos.</Text>
        </View>
      </View>

      <View style={Styles.tableRow}>
        <View style={[Styles.tableCol, Styles.thRow, { width: '100%' }]}>
          <Text style={Styles.tableCell}>Provea una descripción de los productos y/o servicios ofrecidos por su empresa *</Text>
        </View>
      </View>
      <View style={Styles.tableRow}>
        <View style={[Styles.tableCol, { width: '100%' }]}>
          <Text style={Styles.tableCell}>Servicios educativos.</Text>
        </View>
      </View>

      <View style={Styles.tableRow}>
        <View style={[Styles.tableCol, Styles.thRow, { width: '100%' }]}>
          <Text style={Styles.tableCell}>¿Tiene Proveedores localizados en el extranjero? *</Text>
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
          <Text style={Styles.tableCell}>¿Tiene Clientes localizados en el extranjero? *</Text>
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
          <Text style={Styles.tableCell}>¿Tiene Operaciones, Sociedades y/o Empresas relacionadas en el extranjero? *</Text>
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
          <Text style={Styles.tableCell}>¿Su Empresa forma parte de una Franquicia y/o Grupo Empresarial local? *</Text>
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
          <Text style={Styles.tableCell}>¿Su Empresa forma parte de una Franquicia y/o Grupo Empresarial Internacional? *</Text>
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
