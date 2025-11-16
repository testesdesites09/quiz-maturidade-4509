// Geração de mapa mental SVG e PDF

import { QuizResult } from './storage';
import { QUIZ_AREAS } from './quiz-data';
import jsPDF from 'jspdf';

interface MindMapNode {
  text: string;
  score: number;
  maxScore: number;
  children: { text: string; type: 'strength' | 'weakness' | 'action' }[];
}

export function generateMindMapSVG(result: QuizResult): string {
  const width = 1200;
  const height = 800;
  const centerX = width / 2;
  const centerY = height / 2;
  
  // Calcular posições dos nós principais (5 áreas)
  const areas = Object.keys(result.areaScores) as Array<keyof typeof result.areaScores>;
  const angleStep = (2 * Math.PI) / areas.length;
  const radius = 250;
  
  let svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`;
  
  // Fundo
  svg += `<rect width="${width}" height="${height}" fill="#F5F1E8"/>`;
  
  // Nó central
  svg += `<circle cx="${centerX}" cy="${centerY}" r="80" fill="#2C5F6F" stroke="#1A3A44" stroke-width="3"/>`;
  svg += `<text x="${centerX}" y="${centerY - 10}" text-anchor="middle" fill="white" font-size="18" font-weight="bold">Maturidade</text>`;
  svg += `<text x="${centerX}" y="${centerY + 15}" text-anchor="middle" fill="white" font-size="16">${result.userName}</text>`;
  svg += `<text x="${centerX}" y="${centerY + 35}" text-anchor="middle" fill="white" font-size="14">${result.maturityAge} anos</text>`;
  
  // Áreas principais
  areas.forEach((area, index) => {
    const angle = index * angleStep - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    
    const score = result.areaScores[area];
    const maxScore = 32; // 8 perguntas * 4 pontos
    const percentage = (score / maxScore) * 100;
    
    // Cor baseada na pontuação
    let color = '#5A7C5A'; // verde musgo
    if (percentage < 60) color = '#8B7355'; // bege escuro
    if (percentage < 50) color = '#4A4A4A'; // cinza
    
    // Linha conectando ao centro
    svg += `<line x1="${centerX}" y1="${centerY}" x2="${x}" y2="${y}" stroke="${color}" stroke-width="2" opacity="0.6"/>`;
    
    // Nó da área
    svg += `<circle cx="${x}" cy="${y}" r="60" fill="${color}" stroke="#1A3A44" stroke-width="2"/>`;
    svg += `<text x="${x}" y="${y - 5}" text-anchor="middle" fill="white" font-size="14" font-weight="bold">${QUIZ_AREAS[area]}</text>`;
    svg += `<text x="${x}" y="${y + 15}" text-anchor="middle" fill="white" font-size="16">${score}/${maxScore}</text>`;
    
    // Sub-nós (pontos fortes/fracos)
    const subRadius = 120;
    const subAngle1 = angle - 0.3;
    const subAngle2 = angle + 0.3;
    
    const subX1 = x + subRadius * Math.cos(subAngle1);
    const subY1 = y + subRadius * Math.sin(subAngle1);
    const subX2 = x + subRadius * Math.cos(subAngle2);
    const subY2 = y + subRadius * Math.sin(subAngle2);
    
    // Ponto forte ou fraco
    if (percentage >= 70) {
      svg += `<line x1="${x}" y1="${y}" x2="${subX1}" y2="${subY1}" stroke="#5A7C5A" stroke-width="1.5" opacity="0.5"/>`;
      svg += `<circle cx="${subX1}" cy="${subY1}" r="35" fill="#5A7C5A" opacity="0.8"/>`;
      svg += `<text x="${subX1}" y="${subY1 + 5}" text-anchor="middle" fill="white" font-size="11">Ponto Forte</text>`;
    } else {
      svg += `<line x1="${x}" y1="${y}" x2="${subX1}" y2="${subY1}" stroke="#8B7355" stroke-width="1.5" opacity="0.5"/>`;
      svg += `<circle cx="${subX1}" cy="${subY1}" r="35" fill="#8B7355" opacity="0.8"/>`;
      svg += `<text x="${subX1}" y="${subY1 + 5}" text-anchor="middle" fill="white" font-size="11">Desenvolver</text>`;
    }
  });
  
  svg += '</svg>';
  return svg;
}

export async function generatePDF(result: QuizResult): Promise<void> {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  
  // Página 1: Mapa Mental
  pdf.setFillColor(245, 241, 232); // #F5F1E8
  pdf.rect(0, 0, pageWidth, pageHeight, 'F');
  
  pdf.setFontSize(24);
  pdf.setTextColor(44, 95, 111); // #2C5F6F
  pdf.text('Mapa Mental de Maturidade', pageWidth / 2, 20, { align: 'center' });
  
  pdf.setFontSize(14);
  pdf.setTextColor(74, 74, 74);
  pdf.text(`${result.userName} - ${result.maturityAge} anos de maturidade`, pageWidth / 2, 30, { align: 'center' });
  
  // Gerar SVG do mapa mental
  const svgString = generateMindMapSVG(result);
  const svgBlob = new Blob([svgString], { type: 'image/svg+xml' });
  const svgUrl = URL.createObjectURL(svgBlob);
  
  // Adicionar imagem do mapa mental
  const img = new Image();
  img.src = svgUrl;
  
  await new Promise((resolve) => {
    img.onload = () => {
      pdf.addImage(img, 'PNG', 10, 40, 190, 127);
      resolve(true);
    };
  });
  
  // Página 2: Análise Detalhada
  pdf.addPage();
  pdf.setFillColor(245, 241, 232);
  pdf.rect(0, 0, pageWidth, pageHeight, 'F');
  
  pdf.setFontSize(20);
  pdf.setTextColor(44, 95, 111);
  pdf.text('Análise Detalhada', pageWidth / 2, 20, { align: 'center' });
  
  let yPos = 40;
  
  // Pontuação total
  pdf.setFontSize(14);
  pdf.setTextColor(74, 74, 74);
  pdf.text(`Pontuação Total: ${result.totalScore}/160`, 20, yPos);
  yPos += 10;
  
  pdf.setFontSize(12);
  pdf.text(`Idade Real: ${result.userAge} anos | Idade de Maturidade: ${result.maturityAge} anos`, 20, yPos);
  yPos += 15;
  
  // Pontuação por área
  pdf.setFontSize(14);
  pdf.setTextColor(44, 95, 111);
  pdf.text('Pontuação por Área:', 20, yPos);
  yPos += 10;
  
  pdf.setFontSize(11);
  pdf.setTextColor(74, 74, 74);
  
  const areas = Object.keys(result.areaScores) as Array<keyof typeof result.areaScores>;
  areas.forEach((area) => {
    const score = result.areaScores[area];
    const percentage = ((score / 32) * 100).toFixed(0);
    pdf.text(`• ${QUIZ_AREAS[area]}: ${score}/32 (${percentage}%)`, 25, yPos);
    yPos += 7;
  });
  
  yPos += 10;
  
  // Página 3: Plano de Ação
  pdf.addPage();
  pdf.setFillColor(245, 241, 232);
  pdf.rect(0, 0, pageWidth, pageHeight, 'F');
  
  pdf.setFontSize(20);
  pdf.setTextColor(44, 95, 111);
  pdf.text('Plano de Ação - 30 Dias', pageWidth / 2, 20, { align: 'center' });
  
  yPos = 40;
  
  // Identificar área mais fraca
  const weakestArea = areas.reduce((prev, curr) => 
    result.areaScores[curr] < result.areaScores[prev] ? curr : prev
  );
  
  const strongestArea = areas.reduce((prev, curr) => 
    result.areaScores[curr] > result.areaScores[prev] ? curr : prev
  );
  
  pdf.setFontSize(14);
  pdf.setTextColor(90, 124, 90); // verde musgo
  pdf.text(`Área Forte: ${QUIZ_AREAS[strongestArea]}`, 20, yPos);
  yPos += 10;
  
  pdf.setFontSize(11);
  pdf.setTextColor(74, 74, 74);
  pdf.text('Continue desenvolvendo esta área como referência para as demais.', 20, yPos);
  yPos += 15;
  
  pdf.setFontSize(14);
  pdf.setTextColor(139, 115, 85); // bege escuro
  pdf.text(`Área para Desenvolver: ${QUIZ_AREAS[weakestArea]}`, 20, yPos);
  yPos += 10;
  
  pdf.setFontSize(11);
  pdf.setTextColor(74, 74, 74);
  
  // Ações específicas por área
  const actions: Record<string, string[]> = {
    emocional: [
      '• Pratique mindfulness 10 minutos por dia',
      '• Identifique e nomeie suas emoções diariamente',
      '• Busque feedback sobre suas reações emocionais',
      '• Leia sobre inteligência emocional'
    ],
    social: [
      '• Pratique escuta ativa em conversas',
      '• Estabeleça um limite saudável por semana',
      '• Inicie uma conversa difícil que está evitando',
      '• Participe de um grupo ou atividade social nova'
    ],
    profissional: [
      '• Defina 3 metas profissionais claras',
      '• Busque um curso ou certificação na sua área',
      '• Peça feedback ao seu gestor ou colegas',
      '• Pratique gestão de tempo com técnica Pomodoro'
    ],
    decisao: [
      '• Pratique tomar decisões pequenas rapidamente',
      '• Liste prós e contras antes de decisões importantes',
      '• Reflita sobre uma decisão passada e seus aprendizados',
      '• Confie mais na sua intuição em decisões menores'
    ],
    autoconsciencia: [
      '• Mantenha um diário de autorreflexão',
      '• Identifique seus 5 valores principais',
      '• Peça feedback honesto a 3 pessoas próximas',
      '• Faça terapia ou coaching para autoconhecimento'
    ]
  };
  
  const areaActions = actions[weakestArea] || [];
  areaActions.forEach((action) => {
    pdf.text(action, 20, yPos);
    yPos += 7;
  });
  
  yPos += 10;
  pdf.setFontSize(12);
  pdf.setTextColor(44, 95, 111);
  pdf.text('Compromisso: Escolha 2 ações acima e pratique diariamente por 30 dias.', 20, yPos);
  
  // Salvar PDF
  pdf.save(`mapa-maturidade-${result.userName}-${new Date().toISOString().split('T')[0]}.pdf`);
  
  URL.revokeObjectURL(svgUrl);
}
