import { Page, View, Text, Document, StyleSheet } from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});


export const PdfDoc = () => (
  <>
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text>Datos básicos #1</Text>
        </View>
        <View>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  </>
)
