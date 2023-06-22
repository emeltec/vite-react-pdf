import { Page, View, Text, Document, StyleSheet } from '@react-pdf/renderer'
import React from 'react'

const borderColor = '#555555'
const bgCellColor = '#dddeee'

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'left',
  },
  general: {
    fontSize: 12,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },

  table: {
    display: "flex",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderColor: borderColor,
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
  }

});


export const PdfDoc = () => (
  <>
    <Document>
      <Page size="A4" style={styles.body}>
        <Text style={styles.header} fixed>
          Solicitud de cuentas y Servicios Comerciales (BASA)
        </Text>
        <View style={styles.general}>
          <View>
            <Text style={styles.subTitle}>Datos Básicos</Text>
          </View>

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

          </View>


          

        </View>
      </Page>
    </Document>
  </>
)
