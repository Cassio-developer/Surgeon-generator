'use client';


import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

import React from 'react';

export interface CurriculoData {
  nome: string;
  email: string;
  telefone: string;
  resumo: string;
  habilidades: string[];
  experiencia: string;
  educacao: string;
  projetos: string;
  certificacoes: string;
  foto?: string;
}


const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    padding: 30,
    lineHeight: 1.5,
    color: '#333',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
    marginBottom: 12,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    backgroundColor: '#f2f2f2',
    padding: 5,
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 4,
  },
  paragraph: {
    marginBottom: 4,
  },
});

const CurriculoPDF = ({ data }: { data: CurriculoData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>{data.nome}</Text>
      {data.foto && (
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
          <Image
            src={data.foto}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        </View>
      )}

      <Text style={styles.subHeader}>
        {data.email} • {data.telefone}
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resumo Profissional</Text>
        <Text style={styles.paragraph}>{data.resumo}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>
        {data.habilidades.map((item, i) => (
          <Text key={i} style={styles.paragraph}>
            - {item}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiência Profissional</Text>
        <Text style={styles.paragraph}>{data.experiencia}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Educação</Text>
        <Text style={styles.paragraph}>{data.educacao}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projetos Pessoais</Text>
        <Text style={styles.paragraph}>{data.projetos}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certificações</Text>
        <Text style={styles.paragraph}>{data.certificacoes}</Text>
      </View>
    </Page>
  </Document>
);

export default CurriculoPDF;
