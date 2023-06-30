import { Page, View, Text, Document, Image, StyleSheet } from '@react-pdf/renderer'
import React from 'react'
import { DATA } from '../data/data';
import { Styles } from './style/styles';
import { DatosBasicos } from './secciones/DatosBasicos';
import { Autocertificacion } from './secciones/Autocertificacion';
import { DatosComerciales } from './secciones/DatosComerciales';



export const PdfDoc = () => {

  const actualUrl = window.location.href;
  const urlLogo: any = `${actualUrl}logo_scotiabank.png`;

  const data = DATA;

  return (
    <>
      <Document>
        <Page size="A4" style={Styles.page}>
          <View style={Styles.contentHeader} fixed>
            <View style={Styles.logoAndTitle}>
              <View style={{ width: '20%' }}>
                <Image style={Styles.imageLogo} src={urlLogo}></Image>
              </View>
              <View style={{ width: '80%', textAlign: 'right' }}>
                <Text style={Styles.titleHeader}>
                  Solicitud de cuentas y Servicios Comerciales (BASA)
                </Text>
              </View>
            </View>
          </View>

          {/* CONTENIDO */}


          <View style={Styles.contentInfo}>

            <View style={{ flexDirection: 'row', marginBottom: 4 }}>
              <View style={{ width: '50%' }}>
                <Text>{data.txtFecha} {data.valFecha}</Text>
              </View>
              <View style={{ width: '50%', textAlign: 'right' }}>
                <Text style={{ fontSize: 8, color: 'red', textAlign: 'right' }}>
                  Los campos con asterisco(*) son obligatorios
                </Text>
              </View>
            </View>

            {/* SECCIONES  */}
            <DatosBasicos />

            <Autocertificacion />

            <DatosComerciales />


            {/* END SECCIONES  */}

          </View>

          {/* FOOTER */}

          <View style={Styles.contentFooter} fixed>
            <Text style={Styles.pageNumber} render={({ pageNumber, totalPages }) => (
              `Pag. ${pageNumber} / ${totalPages}`)}>
            </Text>
            <Text> Uso exclusivo en la República de Perú </Text>
            <Text>
              Scotiabank es Marca Registrada de The Bank of Nova Scotia, usada bajo licencia (donde corresponda)
            </Text>

          </View>

        </Page>
      </Document>
    </>
  )
}
