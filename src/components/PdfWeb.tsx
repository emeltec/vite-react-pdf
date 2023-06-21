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


export const PdfWeb = () => (
  <>

    <div>
      <div>
        <h2 className='text-lg font-bold'>Datos Básicos</h2>
      </div>
      <div>
        <table>

          <tr>
            <th colSpan={10}>Razón Social *</th>
          </tr>
          <tr>
            <td colSpan={10}>LAMINADOS SAC</td>
          </tr>

          <tr>
            <th>País que Emite la Identificación *</th>
            <th colSpan={5}>RUC o Equivalente *</th>
          </tr>
          <tr>
            <td>PERU</td>
            <td colSpan={5}>26422131</td>
          </tr>

          <tr>
            <th colSpan={10}>Actividad Económica *</th>
          </tr>
          <tr>
            <td colSpan={10}>2211 - FABRICACION DE CUBIERTAS Y CAMARAS DE CAUCHO RECA</td>
          </tr>

          <tr>
            <th>Sujeto Obligado *</th>
            <td>NO</td>
            <th>¿El cliente tiene Oficial de Cumplimiento?</th>
            <td> - </td>
          </tr>

          <tr>
            <th>Tipo de Entidad *</th>
            <th colSpan={5}>Tipo de Sociedad *</th>
          </tr>
          <tr>
            <td>SOCIEDAD CON FINES DE LUCRO</td>
            <td colSpan={5}>SOCIEDAD ANONIMA CERRADA</td>
          </tr>

          <tr>
            <th>País de Constitución *</th>
            <th colSpan={5}>Fecha de Constitución *</th>
          </tr>
          <tr>
            <td>PERÚ</td>
            <td colSpan={5}>29/03/1985</td>
          </tr>

        </table>
      </div>
    </div>

  </>
)
