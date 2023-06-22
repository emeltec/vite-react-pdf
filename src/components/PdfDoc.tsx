import { Page, View, Text, Document, Image, StyleSheet } from '@react-pdf/renderer'
import React from 'react'

const borderColor = '#555555'
const bgCellColor = '#dddeee'

const styles = StyleSheet.create({
  page: {
    paddingTop: 15,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontSize: 12,
  },

  contentHeader: {
    marginBottom: 20,
  },

  titleHeader: {
    fontSize: 14,
    textAlign: 'right',
  },
  logoAndTitle: {
    flexDirection: "row",
    width: '100%'
  },

  subTitle: {
    fontSize: 14,
    textAlign: 'left',
  },

  contentInfo: {
    fontSize: 12,
  },

  table: {
    display: "flex",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderColor: borderColor,
    marginTop: 6
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
    width: '100%'
  },

  tableCol: {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: borderColor
  },
  tableCell: {
    margin: 0,
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 3,
    paddingTop: 3,
  },
  thRow: {
    backgroundColor: bgCellColor,
    fontWeight: 'bold'
  },
  image: {
    height: 25,
  },

  lineSeparator: {
    width: "100%",
    borderStyle: "solid",
    borderBottomWidth: 1,
    marginTop: 6,
    marginBottom: 3
  }

});


export const PdfDoc = () => (
  <>
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.contentHeader}>
          <View style={styles.logoAndTitle}>
            <View style={{ width: '20%' }}>
              <Image style={styles.image} src="/logo_scotiabank.png"></Image>
            </View>
            <View style={{ width: '80%', textAlign: 'right' }}>
              <Text style={styles.titleHeader} fixed>
                Solicitud de cuentas y Servicios Comerciales (BASA)
              </Text>
            </View>
          </View>

          <View style={styles.lineSeparator}></View>
          <Text style={{fontSize:9, color:'red', textAlign:'right'}} fixed>
            Los campos con asterisco(*) son obligatorios
          </Text>
        </View>


        <View style={styles.contentInfo}>

          <View style={{ flexDirection: 'row', fontSize: 14, fontWeight: 700, marginBottom: 4 }}>
            <View style={{ width: '50%' }}>
              <Text>Fecha: 15/06/2023</Text>
            </View>
            <View style={{ width: '50%', textAlign: 'right' }}>
              <Text>Persona Jurídica</Text>
            </View>
          </View>

          <View>
            <Text style={styles.subTitle}>Datos Básicos</Text>
          </View>

          <View style={styles.lineSeparator}></View>

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={[styles.tableCol, styles.thRow, { width: '100%' }]}>
                <Text style={styles.tableCell}>Razón Social *</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={[styles.tableCol, { width: '100%' }]}>
                <Text style={styles.tableCell}>LAMINADOS SAC</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={[styles.tableCol, styles.thRow, { width: '50%' }]}>
                <Text style={styles.tableCell}>País que Emite la Identificación *</Text>
              </View>
              <View style={[styles.tableCol, styles.thRow, { width: '50%' }]}>
                <Text style={styles.tableCell}>RUC o Equivalente *</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={[styles.tableCol, { width: '50%' }]}>
                <Text style={styles.tableCell}>PERU</Text>
              </View>
              <View style={[styles.tableCol, { width: '50%' }]}>
                <Text style={styles.tableCell}>26422131</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={[styles.tableCol, styles.thRow, { width: '100%' }]}>
                <Text style={styles.tableCell}>Actividad Económica *</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={[styles.tableCol, { width: '100%' }]}>
                <Text style={styles.tableCell}>2211 - FABRICACION DE CUBIERTAS Y CAMARAS DE CAUCHO RECA</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={[styles.tableCol, styles.thRow, { width: '25%' }]}>
                <Text style={styles.tableCell}>Sujeto Obligado *</Text>
              </View>
              <View style={[styles.tableCol, { width: '15%' }]}>
                <Text style={styles.tableCell}>NO</Text>
              </View>

              <View style={[styles.tableCol, styles.thRow, { width: '45%' }]}>
                <Text style={styles.tableCell}>¿El cliente tiene Oficial de Cumplimiento?</Text>
              </View>
              <View style={[styles.tableCol, { width: '15%' }]}>
                <Text style={styles.tableCell}> -- </Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={[styles.tableCol, styles.thRow, { width: '50%' }]}>
                <Text style={styles.tableCell}>Tipo de Entidad *</Text>
              </View>
              <View style={[styles.tableCol, styles.thRow, { width: '50%' }]}>
                <Text style={styles.tableCell}>Tipo de Sociedad *</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={[styles.tableCol, { width: '50%' }]}>
                <Text style={styles.tableCell}>SOCIEDAD CON FINES DE LUCRO</Text>
              </View>
              <View style={[styles.tableCol, { width: '50%' }]}>
                <Text style={styles.tableCell}>SOCIEDAD ANONIMA CERRADA</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={[styles.tableCol, styles.thRow, { width: '50%' }]}>
                <Text style={styles.tableCell}>País de Constitución *</Text>
              </View>
              <View style={[styles.tableCol, styles.thRow, { width: '50%' }]}>
                <Text style={styles.tableCell}>Fecha de Constitución *</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={[styles.tableCol, { width: '50%' }]}>
                <Text style={styles.tableCell}>PERÚ</Text>
              </View>
              <View style={[styles.tableCol, { width: '50%' }]}>
                <Text style={styles.tableCell}>29/03/1985</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={[styles.tableCol, styles.thRow, { width: '70%' }]}>
                <Text style={styles.tableCell}>¿El Nombre Comercial es diferente de la Razón Social?</Text>
              </View>
              <View style={[styles.tableCol, { width: '30%' }]}>
                <Text style={styles.tableCell}>NO</Text>
              </View>
            </View>

          </View>




        </View>
      </Page>
    </Document>
  </>
)
