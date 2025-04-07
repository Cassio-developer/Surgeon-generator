'use client';

import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CurriculoPDF, { CurriculoData } from '@/app/components/CurriculoPDF';

export default function Home() {
    const [formData, setFormData] = useState<CurriculoData>({
        nome: '',
        email: '',
        telefone: '',
        resumo: '',
        habilidades: [''],
        experiencia: '',
        educacao: '',
        projetos: '',
        certificacoes: '',
    });

    const updateField = (field: keyof CurriculoData, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const updateHabilidade = (index: number, value: string) => {
        const updated = [...formData.habilidades];
        updated[index] = value;
        setFormData({ ...formData, habilidades: updated });
    };

    const addHabilidade = () => {
        setFormData({ ...formData, habilidades: [...formData.habilidades, ''] });
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            updateField('foto', reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <main style={{ padding: 32, maxWidth: 800, margin: '0 auto' }}>
            <h1>Gerador de Currículo</h1>
            <label>Foto de Perfil:</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} />

            <label>Nome:</label>
            <input value={formData.nome} onChange={(e) => updateField('nome', e.target.value)} />

            <label>Email:</label>
            <input value={formData.email} onChange={(e) => updateField('email', e.target.value)} />

            <label>Telefone:</label>
            <input value={formData.telefone} onChange={(e) => updateField('telefone', e.target.value)} />

            <label>Resumo:</label>
            <textarea value={formData.resumo} onChange={(e) => updateField('resumo', e.target.value)} />

            <label>Habilidades:</label>
            {formData.habilidades.map((hab, index) => (
                <input
                    key={index}
                    value={hab}
                    onChange={(e) => updateHabilidade(index, e.target.value)}
                />
            ))}
            <button onClick={addHabilidade}>+ Adicionar Habilidade</button>

            <label>Experiência:</label>
            <textarea value={formData.experiencia} onChange={(e) => updateField('experiencia', e.target.value)} />

            <label>Educação:</label>
            <textarea value={formData.educacao} onChange={(e) => updateField('educacao', e.target.value)} />

            <label>Projetos:</label>
            <textarea value={formData.projetos} onChange={(e) => updateField('projetos', e.target.value)} />

            <label>Certificações:</label>
            <textarea value={formData.certificacoes} onChange={(e) => updateField('certificacoes', e.target.value)} />

            <div style={{ marginTop: 20 }}>
                <PDFDownloadLink document={<CurriculoPDF data={formData} />} fileName="curriculo.pdf">
                    {({ loading }) => (loading ? 'Gerando PDF...' : '📄 Baixar Currículo em PDF')}
                </PDFDownloadLink>
            </div>
        </main>
    );
}
