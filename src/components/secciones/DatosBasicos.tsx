import React from 'react';
import { Page, View, Text, Document, Image, StyleSheet } from '@react-pdf/renderer';
import { Styles } from '../style/styles';

export const DatosBasicos = () => {
  return (
    <>
      <View style={Styles.lineSeparator}>
        <Text style={Styles.title1}>Datos Básicos</Text>
      </View>

      <View style={Styles.table}>
        <View style={Styles.tableRow}>
          <View style={[Styles.tableCol, Styles.thRow, { width: '100%' }]}>
            <Text style={Styles.tableCell}>Razón Social *</Text>
          </View>
        </View>
        <View style={Styles.tableRow}>
          <View style={[Styles.tableCol, { width: '100%' }]}>
            <Text style={Styles.tableCell}>LAMINADOS SAC</Text>
          </View>
        </View>

        <View style={[Styles.tableRow, Styles.lineTop]}>
          <View style={[Styles.tableCol, Styles.thRow, { width: '50%' }]}>
            <Text style={Styles.tableCell}>País que Emite la Identificación *</Text>
          </View>
          <View style={[Styles.tableCol, Styles.thRow, { width: '50%' }]}>
            <Text style={Styles.tableCell}>RUC o Equivalente *</Text>
          </View>
        </View>
        <View style={Styles.tableRow}>
          <View style={[Styles.tableCol, { width: '50%' }]}>
            <Text style={Styles.tableCell}>PERU</Text>
          </View>
          <View style={[Styles.tableCol, Styles.lineLeft, { width: '50%' }]}>
            <Text style={Styles.tableCell}>26422131</Text>
          </View>
        </View>

        <View style={[Styles.tableRow, Styles.lineTop]}>
          <View style={[Styles.tableCol, Styles.thRow, { width: '100%' }]}>
            <Text style={Styles.tableCell}>Actividad Económica *</Text>
          </View>
        </View>
        <View style={Styles.tableRow}>
          <View style={[Styles.tableCol, { width: '100%' }]}>
            <Text style={Styles.tableCell}>8521 - Enseñanza secundaria de formación general</Text>
          </View>
        </View>

        <View style={[Styles.tableRow, Styles.lineTop]}>
          <View style={[Styles.tableCol, { width: '30%' }]}>
            <Text style={Styles.tableCell}>Sujeto Obligado *</Text>
          </View>
          <View style={[Styles.tableCol, { width: '70%' }]}>
            <Text style={Styles.tableCell}>NO</Text>
          </View>
        </View>

        <View style={Styles.tableRow}>
          <View style={[Styles.tableCol, { width: '50%' }]}>
            <Text style={Styles.tableCell}>¿El cliente tiene Oficial de Cumplimiento?</Text>
          </View>
          <View style={[Styles.tableCol, { width: '50%' }]}>
            <Text style={Styles.tableCell}> -- </Text>
          </View>
        </View>

        <View style={[Styles.tableRow, Styles.lineTop]}>
          <View style={[Styles.tableCol, Styles.thRow, { width: '50%' }]}>
            <Text style={Styles.tableCell}>Tipo de Entidad *</Text>
          </View>
          <View style={[Styles.tableCol, Styles.thRow, { width: '50%' }]}>
            <Text style={Styles.tableCell}>Tipo de Sociedad *</Text>
          </View>
        </View>
        <View style={Styles.tableRow}>
          <View style={[Styles.tableCol, { width: '50%' }]}>
            <Text style={Styles.tableCell}>Sociedades con Fines de Lucro</Text>
          </View>
          <View style={[Styles.tableCol, Styles.lineLeft, { width: '50%' }]}>
            <Text style={Styles.tableCell}>Sociedad Anónima</Text>
          </View>
        </View>

        <View style={[Styles.tableRow, Styles.lineTop]}>
          <View style={[Styles.tableCol, Styles.thRow, { width: '50%' }]}>
            <Text style={Styles.tableCell}>País de Constitución *</Text>
          </View>
          <View style={[Styles.tableCol, Styles.thRow, { width: '50%' }]}>
            <Text style={Styles.tableCell}>Fecha de Constitución *</Text>
          </View>
        </View>
        <View style={Styles.tableRow}>
          <View style={[Styles.tableCol, { width: '50%' }]}>
            <Text style={Styles.tableCell}>PERÚ</Text>
          </View>
          <View style={[Styles.tableCol, Styles.lineLeft, { width: '50%' }]}>
            <Text style={Styles.tableCell}>29/03/1985</Text>
          </View>
        </View>

        <View style={[Styles.tableRow, Styles.lineTop]}>
          <View style={[Styles.tableCol, { width: '70%' }]}>
            <Text style={Styles.tableCell}>¿El(los) Nombre(s) Comercial(es) es(son) diferente(s) al Nombre Social?</Text>
          </View>
          <View style={[Styles.tableCol, { width: '30%' }]}>
            <Text style={Styles.tableCell}>NO</Text>
          </View>
        </View>

        <View style={Styles.tableRow}>
          <View style={[Styles.tableCol, Styles.thRow, { width: '100%' }]}>
            <Text style={Styles.tableCell}>Nombre(s) Comercial(es) *</Text>
          </View>
        </View>
        <View style={Styles.tableRow}>
          <View style={[Styles.tableCol, { width: '100%' }]}>
            <Text style={Styles.tableCell}>-----</Text>
          </View>
        </View>

        <View>
          <Text style={Styles.title2}>Domicilio Físico del Negocio</Text>
        </View>

        <View style={[Styles.tableRow]}>
          <View style={[Styles.tableCol, Styles.thRow, { width: '25%' }]}>
            <Text style={Styles.tableCell}>País *</Text>
          </View>
          <View style={[Styles.tableCol, Styles.thRow, { width: '15%' }]}>
            <Text style={Styles.tableCell}>Vía *</Text>
          </View>
          <View style={[Styles.tableCol, Styles.thRow, { width: '45%' }]}>
            <Text style={Styles.tableCell}>Nombre *</Text>
          </View>
          <View style={[Styles.tableCol, Styles.thRow, { width: '15%' }]}>
            <Text style={Styles.tableCell}>Num. *</Text>
          </View>
        </View>
        <View style={Styles.tableRow}>
          <View style={[Styles.tableCol, { width: '25%' }]}>
            <Text style={Styles.tableCell}>PERÚ</Text>
          </View>
          <View style={[Styles.tableCol, Styles.lineLeft, { width: '15%' }]}>
            <Text style={Styles.tableCell}>CALLE</Text>
          </View>
          <View style={[Styles.tableCol, Styles.lineLeft, { width: '45%' }]}>
            <Text style={Styles.tableCell}>RIVERO</Text>
          </View>
          <View style={[Styles.tableCol, Styles.lineLeft, { width: '15%' }]}>
            <Text style={Styles.tableCell}>206</Text>
          </View>
        </View>

        <View style={[Styles.tableRow, Styles.lineTop]}>
          <View style={[Styles.tableCol, Styles.thRow, { width: '25%' }]}>
            <Text style={Styles.tableCell}>Zona</Text>
          </View>
          <View style={[Styles.tableCol, Styles.thRow, { width: '40%' }]}>
            <Text style={Styles.tableCell}>Nombre de la Zona</Text>
          </View>
          <View style={[Styles.tableCol, Styles.thRow, { width: '35%' }]}>
            <Text style={Styles.tableCell}>Referencia</Text>
          </View>
        </View>
        <View style={Styles.tableRow}>
          <View style={[Styles.tableCol, { width: '25%' }]}>
            <Text style={Styles.tableCell}>URBANIZACION</Text>
          </View>
          <View style={[Styles.tableCol, Styles.lineLeft, { width: '40%' }]}>
            <Text style={Styles.tableCell}>CERCADO</Text>
          </View>
          <View style={[Styles.tableCol, Styles.lineLeft, { width: '35%' }]}>
            <Text style={Styles.tableCell}>--</Text>
          </View>
        </View>

        <View style={[Styles.tableRow]}>
          <View style={[Styles.tableCol, Styles.thRow, { width: '25%' }]}>
            <Text style={Styles.tableCell}>Departamento</Text>
          </View>
          <View style={[Styles.tableCol, Styles.thRow, { width: '25%' }]}>
            <Text style={Styles.tableCell}>Provicia/Estado *</Text>
          </View>
          <View style={[Styles.tableCol, Styles.thRow, { width: '25%' }]}>
            <Text style={Styles.tableCell}>Distrito</Text>
          </View>
          <View style={[Styles.tableCol, Styles.thRow, { width: '25%' }]}>
            <Text style={Styles.tableCell}>Código Postal</Text>
          </View>
        </View>
        <View style={Styles.tableRow}>
          <View style={[Styles.tableCol, { width: '25%' }]}>
            <Text style={Styles.tableCell}>Arequipa</Text>
          </View>
          <View style={[Styles.tableCol, Styles.lineLeft, { width: '25%' }]}>
            <Text style={Styles.tableCell}>Arequipa</Text>
          </View>
          <View style={[Styles.tableCol, Styles.lineLeft, { width: '25%' }]}>
            <Text style={Styles.tableCell}>Arequipa</Text>
          </View>
          <View style={[Styles.tableCol, Styles.lineLeft, { width: '25%' }]}>
            <Text style={Styles.tableCell}>040101</Text>
          </View>
        </View>

        <View style={[Styles.tableRow, Styles.lineTop]}>
          <View style={[Styles.tableCol, { width: '70%' }]}>
            <Text style={Styles.tableCell}>¿El Domicilio de Correspondencia es diferente que el Domicilio Físico?</Text>
          </View>
          <View style={[Styles.tableCol, { width: '30%' }]}>
            <Text style={Styles.tableCell}>NO</Text>
          </View>
        </View>

        if(true) {
          <View>
            <View>
              <Text style={Styles.title2}>Domicilio de Correspondencia</Text>
            </View>
            <View style={[Styles.tableRow]}>
              <View style={[Styles.tableCol, Styles.thRow, { width: '25%' }]}>
                <Text style={Styles.tableCell}>País *</Text>
              </View>
              <View style={[Styles.tableCol, Styles.thRow, { width: '15%' }]}>
                <Text style={Styles.tableCell}>Vía *</Text>
              </View>
              <View style={[Styles.tableCol, Styles.thRow, { width: '45%' }]}>
                <Text style={Styles.tableCell}>Nombre *</Text>
              </View>
              <View style={[Styles.tableCol, Styles.thRow, { width: '15%' }]}>
                <Text style={Styles.tableCell}>Num. *</Text>
              </View>
            </View>
            <View style={Styles.tableRow}>
              <View style={[Styles.tableCol, { width: '25%' }]}>
                <Text style={Styles.tableCell}>PERÚ</Text>
              </View>
              <View style={[Styles.tableCol, Styles.lineLeft, { width: '15%' }]}>
                <Text style={Styles.tableCell}>CALLE</Text>
              </View>
              <View style={[Styles.tableCol, Styles.lineLeft, { width: '45%' }]}>
                <Text style={Styles.tableCell}>RIVERO</Text>
              </View>
              <View style={[Styles.tableCol, Styles.lineLeft, { width: '15%' }]}>
                <Text style={Styles.tableCell}>206</Text>
              </View>
            </View>

            <View style={[Styles.tableRow, Styles.lineTop]}>
              <View style={[Styles.tableCol, Styles.thRow, { width: '25%' }]}>
                <Text style={Styles.tableCell}>Zona</Text>
              </View>
              <View style={[Styles.tableCol, Styles.thRow, { width: '40%' }]}>
                <Text style={Styles.tableCell}>Nombre de la Zona</Text>
              </View>
              <View style={[Styles.tableCol, Styles.thRow, { width: '35%' }]}>
                <Text style={Styles.tableCell}>Referencia</Text>
              </View>
            </View>
            <View style={Styles.tableRow}>
              <View style={[Styles.tableCol, { width: '25%' }]}>
                <Text style={Styles.tableCell}>URBANIZACION</Text>
              </View>
              <View style={[Styles.tableCol, Styles.lineLeft, { width: '40%' }]}>
                <Text style={Styles.tableCell}>CERCADO</Text>
              </View>
              <View style={[Styles.tableCol, Styles.lineLeft, { width: '35%' }]}>
                <Text style={Styles.tableCell}>--</Text>
              </View>
            </View>

            <View style={[Styles.tableRow]}>
              <View style={[Styles.tableCol, Styles.thRow, { width: '25%' }]}>
                <Text style={Styles.tableCell}>Departamento</Text>
              </View>
              <View style={[Styles.tableCol, Styles.thRow, { width: '25%' }]}>
                <Text style={Styles.tableCell}>Provicia/Estado *</Text>
              </View>
              <View style={[Styles.tableCol, Styles.thRow, { width: '25%' }]}>
                <Text style={Styles.tableCell}>Distrito</Text>
              </View>
              <View style={[Styles.tableCol, Styles.thRow, { width: '25%' }]}>
                <Text style={Styles.tableCell}>Código Postal</Text>
              </View>
            </View>
            <View style={Styles.tableRow}>
              <View style={[Styles.tableCol, { width: '25%' }]}>
                <Text style={Styles.tableCell}>Arequipa</Text>
              </View>
              <View style={[Styles.tableCol, Styles.lineLeft, { width: '25%' }]}>
                <Text style={Styles.tableCell}>Arequipa</Text>
              </View>
              <View style={[Styles.tableCol, Styles.lineLeft, { width: '25%' }]}>
                <Text style={Styles.tableCell}>Arequipa</Text>
              </View>
              <View style={[Styles.tableCol, Styles.lineLeft, { width: '25%' }]}>
                <Text style={Styles.tableCell}>040101</Text>
              </View>
            </View>
          </View>
        }


        <View>
          <Text style={Styles.title2}>Teléfonos</Text>
        </View>

        <View style={[Styles.tableRow, Styles.lineTop]}>
          <View style={[Styles.tableCol, Styles.thRow, { width: '20%' }]}>
            <Text style={Styles.tableCell}>Tipo de Teléfono</Text>
          </View>
          <View style={[Styles.tableCol, Styles.thRow, { width: '30%' }]}>
            <Text style={Styles.tableCell}>Indicativo Internacional *</Text>
          </View>
          <View style={[Styles.tableCol, Styles.thRow, { width: '50%' }]}>
            <Text style={Styles.tableCell}>No. Telefónico (incluir indicativo departam.) *</Text>
          </View>
        </View>
        <View style={Styles.tableRow}>
          <View style={[Styles.tableCol, { width: '20%' }]}>
            <Text style={Styles.tableCell}>Celular</Text>
          </View>
          <View style={[Styles.tableCol, Styles.lineLeft, { width: '30%' }]}>
            <Text style={Styles.tableCell}>Perú</Text>
          </View>
          <View style={[Styles.tableCol, Styles.lineLeft, { width: '50%' }]}>
            <Text style={Styles.tableCell}>959390697</Text>
          </View>
        </View>

      </View>
    </>
  )
}
