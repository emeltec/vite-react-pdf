import { StyleSheet } from '@react-pdf/renderer'

const borderColor = '#000000';
const bgCellColor = '#e1e1e1';
const widthBorder = 0.5;

export const Styles = StyleSheet.create({
  page: {
    paddingTop: 15,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontSize: 11,
  },

  contentHeader: {
    marginBottom: 20,
  },

  titleHeader: {
    fontSize: 13,
    textAlign: 'right',
    fontFamily: 'Helvetica-Bold',
    fontWeight: 'bold'
  },

  logoAndTitle: {
    flexDirection: "row",
    width: '100%'
  },

  title1: {
    fontSize: 12,
    textAlign: 'left',
    fontFamily: 'Helvetica-Bold',
    fontWeight: 'bold',
    paddingTop: 3,
  },

  title2: {
    fontSize: 11,
    textAlign: 'left',
    fontFamily: 'Helvetica-Bold',
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 3,
  },

  contentInfo: {
    fontSize: 11,
    fontFamily: 'Helvetica',
    fontWeight: 'normal'
  },

  table: {
    display: "flex",
    width: "auto",
  },

  tableRow: {
    margin: "auto",
    flexDirection: "row",
    width: '100%'
  },

  lineTop: {
    borderStyle: "solid",
    borderTop: widthBorder,
    borderColor: borderColor,
  },

  lineLeft: {
    borderStyle: "solid",
    borderLeft: widthBorder,
    borderColor: borderColor,
  },

  tableCol: {
    width: "100%",
  },

  tableCell: {
    margin: 0,
    paddingLeft: 4,
    paddingRight: 4,
    paddingBottom: 2,
    paddingTop: 2,
  },

  thRow: {
    backgroundColor: bgCellColor,
    fontWeight: 'bold',
  },

  imageLogo: {
    height: 30,
    width: 130
  },

  lineSeparator: {
    width: "100%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderColor: borderColor,
    marginTop: 0,
    marginBottom: 0,
  },

  pageNumber: {
    position: 'absolute',
    textAlign: 'left',
    left:35,
    bottom:0,
  },

  contentFooter: {
    position: 'absolute',
    fontSize: 8,
    left: 0,
    right: 0,
    bottom: 15,
    textAlign: 'center',
  },

});